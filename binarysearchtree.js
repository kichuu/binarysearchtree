class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  dupliArr(arr) {
    return [...new Set(arr)];
  }

  processArr(arr) {
    let uniqArr = this.dupliArr(arr);
    return uniqArr.sort((a, b) => a - b); 
  }

  buildTreeRoot(array) {
    let processedArr = this.processArr(array);
    this.root = this.createRoot(processedArr, 0, processedArr.length - 1);
    return this.root;
  }

  createRoot(array, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const newNode = new Node(array[mid]);
    newNode.left = this.createRoot(array, start, mid - 1);
    newNode.right = this.createRoot(array, mid + 1, end);
    return newNode;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode; 
      return;
    }

    let currentVal = this.root;
    while (true) {
      if (value >= currentVal.data) {
        if (currentVal.right === null) {
          currentVal.right = newNode;
          return;
        } else {
          currentVal = currentVal.right;
        }
      } else {
        if (currentVal.left === null) {
          currentVal.left = newNode;
          return;
        } else {
          currentVal = currentVal.left;
        }
      }
    }
  }

  deleteItem(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (node === null) return null;

    if (value < node.data) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.data) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      const minLargerNode = this.getMinNode(node.right);
      node.data = minLargerNode.data; 
      node.right = this.deleteNode(node.right, minLargerNode.data); 
    }
    return node;
  }

  getMinNode(node) {
    while (node.left !== null) {
      node = node.left; 
    }
    return node;
  }

  find(value) {
    let currentVal = this.root;
    while (currentVal) {
      if (value > currentVal.data) {
        currentVal = currentVal.right;
      } else if (value < currentVal.data) {
        currentVal = currentVal.left;
      } else {
        return currentVal; 
      }
    }
    return null; 
  }

  levelOrder(callback) {
    if (typeof callback !== 'function') {
      throw new Error('A callback is required');
    }

    const queue = [];
    if (this.root) {
      queue.push(this.root);
    }

    while (queue.length > 0) {
      const currentNode = queue.shift(); 
      callback(currentNode); 

     
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  inOrder(callback) {
    if (typeof callback !== 'function') {
      throw new Error('A callback is required');
    }

    const traverse = (node) => {
      if (node == null) return;
      traverse(node.left);
      callback(node); 
      traverse(node.right);
    };

    traverse(this.root);
  }

  preOrder(callback) {
    if (typeof callback !== 'function') {
      throw new Error('A callback is required');
    }

    const traverse = (node) => {
      if (node == null) return;
      callback(node);
      traverse(node.left);
      traverse(node.right);
    };

    traverse(this.root);
  }

  postOrder(callback) {
    if (typeof callback !== 'function') {
      throw new Error('A callback is required');
    }

    const traverse = (node) => {
      if (node == null) return;
      traverse(node.left);
      traverse(node.right);
      callback(node); 
    };

    traverse(this.root);
  }


  height(node) {
    if (node === null) {
      return -1;
    }
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
  }
}
