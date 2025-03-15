class Solution { 
public: 
    bool containsDuplicate(vector<int>& nums) { 
unordered_set<int> numSet; 
for (int idx = 0; idx < numbers.size(); idx++) { 
    if (numSet.find(numbers[idx]) != numSet.end()) 
        return true; 
    numSet.insert(numbers[idx]); 
} 
return false;} 
}; 