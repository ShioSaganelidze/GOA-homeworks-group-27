def find(matrix, n):
    for row in matrix:
        if n in row:
            return True
    return False

def smallest_integer(matrix):
    i = 0
    while find(matrix, i):
        i += 1
    return i