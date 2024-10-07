import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent implements OnInit {
  drawCardAnimation = false;
  game!: Game;
  currentCard: string | undefined = '';

  ngOnInit():void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game)
  }

  drawCard() {
    this.currentCard = this.game.stack.pop();
    this.drawCardAnimation = true;
    console.log(this.currentCard)
  }

}
