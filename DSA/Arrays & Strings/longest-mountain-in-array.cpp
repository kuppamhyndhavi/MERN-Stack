class Solution { 
public: 
    int longestMountain(vector<int>& arr) { 
        int size = arr.size(); 
        if (size < 3)  
            return 0; 
        int maxLength = 0;
        for (int index = 1; index < size - 1; index++) { 
            if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) { 
                int left = index; 
                while (left > 0 && arr[left] > arr[left - 1])  
                    left--;
                int right = index; 
                while (right < size - 1 && arr[right] > arr[right + 1])  
                    right++; 
                maxLength = max(maxLength, right - left + 1); 
            } 
        } 
        if (maxLength < 3) 
            return 0; 
        return maxLength; 
    } 
}; 