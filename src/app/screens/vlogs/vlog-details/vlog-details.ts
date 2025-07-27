import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Vlog } from '../../../core/models/vlog';
import { SafeUrlPipe } from '../../../shared/pipes/safe-url.pipe';

@Component({
  selector: 'vlog-details',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './vlog-details.html',
})
export class VlogDetails implements OnInit {
  vlog: Vlog | null = null;

  private router: Router = inject(Router);

  ngOnInit(): void {
    const state = history.state as { vlog?: Vlog };
    if (state?.vlog) {
      this.vlog = state.vlog;
    }
  }

  goBack(): void {
    this.router.navigate(['/vlogs']);
  }
}
