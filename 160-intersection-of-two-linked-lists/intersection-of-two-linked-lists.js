/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let store = new Set();
    //put all nodes of headB inside a set
    while(headB){
        store.add(headB);
        headB = headB.next;
    }   

    while(headA){
        if(store.has(headA)){
            return headA;
        }
        headA = headA.next;

    }
    return null;
};