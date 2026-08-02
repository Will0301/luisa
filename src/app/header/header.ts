import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = false;

  readonly navItems = [
    {
      label: 'Sobre mim',
      href: '/#about',
      image: '/assets/AssetsHeader/header4.png',
      alt: 'Retrato para a seção Sobre mim',
    },
    {
      label: 'Projetos',
      href: '/#projects',
      image: '/assets/AssetsHeader/header3.png',
      alt: 'Ícone para a seção Projetos',
    },
    {
      label: 'Serviços',
      href: '/#services',
      image: '/assets/AssetsHeader/header2.png',
      alt: 'Imagem para a seção Serviços',
    },
    {
      label: 'Currículo',
      href: '/#resume',
      image: '/assets/AssetsHeader/header1.png',
      alt: 'Imagem para a seção Currículo',
    },
    {
      label: 'Contato',
      href: '/#contact',
      image: '/assets/AssetsHeader/header5.png',
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
