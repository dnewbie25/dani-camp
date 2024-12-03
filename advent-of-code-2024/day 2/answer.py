def increases(array):
  return all(i < j for i,j in zip(array, array[1:]))

def decreases(array):
  return all(i > j for i,j in zip(array, array[1:]))

def difference_less_than_3(array):
  for idx in range(len(array)-1):
    if abs(array[idx]-array[idx+1]) == 0:
      return False
    elif abs(array[idx]-array[idx+1]) > 3:
      return False
  return True

def increases_save(array):
  newArr = array
  for idx in range(len(array)-1):
    if array[idx] >= array[idx+1]:
      newArr.pop(idx)
      break
  return newArr

def decreases_save(array):
  newArr = array
  for idx in range(len(array)-1):
    if array[idx] <= array[idx+1]:
      newArr.pop(idx)
      break
  return newArr

with open('input-day-2.txt','r') as file:
  lines = file.readlines()
  arrays = []
  for line in lines:
    integer_list = map(int, line.split())
    arrays.append(list(integer_list))
  total = 0
  for array in arrays:
    if (increases(array) or decreases(array)) and difference_less_than_3(array):
      total += 1
    elif decreases(decreases_save(array)) and difference_less_than_3(decreases_save(array)):
      total += 1
    elif increases(increases_save(array)) and difference_less_than_3(increases_save(array)):
      total+=1
  # for array in arrays:
  #   new1 = increases_save(array)
  #   new2 = decreases_save(array)
  #   if decreases(new2) and difference_less_than_3(new2):
  #     total += 1
  print(total)

# need a function that checks every new possible combination of the _save functions to see if they could be saved


# print(increases([1,2,3,4,4,7,8]))
# print(decreases([8,7,6,5,5,4]))
# print(difference_less_than_3([7,6,4,2,1]))
# print(difference_less_than_3([1,2,7,8,9]))
# print(difference_less_than_3([1,3,6,7,9]))
# print(increases_save([1, 3, 2, 4, 5]))
# print(decreases_save([8, 6, 4, 4, 1]))