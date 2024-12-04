def is_valid(array):
  increasing_or_decreasing = (array==sorted(array) or array==sorted(array,reverse=True))
  ok = True
  for idx in range(len(array)-1):
    if not 1<= abs(array[idx]-array[idx+1]) <= 3:
      ok = False
  return (increasing_or_decreasing and ok)

with open('input-day-2.txt','r') as file:
  lines = file.readlines()
  arrays = []
  for line in lines:
    integers = map(int, line.split())
    arrays.append(list(integers))
  part1 = 0
  part2 = 0
  for array in arrays:
    if is_valid(array):
      part1 += 1
    can_be_saved = False
    for idx in range(len(array)):
      subarray = array[:idx] + array[idx+1:]
      if is_valid(subarray):
        can_be_saved = True
    if can_be_saved:
      part2 += 1
  print(part1)
  print(part2)
