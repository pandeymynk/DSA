/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
   let slow = head;
   let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next
    }
    let prev = null;
    let curr = slow;
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr= temp;
    }
    let firstloop = head;
    let secondloop = prev;
    while(secondloop){
        if(firstloop.val != secondloop.val) return false;
        firstloop = firstloop.next;
        secondloop = secondloop.next;

    }
    return true;
};