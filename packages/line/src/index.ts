import { Point, getDistance } from '@geo/point';

export interface Line {
  from: Point;
  to: Point;
}

export const getLength = (line: Line): number =>
  getDistance(line.from, line.to);
