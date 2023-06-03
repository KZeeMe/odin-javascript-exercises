const reverseString = function(str) {
    let newString = []
    for (let i = str.length; i >= 0; i--){
        newString.push(str[i]);
    }
    return newString.join("");
};

console.log(reverseString('Hello there'));
// Do not edit below this line
module.exports = reverseString;
