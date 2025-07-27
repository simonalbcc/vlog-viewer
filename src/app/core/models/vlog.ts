import { SafeResourceUrl } from '@angular/platform-browser';

export interface Vlog {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  videoUrl: SafeResourceUrl;
}
