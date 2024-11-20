import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importa il modulo di routing
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // Per richieste HTTP
import { ColorDisplayComponent } from './color-display/color-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorDisplayComponent, // Aggiungi i tuoi componenti qui
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Assicurati che il routing sia incluso
    HttpClientModule, // Per effettuare richieste HTTP
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
