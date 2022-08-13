import type { ApexOptions } from "apexcharts";
import type { TokenTrades } from "./datasets";
import {
  ChartOptionsDefaultLineSeries,
  type ListBoxCalculator,
} from "./utils/ApexCharts";
import mergeDeep from "./utils/mergeDeep";

/**
 * Factory function for controlling data computation steps
 * @param data
 * @returns
 */
export const ChartOptionsTokenTrades = (data: TokenTrades[]) => {
  const categories = data.map((x) => x.nonce);
  const chartOptions = ChartOptionsDefaultLineSeries();

  return {
    calculateChartOptions: (
      listBoxCalculate: ListBoxCalculator<TokenTrades>
    ) => {
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
      return mergeDeep<ApexOptions>(chartOptions, calculatedChartOptions);
    },
  };
};

/**
 * list box selection for token trade structs
 */
export const tokenTradeEquations: ListBoxCalculator<TokenTrades>[] = [
  {
    id: 1,
    name: "priceChart",
    description: "price in wei",
    calculate: (trades) => {
      const series: number[] = [];
      let current = 1;
      for (const t of trades) {
        if (t.tradeType == "Mint") {
          current += t.er20Amount;
        } else {
          current -= t.er20Amount;
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
        if (t.tradeType == "Mint") {
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
        if (t.tradeType == "Burn") {
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
        if (t.tradeType == "Mint") {
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
