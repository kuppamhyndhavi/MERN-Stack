class Solution { 
public: 
    vector<int> smallerNumbersThanCurrent(vector<int>& nums) { 
        int totalCount = nums.size(); 
        vector<int> frequency(101, 0); 
        for (int& num : nums) { 
            frequency[num]++; 
        } 
        for (int i = 1; i < 101; i++) { 
            frequency[i] += frequency[i - 1]; 
        } 
        vector<int> result(totalCount); 
        for (int i = 0; i < totalCount; i++) { 
            if (nums[i] == 0) 
                result[i] = 0; 
            else 
                result[i] = frequency[nums[i] - 1]; 
        }
        return result; 
    } 
}; 