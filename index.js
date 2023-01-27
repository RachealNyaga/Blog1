function palindrome (word) {
let splitWord = word.split("")
let reverse = splitWord.reverse();
let joined = reverse.join("");

return word == joined


}
console.log (palindrome('madamimadam'))

function armstrong(number) {
    let splitNumber = number.split("")
    let sum = 0;

    for(let i = 0; i < splitNumber.length; i++) {

        sum += Math.pow(splitNumber[i], 3);
    }

    return number == sum;
}

console.log(armstrong("370"))