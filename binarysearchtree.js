class Node{
    constructor(data = null , leftNode = null , rightNode = null){
        this.data = data
        this.leftNode = leftNode
        this.rightNode
    }
}

class Tree{
    constructor(){
        this.treeArr = []
        this.root = buildTree()
    }

    sortArr(arr){
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr.length-1;j++){
                if (arr[j]>arr[j+1]){
                    let temp = arr[j+1]
                    arr[j+1] = arr[j]
                    arr[j] = temp
                }
            }
        }
        return arr
    }

    dupliArr(arr){
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr.length-1;j++){
                if (arr[i]==arr[j]){
                    arr.splice(j,1)
                    j--
                }
            }
        }
        return arr
    }

    buildTree(array){
        array = this.sortArr(array)
        array = this.dupliArr(array)
    }
}