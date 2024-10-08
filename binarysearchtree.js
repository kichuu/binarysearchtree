class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.treeArr = [];
    this.root = null;
  }

  dupliArr(arr) {
    return [...new Set(arr)];
  }

  processArr(arr) {
    let uniqArr = this.dupliArr(arr);
    return uniqArr.sort();
  }

  buildTreeRoot(array) {
    let processedArr = this.processArr(array);
    this.root = createRoot(array, 0, array.length - 1);
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
    return node;
}

}
}