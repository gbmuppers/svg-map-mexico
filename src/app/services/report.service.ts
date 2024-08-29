// report.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  // URL del reporte
  private reportUrl = 'http://vmssqld04:9080/Reports_REPDEV/report/Inventarios/demo1';

  constructor(private http: HttpClient) {}

  // Método para descargar el reporte
  downloadReport(): Observable<Blob> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('coneval\\spnetdev: WrE452pp'), // Reemplaza 'usuario:contraseña' con tus credenciales reales
      'Content-Type': 'application/json',
    });

    return this.http.get(this.reportUrl, { headers, responseType: 'blob' });
  }
}

