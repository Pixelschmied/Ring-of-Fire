import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartscreenComponent } from './startscreen/startscreen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartscreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ring-of-Fire';
}
