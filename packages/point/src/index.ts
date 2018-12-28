export interface Point {
  x: number;
  y: number;
}

export const getDistance = (p1: Point, p2: Point): number =>
  Math.hypot(p2.x - p1.x, p2.y - p1.y);
