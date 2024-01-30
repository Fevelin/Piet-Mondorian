
function setup() {

    //#f3f3f3 - white
    //#f50f0f - red
    //#fae317 - yellow
    //#000000 - black
    //#96#0c84be - blue

    const possibleColors = ["#f3f3f3", "#f50f0f", "#fae317", "#000000", "#1e81b0"];

    //size of each square in pixels
    const squareSize = 50;
    //canvas size in pixels
    const canvasSize = 800;

    const possibleCellsizes = [squareSize, 2 * squareSize, 3 * squareSize];

    const width = squareSize;
    const height = squareSize;

    const borderColor = color("#404040");


    createCanvas(canvasSize, canvasSize);
    background(220);

    let x = 0;
    let y = 0;


    while(y < canvasSize) {
        x = 0;

        let actualHeight = random(possibleCellsizes);
        if(y + actualHeight > canvasSize) actualHeight = canvasSize - y;

        while(x < canvasSize) {

            //choose random hex code from all possible colors
            const colorCode = random(possibleColors);

            // store color object in myColor
            const myColor = color(colorCode);

            // use fill to fill all the square with one color
            fill(myColor)
            stroke(borderColor);
            strokeWeight(5);

            let actualWidth = random(possibleCellsizes);
            if(x + actualWidth > canvasSize) actualWidth = canvasSize - x;


            //rect(x, y, width, height)
            //x = position of the left of the square
            //y = position of the top og the square
            //width = size of the width of the rectangle
            //horizontal = size of the horizantol of the rectangle
            rect(x, y, actualWidth, actualHeight);

          x = x + actualWidth;

        }
        y = y + actualHeight;
    }

}