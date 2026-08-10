# EPAM Assignment 3 – Greedy & Dynamic Programming

## Overview

This assignment contains two medium-level problem statements based on **Greedy Algorithms** and **Dynamic Programming**.

The solutions are implemented in **Java**.

## Problem 1: Scholarship Distribution

### Problem Description

A college has a limited budget for distributing scholarships to students. Each student has a minimum scholarship amount they are willing to accept.

The goal is to distribute scholarships to the **maximum possible number of students** without exceeding the available budget.

Each student can receive at most one scholarship.

### Approach

This problem is solved using a **Greedy Algorithm**.

1. Read the number of students and the available budget.
2. Store the minimum scholarship requirement of each student.
3. Sort the scholarship requirements in ascending order.
4. Start selecting students from the student requiring the smallest scholarship.
5. Continue selecting students as long as the total scholarship amount does not exceed the budget.
6. The number of selected students is the answer.

### Why Greedy?

To maximize the number of students, we should always choose students requiring the smallest scholarship amounts first. This allows the available budget to cover as many students as possible.

### Time Complexity

`O(N log N)` due to sorting.

### Space Complexity

`O(N)` for storing the scholarship requirements.

### Sample Input
5 20
4 8 2 6 5


### Sample Output
4

## Problem 2: Maximum Learning Points

### Problem Description

A student has a sequence of topics, where each topic provides a certain number of learning points.

The student cannot select two consecutive topics.

The goal is to determine the **maximum total learning points** that can be obtained.

### Approach

This problem is solved using **Dynamic Programming**.

For every topic, there are two choices:

1. **Skip the current topic**
   The maximum points remain the same as the previous topic.

2. **Select the current topic**
   The previous topic cannot be selected, so we add the current topic's points to the maximum points obtained up to two positions before.

The recurrence relation is:
dp[i] = max(dp[i - 1], points[i] + dp[i - 2])

### Base Cases
dp[0] = points[0]

dp[1] = max(points[0], points[1])
```

### Time Complexity

`O(N)`

### Space Complexity

`O(N)`

### Sample Input
6
5 1 2 10 6 2

### Sample Output
17


## Technologies Used

* Java
* Greedy Algorithm
* Dynamic Programming
* Arrays
* Sorting

## Files
Assignment 3/
│
├── Problem1.java
├── Problem2.java
└── README.md

### Problem1.java

Contains the Greedy solution for the **Scholarship Distribution** problem.

### Problem2.java

Contains the Dynamic Programming solution for the **Maximum Learning Points** problem.

## How to Run
### Compile Problem 1
javac Problem1.java

### Run Problem 1

java Problem1

### Compile Problem 2
javac Problem2.java
### Run Problem 2

java Problem2


## Conclusion

The assignment demonstrates two important algorithmic techniques:

* **Greedy Algorithm** – making the best immediate choice to maximize the number of students receiving scholarships.
* **Dynamic Programming** – solving the maximum learning points problem by breaking it into smaller overlapping subproblems.
