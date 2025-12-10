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
    let curr = head;
    let arr = [];
    while(curr){
    arr.push(curr.val);
    curr = curr.next
    }
    let len = arr.length;
    for(let i = 0;i<len-1;i++){
        if(arr[i]!==arr[len-i-1]){
            return false;
        }
    }
    return true;
};