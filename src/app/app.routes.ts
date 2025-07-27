import { Routes } from '@angular/router';
import { Notes } from './component/notes/notes'; // 👈 importa el componente correctamente

export const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  { path: 'notes', loadComponent: () => import('./component/notes/notes').then(m => m.Notes) }
];
