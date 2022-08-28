export type DataEntry = {
  value: string;
  unit: string;
};
export interface Section {
  title: string;
  data: DataEntry[];
}
export function createSection(title: string, data: DataEntry[]): Section {
  return {
    title,
    data,
  };
}
export function createDataEntry(unit: string, value: string): DataEntry {
  return {
    unit,
    value,
  };
}
