
function setup() {

    //#f3f3f3 - white
    //#f50f0f - red
    //#fae317 - yellow
    //#000000 - yellow
    //#96#0c84be - blue

    const possibleColors = ["#f3f3f3", "#f50f0f", "#fae317", "#000000", "#96#0c84be"];

    //size of each square in pixels
    const squareSize = 100;
    //number of cells of the gric
    const cellNumber = 10;
    //canvas size in pixels
    const canvasSize = squareSize * cellNumber;

    createCanvas(canvasSize, canvasSize);
    background(220);

    for(let row = 0; row < cellNumber; row++) {
        for(let column = 0; column < cellNumber; column++) {
            const red = random(255);
            const green = random(255);
            const blue = random(255);


            const colorCode = random(possibleColors);

            const myColor = color(colorCode);

            // use fill to fill all the square with one color
            fill(myColor)

            //calculate horizontal position in pixels
            const x = row * squareSize;
            //calculate the vertical position in pixels;
            const y = column * squareSize;

            //set witdh  and height
            const width = squareSize;
            const height = squareSize;

            //rect(x, y, width, height)
            //x = position of the left of the square
            //y = position of the top og the square
            //width = size of the width of the rectangle
            //horizontal = size of the horizantol of the rectangle
            square(x, y, width);

            
        }
    }

}