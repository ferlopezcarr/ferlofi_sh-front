import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Theme } from '../../models/theme';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss'],
})
export class ThemeButtonComponent {
  public theme!: Theme;
  public readonly Theme = Theme;

  constructor(private themeService: ThemeService) {
    this.themeService
      .getTheme$()
      .pipe(takeUntilDestroyed())
      .subscribe((theme) => {
        if (!theme) {
          return;
        }
        this.theme = theme;
      });
  }

  public changeTheme(theme: Theme) {
    this.themeService.changeTheme(theme);
  }
}
