__author__ = 'Chad Dotson'


def valid_position(n_queen_positions, new_position):
    for existing_position in n_queen_positions:
        if existing_position[1] == new_position[1] or existing_position[0] == new_position[0]:
            return False

        row_difference = abs(new_position[1] - existing_position[1])
        column_difference = abs(new_position[0] - existing_position[0])

        if row_difference == column_difference:
            return False

    return True


def solve(n_queens_size, n_queen_positions, current_column):

    if current_column == n_queens_size and len(n_queen_positions) == n_queens_size:
        return [n_queen_positions]

    solutions = []

    for row in range(0, n_queens_size):
        new_position = (current_column, row)

        if valid_position(n_queen_positions, new_position):

            new_queens_positions = n_queen_positions[:]
            new_queens_positions.append(new_position)

            solution = solve(n_queens_size, new_queens_positions, current_column+1)

            if solution is not None:
                solutions.extend(solution)

    return solutions

import time
t1 = time.time()
solutions = solve(11, [], 0)
dt = round(time.time() - t1, 2)
msg = "N-Queens Found {0} Solutions in {1}s".format(len(solutions), str(dt))
try:
    alert(msg)
    #debugger
except:
    print (msg)
