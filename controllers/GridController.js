
import GridModel from "../models/Gridmodel";
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

    isSlidePossible(line, gridSize){
        var curr = 0;
        var next = 1;
        while(curr < gridSize){
            next = curr+1;
            if(line[curr] == 0){ //let's find the next non null value
                while(line[next] == 0 && next < gridSize){
                    next ++;
                }
                if(next != gridSize){
                    return true;
                }
                else{
                    break;
                }
                
            }
            else{
                while(line[next] == 0 && next < gridSize){
                    next ++;
                }
                if(next != gridSize){
                    if(line[curr] == line[next]){ // we merge
                        return true;
                    }
                    else{ // we do not merge
                        curr++;
                    }
                }
                else{
                    break;
                }
            }
        }
        console.log("No move");
        return false;
    }

    slideLine(line, gridSize){
        var merged = false;
        var nbVal
        for(var i =0; i < gridSize; i++){
            nbVal += line[i];
        }
        if(nbVal == 0) return line;
        var curr = 0;
        var next = 1;
        while(curr < gridSize){
            next = curr+1;
            if(line[curr] == 0){ //let's find the next non null value
                while(line[next] == 0 && next < gridSize){
                    next ++;
                }
                if(next != gridSize){
                    line[curr] = line[next];
                    line[next] = 0;
                    next = curr +1;
                }
                else{
                    break;
                }
                
            }
            else{
                while(line[next] == 0 && next < gridSize){
                    next ++;
                }
                if(next != gridSize){
                    if(line[curr] == line[next]){ // we merge
                        line[curr] ++;
                        line[next] = 0;
                        curr ++;
                    }
                    else{ // we do not merge
                        curr++;
                    }
                }
                else{
                    break;
                }
            }
        }
        return line;
    }
    slide(grid){
        console.log(grid);
        var possible = false;
        for(var line of grid.board){
            if(this.isSlidePossible(line, grid.size)){
                possible = true;
                break;
            }
        }
        if(possible){
            for(var line of grid.board){
                line = this.slideLine(line, grid.size);
            }
            grid = this.add(grid);
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
        var result;
        if(direction == "right"){
            console.log("move right");
            result = this.mirror(grid);
            result = this.slide(result);
            result = this.mirror(result);

        }
        if(direction=="left"){
            console.log("move left");            
            result= this.slide(grid);
            
        }
        if(direction == "up"){
            result = this.transpose(grid);
            result = this.slide(result);
            result = this.transpose(result);
        }
        if(direction == "down"){
             result = this.transpose(grid);
            result = this.mirror(result);
            result = this.slide(result);
            result = this.mirror(result);
            result = this.transpose(result);
        }
        return result;
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


