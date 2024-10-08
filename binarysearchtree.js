class Node{
    constructor(data = null , left = null , right = null){
        this.data = data
        this.left = left
        this.right = right
    }
}

class Tree{
    constructor(){
        this.treeArr = []
        this.root = null
    }

    dupliArr(arr){
        return [...new Set(arr)]
    }

    processArr(arr){
        let uniqArr = this.dupliArr(arr)
        return uniqArr.sort()
    }

    buildTreeRoot(array){
        let processedArr = this.processArr(array)
        this.root = createRoot(array , 0 , array.length-1)
        return this.root
    }

    createRoot(array , start , end){
        if(start>end) return null

        const mid = Math.floor((start+end)/2)
        const newNode = new Node(array[mid])
        newNode.left = this.createRoot(array , start , mid-1)
        newNode.right = this.createRoot(array , mid+1 , end)
        return newNode
    }


}