var line = "hello alexandr!";

wordsArray = line.split(" ");

result = ""

wordsArray.forEach(x => {
    const char = x[0]

    for (let i = 0; i<x.length;i++){
        result = result + char
    }

    result = result + " "
});

result = result.slice(0,-1)
console.log(result)