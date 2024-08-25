import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class imgDefaultService {
    public defaultImage: string = 'assets/search-img.png';
    public errorImage: string = 'assets/not-found-img.png';
}