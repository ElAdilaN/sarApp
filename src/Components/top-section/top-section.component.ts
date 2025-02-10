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
    const sounds = this.dataService.selectedImages
      .map((image) => this.dataService.getSoundForImage(image))
      .filter((sound): sound is string => !!sound); // Ensure only valid sound paths

    sounds.forEach((sound, index) => {
      setTimeout(() => {
        this.dataService.playSound(sound);
      }, index * 2000); // 2-second delay per sound
    });
  }
}
