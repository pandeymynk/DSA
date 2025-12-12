/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let curr = head;
    let prev = null;
    let set = new Set();

    while(curr){
        if(set.has(curr.val)){
            prev.next = curr.next;
        }else {
            // first time → add to set
            set.add(curr.val);
            prev = curr;
        }
        curr = curr.next;
    }

    return head;
};