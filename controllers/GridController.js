
import GridModel from "../models/Gridmodel";

class GridController{

    slideLine(line, gridSize){
        var merged = false;
        for(var i = 0; i < gridSize-1; i++){
            if(line[i] != 0){
                if(line[i+1] == 0){ // we move the block without merging anything
                    line[i+1] = line[i];
                    line[i] = 0;
                }
                else if(line[i] == line[i+1]){ // we'll check if we can merge something
                    if(merged == false){ // we'll merge because we did not do it yet
                        line[i+1]++; // because we are use power of 2
                        line[i] = 0;
                        for(var j = i; j > 0; j--){
                            line[j] = line[j-1];
                        }
                        line[0] = 0;
                        merged = true;
                    }
                    else{ // we did yet a merge so we do nothing and we just pass
                        merged = false;
                    }
                }
                else if(line[i] != line[i+1]){ // we can not merge so we initialize again the merge bool
                    merged = false;
                }
            }
        }
        return line;
    }
    slide(grid){
        for(line of grid.board){
            console.log(line);
            line = this.slideLine(line, grid.size);
        }
        return grid;
    }
    mirror(grid){
        var result = new GridModel(grid.size); // not working, need to do a proper copy
        for(var i = 0; i < grid.size; i++){
            for(var j = 0; j < grid.size; j++){
                result[i][j] = grid.board[i][grid.size - j -1];
            }                
        }
        return result;
        
    }
    move(grid, direction){
        if(direction == "right"){
            console.log("move right");
            return this.slide(grid);
        }
        if(direction=="left"){
            console.log("move left");
            // var result = this.mirror(grid);
            // result = this.slide(result);
            // result = this.mirror(result);
            // return result;
        }
    }
}

export default GridController;

// var lines = [[0,0,0,0],
//     [1,1,1,1],
//     [1,1,2,2],
//     [1,2,2,3],
//     [1,0,0,1],
//     [1,0,0,0],
//     [1,1,0,2],
//     [1,0,0,0],
//     [1,0,1,2],
//     [1,2,3,3]
// ];
// var test = 1;
// let controller = new gridController();
// for(line of lines){
//     console.log("test line " + test++);
//     console.log(line);
//     console.log("result:");
//     console.log(controller.slideLine(line));
// }
// var grids =[
//     [
//         [0,0,0,0],
//         [1,1,1,1],
//         [1,1,2,2],
//         [1,2,2,3]
//     ],
//     [
//         [1,0,0,0],
//         [1,1,0,2],
//         [1,0,0,0],
//         [1,0,1,2]
//     ]
// ]
// test = 1;
// for(grid of grids){
//     console.log("test grid move left ", test++);
//     for(line of grid){
//         console.log(line);
//     }
//     console.log("Result;")
//     var result = controller.slide(grid);
//     for(line of result){
//         console.log(line);
//     }
// }

// test = 1;
// for(grid of grids){
//     console.log("test mirror " + test ++)
//     for(line of grid){
//         console.log(line);
//     }
//     console.log("Result;")
//     var result = controller.mirror(grid);
//     for(line of grid){
//         console.log(line);
//     }
// }

// var grid = [];


