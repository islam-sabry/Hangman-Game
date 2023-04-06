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
    movies: ["pulp fiction","titanic", "star wars", "the godfather", "dark night", "green mile", "lord of the rings", "seven"],
    scientists: ["nikola Tesla", "albert einstein", "stephen hawking", "galileo galilei", "isaac newton"],
    tracks: ["react", "php laravel", "node js", "angular", "dot net", "java spring", "python", "graphic designer"],
    countries: ["egypt", "spain", "england", "argentina", "italy", "germany"],
    clubs: ["liverpool", "man city", "arsenal", "barcelona", "real madrid", "milan", "inter", "porto"]
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
});

/*-----------------------------------------
handel clicking on letters
------------------------------------------*/
// set wrong attempts
let wrongAttempts = 0;
let theDraw = document.querySelector(".hang-design");

// get the guess span
let guessSpan = document.querySelectorAll(".letters-guess span");
// get the choosen word
let choosenWord = Array.from(randomvalueName);
document.addEventListener("click", (e)=> {
    // set status
    let theStatus =false;
    if (e.target.className === "letter-container") {
        // the choosen letter
        e.target.classList.add("clicked");
        let clickedLetter = e.target.innerHTML;
        choosenWordLetters.forEach((letter, letterIndex)=> {
            // check if the clicked letter equal any letter in the choosenWordLetters
            if (clickedLetter === letter) {
                theStatus = true;
                // loop in all spans
                guessSpan.forEach ((span, index)=> {
                    if (letterIndex === index) {
                        span.innerHTML = letter;
                    }
                })
            }
        });
        // check the wrong letter
        if (theStatus === false) {
            // increase the wrong attempt and add classname to the draw
            wrongAttempts ++;
            theDraw.classList.add(`wrong-${wrongAttempts}`);

            // the audio section (fail)
            document.querySelector("#fail").play();
            if (wrongAttempts === 6) {
                lettersContainer.classList.add("finished");
                endGame();
            }
        } else {
            // audio section (success)
            document.querySelector("#success").play();

        }
    }
});
// create endgame func
function endGame() {
    let div = document.createElement("div");
    let divTetxt = document.createTextNode(`Game Over The Word is : ${randomvalueName}`);
    div.appendChild(divTetxt);
    div.className = "popup";
    document.body.appendChild(div)
} 






