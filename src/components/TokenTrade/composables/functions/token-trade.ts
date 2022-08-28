import type { TokenTrades } from "@/components/TokenTrade/schemas.interface";
import {
  ChartOptionsDefaultLineSeries,
  type ListBoxCalculator,
} from "@/utils/apexcharts";
import mergeDeep from "@/utils/mergeDeep";
import type { ApexOptions } from "apexcharts";

export type ListBoxCalTokenTrades = ListBoxCalculator<TokenTrades, number[]>;

/**
 * Factory function for controlling data computation steps
 * @param data
 * @returns
 */
export const ChartOptionsLineTokenTrades = (data: TokenTrades[]) => {
  const categories = data.map((x) => x.block);
  const defaultChartOptions = ChartOptionsDefaultLineSeries();

  return {
    calculateChartOptions: (listBoxCalculate: ListBoxCalTokenTrades) => {
      const calculatedChartOptions: ApexOptions = {
        series: [
          {
            name: listBoxCalculate.description,
            data: listBoxCalculate.calculate(data),
          },
        ],
        xaxis: {
          categories: categories,
        },
      };
      return mergeDeep<ApexOptions>(
        defaultChartOptions,
        calculatedChartOptions
      );
    },
  };
};

/**
 * list box selection for token trade structs
 */
export const tokenTradeEquations: ListBoxCalTokenTrades[] = [
  {
    id: 1,
    name: "priceChart",
    description: "price in wei",
    calculate: (trades) => {
      const series: number[] = [];
      let current = 1;
      for (const t of trades) {
        if (t.tradeType == "mint") {
          current += t.erc20Amount;
        } else {
          current -= t.erc20Amount;
        }
        series.push(current);
      }
      return series;
    },
  },
  {
    id: 2,
    name: "weiSpent",
    description: "wei deposited",
    calculate: (trades) => {
      const series: number[] = [];
      let current = 0;
      trades.forEach((t) => {
        if (t.tradeType == "mint") {
          current += t.ethAmount;
        }
        series.push(current);
      });
      return series;
    },
  },
  {
    id: 3,
    name: "weiWithdrawn",
    description: "wei withdrawn",
    calculate: (trades) => {
      const series: number[] = [];
      let current = 0;
      trades.forEach((t) => {
        if (t.tradeType == "burn") {
          current += t.ethAmount;
        }
        series.push(current);
      });
      return series;
    },
  },
  {
    id: 4,
    name: "addresses",
    description: "unique addresses",
    calculate: (trades) => {
      const setAddress: Set<string> = new Set();
      const series: number[] = [];
      let current = 0;
      trades.forEach((t) => {
        if (t.tradeType == "mint") {
          if (!setAddress.has(t.address)) {
            current += 1;
            setAddress.add(t.address);
          }
        }
        series.push(current);
      });
      return series;
    },
  },
];
