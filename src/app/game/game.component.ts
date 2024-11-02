import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { CardDescriptionComponent } from '../card-description/card-description.component';
import { MatTooltip } from '@angular/material/tooltip';
import { MatCardContent, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    MatTooltip,
    MatCardTitle,
    MatCardContent,
    PlayerComponent,
    NgFor,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    CardDescriptionComponent,
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  drawCardAnimation = false;
  game!: Game;
  currentCard: string = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  drawCard() {
    if (this.game.players.length <= 1) {
      alert("Please add at least 2 players before you start the game.")
    } else {
      if (!this.drawCardAnimation) {
        let poppedCard = this.game.stack.pop();
        if (poppedCard !== undefined) {
          this.currentCard = poppedCard;
          this.drawCardAnimation = true;
          this.game.currentPlayer++;
          this.game.currentPlayer =
            this.game.currentPlayer % this.game.players.length;

          setTimeout(() => {
            this.drawCardAnimation = false;
            this.game.playedCards.push(this.currentCard);
          }, 1000);
        }
      }
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name) => {
      if (name && name.length >= 0) {
        this.game.players.push(name);
      }
      
    });
  }
}
