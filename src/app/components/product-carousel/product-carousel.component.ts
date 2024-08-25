import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../models/card';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { imgDefaultService } from '../../core/services/img-default.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule, LazyLoadImageModule, MatCheckboxModule, CurrencyPipe, UpperCasePipe],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.scss'
})
export class ProductCarouselComponent {
  public defaultImage: string
  public errorImage: string
  public iconArrow: string = 'assets/arrow.svg'
  public cards?: Card[];
  public customOptions?: OwlOptions

  public youCurrent: string = 'Ya cuentas con:'
  public youHave: string = 'Tu ahorro actual:'

  constructor(private _route: ActivatedRoute, private _imgDefaultService: imgDefaultService) {
    this.defaultImage = _imgDefaultService.defaultImage
    this.errorImage = _imgDefaultService.errorImage
  }

  ngOnInit() {
    this.customOptions = {
      loop: false,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      },
      navText: [
        `<img src="${this.iconArrow}" alt="Icon arrow left" class="w-4 h-4" />`,
        `<img src="${this.iconArrow}" alt="Icon arrow right" class="rotate-180 w-4 h-4" />`]
    };
    //
    this._route.data.subscribe((resolvedCards: any) => {
      this.cards = resolvedCards.card.listCard.map((card: any) => ({
        ...card,
        icon: this.getIconForProduct(card.nameProduct),
        recommendation: this.getRecommendationForProduct(card.nameProduct),
        color: this.getColorForProduct(card.nameProduct)
      }))
    })
    //
    const newItem = {
      nameProduct: 'BANNER',
      numberProduct: 'assets/banner.png',
      balanceProduct: '',
      detaildProduct: 'explora ahora',
      icon: '',
      recommendation: '',
      color: 'yellow'
    };
    if (this.cards) this.cards.push(newItem);
  }

  getIconForProduct(productName: string): string {
    const icons: { [key: string]: string } = {
      "MFUND": "assets/happy.svg",
      "CREA": "assets/hand-heart.svg",
      "FICS": "assets/award.svg",
      "BOLT": "assets/happy.svg"
    };
    return icons[productName] || 'default-icon';
  }

  getRecommendationForProduct(productName: string): string {
    const recommendations: { [key: string]: string } = {
      "MFUND": "Te recomendamos aportar $388.000 mensuales para lograrlo en diciembre del 2022.",
      "CREA": "Úsalos desde el 16/nov/27 que finaliza la vigencia de tu póliza",
      "FICS": "Te recomendamos aportar $200.000 mensuales para lograrlo en noviembre del 2022.",
      "BOLT": "Te recomendamos aportar $50.000 mensuales para lograrlo en enero del 2023."
    };
    return recommendations[productName] || 'Recomendación predeterminada';
  }

  getColorForProduct(productName: string): string {
    const recommendations: { [key: string]: string } = {
      "MFUND": "green",
      "CREA": "blue-light",
      "FICS": "blue",
      "BOLT": "orange"
    };
    return recommendations[productName] || 'Recomendación predeterminada';
  }
}
