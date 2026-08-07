# EPAM Assignment 2 – Tree & Graph Problems

## Overview

This repository contains solutions to two medium-level Data Structures and Algorithms (DSA) problems involving Trees and Graphs. The solutions are implemented in Java using efficient traversal algorithms.



## Problem 1: Tree of Trusted Servers

### Description

Given a tree with Server 1 as the root, each server contains a security key. The task is to determine how many servers are **trusted**, where a server is considered trusted if the XOR of all security keys on the path from the root to that server is greater than or equal to a given threshold **K**.

### Algorithm Used

* Depth First Search (DFS)
* Path XOR Computation

### Time Complexity

**O(N)**

### Space Complexity

**O(N)**

---

## Problem 2: Emergency Route Validation

### Description

Given a connected undirected graph representing cities and highways, determine how many cities are reachable from City 1 within a maximum distance D using the shortest path.

### Algorithm Used

* Breadth First Search (BFS)

### Time Complexity

**O(N + M)**

### Space Complexity

**O(N + M)**

## Technologies Used

* Java
* VS Code
* Git
* GitHub

## Project Structure

EPAM-Assignment
│
├── Problem1.java
├── Problem2.java
└── README.md

## How to Compile and Run

### Compile
javac Problem1.java
javac Problem2.java

### Run
java Problem1

or

java Problem2


## Author

**Shreya Gupta**
