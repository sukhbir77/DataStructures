/*
Given a root node reference of a BST and a key, delete the node with the given key in the BST.
Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.

Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.
*/

var deleteNode = function (root, key) {
  if (root == null) return null;

  if (root.val == key) {
    if (!root.left && !root.right) {
      return null;
    } else if (root.right && !root.left) {
      return root.right;
    } else if (root.left && !root.right) {
      return root.left;
    } else {
      let cur = root.right;
      while (cur.left) {
        cur = cur.left;
      }
      cur.left = root.left;
      return root.right;
    }
  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }

  return root;
};
