let array = [10000, 25000, 35000, 47000, 60000, 27000, 39000]
let cheap = array.filter(function (value) {
    return value <= 35000
})
alert(cheap)
let arr = [4, 1, 2, 5, 4, 46, 11, 9, 27, 8, 33, 9]
let even = [];
let odd = [];
even = arr.filter(number => number % 2 === 0)
alert(even);
odd = arr.filter(number => number % 2 == 1)
alert(odd);
// let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
// let name = prompt('Кого удалить?')
// let fix = arr.indexOf(name)
// arr = 
// console.log(fix)
// console.log(arr)