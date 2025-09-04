import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { GalleryWrapperComponent } from "../../gallery/gallery-wrapper/gallery-wrapper.component";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AKTUALITY } from '../../shared/aktuality-mock';
import { Aktualita } from '../../models/Aktualita';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aktualita',
  standalone: true,
  imports: [
    GalleryWrapperComponent,
    RouterLink,
    NgIf
  ],
  templateUrl: './aktualita.component.html',
  styleUrl: './aktualita.component.scss'
})
export class AktualitaComponent implements OnInit{
  slug!: string;
  aktuality = AKTUALITY;
  item!: Aktualita;
  previousSlug?: string;
  previousTitle?: string;
  nextSlug?: string;
  nextTitle?: string;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') ?? '';
      if (!this.slug) return;

      const index = this.aktuality.findIndex(a => a.slug === this.slug);

      if (index !== -1) {
        this.item = this.aktuality[index];

        // Predošlá
        if (index > 0) {
          this.previousSlug = this.aktuality[index - 1].slug;
          this.previousTitle = this.aktuality[index - 1].title;
        } else {
          this.previousSlug = undefined;
        }

        // Nasledujúca
        if (index < this.aktuality.length - 1) {
          this.nextSlug = this.aktuality[index + 1].slug;
          this.nextTitle = this.aktuality[index + 1].title;
        } else {
          this.nextSlug = undefined;
        }
      }
    });
  }
}
