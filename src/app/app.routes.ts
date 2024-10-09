import { Routes } from '@angular/router';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';

export const routes: Routes = [
    { path: '', component: StartscreenComponent},
    { path: 'game', component: GameComponent},
    { path: 'player', component: PlayerComponent}
];
