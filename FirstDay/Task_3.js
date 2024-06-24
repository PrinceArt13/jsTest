words = ["дим", "манек", "рота"]

function doPalindrome(word){
    toAdd = word.slice(0,-1);
    toAdd = toAdd.split('').reverse().join('');
    word = word + toAdd;
    return word
}

result = []

words.forEach(word => {
    result.push(doPalindrome(word))
})

console.log(result)