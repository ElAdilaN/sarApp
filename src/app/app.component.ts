import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlocksComponent } from '../Components/blocks/blocks.component';
import { TopSectionComponent } from '../Components/top-section/top-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BlocksComponent, TopSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sarapp1';
}
