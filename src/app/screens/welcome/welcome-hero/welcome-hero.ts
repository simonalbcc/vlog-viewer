import { Component } from '@angular/core';

@Component({
  selector: 'vlog-viewer-welcome-hero',
  standalone: true,
  templateUrl: './welcome-hero.html',
  styleUrl: './welcome-hero.css'
})
export class WelcomeHero {
  title = 'Bienvenue sur';
  titleHighlight = 'GHouseTV';
  primaryButton = 'Voir le dernier épisode';
}
