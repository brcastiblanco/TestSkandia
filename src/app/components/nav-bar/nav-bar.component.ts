import { Component, ViewEncapsulation } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { imgDefaultService } from '../../core/services/img-default.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, NavMenuComponent, LazyLoadImageModule, MatButtonModule, MatTooltipModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  public defaultImage: string
  public errorImage: string
  public logo: string = 'assets/logo.svg';
  public textLogo: string = 'Plan Financiero Digital - FPX'
  public isOpen: boolean = false;
  public listOptions: any[]

  constructor(private _imgDefaultService: imgDefaultService) {
    this.defaultImage = _imgDefaultService.defaultImage
    this.errorImage = _imgDefaultService.errorImage
    this.listOptions = [
      { id: 'happy', icon: 'assets/happy.svg', title: 'Tu Financial Planner', alt: "Icon face happy" },
      { id: 'hand', icon: 'assets/hand-cash.svg', title: 'Aportes', alt: "Icon hand with cash" },
      { id: 'help', icon: 'assets/help.svg', title: 'Preguntas frecuentes', alt: "Icon help user" }
    ]
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
