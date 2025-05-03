class Solution {
  public:
    // Function to count nodes of a linked list.
    bool searchKey(int n, Node* head, int key) {
        if(head==NULL)
            return false;
        for(int i=0;i<n;i++){
            if(head->data==key)
                return true;
            else
                head=head->next;
        }
        return false;
    }
};
