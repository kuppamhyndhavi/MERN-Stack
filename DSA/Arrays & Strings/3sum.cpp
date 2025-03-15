class Solution { 
public: 
    vector<vector<int>> threeSum(vector<int>& nums) { 
        sort(nums.begin(), nums.end()); 
        int length = nums.size(); 
        vector<vector<int>> output; 
        for (int index = 0; index < length; index++) { 
            if (nums[index] > 0) break; 
            if (index != 0 && nums[index] == nums[index - 1]) continue; 
            int leftPointer = index + 1; 
            int rightPointer = length - 1; 
            while (leftPointer < rightPointer) { 
                int sum = nums[index] + nums[leftPointer] + nums[rightPointer]; 
                if (sum == 0) { 
                    output.push_back({nums[index], nums[leftPointer], nums[rightPointer]}); 
                    leftPointer++; 
                    rightPointer--; 
                    while (leftPointer < rightPointer && nums[leftPointer] == nums[leftPointer - 1]) leftPointer++; 
                } 
                else if (sum > 0) rightPointer--; 
                else leftPointer++;
            } 
        } 
        return output; 
    } 
}; 