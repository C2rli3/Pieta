function randomNumber() {
    // random number from 0 - Max INT value
    return (Math.pow(2,31)-1);
}

console.log(randomNumber());

function generateRGBA() {
    // string
    return 'rgba(255,255,255,1)';
}

generateGrid = () => {
 
    for (let i = 0; i <= 10000; i++) {
        const $square = $('<div></div>').addClass('square');
        $square.css('background-color', generateRGBA());
        $square.text(i);
        $('body').append($square);
    }
}


//invoke generateGrid()
$(() => {
    generateGrid();
}); // 