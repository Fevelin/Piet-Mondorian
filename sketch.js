
function setup() {

    //#f3f3f3 - white
    //#f50f0f - red
    //#fae317 - yellow
    //#000000 - black
    //#96#0c84be - blue

    const possibleColors = ["#f3f3f3", "#f50f0f", "#fae317", "#000000", "#1e81b0"];

    //size of each square in pixels
    const squareSize = 50;
    //number of cells of the gric
    const cellNumber = 10;
    //canvas size in pixels
    const canvasSize = squareSize * cellNumber;

    const width = squareSize;
    const height = squareSize;

    createCanvas(canvasSize, canvasSize);
    background(220);

    let x = 0;
    let y = 0;


    while(y < canvasSize) {
        x = 0;

        while(x < canvasSize) {

            //choose random hex code from all possible colors
            const colorCode = random(possibleColors);

            // store color object in myColor
            const myColor = color(colorCode);

            // use fill to fill all the square with one color
            fill(myColor)


            //rect(x, y, width, height)
            //x = position of the left of the square
            //y = position of the top og the square
            //width = size of the width of the rectangle
            //horizontal = size of the horizantol of the rectangle
            rect(x, y, width, height);

          x = x + width;

        }
        y = y + height;
    }

}