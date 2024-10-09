import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  drawCardAnimation = false;
  game!: Game;
  currentCard: string = '';

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  drawCard() {
    if (!this.drawCardAnimation) {
      let poppedCard = this.game.stack.pop();
      if (poppedCard !== undefined) {
        this.currentCard = poppedCard;
        this.drawCardAnimation = true;
        console.log(this.game.stack);
        console.log(this.game.playedCards);

        setTimeout(() => {
          this.drawCardAnimation = false;
          this.game.playedCards.push(this.currentCard);
        }, 1000);
      }
    }
  }
}
