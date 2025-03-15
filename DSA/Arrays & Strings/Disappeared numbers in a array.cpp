#include <bits/stdc++.h>
using namespace std;
class Solution { 
public: 
    int missingNumber(vector<int>& nums) { 
        int size = nums.size(); 
        int xorTotal = 0; 
        int xorArray = 0; 
        for (int j = 0; j < size; j++) { 
            xorTotal ^= j; 
            xorArray ^= nums[j]; 
        } 
        xorTotal ^= size; 
        return xorTotal ^ xorArray; 
    } 
}; 

int main() {
  Solution solution;
  vector<int> nums = {3, 0, 1}; // Example input where the missing number is 2
  cout << "The missing number is: " << solution.missingNumber(nums) << endl;

  return 0;
}

 