import { TestCase } from '../test-case';
import fn from './submission';

const TEST_CASES: TestCase<typeof fn>[] = [
  {
    args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], [0, 6]],
    answer: 10.5
  },
  {
    args: [[2, 2, 4, 4], [2, 2, 4, 4]],
    answer: 3
  },
  {
    args: [[0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1]],
    answer: 0
  },
  {
    args: [[0, 0], [0, 0]],
    answer: 0
  },
  {
    args: [[1, 3], [2]],
    answer: 2
  },
  {
    args: [[1, 2], [3, 4]],
    answer: 2.5
  }
];

export default TEST_CASES;