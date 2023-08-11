
/**
 * @see https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 */
export default function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

  let arr = new Array<number>();
  let last: number = -Infinity;
  let i_num1 = 0;
  let i_num2 = 0;

  let l1 = nums1.length;
  let l2 = nums2.length;

  while (i_num1 < l1 || i_num2 < l2) {

    const n1 = nums1[i_num1];
    const n2 = nums2[i_num2];

    if (n1 >= last && (n1 <= n2 || n2 === undefined)) {
      arr.push(last = n1);
      i_num1++;
    }
    else if (n2 >= last && (n2 <= n1 || n1 === undefined)) {
      arr.push(last = n2);
      i_num2++;
    }

  }

  // [1, 2, 3, 4] => (2 + 3) / 2 = 2.5
  if (arr.length % 2 == 0)
    return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;

  // [1, 2, 3] => 2
  else
    return arr[Math.floor(arr.length / 2)];

}