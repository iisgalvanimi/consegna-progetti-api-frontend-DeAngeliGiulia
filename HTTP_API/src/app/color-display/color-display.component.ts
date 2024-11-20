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

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const colorName = params.get('name')!;
      this.fetchCardData(colorName);
    });
  }

  fetchCardData(colorName: string): void {
    this.loading = true;
    const url = `https://www.colourlovers.com/api/color/{colorName}`;
    this.http.get(url).subscribe(
      (data) => {
        this.colorData = data;
        this.loading = false;
      },
      (error) => {
        console.error('Errore nel recupero del colore:', error);
        this.loading = false;
      }
    );
  }
}