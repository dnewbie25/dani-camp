import sys

def main():
    # Read the entire input
    data = sys.stdin.read().strip()
    if not data:
        return

    # Split input into two parts: the ordering rules and the update lists.
    parts = data.split("\n\n")
    if len(parts) != 2:
        print("Unexpected input format. Expected two sections separated by a blank line.")
        return
    
    # Parse the ordering rules.
    rules_lines = parts[0].strip().splitlines()
    rules = []
    for line in rules_lines:
        line = line.strip()
        if not line:
            continue
        try:
            left, right = line.split("|")
            rules.append((int(left.strip()), int(right.strip())))
        except ValueError:
            print(f"Skipping invalid rule: {line}")
    
    # Parse the update lists.
    updates_lines = parts[1].strip().splitlines()
    total_middle = 0
    for update_line in updates_lines:
        update_line = update_line.strip()
        if not update_line:
            continue
        # Each update is a comma-separated list of page numbers.
        pages = [int(x.strip()) for x in update_line.split(",")]
        
        # Build a dictionary to record each page's index in the update.
        pos = {page: i for i, page in enumerate(pages)}
        
        # Check each ordering rule. If both pages in the rule are present,
        # then the first must come before the second.
        valid = True
        for a, b in rules:
            if a in pos and b in pos:
                if pos[a] >= pos[b]:
                    valid = False
                    break
        
        # If the update is valid, add its middle page number.
        if valid:
            middle_index = len(pages) // 2  # Works when number of pages is odd.
            total_middle += pages[middle_index]
    
    print(total_middle)

main()