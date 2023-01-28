export interface FillerWord {
  id: string;
  name: string;
}

export interface Person {
  id: string;
  name: string;
}

export interface PersonPerformance {
  elapsedTime: number;
  personId: string;
  /** Maps the ID of each used filler word to its count */
  fillerWordCounts: Record<string, number>;
}
