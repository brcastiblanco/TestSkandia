import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { imgDefaultService } from '../../core/services/img-default.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, LazyLoadImageModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  @Input() isOpen?: boolean;

  public defaultImage: string
  public errorImage: string
  public menuItems: any[]

  constructor(private _imgDefaultService: imgDefaultService) {
    this.defaultImage = _imgDefaultService.defaultImage
    this.errorImage = _imgDefaultService.errorImage
    this.menuItems = [
      { icon: 'assets/home-1.svg', title: 'Inicio', route: "/home", alt: "Icon home", desk: true},
      { icon: 'assets/paper.svg', title: 'Contratos', route: "/agreements", alt: "Icon paper", desk: true},
      { icon: 'assets/tool.svg', title: 'Acciones', route: "/actions", alt: "Icon tool", desk: true},
      { icon: 'assets/star1.svg', title: 'Objetivos', route: "/goals", alt: "Icon star", desk: true},
      { icon: 'assets/money.svg', title: 'Herramientas', route: "/tools", alt: "Icon money", desk: true},
      { icon: 'assets/talk.svg', title: 'Servicio al cliente', route: "/customer-service" , alt: "Icon talk", desk: true},
      { icon: 'assets/happy.svg', title: 'Tu Financial Planner', route: "/home", alt: "Icon face happy", desk: false},
      { icon: 'assets/hand-cash.svg', title: 'Aportes', route: "/home", alt: "Icon hand with cash", desk: false},
      { icon: 'assets/help.svg', title: 'Preguntas frecuentes', route: "/home", alt: "Icon help", desk: false}
    ];
  }
}
