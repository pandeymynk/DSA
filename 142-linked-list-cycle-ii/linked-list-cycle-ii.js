/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if(!head || !head.next ) return null;
  
  let slow = head;
  let fast = head.next;

  while(slow != fast ){
    if(fast === null || fast.next === null){
        return null;
    }
    slow = slow.next;
    fast = fast.next.next;
    
  }
   fast = fast.next;  // shift fast to align logic

    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;

};