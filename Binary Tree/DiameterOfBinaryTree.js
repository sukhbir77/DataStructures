/*
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them

Example 1
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:
Input: root = [1,2]
Output: 1
*/

var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  // Keep track of Left + Right Subtree Max Depth at each Node.
  let longestPath = (node) => {
    if (node == null) return 0;

    let left_path = longestPath(node.left);
    let right_path = longestPath(node.right);

    diameter = Math.max(diameter, left_path + right_path);

    return Math.max(left_path, right_path) + 1;
  };

  longestPath(root);

  return diameter;
};
