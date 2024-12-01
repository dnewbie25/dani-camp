with open('input.txt','r') as file:
  list1 = []
  list2 = []
  for line in file.readlines():
    row = line.split()
    list1.append(int(row[0]))
    list2.append(int(row[1]))
  list1.sort()
  list2.sort()
  total = 0
  for index in range(len(list1)):
    total += abs(list1[index]-list2[index])
  # for the second part, create a dictionary of list2 for each repeating element. Then use list 1 to get the results and sum them
  dictionary_list2 = {}
  for item in list2:
    dictionary_list2[item] = dictionary_list2.get(item, 0) + 1
  total2 = 0
  for item in list1:
    if item in dictionary_list2:
      total2 += (item*dictionary_list2[item])
  print(total2)
