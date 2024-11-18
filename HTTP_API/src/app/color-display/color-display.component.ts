import { Component, OnInit } from '@angular/core';
import { ColorService } from '../colours.service';

@Component({
  selector: 'app-color-display',
  templateUrl: './color-display.component.html',
  styleUrls: ['./color-display.component.css']
})
export class ColorDisplayComponent implements OnInit {
  colors: any[] = [];  // Array che conterrà i colori ricevuti dall'API
  errorMessage: string = '';  // Messaggio di errore in caso di problemi

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.colorService.getColors().subscribe(
      data => {
        this.colors = data;  // Assegniamo i colori ricevuti all'array
      },
      error => {
        this.errorMessage = 'Errore nel caricamento dei colori';
        console.error(error);  // Log dell'errore in console per il debug
      }
    );
  }
}
