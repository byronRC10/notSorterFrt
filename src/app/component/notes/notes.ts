import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notes',
  standalone: true, 
  imports: [CommonModule],
  template: `
    <h2>📘 Lista de Notas</h2>
    <ul *ngIf="notes.length > 0; else noNotas">
      <li *ngFor="let note of notes">
        <strong>{{ note.title }}</strong>: {{ note.description }}
      </li>
    </ul>
    <ng-template #noNotas><p>Cargando o sin datos.</p></ng-template>
  `
})
export class Notes {
 notes: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get<any[]>('https://localhost:7107/api/Notes')
      .subscribe({
        next: data => this.notes = data,
        error: err => console.error('Error al obtener notas:', err)
      });
  }
}
