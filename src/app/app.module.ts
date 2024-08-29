import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    // otros componentes
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Asegúrate de que HttpClientModule esté importado
  ],
  providers: [], // No es necesario añadir ReportService aquí debido a providedIn: 'root'
  bootstrap: [AppComponent]
})
export class AppModule { }
