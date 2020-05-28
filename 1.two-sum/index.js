/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (const [i, num] of nums.entries()) {
    const rest = target - num;
    const restIndex = map.get(rest);
    if (map.has(rest) && restIndex !== i) {
      return [restIndex, i];
    }
    map.set(num, i);
  }
};
