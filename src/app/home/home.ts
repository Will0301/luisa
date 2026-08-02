import { Component } from '@angular/core';
import { Banner } from '../banner/banner';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Lulu } from '../lulu/lulu';
import { Projects } from '../projects/projects';

@Component({
  selector: 'app-home',
  imports: [Header, Banner, Lulu, Projects, Contact, Footer],
  templateUrl: './home.html',
})
export class Home {}
