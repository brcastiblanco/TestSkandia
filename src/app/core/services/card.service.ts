import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CardService {
    private url: string

    constructor(
        private _http: HttpClient
    ) {
        this.url = 'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia'
    }

    getCards(): Observable<any> {
        return this._http.get<any>(`${this.url}/cards`)
    }
}