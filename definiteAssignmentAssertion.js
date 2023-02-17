var dice;
function rolldice() {
    dice = (Math.round(Math.random() * 6) + 1);
}
rolldice();
console.log('Current Value Is :- ', dice);
