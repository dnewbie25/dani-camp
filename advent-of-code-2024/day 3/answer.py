import re
def get_values(text):
  matches = re.findall("mul\(\d{1,3},\d{1,3}\)",text)
  return matches

def get_result_single_list(string):
  num1, num2 = re.findall("\d{1,3}",string)
  return int(num1) * int(num2)

def do_dont(text):
  matches = re.finditer("do\(\)|don't\(\)|mul\(\d{1,3},\d{1,3}\)", text)
  # matches = re.finditer("mul((\d+),(\d+))|do(n't)?()", text)
  return matches

with open('input-day-3.txt', 'r') as file:
  # Part 1 starts here
  lines = file.readlines()
  matched_multiplies = []
  for line in lines:
    strings = get_values(line)
    matched_multiplies.append(strings)
  total = 0
  for sublist in matched_multiplies:
    for array in sublist:
      num1, num2 = re.findall("\d{1,3}",array)
      total += (int(num1)*int(num2))
  print(total)

  # Part 2 starts here
  matched_donts = []
  total2 = 0
  enabled = True
  for line in lines:
    strings = do_dont(line)
    for match in strings:
      print(match)
      if match.group(0) == "do()":
        enabled=True
      elif match.group(0) == "don't()":
        enabled=False
      elif not enabled:
        matched_donts.append(match.group())

  matches_part2 = []
  total2 = 0
  for line in matched_donts:
    strings = get_values(line)
    matches_part2.append(strings)
  for array in matches_part2:
      num1, num2 = re.findall("\d{1,3}",''.join(array))
      total2 += (int(num1)*int(num2)) 
  print(total-total2)