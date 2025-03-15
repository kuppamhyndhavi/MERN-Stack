class Solution {
public:
    void dfs(vector<vector<char>>& map, int row, int col, int rows, int cols) {
        if(row < 0 || row == rows || col < 0 || col == cols || map[row][col] == '0')
            return;
        map[row][col] = '0';
        dfs(map, row-1, col, rows, cols);
        dfs(map, row, col-1, rows, cols);
        dfs(map, row+1, col, rows, cols);
        dfs(map, row, col+1, rows, cols);
    }

    int numIslands(vector<vector<char>>& map) {
        int islandCount = 0;
        int rows = map.size();
        int cols = map[0].size();
        for(int row = 0; row < rows; row++) {
            for(int col = 0; col < cols; col++) {
                if(map[row][col] == '1') {
                    islandCount++;
                    dfs(map, row, col, rows, cols);
                }
            }
        }
        return islandCount;
    }
};
