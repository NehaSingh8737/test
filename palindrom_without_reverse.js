function palindrome(str) {

    str = str.toLowerCase();

    let newStr = "";

    // Remove spaces
    for (let i = 0; i < str.length; i++) {

        if (str[i] != " ") {
            newStr = newStr + str[i];
        }
    }

    let start = 0;
    let end = newStr.length - 1;

    while (start < end) {

        if (newStr[start] != newStr[end]) {
            console.log("Not Palindrome");
            return;
        }

        start++;
        end--;
    }

    console.log("Palindrome");
}

palindrome("Madam");
palindrome("nurses run");