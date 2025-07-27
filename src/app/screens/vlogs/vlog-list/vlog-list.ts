import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Vlog } from '../../../core/models/vlog';
import { VlogCard } from '../vlog-card/vlog-card';

@Component({
  selector: 'vlog-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, VlogCard],
  templateUrl: './vlog-list.html',
  styleUrls: ['./vlog-list.css']
})
export class VlogList implements OnInit {
  searchQuery: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 9;
  filteredVlogs: Vlog[] = [];
  visiblePages: number[] = [];

  private sanitizer = inject(DomSanitizer);

  TEXTS = {
    title: 'Nos vlogs',
    subtitle: 'Découvrez nos dernières aventures',
    searchPlaceholder: 'Rechercher un vlog...',
    noVlogTitle: 'Aucun vlog trouvé',
    noVlogSubtitle: 'Essayez de modifier votre recherche',
    resetFilters: 'Réinitialiser',
    previous: 'Précédent',
    next: 'Suivant'
  };

  vlogs: Vlog[] = [
    {
      id: '1',
      title: 'Salou 1',
      description: 'Nos premières vacances après notre rétho',
      thumbnail: '/assets/images/salou2021.jpg',
      duration: '36:53',
      videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube-nocookie.com/embed/59LLBj_YJkQ?rel=0&autoplay=1`
      ),
    },
    {
      id: '2',
      title: 'Salou 2023',
      description: 'Le retour à Salou',
      thumbnail: 'assets/images/salou2023.jpg',
      duration: '1:06:48',
      videoUrl: 'https://www.youtube.com/embed/59LLBj_YJkQ',
    },
    {
      id: '3',
      title: 'Croatie 2024',
      description: 'Croatie',
      thumbnail: 'assets/images/croatie2024.jpg',
      duration: '1:06:48',
      videoUrl: 'https://drive.google.com/file/d/1lI_seeQZcHAKeyG3cL4looXA7yzGKcgu/view?usp=drive_link',
    },
  ];

  get totalPages(): number {
    return Math.ceil(this.filteredVlogs.length / this.itemsPerPage);
  }

  ngOnInit(): void {
    this.filterVlogs();
    this.updateVisiblePages();
  }

  filterVlogs(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredVlogs = this.vlogs.filter(vlog =>
      vlog.title.toLowerCase().includes(query) ||
      vlog.description.toLowerCase().includes(query)
    );
    this.currentPage = 1;
    this.updateVisiblePages();
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.filterVlogs();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateVisiblePages();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateVisiblePages();
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updateVisiblePages();
  }

  updateVisiblePages(): void {
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(this.totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    this.visiblePages = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
}
