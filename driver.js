import Tree from "./binarysearchtree.js";


  tree.buildTreeRoot(10);
  
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
  