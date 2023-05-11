import fs from "fs";
import { MatchResult } from "./MatchResult";

// tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];

export abstract class CsvFileReader {
  // an array of tuples
  data: MatchData[] = [];

  constructor(public filename: string) {}

  // abstract siginfies that this method will be implemented by the child class
  abstract mapRow(row: string[]): MatchData;

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
