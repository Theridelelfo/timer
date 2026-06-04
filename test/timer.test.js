import { createCountdown } from "../src/timer.js";

test("countdown reaches zero", (done) => {
  const values = [];

  createCountdown(
    3,
    (time) => {
      values.push(time);
    },
    () => {
      expect(values).toEqual([2, 1, 0]);
      done();
    }
  );
});