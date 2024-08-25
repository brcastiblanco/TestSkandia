import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CardService } from '../services/card.service';

@Injectable({
  providedIn: 'root'
})

export class CardResolver implements Resolve<any> {
  constructor(private _cardService: CardService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._cardService.getCards().pipe(
      catchError(error => {
        console.error('Error en el resolver', error);
        return of(null);
      })
    );
  }
}
