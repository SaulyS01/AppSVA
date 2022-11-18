import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  title: string | any = '';
  url: string | any = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.verificarTitle();
  }

  changeTitle(title: string) {
    this.title = title;
  }

  verificarTitle() {
    this.url = document.location.href;
    console.log(this.url);

    if (this.url.includes('planes')) {
      this.title = 'Planes';
    }
    if (this.url.includes('dashboard')) {
      this.title = 'Inicio';
    }
  }
}
