function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let month = randomInt(1,12)

if (month === 12 || month<=2)
    console.log(month + ': зима')
if (month>=3 && month<=5)
    console.log(month + ': весна')
if (month>=6 && month<=8)
    console.log(month + ': лето')
if (month>=9 && month<=11)
    console.log(month + ': осень')

let year = randomInt (0,3000)
if(year%4===0)
    console.log(year + ': високосный год')
else console.log(year + ': не високосный год')
