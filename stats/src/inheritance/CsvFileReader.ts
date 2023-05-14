import fs from "fs";

export abstract class CsvFileReader<T> {
  // an array of tuples
  data: T[] = [];

  constructor(public filename: string) {}

  // abstract siginfies that this method will be implemented by the child class
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
