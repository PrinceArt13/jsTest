arr = [6,1,7,3,5,8,0,-1,3,2,4,5]

findNum = 0

for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    [arr[i], arr[min]] = [arr[min], arr[i]];
}

console.log('Сортировка выбором: ' + arr);

let start = 0;
let end = arr.length - 1;

while (start <= end) {
let mid = Math.floor((start + end) / 2);

if (arr[mid] === findNum) {
    console.log('Индекс искомого числа: '+ mid);
}

if (arr[mid] < findNum) {
    start = mid + 1; // Отбрасываем левую часть массива
} else {
    end = mid - 1; // Отбрасываем правую часть массива
}
}