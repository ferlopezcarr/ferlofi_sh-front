import { Injectable } from '@angular/core';
import { Theme } from '../models/theme';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ThemeService {
  private theme$ = new BehaviorSubject<Theme>(Theme.dark);

  constructor() {}

  public getTheme$(): Observable<Theme> {
    return this.theme$.asObservable();
  }

  public changeTheme(theme: Theme): void {
    if (!theme) {
      return;
    }
    this.theme$.next(theme);
  }
}
