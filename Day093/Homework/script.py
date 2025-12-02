my_lamb = lambda name: f'Hello {name}!'
print(my_lamb("Shio"))

my_lst = [3, 7, 4, 8]
my_map = list(map(lambda x:x * 2, my_lst))
print(my_map)

listn = [1,3,5,6,7,10,15,21,25.5,30,101,105]
my_filter = list(filter(lambda x:x % 5 == 0, listn))
print(my_filter)

setn = {"Goa", "Novatori", "Stem", 123, True, 1, False, 0}
print(setn) # imitom ar gamoaqvs rom set-shi ar sheizleba iyos 2 igive value: 1 = True da 0 = False xo da amis gamo ar gamodis 0 da 1.