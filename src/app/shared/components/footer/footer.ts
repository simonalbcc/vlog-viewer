
import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vlog-viewer-footer',
  standalone: true,
  templateUrl: './footer.html',
  imports: [
    NgClass
],
  styleUrl: './footer.css'
})
export class Footer implements OnInit {
  brandName = 'GHouseTV';
  brandSlogan = 'des roses & des glaïeuls.';
  instagramAria = 'instagram profile';

  navTitle = 'Navigation';
  navAccueil = 'Accueil';
  navVlogs = 'Vlogs';

  currentYear = new Date().getFullYear();
  copyright = `© ${this.currentYear} GHouseTV. tous droits réservés.`;

  quotes = [
    { text: 'Des roses et des glaïeuls 🌹', author: 'GHouse' },
    { text: 'Du vin la journée et du rhum pour le soir 🏴‍☠️', author: 'GHouse' },
    { text: 'De l\' eau et des cailloux', author: 'GHouse' }
  ];

  currentQuoteIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.nextQuote();
    }, 5000);
  }

  nextQuote() {
    this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
  }

  showQuote(index: number) {
    this.currentQuoteIndex = index;
    clearInterval(this.intervalId);
    this.startCarousel();
  }
}
