import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-top-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './top-section.component.html',
  styleUrl: './top-section.component.css',
})
export class TopSectionComponent {
  constructor(public dataService: DataService) {}

  playAll() {
    this.dataService.selectedImages.forEach((image, index) => {
      const sound = this.dataService.getSoundForImage(image);
      if (sound) {
        setTimeout(() => {
          this.dataService.playSound(sound);
        }, index * 2000); // Adjust the delay as needed
      }
    });
  }
}
