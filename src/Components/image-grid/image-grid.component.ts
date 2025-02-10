import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-image-grid',
  standalone: true,
  imports: [NgFor],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.css',
})
export class ImageGridComponent implements OnChanges {
  @Input() category: string | null = null;
  images: string[] = [];
  sounds: string[] = [];

  constructor(public dataService: DataService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['category'] && this.category) {
      const selectedCategory = this.dataService.categories.find(
        (c) => c.name === this.category
      );
      if (selectedCategory) {
        this.images = selectedCategory.images;
        this.sounds = selectedCategory.sounds;
      }
    }
  }
}
