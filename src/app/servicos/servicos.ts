import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import {Contact} from '../contact/contact';

@Component({
  selector: 'app-servicos',
  imports: [Header, Footer, RouterLink, Contact],
  templateUrl: './servicos.html',
  styleUrl: './servicos.css',
})
export class Servicos {}
