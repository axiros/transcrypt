
function jsisValidPosition(nQueenPositions, newPosition){
    for(var i=0; i < nQueenPositions.length; i++){
        var existingPosition = nQueenPositions[i]

        if( existingPosition[1] === newPosition[1] || existingPosition[0] === newPosition[0] ){
            return false 
        }
        var rowDifference = Math.abs(newPosition[1]-existingPosition[1]);
        var columnDifference = Math.abs(newPosition[0]-existingPosition[0]);

        if(rowDifference === columnDifference) {
            return false;
        }
    }
    return true 
}

function solvejs(nQueensSize, nQueenPositions, currentColumn) {
    if( currentColumn === nQueensSize && nQueenPositions.length === nQueensSize) {
        return [nQueenPositions];
    }

    var solutions = [];

    for(var row = 0; row < nQueensSize; row++) {
        var newPosition = [currentColumn, row];

        if(jsisValidPosition(nQueenPositions,newPosition)) {
            var newNQueenPositions = nQueenPositions.concat();
            newNQueenPositions.push(newPosition);

            var solution = solvejs(nQueensSize, newNQueenPositions, currentColumn+1);
            for(var i=0; i<solution.length; i++) solutions.push(solution[i])
        }
    }

    return solutions;
}



var startTime = Date.now()
var solutions = solvejs(11, [], 0)
var endTime = Date.now()

var elapsedTime = endTime - startTime
alert('js handcrafted: ' + elapsedTime + 'ms')

