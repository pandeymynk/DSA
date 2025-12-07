/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let newNodes = new Set();
    let curr = head;
    while(curr != null){
        if(newNodes.has(curr)){
            return true;
        }
        newNodes.add(curr);
        curr = curr.next;
    }
    return false;
};