import tests from './problems/4-median-of-two-sorted-arrays/test-cases';
import fn from './problems/4-median-of-two-sorted-arrays/submission';

for (const { args, answer, comparer } of tests) {
  const result = fn(...args);

  console.log(comparer ? comparer(result, answer) : result === answer);
}

