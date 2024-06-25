arr = [1,2,3,6,8,1,6,3,2,1,0,4]
arr2 = ['one', 'two', 'three']

for (let i = 0;i<arr.length;i++){
    for(let j=0;j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        }
    }
}

arr = [...arr,...arr2]

console.log(arr)