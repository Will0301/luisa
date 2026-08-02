import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

type ProjectCase = {
  slug: string;
  brand: string;
  title: string;
  subtitle: string;
  preview: string;
  heroImages: string[];
  carouselImages: string[];
  tools: { src: string; alt: string }[];
};

type VisibleCarouselSlide = {
  image: string;
  logicalIndex: number;
  position: number;
};

@Component({
  selector: 'app-projetos-page',
  imports: [Header, Footer],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly phoneFrame = '/assets/pageofprojects/Cellphone.png';
  readonly visibleSlideOffsets = [-2, -1, 0, 1, 2];

  readonly projectCases: ProjectCase[] = [
    {
      slug: 'imobiliaria',
      brand: 'Freire Imóveis',
      title: 'Rede Social | Imobiliária',
      subtitle: 'Campanhas e carrosséis para imobiliária',
      preview: '/assets/pageofprojects/FREIRE/2 1.png',
      heroImages: [
        '/assets/pageofprojects/FREIRE/2 1.png',
        '/assets/pageofprojects/FREIRE/2,, 1.png',
        '/assets/pageofprojects/FREIRE/feed 3 1.png',
        '/assets/pageofprojects/FREIRE/75 1.png',
        '/assets/pageofprojects/FREIRE/118 1.png',
        '/assets/pageofprojects/FREIRE/vaga patrocinio freire 1.png',
        '/assets/pageofprojects/FREIRE/130 1.png',
        '/assets/pageofprojects/FREIRE/133 1.png',
        '/assets/pageofprojects/FREIRE/9, 1.png',
      ],
      carouselImages: [
        '/assets/pageofprojects/FREIRE/carrossel/11-03-26 1.png',
        '/assets/pageofprojects/FREIRE/carrossel/11-03-26 2.png',
        '/assets/pageofprojects/FREIRE/carrossel/11-03-26 3.png',
        '/assets/pageofprojects/FREIRE/carrossel/11-03-26 4.png',
        '/assets/pageofprojects/FREIRE/carrossel/11-03-26 5.png',
      ],
      tools: [
        { src: '/assets/tools/tool2.png', alt: 'Adobe Photoshop' },
        { src: '/assets/tools/tool3.png', alt: 'CapCut' },
      ],
    },
    {
      slug: 'construtora',
      brand: 'LVPAR',
      title: 'Rede Social | Construtora',
      subtitle: 'Materiais de lançamento e apresentação de planta',
      preview: '/assets/pageofprojects/LVPAR/174 1.png',
      heroImages: [
        '/assets/pageofprojects/LVPAR/174 1.png',
        '/assets/pageofprojects/LVPAR/183 1.png',
        '/assets/pageofprojects/LVPAR/186 1.png',
        '/assets/pageofprojects/LVPAR/191 1.png',
        '/assets/pageofprojects/LVPAR/197 1.png',
        '/assets/pageofprojects/LVPAR/199 1.png',
        '/assets/pageofprojects/LVPAR/202 1.png',
        '/assets/pageofprojects/LVPAR/203 1.png',
        '/assets/pageofprojects/LVPAR/211 1.png',
      ],
      carouselImages: [
        '/assets/pageofprojects/LVPAR/carrossel/10_06 1.png',
        '/assets/pageofprojects/LVPAR/carrossel/10_06 2.png',
        '/assets/pageofprojects/LVPAR/carrossel/10_06 3.png',
        '/assets/pageofprojects/LVPAR/carrossel/10_06 4.png',
        '/assets/pageofprojects/LVPAR/carrossel/10_06 5.png',
        '/assets/pageofprojects/LVPAR/carrossel/10_06 6.png',
      ],
      tools: [
        { src: '/assets/tools/tool2.png', alt: 'Adobe Photoshop' },
        { src: '/assets/tools/tool4.png', alt: 'Figma' },
      ],
    },
    {
      slug: 'alimenticio',
      brand: 'O Carrinho',
      title: 'Rede Social | Alimentício',
      subtitle: 'Campanhas promocionais e peças de cardápio',
      preview: '/assets/pageofprojects/OCARRINHO/43 1.png',
      heroImages: [
        '/assets/pageofprojects/OCARRINHO/43 1.png',
        '/assets/pageofprojects/OCARRINHO/58 1.png',
        '/assets/pageofprojects/OCARRINHO/69 1.png',
        '/assets/pageofprojects/OCARRINHO/72 1.png',
        '/assets/pageofprojects/OCARRINHO/79 1.png',
        '/assets/pageofprojects/OCARRINHO/80 1.png',
        '/assets/pageofprojects/OCARRINHO/121 1.png',
        '/assets/pageofprojects/OCARRINHO/FEED 1 1.png',
        '/assets/pageofprojects/OCARRINHO/FEED 2 1.png',
      ],
      carouselImages: [
        '/assets/pageofprojects/OCARRINHO/carrossel/carrossel ocarrinho 3 1.png',
        '/assets/pageofprojects/OCARRINHO/carrossel/carrossel ocarrinho 3 2.png',
        '/assets/pageofprojects/OCARRINHO/carrossel/carrossel ocarrinho 3 3.png',
        '/assets/pageofprojects/OCARRINHO/carrossel/carrossel ocarrinho 3 4.png',
        '/assets/pageofprojects/OCARRINHO/carrossel/carrossel ocarrinho 3 5.png',
      ],
      tools: [
        { src: '/assets/tools/tool2.png', alt: 'Adobe Photoshop' },
        { src: '/assets/tools/tool3.png', alt: 'CapCut' },
      ],
    },
    {
      slug: 'trirs',
      brand: 'TRIRS',
      title: 'Projeto | TRIRS',
      subtitle: 'Conteúdo visual com foco em lifestyle e ambiente',
      preview: '/assets/pageofprojects/TRIRS/image.jpg',
      heroImages: [
        '/assets/pageofprojects/TRIRS/image.jpg',
        '/assets/pageofprojects/TRIRS/image - cópia.jpg',
        '/assets/pageofprojects/TRIRS/image - cópia 2.jpg',
        '/assets/pageofprojects/TRIRS/image - cópia 3.jpg',
        '/assets/pageofprojects/TRIRS/image - cópia 4.jpg',
        '/assets/pageofprojects/TRIRS/image - cópia 5.jpg',
        '/assets/pageofprojects/TRIRS/image - cópia 6.jpg',
        '/assets/pageofprojects/TRIRS/image - cópia 7.jpg',
        '/assets/pageofprojects/TRIRS/image - cópia 8.jpg',
      ],
      carouselImages: [
        '/assets/pageofprojects/TRIRS/image - cópia 2.jpg',
        '/assets/pageofprojects/TRIRS/image - cópia 3.jpg',
        '/assets/pageofprojects/TRIRS/image - cópia 4.jpg',
        '/assets/pageofprojects/TRIRS/image - cópia 5.jpg',
        '/assets/pageofprojects/TRIRS/image - cópia 6.jpg',
      ],
      tools: [
        { src: '/assets/tools/tool2.png', alt: 'Adobe Photoshop' },
        { src: '/assets/tools/tool4.png', alt: 'Figma' },
      ],
    },
    {
      slug: 'vestuario',
      brand: 'Zucco&Co',
      title: 'Rede Social | Vestuário',
      subtitle: 'Campanhas para varejo de moda',
      preview: '/assets/pageofprojects/ZUCCO/39 1.png',
      heroImages: [
        '/assets/pageofprojects/ZUCCO/39 1.png',
        '/assets/pageofprojects/ZUCCO/41 1.png',
        '/assets/pageofprojects/ZUCCO/42 1.png',
        '/assets/pageofprojects/ZUCCO/43 1.png',
        '/assets/pageofprojects/ZUCCO/44 1.png',
        '/assets/pageofprojects/ZUCCO/45 1.png',
        '/assets/pageofprojects/ZUCCO/46 1.png',
        '/assets/pageofprojects/ZUCCO/47 1.png',
        '/assets/pageofprojects/ZUCCO/39 1.png',
      ],
      carouselImages: [
        '/assets/pageofprojects/ZUCCO/39 1.png',
        '/assets/pageofprojects/ZUCCO/41 1.png',
        '/assets/pageofprojects/ZUCCO/42 1.png',
        '/assets/pageofprojects/ZUCCO/43 1.png',
        '/assets/pageofprojects/ZUCCO/44 1.png',
      ],
      tools: [
        { src: '/assets/tools/tool2.png', alt: 'Adobe Photoshop' },
        { src: '/assets/tools/tool3.png', alt: 'CapCut' },
      ],
    },
  ];

  activeProjectIndex = 0;
  activeSlideIndex = 0;
  dragOffsetPx = 0;
  private dragStartX: number | null = null;
  private activePointerId: number | null = null;

  constructor() {
    this.route.queryParamMap.subscribe((params) => {
      const slug = params.get('project');

      if (!slug) {
        return;
      }

      const index = this.projectCases.findIndex((project) => project.slug === slug);

      if (index >= 0 && index !== this.activeProjectIndex) {
        this.setActiveProject(index, false);
      }
    });
  }

  get activeProject(): ProjectCase {
    return this.projectCases[this.activeProjectIndex];
  }

  get activeSlide(): string {
    return this.activeProject.carouselImages[this.activeSlideIndex];
  }

  get visibleCarouselSlides(): VisibleCarouselSlide[] {
    const total = this.activeProject.carouselImages.length;

    return this.visibleSlideOffsets.map((position) => {
      const logicalIndex = this.normalizeIndex(this.activeSlideIndex + position, total);

      return {
        image: this.activeProject.carouselImages[logicalIndex],
        logicalIndex,
        position,
      };
    });
  }

  selectProject(index: number): void {
    this.setActiveProject(index);
  }

  previousProject(): void {
    this.setActiveProject(
      this.normalizeIndex(this.activeProjectIndex - 1, this.projectCases.length),
    );
  }

  nextProject(): void {
    this.setActiveProject(
      this.normalizeIndex(this.activeProjectIndex + 1, this.projectCases.length),
    );
  }

  previousSlide(): void {
    const total = this.activeProject.carouselImages.length;
    this.activeSlideIndex = this.normalizeIndex(this.activeSlideIndex - 1, total);
    this.resetDrag();
  }

  nextSlide(): void {
    const total = this.activeProject.carouselImages.length;
    this.activeSlideIndex = this.normalizeIndex(this.activeSlideIndex + 1, total);
    this.resetDrag();
  }

  slideCountLabel(value: number): string {
    return String(value).padStart(2, '0');
  }

  onCarouselPointerDown(event: PointerEvent): void {
    this.activePointerId = event.pointerId;
    this.dragStartX = event.clientX;
    this.dragOffsetPx = 0;
  }

  onCarouselPointerMove(event: PointerEvent): void {
    if (this.activePointerId !== event.pointerId || this.dragStartX === null) {
      return;
    }

    this.dragOffsetPx = event.clientX - this.dragStartX;
  }

  onCarouselPointerUp(event: PointerEvent): void {
    if (this.activePointerId !== event.pointerId || this.dragStartX === null) {
      return;
    }

    const threshold = 60;
    const finalOffset = event.clientX - this.dragStartX;

    if (finalOffset <= -threshold) {
      this.nextSlide();
    } else if (finalOffset >= threshold) {
      this.previousSlide();
    } else {
      this.resetDrag();
    }

    this.activePointerId = null;
    this.dragStartX = null;
  }

  onCarouselPointerCancel(event: PointerEvent): void {
    if (this.activePointerId !== event.pointerId) {
      return;
    }

    this.activePointerId = null;
    this.dragStartX = null;
    this.resetDrag();
  }

  private normalizeIndex(value: number, length: number): number {
    return ((value % length) + length) % length;
  }

  private setActiveProject(index: number, syncUrl = true): void {
    this.activeProjectIndex = index;
    this.activeSlideIndex = 0;
    this.resetDrag();

    if (!syncUrl) {
      return;
    }

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { project: this.projectCases[index].slug },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  private resetDrag(): void {
    this.dragOffsetPx = 0;
  }
}
