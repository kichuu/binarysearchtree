import Tree from "./binarysearchtree.js";

function generateRandomNumbers(count) {
  const numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * 100));
  }
  return numbers;
}

const tree = new Tree();

const randomNumbers = generateRandomNumbers(10);
console.log("Random Numbers:", randomNumbers);
tree.buildTreeRoot(randomNumbers);

console.log("Initial Tree Structure:");
tree.prettyPrint();

console.log("Is the tree balanced?", tree.checkBalanced(tree.root).isBalanced);

console.log("Adding unbalancing numbers: 101, 102, 103");
tree.insert(101);
tree.insert(102);
tree.insert(103);

console.log("Tree Structure After Adding Unbalancing Numbers:");
tree.prettyPrint();

console.log("Is the tree balanced?", tree.checkBalanced(tree.root).isBalanced);

console.log("Rebalancing the tree...");
tree.rebalance();

console.log("Tree Structure After Rebalancing:");
tree.prettyPrint();

console.log("Is the tree balanced?", tree.checkBalanced(tree.root).isBalanced);
