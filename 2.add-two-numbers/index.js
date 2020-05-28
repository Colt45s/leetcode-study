/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(0);
  let dummy = result;
  let carry = 0;

  while (l1 && l2) {
    const sum = l1.val + l2.val + carry;
    const digit = sum % 10;
    carry = Math.floor(sum / 10);
    const now = new ListNode(digit);
    dummy.next = now;
    dummy = dummy.next;
    l1 = l1.next;
    l2 = l2.next;
  }

  while (l1) {
    const sum = l1.val + carry;
    const digit = sum % 10;
    carry = Math.floor(sum / 10);
    const now = new ListNode(digit);
    dummy.next = now;
    dummy = dummy.next;
    l1 = l1.next;
  }

  while (l2) {
    const sum = l2.val + carry;
    const digit = sum % 10;
    carry = Math.floor(sum / 10);
    const now = new ListNode(digit);
    dummy.next = now;
    dummy = dummy.next;
    l2 = l2.next;
  }

  if (carry) {
    dummy.next = new ListNode(carry);
  }

  return result.next;
};
