let arr = [1, 2, 3, 5, 6];

let n = arr.length + 1;

let total = 0;

for (let i = 1; i <= n; i++) {
    total = total + i;
}

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

let missing = total - sum;

console.log("Missing number:", missing);