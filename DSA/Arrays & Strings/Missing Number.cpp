class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int n=nums.size();
        int e_sum=n*(n+1)/2;
        int a_sum=0;
        for(int num:nums){
            a_sum+=num;
        }
        return e_sum - a_sum;
    }
};