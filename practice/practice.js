// BAI1
let array = Array(10);
for (let j = 0; j < 10; j++) {
    array[j] = +prompt(`nhập vào số ở vị trí ${j} cho mảng`);
}
let sum = 0;
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 10) {
        sum += array[i];
        count++;
    }
}
console.log(`Có ${count} số lớn hơn 10 tổng bằng: ${sum}`);
// BAI2
let arr = [5, 12, 7, 22, 3, 10, 8, 15, 18, 9];
let max = arr[0];
let maxIndex = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
    }
}

console.log("Giá trị lớn nhất trong mảng là:", max);
console.log("Vị trí của phần tử lớn nhất là:", maxIndex);
// BAI3
let arr = [5, 12, 7, 22, 3, 10, 8, 15, 18, 9];
let max = arr[0];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    sum += arr[i];
}

let average = sum / arr.length;

console.log("Giá trị lớn nhất trong mảng là:", max);
console.log("Giá trị trung bình của các phần tử trong mảng là:", average);
// BAI4
let arr = [5, 12, 7, 22, 3, 10, 8, 15, 18, 9];

arr.reverse();

console.log("Mảng sau khi đảo ngược:", arr);
// BAI5
let str = "5 -3 7 -2 4 -8 0 11";
let numbers = str.split(" ").map(Number);
let negativeCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        negativeCount++;
    }
}

console.log("Số lượng số nguyên âm trong chuỗi là:", negativeCount);
// BAI6
let arr = [5, 12, 7, 22, 3, 10, 8, 15, 18, 9];
let V = 10;

if (arr.includes(V)) {
    console.log("V is in the array");
} else {
    console.log("V is not in the array");
}
// BAI7
let arr = [5, 12, 7, 22, 3, 10, 8, 15, 18, 9];
let V = 10;

let index = arr.indexOf(V);
if (index !== -1) {
        for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;
}
console.log("Mảng sau khi xóa phần tử V:", arr);
// BAI8
let arr = [5, 12, 7, 22, 3, 10, 8, 15, 18, 9];

arr.sort((a, b) => b - a);

console.log("Mảng sau khi sắp xếp theo thứ tự giảm dần:", arr);
// BAI9
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let c = [];

c = c.concat(b, a);

console.log("Mảng c sau khi nối hai mảng a và b:", c);
