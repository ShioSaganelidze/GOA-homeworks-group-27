# num = lambda x: x / 2

# my_set = {'Hello', 'World!', 67, 4.8, True, 1}

# my_dict = {
#     "name": "Shio",
#     "age": 13,
#     "lastName": "Tbilisi"
# }

# print(my_dict)

# nums = [1, 2, 3]
# my_map = list(map(lambda x: x * 2, nums))
# print(my_map)

# nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# my_filter = list(filter(lambda x: x % 3 == 0, nums))
# print(my_filter)

# numbers = [5, 12, 18, 7, 25]
# filtered_numbers = list(filter(lambda x: x > 10, numbers))
# print(filtered_numbers)

# nums = [1, 2, 3, 4, 5]
# add_10 = list(map(lambda x: x + 10, nums))
# print(add_10)

# nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# odd_nums = list(filter(lambda x: x % 2 != 0, nums))
# print(odd_nums)

from functools import reduce

nums = [1, 2, 3, 4, 5]
sum_nums = reduce(lambda x, y: x + y, nums)
print(sum_nums)