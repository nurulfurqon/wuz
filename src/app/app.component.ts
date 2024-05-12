import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { OnInit } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Discovering the Best Talent in Your Screen - Wuz');
    this.metaService.addTags([
      { name: 'description', content: 'Discover top talent with our comprehensive hiring solutions. Our expert assessments and insightful screening processes help identify high-potential candidates who drive success. Build a high-performing team by attracting, evaluating, and retaining the best talent through our innovative platform.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'image', content: './assets/images/meta.jpg' },
      { charset: 'UTF-8' }
    ]);
  }
}
