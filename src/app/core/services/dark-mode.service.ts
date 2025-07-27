import { Injectable, signal } from '@angular/core';

export type Theme = typeof THEMES[keyof typeof THEMES];

export const THEMES = {
  LIGHT: 'emerald',
  DARK: 'synthwave',
} as const;

@Injectable({ providedIn: 'root' })
export class DarkModeService {
  private _theme = signal<Theme>(THEMES.LIGHT);
  readonly theme = this._theme.asReadonly();

  constructor() {
    const stored = localStorage.getItem('theme') as Theme | null;

    if (this.isValidTheme(stored)) {
      this.setTheme(stored);
    } else {
      this.setTheme(this.getSystemTheme());
      this.listenToSystemChanges();
    }
  }

  toggleTheme(): void {
    const next: Theme =
      this._theme() === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    this.setTheme(next);
  }

  setTheme(theme: Theme): void {
    this._theme.set(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  isDark(): boolean {
    return this._theme() === THEMES.DARK;
  }

  private getSystemTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEMES.DARK
      : THEMES.LIGHT;
  }

  private listenToSystemChanges(): void {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e: MediaQueryListEvent) => {
      this.setTheme(e.matches ? THEMES.DARK : THEMES.LIGHT);
    });
  }

  private isValidTheme(theme: unknown): theme is Theme {
    return theme === THEMES.LIGHT || theme === THEMES.DARK;
  }
}
