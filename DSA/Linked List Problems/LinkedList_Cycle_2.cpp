/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
         if (!head || !head->next) return nullptr;

        ListNode* slow = head;
        ListNode* fast = head;

        // First, detect if a cycle exists
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) {
                // Cycle detected, now find the start node
                ListNode* pointer = head;
                while (pointer != slow) {
                    pointer = pointer->next;
                    slow = slow->next;
                }
                return pointer; // start node of cycle
            }
        }
        return nullptr;
        
    }
};
