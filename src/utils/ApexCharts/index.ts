import type { ApexOptions } from "apexcharts";
import mergeDeep from "../mergeDeep";

/**
 * merge deep with defaults here
 * @param options
 * @returns ApexOptions and guranteed fields for option and defaults
 */
export const ChartOptionsApplyDefaults = (options: ApexOptions) => {
  const defaults: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
  };
  return mergeDeep<ApexOptions>(defaults, options);
};

export const ChartOptionsDefaultLineSeries = () => {
  return ChartOptionsApplyDefaults({
    chart: {
      type: "line",
    },
    series: [
      {
        name: "",
        data: [],
      },
    ],
    xaxis: {
      categories: [],
    },
  });
};

export const ChartOptionsDefaultPieSeries = () => {
  return ChartOptionsApplyDefaults({
    chart: {
      type: "pie",
    },
    series: [],
    labels: [],
    dataLabels: {
      enabled: true,
      formatter: (val: number) => {
        return val.toFixed(2) + "%";
      },
      dropShadow: {
        enabled: true,
      },
    },
  });
};

/**
 * generic list box with a data transform function
 */
export type ListBoxCalculator<T, R> = {
  id: number;
  /** name used in the menu */
  name: string;
  /** used in the apex chart tooltip */
  description: string;
  calculate(x: T[]): R;
};
