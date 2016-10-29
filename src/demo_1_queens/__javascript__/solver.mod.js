	(function () {
		var time = {};
		var __author__ = 'Chad Dotson';
		var valid_position = function (n_queen_positions, new_position) {
			var __iterable0__ = n_queen_positions;
			for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
				var existing_position = __iterable0__ [__index0__];
				if (existing_position [1] == new_position [1] || existing_position [0] == new_position [0]) {
					return false;
				}
				var row_difference = abs (new_position [1] - existing_position [1]);
				var column_difference = abs (new_position [0] - existing_position [0]);
				if (row_difference == column_difference) {
					return false;
				}
			}
			return true;
		};
		var solve = function (n_queens_size, n_queen_positions, current_column) {
			if (current_column == n_queens_size && len (n_queen_positions) == n_queens_size) {
				return list ([n_queen_positions]);
			}
			var solutions = list ([]);
			for (var row = 0; row < n_queens_size; row++) {
				var new_position = tuple ([current_column, row]);
				if (valid_position (n_queen_positions, new_position)) {
					var new_queens_positions = n_queen_positions.__getslice__ (0, null, 1);
					new_queens_positions.append (new_position);
					var solution = solve (n_queens_size, new_queens_positions, current_column + 1);
					if (solution !== null) {
						solutions.extend (solution);
					}
				}
			}
			return solutions;
		};
		__nest__ (time, '', __init__ (__world__.time));
		var t1 = time.time ();
		var solutions = solve (11, list ([]), 0);
		var dt = time.time () - t1;
		var msg = 'N-Queens Found {0} Solutions in {1}s'.format (len (solutions), str (dt));
		try {
			alert (msg);
		}
		catch (__except0__) {
			print (msg);
		}
		__pragma__ ('<use>' +
			'time' +
		'</use>')
		__pragma__ ('<all>')
			__all__.__author__ = __author__;
			__all__.dt = dt;
			__all__.msg = msg;
			__all__.solutions = solutions;
			__all__.solve = solve;
			__all__.t1 = t1;
			__all__.valid_position = valid_position;
		__pragma__ ('</all>')
	}) ();
