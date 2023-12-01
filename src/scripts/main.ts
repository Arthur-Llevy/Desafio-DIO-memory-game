const emojis: string[] = ["🤖","🤖","😍","😍","🙉","🙉","😡","😡","🤢","🤢","😯","😯"];
let openCards: HTMLDivElement[] = [];
const game: HTMLDivElement | null = document.querySelector('.game');

let shuffleEmojis: string[] = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for(let i: number = 0; i < emojis.length; i++){
	let box: HTMLDivElement = document.createElement('div');
	box.className = "item";
	box.innerHTML = shuffleEmojis[i];
	box.onclick = (event) => handleClick.apply(box, [event]);

	if(game){
		game.appendChild(box);
	};
};

function handleClick(this: HTMLDivElement, event: MouseEvent): void {
  if (openCards.length < 2) {
    this.classList.add('boxOpen');
    openCards.push(this);
  };

  if(openCards.length === 2){
  	setTimeout(checkMatch, 500);
  };
};

function checkMatch(): void {
	if(openCards[0].innerHTML === openCards[1].innerHTML){
		openCards[0].classList.add('boxMatch');
		openCards[1].classList.add('boxMatch');
	}else {
		openCards[0].classList.remove('boxOpen');
		openCards[1].classList.remove('boxOpen');
	}
	openCards = [];

	if(document.querySelectorAll('.boxMatch') && document.querySelectorAll('.boxMatch').length === emojis.length){
		alert('Você venceu!');
		window.location.reload();
	};
};