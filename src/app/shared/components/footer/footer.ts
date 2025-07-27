import { Component } from '@angular/core';

@Component({
  selector: 'vlog-viewer-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  brandName = 'GHouseTV';
  brandSlogan = 'des roses & des glaïeuls.';
  instagramAria = 'instagram profile';

  navTitle = 'Navigation';
  navAccueil = 'Accueil';
  navVlogs = 'Vlogs';

  currentYear = new Date().getFullYear();
  copyright = `© ${this.currentYear} GHouseTV. tous droits réservés.`;

}
