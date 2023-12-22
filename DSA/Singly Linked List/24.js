/* 
Given a linked list, swap every two adjacent nodes and return its head.
 You must solve the problem without modifying the values in the list's nodes 
 (i.e., only nodes themselves may be changed.)
 Input: head = [1,2,3,4]
 Output: [2,1,4,3]
*/


// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
};

var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let newHead = head.next;  //head.next [0,1 <-- newHead]
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
};