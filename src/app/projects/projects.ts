import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly tools = [
    {
      src: 'assets/tools/v2/tool-0.png',
      alt: 'Adobe Photoshop',
      className: 'is-photoshop',
    },
    {
      src: 'assets/tools/v2/tool-1.png',
      alt: 'Adobe Illustrator',
      className: 'is-illustrator',
    },
    {
      src: 'assets/tools/v2/tool-2.png',
      alt: 'Adobe Premiere Pro',
      className: 'is-premiere',
    },
    {
      src: 'assets/tools/v2/tool-3.png',
      alt: 'CapCut',
      className: 'is-capcut',
    },
    {
      src: 'assets/tools/v2/tool-4.png',
      alt: 'Canva',
      className: 'is-canva',
    },
    {
      src: 'assets/tools/v2/tool-5.png',
      alt: 'Figma',
      className: 'is-figma',
    },
  ];

  readonly projects = [
    {
      image: 'assets/figma-home/project-imobiliario.png',
      title: 'Rede Social | Imobiliário',
      subtitle: 'Aluguel | Venda | Gestão de Condomínio',
      routeProject: 'imobiliaria',
    },
    {
      image: 'assets/figma-home/project-construtora.png',
      title: 'Rede Social | Construtora',
      subtitle: 'Plantas | Decorados | Estilo de Vida',
      routeProject: 'construtora',
    },
    {
      image: 'assets/figma-home/project-alimenticio.png',
      title: 'Rede Social | Alimentício',
      subtitle: 'Franqueados | Fast-Food | Delivery',
      routeProject: 'alimenticio',
    },
    {
      image: 'assets/figma-home/project-educacional.png',
      title: 'Rede Social | Educacional',
      subtitle: 'Matrículas | Vestibulares | Concursos',
    },
    {
      image: 'assets/figma-home/project-entretenimento.png',
      title: 'Rede Social | Entretenimento',
      subtitle: 'Ingressos | Agenda semanal | Shows | Site',
    },
    {
      image: 'assets/figma-home/project-vestuario.png',
      title: 'Rede Social | Vestuário',
      subtitle: 'Roupas Masculinas | Dia dos Pais | Promoções',
      routeProject: 'vestuario',
    },
  ];
}
