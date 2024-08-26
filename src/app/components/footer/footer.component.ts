import { Component } from '@angular/core';
import { imgDefaultService } from '../../core/services/img-default.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LazyLoadImageModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public defaultImage: string
  public errorImage: string
  public logo: string = 'assets/logo.svg';
  public copyright: string = '© 2019 Skandia'
  public listContact: any[]
  public listTermsAndConditions: any[]
  public listNetworks: any[]

  constructor(private _imgDefaultService: imgDefaultService) {
    this.defaultImage = _imgDefaultService.defaultImage
    this.errorImage = _imgDefaultService.errorImage
    this.listContact = [
      { title: 'PBX: <strong class="text-green">658 4000</strong> / <strong class="text-green">484 1300</strong>' },
      { title: 'Línea nacional <strong class="text-green">01 8000 517 526</strong>' },
      { title: 'Línea Corporativa 658 4123 ' },
      { title: 'Av. 19 # 109A - 30 ' },
      { title: 'Bogotá D.C., Colombia' },
      { title: 'Oficinas a nivel nacional' }
    ]
    this.listTermsAndConditions = [
      { title: 'Términos y Condiciones Canales de Servicio' },
      { title: 'Defensoría del Consumidor Financiero ' },
      { title: 'Protección de Datos ' },
      { title: 'Definiciones Generales – Auto declaración FATCA y CRS ' },
      { title: 'Recomendaciones de Seguridad ' },
      { title: 'Ley de Transparencia ' },
      { title: 'Mapa del sitio' }
    ]
    this.listNetworks = [
      { icon: 'assets/facebook.svg', alt: "Icon facebook" },
      { icon: 'assets/youtube.svg', alt: "Icon youtube" },
      { icon: 'assets/twitter.svg', alt: "Icon twitter" }
    ]
  }

}
