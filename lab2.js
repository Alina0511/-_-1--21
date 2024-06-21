//1) Создать массив 3 разными способами



// 1. Создание массива с использованием литерала массива
function task1(){
let array1 = [1, 2, 3, 4, 5];

// 2. Создание массива с использованием конструктора Array
let array2 = new Array(1, 2, 3, 4, 5);

// 3. Создание массива с использованием метода Array.from()
let array3 = Array.from([1, 2, 3, 4, 5]);
}


//2) Выведите на экран 5 член вашего массива, затем измените его значение

function task2(){
    console.log(array1[4]); // Вывод 5 элемента: 5
    array1[4] = 10; // Изменение 5 элемента на 10
    console.log(array1[4]); // Вывод 5 элемента: 10   
}


// 3) Узнайте длину вашего массива и выведите ее значение при наведении на любой элемент

function task3(){
    let arr = [1,2,3,4,5,6];
    console.log(arr[4]);
    arr[4] = 100;
    console.log(arr[4]);
}

//4) Выведите все элементы массива, используя цикл for
function task4();{
    let arr = [1,2,3,4,5,6];
    let button = document.
}

//5) Создайте 2 массива. Объедините их в один и выведите на экран полученный массив
function task5();{
    let arr1 = [1,2,3,4];
    let arr2 = [5,6,7,8];

    // let arr3 = arr1.concat(arr2);

    console.log(arr3);
}

// 6) Удалите последний член получившегося массива и выведите это значение на экран

function task6(){
    let arr = [1,2,3,4,5,6];

    const firstElement = arr.shift();
    console.log(firstElement,arr);
}


//7) Удалите последний член получившегося массива и выведите это значение на экран

function task7(){
    let arr = [1,2,3,4,5,6];

    const firstElement = arr.pop();
    console.log(firstElement,arr);
}
//8) Добавьте новый элемент в начало вашего объединенного массива

function task8(){
    let arr = [1,2,3];

    arr.unshift(100);

    console.log(arr);
}

// 9) Получите сегодняшнюю дату и выведите ее на экран
function task9(){
let date = new Date();
console.log(date); // Вывод объекта Date
}


//10) Выведите сегодняшнюю дату в формате 11 ноября 2020 года
function task10(){
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1; // Месяц начинается с 0
let year = today.getFullYear();
console.log(`${day} ${month} ${year}`); // Вывод: 11 11 2020
}
// 11) Напишите функцию, подсчитывающую произведение двух случайных чисел в промежутке от нуля до 50

function task11() {
  if (num <0 || num2 < 0 || num2 > 50){
    return;
  }
return num1 * num2;
}
task11();