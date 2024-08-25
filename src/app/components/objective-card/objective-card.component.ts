import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { imgDefaultService } from '../../core/services/img-default.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-objective-card',
  standalone: true,
  imports: [RouterLink, LazyLoadImageModule],
  templateUrl: './objective-card.component.html',
  styleUrl: './objective-card.component.scss'
})
export class ObjectiveCardComponent {
  public defaultImage: string
  public errorImage: string
  public iconCheck: string = 'assets/check.svg'
  public iconStar: string = 'assets/star.svg'
  public objective: string = 'Conocer mi sobrino'
  public category: string = 'Categoría: Bienestar'
  public reviewObjective: string = 'Revisar objectivo'
  public date: string = 'En esta fecha:'
  public dateObjective: string = 'Diciembre/2022'
  public youWill: string = 'Lograras:'
  public moneyWill: string = '$6.000.000'
  public youAlready: string = 'Ya cuentas con:'
  public moneyAlready: string = '$0'
  public associateProducts: string = '¡Asocia productos para monitorear tu progreso!'

  constructor(private _imgDefaultService: imgDefaultService) {
    this.defaultImage = _imgDefaultService.defaultImage
    this.errorImage = _imgDefaultService.errorImage
  }
}
