// create the letters
let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArr = Array.from(letters);

//select letters container 
let lettersContainer = document.querySelector(".all-letters");

// generate the letters
lettersArr.forEach((letter)=> {
    let span = document.createElement("span");
    let eachLetter = document.createTextNode(letter);
    span.appendChild(eachLetter);
    span.className = "letter-container";
    lettersContainer.append(span);
});

//create object for words
let allWords = {
    movies: ["Pulp Fiction","Titanic", "Star Wars", "The Godfather", "Dark Night", "Green Mile", "Lord of the Rings", "Seven"],
    scientists: ["Nikola Tesla", "Albert Einstein", "Stephen Hawking", "Galileo Galilei", "Isaac Newton"],
    tracks: ["React", "Php Laravel", "Node JS", "Angular", "Dot Net", "Java Spring", "python", "Graphic Designer"],
    countries: ["Egypt", "Spain", "England", "Argentina", "Italy", "Germany"],
    clubs: ["Liverpool", "Man City", "Arsenal", "Barcelona", "Real Madrid", "Milan", "Inter", "Porto"]
};
// get random property value
let allKeys = Object.keys(allWords);
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = allWords[randomPropName];
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
// the value
let randomvalueName = randomPropValue[randomValueNumber];

// set categories info
document.querySelector(".categories span").innerHTML = randomPropName;

// select letter guess container
let letterGuessContainer = document.querySelector(".letters-guess");

// work on the choosen word
let choosenWordLetters = Array.from(randomvalueName);
choosenWordLetters.forEach((wordLetter)=> {
    let span = document.createElement("span");
    // check if the word letter was space or letter
    if (wordLetter === " ") {
        span.className = "has-space";
    }
    letterGuessContainer.appendChild(span)
})






