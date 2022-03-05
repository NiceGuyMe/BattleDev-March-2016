const prompt = require('prompt-sync')();
let dico = []
let number = 1

//a function which adds the words in the dictionary
const addword = () => {
    // a loop which asks if we want to add words in the dictionary
    while (true) {
        let newWord = prompt(" enter a word ")
        // add the word in dico
        dico.push(newWord)
        let choice = prompt("do you want to enter another word? (yes=1/no=2) ")
        if (choice == 1) {
            number += 1
        } else {
            break;
        }
    }
};

// a function which searches for the longest word of the dictionary
const isLong = array => {
    // we assume that the first element of the dictionary is the longest
    let Long = array[0]
    // a loop that goes through the dictionary in search of a word longer than the one supposed
    for (let i = 0; i < array.length; i++) {
        // if we find, this becomes the longest
        if (array[i].length > Long.length) {
            Long = array[i]
        }
    }
    console.log("====================================");
    console.log(`the dictionary contains: ${number} words`);
    console.log(`the longest word is${Long}`);
    console.log(`il contient: ${Long.length} letters`);
    console.log("====================================");
}
addword()
isLong(dico)
