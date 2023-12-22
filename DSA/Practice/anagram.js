function countingString(str1, str2) {
    if (str1.length != str2.length)
        return false;

    let counter = {};
    for (let i = 0; i < str1.length; i++) {
        let character = str1[i];
        counter[character] ? counter[character] += 1 : counter[character] = 1;
    }
    for (let j = 0; j < str2.length; j++) {
        let character = str2[j];
        if (!counter[character])
            return false
        else {
            counter[character] -= 1;
        }
    }
    return true;
}
console.log(countingString('heart', 'earth'));