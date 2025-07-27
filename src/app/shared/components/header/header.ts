import { Component, inject } from '@angular/core';
import { DarkModeService } from '../../../core/services/dark-mode.service';

@Component({
  selector: 'vlog-viewer-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected darkModeService: DarkModeService = inject(DarkModeService);

  siteTitle = 'GamingHouseTV';
  navHome = 'Accueil';
  navVlogs = 'Vlogs';
  lightModeTitle = 'Mode clair';
  darkModeTitle = 'Mode sombre';

  toggleTheme(): void {
    this.darkModeService.toggleTheme();
  }
}
