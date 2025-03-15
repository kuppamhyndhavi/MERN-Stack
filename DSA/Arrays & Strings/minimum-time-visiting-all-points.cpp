class Solution { 
public: 
    int minTimeToVisitAllPoints(vector<vector<int>>& coordinates) { 
        int totalPoints = coordinates.size(); 
        int totalTime = 0; 
        for (int idx = 1; idx < totalPoints; idx++) { 
            totalTime += max(abs(coordinates[idx][0] - coordinates[idx - 1][0]), 
                             abs(coordinates[idx][1] - coordinates[idx - 1][1])); 
        } 
        return totalTime; 
    } 
}; 

 