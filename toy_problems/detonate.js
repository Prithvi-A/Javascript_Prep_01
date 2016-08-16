var detonate = function(matrix) {
	var N = matrix.length;
	var loc = [];
	for(a =0; a< N; a++) {
		for(b=0; b< N; b++) {
			if(matrix[a][b] === "B") {
				loc.push([a,b]);
			}
		}
	}
	// kaboom(loc);

	// function kaboom(array) {
	// 	array.forEach(function(coords){
	// 		for(var i=0; i< N; i++) {
	// 			matrix[i][coords[1]] = 0
	// 			matrix[coords[0]][i] = 0
	// 		}
	// 	});
	// }

	loc.forEach(function(coords){
		matrix[coords[0]]
	});

	return matrix;

}

detonate([
	['B', 1, 1, 1],
	[1, 1, 1, 1],
	[1, 1, 'B', 1],
	[1, 1, 1, 1]
]);