import {
  Component,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],

  encapsulation: ViewEncapsulation.None,
})
export class NavComponent implements OnInit {
  navbarOpen = false;
  public clicked = false;
  _element: any;

  constructor() {}

  ngOnInit(): void {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  public onClick(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicked = true;
  }

  @HostListener(`document:click`, [`event`])
  private clickedOutside(event): void {
    if (this.clicked) {
      this._element.nativeElement
        .querySelector(`.dropdown-menu`)
        .classList.toggle(`show`);
    }
  }
}
