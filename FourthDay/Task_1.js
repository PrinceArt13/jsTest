function ConvertToArray(map, result){
    for (var key in map) {
        arr = [];
        arr.push(key);
        arr.push(map[key]);
        result.push(arr);
      }
      return result
}

map = new Map();
result = []

map = ({ a: 1, b: 2, c: 3, d: 4 })

result = ConvertToArray(map, result);

console.log(result)