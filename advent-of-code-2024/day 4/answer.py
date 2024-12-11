
# Part 1
def search_word(grid):
  keyword = "XMAS"
  target_length = 4
  count = 0
  rows = len(grid)
  cols = len(grid[0])
  def is_valid_direction(row, col, dr, dc):
    for i in range(target_length):
        r = row + i * dr
        c = col + i * dc
        if not (0 <= r < rows and 0 <= c < cols) or grid[r][c] != keyword[i]:
            return False
    return True

  for row in range(rows):
      for col in range(cols):
          directions = [(0, 1), (0, -1), (1, 0), (-1, 0), (1, 1), (1, -1), (-1, 1), (-1, -1)]
          for dr, dc in directions:
              if is_valid_direction(row, col, dr, dc):
                  count += 1

  return count

# Part 2
def solution2(input):

    def safe_grid_get(grid, r, c):
        if 0 <= r < len(grid) and 0 <= c < len(grid[0]):
            return grid[r][c]
        return None

    search = input
    count = 0

    for r in range(len(search)):
        for c in range(len(search[r])):
            if search[r][c] == 'A':
                # Pattern 1
                if (
                    safe_grid_get(search, r - 1, c - 1) == 'M' and
                    safe_grid_get(search, r - 1, c + 1) == 'M' and
                    safe_grid_get(search, r + 1, c - 1) == 'S' and
                    safe_grid_get(search, r + 1, c + 1) == 'S'
                ):
                    count += 1

                # Pattern 2
                if (
                    safe_grid_get(search, r - 1, c - 1) == 'S' and
                    safe_grid_get(search, r - 1, c + 1) == 'S' and
                    safe_grid_get(search, r + 1, c - 1) == 'M' and
                    safe_grid_get(search, r + 1, c + 1) == 'M'
                ):
                    count += 1

                # Pattern 3
                if (
                    safe_grid_get(search, r - 1, c - 1) == 'S' and
                    safe_grid_get(search, r - 1, c + 1) == 'M' and
                    safe_grid_get(search, r + 1, c - 1) == 'S' and
                    safe_grid_get(search, r + 1, c + 1) == 'M'
                ):
                    count += 1

                # Pattern 4
                if (
                    safe_grid_get(search, r - 1, c - 1) == 'M' and
                    safe_grid_get(search, r - 1, c + 1) == 'S' and
                    safe_grid_get(search, r + 1, c - 1) == 'M' and
                    safe_grid_get(search, r + 1, c + 1) == 'S'
                ):
                    count += 1

    return count


with open('input-day-4.txt','r') as file:
  lines = file.read().strip().splitlines()
  array = []
  for line in lines:
    array.append(list(line))
  count = search_word(array)
  print(count)

  count2 = solution2(array)
  print(count2)