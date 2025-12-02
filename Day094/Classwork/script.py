lstn = [10, 23, 53, 52, 1, 9 ,34, 100, 120, 87, 12]
my_filter = list(filter(lambda x:x % 12 != 0, lstn))
print(my_filter)