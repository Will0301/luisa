import { Routes } from '@angular/router';
import { Home } from './home';
import { Projetos } from './projetos';
import { Servicos } from './servicos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projetos', component: Projetos },
  { path: 'servicos', component: Servicos },
  { path: '**', redirectTo: '' },
];
