import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgFor, NgIf } from '@angular/common';
import { ImageGridComponent } from '../image-grid/image-grid.component';

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [NgFor, ImageGridComponent, NgIf],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.css',
})
export class BlocksComponent {
  selectedCategory: string | null = null;

  constructor(public dataService: DataService) {}

  showImages(category: string) {
    console.log('Category clicked:', category);
    this.selectedCategory = category;
  }
}
