let arr = [4, 2, 4, 3, 2, 4, 5, 2];

let frequency = {};

for (let i = 0; i < arr.length; i++) {

    if (frequency[arr[i]]) {
        frequency[arr[i]]++;
    }
    else {
        frequency[arr[i]] = 1;
    }
}

let max = 0;
let answer = arr[0];

for (let i = 0; i < arr.length; i++) {

    if (frequency[arr[i]] > max) {
        max = frequency[arr[i]];
        answer = arr[i];
    }
}

console.log("Most frequent element:", answer);