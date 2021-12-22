var gridSize = 4;

export default class GridModel{
    constructor(size){
        this.board =[];
        this.size = size;
        for(var i = 0; i < size; i ++){
            var line = [];
            for(var j = 0; j < size; j++){
                line = line.concat(0);
            }
            this.board = this.board.concat([line]);
        }
    }
}

