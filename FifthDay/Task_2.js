class MyString{
    reverse(str){
        return str.split('').reverse().join('')
    }

    ucWords(str = new String()){
        let words = str.split(' ');
        let ucwords = Array('');
        for (let word of words){
            ucwords.push(word[0].toUpperCase() + word.slice(1));
        }
        return ucwords.join(' ');
    }
}

mystr = new MyString()

console.log(mystr.reverse('перевернуть строку.'));
console.log(mystr.ucWords("сделать заглавную букву в каждом слове"));