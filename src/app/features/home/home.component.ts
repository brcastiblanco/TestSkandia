import { Component } from '@angular/core';
import { ObjectiveCardComponent } from '../../components/objective-card/objective-card.component';
import { ProductCarouselComponent } from '../../components/product-carousel/product-carousel.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { imgDefaultService } from '../../core/services/img-default.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ObjectiveCardComponent, ProductCarouselComponent, LazyLoadImageModule, RouterLink, UpperCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public cards: any;
  public defaultImage: string
  public errorImage: string

  public iconHome: string = 'assets/home.svg'
  public goHome: string = 'Ir al inicio'
  public objectiveAdd: string = '¡Tu objetivo ha sido agregado exitosamente!'
  public sendEmail: string = '¡Te  hemos enviado un correo con la notificación!'

  public money: string = '6.000.000'
  public objective: string = 'Conocer mi sobrino'
  public nextGoal: string = `¡Vamos por esos <span class="text-orange-600">$${this.money}</span> para <span class="text-orange-600">${this.objective}</span>!`
  public moreProducts: string = '¡A través de tus productos y nuestros rendimientos podremos lograrlo!'
  public addProducts: string = 'Asocia tus productos o adquiere uno nuevo.'
  public iconQuestion: string = 'assets/question-green.svg'
  public textButton: string = 'asociar a objetivo'

  constructor(private _route: ActivatedRoute, private _imgDefaultService: imgDefaultService) {
    this.defaultImage = _imgDefaultService.defaultImage
    this.errorImage = _imgDefaultService.errorImage
  }

  ngOnInit() {
    this._route.data.subscribe((resolvedCards: any) => {
      this.cards = resolvedCards.card.listCard
    })
  }
}
