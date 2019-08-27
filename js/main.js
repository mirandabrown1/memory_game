console.log("Up and running!");
var cardOne= "queen";
var cardTwo="queen";
var cardThree="king";
var cardFour="king";
console.log("User flipped"+ cardOne);
console.log("User flipped"+ cardTwo);
var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png"
},
{
rank: 'king',
suit: 'hearts',
cardImage: "images/king-of-hearts.png"
},
{
rank: 'king',
suit: 'diamonds',
cardImage: "images/king-of-diamonds.png"
},

];

var cardsInPlay = [];
function flipCard (card)
{
	cardID = this.getAttribute('data-id');
	this.setAttribute('src',cards[cardID].cardImage);
	cardsInPlay.push(cards[cardID].rank);
	checkForMatch();

	
};
unction checkForMatch ()
{

	if (cardsInPlay.length === 2) {

		if (cardsInPlay[0] === cardsInPlay[1])
		{alert ("You got a match, you win!");}
	else
		{alert ("Please try again!");}
		};
};
createBoard();
