# kata 1:

# def solution(text, ending):
#     return text.endswith(ending)

# kata 2:

# def even_or_odd(s):
#     elst = []
#     olst = []
#     for char in s:
#         even = int(char)
#         if even % 2 == 0:
#             elst.append(even)
#         else:
#             olst.append(even)
#     if sum(elst) > sum(olst):
#         return 'Even is greater than Odd'
#     elif sum(elst) < sum(olst):
#         return 'Odd is greater than Even'
#     elif sum(elst) == sum(olst):
#         return 'Even and Odd are the same'

# kata 3:

# def cat_mouse(x):
#     if len(x) <= 5:
#         return 'Caught!'
#     else:
#         return 'Escaped!'
    
# kata 4:

# def even_numbers(arr, n):
#     eLst = []
#     for num in arr:
#         if num % 2 == 0:
#             eLst.append(num)
#     return eLst[-n:]