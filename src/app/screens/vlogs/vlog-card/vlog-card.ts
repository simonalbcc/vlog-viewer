import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Vlog } from '../../../core/models/vlog';

@Component({
  selector: 'vlog-card',
  standalone: true,
  templateUrl: './vlog-card.html',
  styleUrls: ['./vlog-card.css']
})
export class VlogCard {
  @Input() vlog!: Vlog;

  watchButton = 'Regarder';

  constructor(private router: Router) {}

  goToDetails() {
    this.router.navigate(['/vlog', this.vlog.id], {
      state: { vlog: this.vlog }
    });
  }
}
