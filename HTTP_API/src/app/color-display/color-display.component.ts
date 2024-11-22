import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-color-display',
  templateUrl: './color-display.component.html',
  styleUrls: ['./color-display.component.css']
})
export class ColorDisplayComponent implements OnInit {
  colorData: any;
  loading = false;
  errorMessage: string = ''; // Aggiungi un messaggio di errore

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const hexCode = params.get('hexCode')!;
      this.fetchColorDetails(hexCode);
    });
  }

  fetchColorDetails(hexCode: string): void {
    this.loading = true;
    //const apiUrl = `https://www.colourlovers.com/api/color/${hexCode}?format=json`;

    // Se usi un proxy CORS, puoi modificare l'URL qui:
     const apiUrl = `https://cors-anywhere.herokuapp.com/https://www.colourlovers.com/api/color/${hexCode}?format=json`;

    console.log(apiUrl);

    this.http.get<any>(apiUrl).subscribe(
      (data) => {
        console.log(data);
        this.colorData = data[0]; // L'API restituisce un array con un singolo colore
        this.loading = false;
      },
      (error) => {
        console.error('Errore nel caricamento del colore:', error);
        this.errorMessage = 'Si è verificato un errore nel caricamento dei dati. Riprova più tardi.'; // Mostra un messaggio di errore utente
        this.loading = false;
      }
    );
  }
}
