// Function to validate a date
const validateDate = (text) => {
    // Defines the pattern to find, 2 numbers separated by (/) for day
    // 2 numbers for month, and 4 numbers for year
    let regex = /\d{2}[/]\d{2}[/]\d{4}/;

    // Find a match with the text
    let match = text.match(regex);

    // Throw error if no match is found
    if (match === null){
        return "Could not find a valid date"
    }

    // Return match
    return match[0];
}

console.log(validateDate("I was born in Donostia the 05/04/1982"));
console.log(validateDate("I was born in Donostia the 5/04/1982"));
console.log(validateDate("I was born in Donostia the 05/4/198"));
console.log(validateDate("I was born in Donostia the 05-04-1982"));
console.log(validateDate("I was born in Donostia the 1982/04/05"));

// Function to validate email
const validateEmail = (email) => {
    // Defines patter of 3 minimum alphanumerical chars before and after "@"
    // with 2 or 3 characters after the "."
    let regex = /^[a-zA-Z0-9]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z]{2,3}$/;

    // Finds a match within the text
    let match = email.match(regex);

    // Throw error if no match is found
    if (match === null){
        return "Could not find a valid email"
    }

    // Return match
    return match[0];
}

console.log(validateEmail("hello@gmail.com"))
console.log(validateEmail("he@gmail.com"))
console.log(validateEmail("hello@gm.com"))
console.log(validateEmail("hello@gmail.c"))
console.log(validateEmail("hello@gmail.coms"))

// Function to replace words for others
const replaceText = (text) => {
    // Create array of words with its replacements
    let replacements = [["car", "vehicle"], ["going", "driving"], ["crazy", "over the speed limit"], ["texting", "distracted"]];

    // Replaces each word it finds in the text
    replacements.forEach(function(replace) {
        text = text.replace(replace[0], replace[1]);
    });

    // Returns the text with all the replacements
    return text;
}

console.log(replaceText("That car was going crazy! He was probably texting."))
console.log(replaceText("That car was going fast! He was probably texting."))
console.log(replaceText("That bike was going crazy! He was probably texting."))
console.log(replaceText("That car was going crazy! He was probably daydreaming."))

// Function to replace names and surnames
const invertNames = (names) => {
    // Split the input string into an array of words
    let nameSurname = names.split(" ");
        
    // Reverses the order of the words and inserts a comma between them
    let reversedNamSurnam = nameSurname.reverse().join(", ");
    
    // Returns the reversed words
    return reversedNamSurnam;
}

console.log(invertNames("John Smith"));
console.log(invertNames("John Smith Doe"));

// Function ro remove all dangerous tags from HTML document
const removeTags = () => {
    // Array of dangerous tags
    let dangerousTags = ["a", "iframe", "object", "form", "script"];

    // For each dangerous tag, it scans through the document and
    // removes all instances of said tag
    dangerousTags.forEach(tagName => {
        let tags = document.querySelectorAll(tagName);
        tags.forEach(tag => tag.remove());
    });
};

// Add listener that waits for document to load fully
document.addEventListener('DOMContentLoaded', () => {

    // Executes function to remove tags
    removeTags();
});