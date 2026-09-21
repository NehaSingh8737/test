let arr = [4, 2, 4, 5, 2, 7, 5, 8];

let result = [];

for (let i = 0; i < arr.length; i++) {

    let found = false;

    for (let j = 0; j < result.length; j++) {

        if (arr[i] == result[j]) {
            found = true;
            break;
        }
    }

    if (found == false) {
        result.push(arr[i]);
    }
}

console.log(result);