let str = "Java Script";

let frequency = {};

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {

    let ch = str[i];

    if (ch == " ") {
        continue;
    }

    if (frequency[ch]) {
        frequency[ch]++;
    }
    else {
        frequency[ch] = 1;
    }
}

for (let ch in frequency) {
    console.log(ch + " : " + frequency[ch]);
}