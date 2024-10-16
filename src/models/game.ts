export class Game {
    public players: string[] = ['Erwin','Klaus','Peter'];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            if(i == 1) {
                this.stack.push('Ace of Clubs');
                this.stack.push('Ace of Spades');
                this.stack.push('Ace of Hearts');
                this.stack.push('Ace of Diamonds');
            }else if(i > 1 && i < 11) {
                this.stack.push(i + ' of Clubs');
                this.stack.push(i + ' of Spades');
                this.stack.push(i + ' of Hearts');
                this.stack.push(i + ' of Diamonds');
            }else if (i == 11) {
                this.stack.push('Jack of Clubs');
                this.stack.push('Jack of Spades');
                this.stack.push('Jack of Hearts');
                this.stack.push('Jack of Diamonds');
            }else if (i == 12) {
                this.stack.push('Queen of Clubs');
                this.stack.push('Queen of Spades');
                this.stack.push('Queen of Hearts');
                this.stack.push('Queen of Diamonds');
            }else if (i == 13) {
                this.stack.push('King of Clubs');
                this.stack.push('King of Spades');
                this.stack.push('King of Hearts');
                this.stack.push('King of Diamonds');
            }
        }
        shuffle(this.stack)
    }
}

function shuffle(array: string[]) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }