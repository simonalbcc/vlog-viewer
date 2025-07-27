import { Component } from '@angular/core';
import { WelcomeHero } from './welcome-hero/welcome-hero';
import { WelcomeVlog } from './welcome-vlog/welcome-vlog';

@Component({
  selector: 'vlog-viewer-welcome',
  imports: [
    WelcomeHero,
    WelcomeVlog
  ],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class Welcome {

}
