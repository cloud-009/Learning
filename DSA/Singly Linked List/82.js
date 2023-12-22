/* 
Given the head of a sorted linked list, delete all nodes that have duplicate numbers,
leaving only distinct numbers from the original list. Return the linked list sorted as well.

Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
*/
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var deleteDuplicates = function (head) {
    let list = new ListNode(0)
    list.next = head;
    let prev = list, curr = head;
    while (curr) {
        while (curr.next && curr.val == curr.next.val)
            curr = curr.next
        if (prev.next == curr)
            prev = curr
        else
            prev.next = curr.next
        curr = curr.next
    }
    return list.next;
};

console.log(deleteDuplicates([1,2,3,3,4,4,5]));