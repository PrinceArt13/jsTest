arr2 =  [[1,4,5],[1,3,4],[2,6]]
result = []
arr2.forEach(x => {
        x.forEach(y=>{
            result.push(y)
        })
});

result.sort()

console.log(result)