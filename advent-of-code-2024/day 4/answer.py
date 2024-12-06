import numpy as np


letters_ordered = 'AMSX'
total_horizontal = 0
total_vertical = 0
total_diagonals = 0

with open('test.txt','r') as file:
  lines = file.readlines()
  array = []
  # this is for diagonals
  for line in lines:
    array.append(list(line.strip()))
  matrix = np.array(array)
  diags = [matrix[::-1,:].diagonal(i) for i in range(-matrix.shape[0]+1,matrix.shape[1])]  
  # diags.extend(matrix.diagonal(i) for i in range(matrix.shape[1]-1,-matrix.shape[0],-1))
  #print([n.tolist() for n in diags])


  # mas bien crear un array que contenga la primera letra e itere con cada otra letra. 4 loops basicamente, si se forma XMAS, es una horizontal valida
  # lo mismo para las verticales
  for element in diags:
    #print(element)
    if len(element) >= 4:
      for col in range(len(element)):
        if ''.join(sorted(element[col:col+4])) == letters_ordered:
          print(element[col:col+4], 'diagonal')
          total_diagonals += 1
  # this way I can get vertical and horizontals
  for row in range(len(lines)-4):
    for col in range(len(lines[row])):
      if ''.join(sorted(lines[row][col:col+4])) == letters_ordered:
          print(lines[row][col:col+4],'horizontal')
          total_horizontal += 1
      if ''.join(sorted(lines[row][col]+lines[row+1][col]+lines[row+2][col]+lines[row+3][col])) == letters_ordered:
          print(lines[row][col]+lines[row+1][col]+lines[row+2][col]+lines[row+3][col],'vertical')
          total_vertical += 1
  print(total_horizontal + total_vertical + total_diagonals)