import math

def matrixfy(st):
    if len(st) == 0:
        return "name must be at least one letter"
    result = []
    x = len(st)
    y = math.ceil(math.sqrt(x))
    st += "." * (y**2 - x)
    for i in range(y):
        row = []
        for j in range(y):
            row.append(st[i * y + j])
        result.append(row)
    return result