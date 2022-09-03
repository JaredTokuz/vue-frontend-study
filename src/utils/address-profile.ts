import type { AddressProfile } from "@/components/TokenTrade/schemas.interface";
import {
  ChartOptionsDefaultPieSeries,
  type ListBoxCalculator,
} from "@/utils/apexcharts";
import mergeDeep from "@/utils/mergeDeep";
import type { ApexOptions } from "apexcharts";

export type ListBoxCalAddressProfile = ListBoxCalculator<
  AddressProfile,
  {
    series: number[];
    labels: string[];
  }
>;

/**
 * Factory function for controlling data computation steps
 * @param data
 * @returns
 */
export const ChartOptionsPieAddressProfile = (data: AddressProfile[]) => {
  const defaultChartOptions = ChartOptionsDefaultPieSeries();

  return {
    calculateChartOptions: (listBoxCal: ListBoxCalAddressProfile) => {
      const calculatedChartOptions: ApexOptions = listBoxCal.calculate(data);
      return mergeDeep<ApexOptions>(
        defaultChartOptions,
        calculatedChartOptions
      );
    },
  };
};

const DataFormat = (): {
  series: number[];
  labels: string[];
} => {
  return {
    series: [],
    labels: [],
  };
};
/**
 * list box selection for address profile structs
 */
export const addressProfileViews: ListBoxCalAddressProfile[] = [
  {
    id: 1,
    name: "Net Realized",
    description: "net gain",
    calculate: (profiles) => {
      const dataFormatted = DataFormat();
      profiles.forEach((x) => {
        dataFormatted.series.push(x.weiNetRealized);
        dataFormatted.labels.push(truncateAddress(x.address));
      });
      return dataFormatted;
    },
  },
  {
    id: 2,
    name: "Wei Spent",
    description: "wei spent",
    calculate: (profiles) => {
      const dataFormatted = DataFormat();
      profiles.forEach((x) => {
        dataFormatted.series.push(x.weiSpent);
        dataFormatted.labels.push(truncateAddress(x.address));
      });
      return dataFormatted;
    },
  },
  {
    id: 3,
    name: "Alts Sold",
    description: "alts sold",
    calculate: (profiles) => {
      const dataFormatted = DataFormat();
      profiles.forEach((x) => {
        dataFormatted.series.push(x.erc20Sold);
        dataFormatted.labels.push(truncateAddress(x.address));
      });
      return dataFormatted;
    },
  },
  {
    id: 4,
    name: "No. of Trades",
    description: "trades",
    calculate: (profiles) => {
      const dataFormatted = DataFormat();
      profiles.forEach((x) => {
        dataFormatted.series.push(x.noTrades);
        dataFormatted.labels.push(truncateAddress(x.address));
      });
      return dataFormatted;
    },
  },
];

const truncateAddress = (address: string) => {
  return address.length > 6 ? address.slice(0, 6) + "..." : address;
};
