import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-color-display',
  templateUrl: './color-display.component.html',
  styleUrls: ['./color-display.component.css'],
})
export class ColorDisplayComponent implements OnInit {
  colorData: any;
  loading = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const hexCode = params.get('hexCode')!;
      this.fetchColorDetails(hexCode);
    });
  }

  fetchColorDetails(hexCode: string): void {
    this.loading = true;
    const url = `https://www.colourlovers.com/api/color/${hexCode}?format=json`;

    console.log(url)

    this.http.get<any>(url).subscribe(
      (data) => {
        console.log(data)
        this.colorData = data[0]; // L'API restituisce un array con un singolo colore
        this.loading = false;
      },
      (error) => {
        console.error('Errore nel caricamento del colore:', error);
        this.loading = false;
      }
    );
  }
}

