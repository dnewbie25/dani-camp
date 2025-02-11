#!/usr/bin/env python3
import sys
from collections import deque

def topological_sort(nodes, graph):
    """
    Perform a topological sort on the graph.
    
    Args:
      nodes: a list of nodes (page numbers).
      graph: a dict mapping each node to a list of nodes that must come after it.
    
    Returns:
      A list of nodes in topologically sorted order.
    
    Raises:
      ValueError: if the graph has a cycle.
    """
    # Compute in-degrees for each node.
    indegree = {node: 0 for node in nodes}
    for node in nodes:
        for neighbor in graph[node]:
            indegree[neighbor] += 1

    # Use a queue for nodes with no incoming edges.
    queue = deque([node for node in nodes if indegree[node] == 0])
    sorted_list = []

    while queue:
        node = queue.popleft()
        sorted_list.append(node)
        for neighbor in graph[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    if len(sorted_list) != len(nodes):
        raise ValueError("Cycle detected in the ordering rules!")
    return sorted_list

def main():
    data = sys.stdin.read().strip()
    if not data:
        return

    # Split the input into two sections (rules and updates) using a blank line.
    parts = data.split("\n\n")
    if len(parts) != 2:
        print("Unexpected input format. Expected two sections separated by a blank line.")
        return

    # Parse the ordering rules.
    rule_lines = parts[0].strip().splitlines()
    rules = []
    for line in rule_lines:
        line = line.strip()
        if not line:
            continue
        try:
            left, right = line.split("|")
            rules.append((int(left.strip()), int(right.strip())))
        except ValueError:
            print(f"Skipping invalid rule: {line}")

    # Process each update (each update is a comma-separated list of page numbers).
    update_lines = parts[1].strip().splitlines()
    total_middle = 0

    for update_line in update_lines:
        update_line = update_line.strip()
        if not update_line:
            continue
        pages = [int(x.strip()) for x in update_line.split(",")]
        
        # Build a dictionary mapping each page to its index in the update.
        pos = {page: i for i, page in enumerate(pages)}
        
        # Check if this update is already correctly ordered.
        valid = True
        for a, b in rules:
            if a in pos and b in pos and pos[a] >= pos[b]:
                valid = False
                break

        # Only process updates that are NOT correctly ordered.
        if valid:
            continue

        # Build the graph for only the pages in this update.
        # Each page is a node; add an edge a -> b for every rule a|b
        # that applies (i.e. if both a and b appear in the update).
        graph = {page: [] for page in pages}
        for a, b in rules:
            if a in graph and b in graph:
                graph[a].append(b)
        
        # Use topological sort to get the correct order for this update.
        try:
            sorted_pages = topological_sort(pages, graph)
        except ValueError as e:
            print("Error: ", e)
            continue

        # Find the middle page number (integer division works because
        # the number of pages is odd in the examples).
        middle_index = len(sorted_pages) // 2
        total_middle += sorted_pages[middle_index]

    print(total_middle)

if __name__ == '__main__':
    main()
