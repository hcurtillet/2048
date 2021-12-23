
//import GridModel from "../models/Gridmodel";
// class GridModel{
//     constructor(size){
//         this.board =[];
//         this.size = size;
//         for(var i = 0; i < size; i ++){
//             var line = [];
//             for(var j = 0; j < size; j++){
//                 line = line.concat(0);
//             }
//             this.board = this.board.concat([line]);
//         }
//     }
// }

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
        for(var line of grid.board){
            line = this.slideLine(line, grid.size);
        }
        return grid;
    }
    mirror(grid){
        var result = new GridModel(grid.size);
        for(var i = 0; i < grid.size; i++){
            for(var j = 0; j < grid.size; j++){
                result.board[i][j] = grid.board[i][grid.size - j -1];
            }                
        }
        return result;
    }
    transpose(grid){
        var result = new GridModel(grid.size);
        for(var i = 0; i < grid.size; i++){
            for(var j = 0; j < grid.size; j++){
                result.board[i][j] = grid.board[j][i];
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
            var result = this.mirror(grid);
            result = this.slide(result);
            result = this.mirror(result);
            return result;
        }
        if(direction == "down"){
            var result = this.transpose(grid);
            console.log(result.board);
            result = this.slide(result);
            console.log(result.board);
            result = this.transpose(result);
            return result;
        }
        if(direction == "up"){
            var result = this.transpose(grid);
            result = this.mirror(result);
            result = this.slide(result);
            result = this.mirror(result);
            result = this.transpose(result);
            return result;
        }
    }
    add(grid){
        var freelist=[];
        for(var i =0; i < grid.size; i++){
            for(var j = 0; j < grid.size; j++){
                if(grid.board[i][j] == 0){
                    freelist = freelist.concat([[i,j]]);
                }
            }
        }
        var newItem = freelist[Math.floor(Math.random()*freelist.length)];
        console.log(newItem);
        grid.board[newItem[0]][newItem[1]] = Math.floor((Math.random()+0.5)*2)
        return grid;
    }
}

export default GridController;


let controller = new GridController();
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
// for(line of lines){
//     console.log("test line " + test++);
//     console.log(line);
//     console.log("result:");
//     console.log(controller.slideLine(line));
// }
// var grid = new GridModel(4);
// grid.board[0][1] = 1;
// grid.board[2][2] = 3;

// console.log(grid)
// console.log(controller.move(grid,"left"))
// console.log(grid);
// // console.log(controller.move(grid,"right"))
// // console.log(grid);
// // console.log(controller.move(grid,"up"));
// console.log(controller.add(grid));
// console.log(grid);


