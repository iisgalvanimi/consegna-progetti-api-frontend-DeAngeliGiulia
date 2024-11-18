import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { ColorDisplayComponent } from './color-display/color-display.component';  // Importa la componente

@NgModule({
  declarations: [
    AppComponent,
    ColorDisplayComponent  // Aggiungi ColorDisplayComponent alle dichiarazioni
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Aggiungi HttpClientModule agli import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
