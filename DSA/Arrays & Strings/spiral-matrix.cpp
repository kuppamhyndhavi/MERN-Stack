class Solution { 
public:
    vector<int> spiralOrder(vector<vector<int>>& grid) { 
        int rowCount = grid.size(); 
        int colCount = grid[0].size(); 
        int topRow = 0; 
        int bottomRow = rowCount - 1; 
        int leftCol = 0; 
        int rightCol = colCount - 1; 
        vector<int> result; 
        while (topRow <= bottomRow && leftCol <= rightCol) { 
            for (int i = leftCol; i <= rightCol; i++) { 
                result.push_back(grid[topRow][i]); 
            } 
            topRow++; 
            for (int i = topRow; i <= bottomRow; i++) { 
                result.push_back(grid[i][rightCol]); 
            } 
            rightCol--; 
            if (topRow <= bottomRow) { 
                for (int i = rightCol; i >= leftCol; i--) { 
                    result.push_back(grid[bottomRow][i]); 
                } 
                bottomRow--; 
            } 
            if (leftCol <= rightCol) { 
                for (int i = bottomRow; i >= topRow; i--) { 
                    result.push_back(grid[i][leftCol]); 
                } 
                leftCol++; 
            } 
        } 
        return result; 
    } 
}; 