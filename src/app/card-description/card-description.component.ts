import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-description',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-description.component.html',
  styleUrl: './card-description.component.scss'
})

export class CardDescriptionComponent implements OnInit, OnChanges{
  cardAction = [
    { title: '2 - YOU', description: 'Nominate someone to drink.' },
    { title: '3 - ME', description: 'You drink.' },
    { title: '4 - FOCUS', description: 'Have a staring contest with another player. The loser drinks.' },
    { title: '5 - THUMB MASTER', description: 'Place your thumb on the edge of the table at any given time. Everyone must follow. The last player to do so drinks.' },
    { title: '6 - SINGLE', description: 'Drink if you\'re single.' },
    { title: '7 - HEAVEN', description: 'Point your finger to the sky at any given time, everyone must follow. The last player to do so drinks. You can continue this until the next 7 is drawn.' },
    { title: '8 - MATE', description: 'Pick a mate. Every time you drink, they have to, and vice versa.' },
    { title: '9 - RHYME', description: 'Say any word, and the player clockwise must come up with a word rhyming with it. This continues around the circle until a player fails. They then have to drink.' },
    { title: '10 - CATEGORIES', description: 'Choose a topic that each player, in turn, must relate a word to. This continues around the circle until a player fails. They then have to drink.' },
    { title: 'JACK - RULE', description: 'Make a rule for all to follow until the next Jack is drawn. Any who fail to comply must drink.' },
    { title: 'QUEEN - QUESTION MASTER', description: 'Try to get players to answer your questions. If they do so, they drink. If they respond "Fuck you Question Master", you drink. You can continue this until the next Queen is drawn.' },
    { title: 'KING - POUR', description: 'Pour some of your drink into the Cup unless you draw the 4th and final King.' },
    { title: 'ACE - WATERFALL', description: 'The cardholder starts to drink, and the players must drink continuously until the cardholder stops.' }
  ];

  title: string = '';
  description: string = 'Please add at least 2 players before you start the game.';
  @Input() card!: string;

  ngOnInit(): void {
    console.log(this.card)
  }

  ngOnChanges(): void {
    if (this.card) {
      let resolvedCardIndex = this.resolveIndex(this.card.split(' ')[0])
      this.title = this.cardAction[resolvedCardIndex].title;
      this.description = this.cardAction[resolvedCardIndex].description;
    }
  }

  resolveIndex(card: string) {
    if (card == 'Ace') {
      return 12;
    }
    if (card == 'King') {
      return 11;
    }
    if (card == 'Queen') {
      return 10;
    }
    if (card == 'Jack') {
      return 9;
    }
    else {
      return +card -2;
    }
  }
}
