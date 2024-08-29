// app.component.ts
import { Component } from '@angular/core';
import { ReportService } from './services/report.service'; // Ruta actualizada

@Component({
  selector: 'app-root',
  template: `<button (click)="downloadReport()">Descargar Reporte</button>`,
})
export class AppComponent {
  constructor(private reportService: ReportService) {}

  downloadReport() {
    this.reportService.downloadReport().subscribe({
      next: (response: Blob) => {
        const url = window.URL.createObjectURL(response);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'reporte.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        console.error('Error descargando el reporte', error);
      },
    });
  }
}
