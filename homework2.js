// valid characters in a hex code
var validChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F'];

// changes the color of the page based on user input, where color is a string formatted as "#CCCCC"
function changeColor(color) {
    if (color != null) {
        // validation
        if (color.charAt(0) != "#") {
            console.log("I'm sorry, that is not a valid hex number. Your first character was " + color.charAt(0) + ", and not a #. Please try again.");
            return;
        }
        for (i = 1; i <= 6; i++) {
            if (validChars.indexOf(color.charAt(i)) == -1) {
                console.log("I'm sorry, that is not a valid hex number. Your first invalid character was " + color.charAt(i) + ". Please try again.");
                break;
            }
        }
        // if everything is valid, change to the color
        document.body.style.backgroundColor = color;
    }else{
        var randomColor = "#";
        for(i=1; i <=6;i++){
            // generate a random number from the valid characters
            randomColor += validChars[Math.floor(Math.random() * validChars.length)];
        }
        document.body.style.backgroundColor = randomColor;
        console.log('The page is now '+randomColor);
    }
}