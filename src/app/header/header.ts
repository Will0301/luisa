import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = false;

  readonly navItems = [
    {
      label: 'Sobre mim',
      route: '/',
      fragment: 'about',
      image: 'assets/AssetsHeader/header4.png',
      alt: 'Retrato para a seção Sobre mim',
    },
    {
      label: 'Projetos',
      route: '/',
      fragment: 'projects',
      image: 'assets/AssetsHeader/header3.png',
      alt: 'Ícone para a seção Projetos',
    },
    {
      label: 'Serviços',
      route: '/',
      fragment: 'services',
      image: 'assets/AssetsHeader/header2.png',
      alt: 'Imagem para a seção Serviços',
    },
    {
      label: 'Currículo',
      route: '/',
      fragment: 'resume',
      image: 'assets/AssetsHeader/header1.png',
      alt: 'Imagem para a seção Currículo',
    },
    {
      label: 'Contato',
      route: '/',
      fragment: 'contact',
      image: 'assets/AssetsHeader/header5.png',
      alt: 'Imagem para a seção Contato',
    },
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
