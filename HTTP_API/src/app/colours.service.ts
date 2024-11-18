import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private apiUrl = 'http://www.colourlovers.com/api/colors';

  constructor(private http: HttpClient) { }

  // Metodo per ottenere i colori dall'API
  getColors(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
