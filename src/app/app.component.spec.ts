import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let titleService: Title;
  let metaService: Meta;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, HeaderComponent, FooterComponent],
      providers: [
        provideRouter([]),
        Title,
        Meta
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    titleService = TestBed.inject(Title);
    metaService = TestBed.inject(Meta);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set the title', () => {
    const expectedTitle = 'Discovering the Best Talent in Your Screen - Wuz';
    const spy = spyOn(titleService, 'setTitle');

    component.ngOnInit();

    expect(spy).toHaveBeenCalledWith(expectedTitle);
  });

  it('should add meta tags', () => {
    const expectedMetaTags: MetaDefinition[] = [
      { name: 'description', content: 'Discover top talent with our comprehensive hiring solutions. Our expert assessments and insightful screening processes help identify high-potential candidates who drive success. Build a high-performing team by attracting, evaluating, and retaining the best talent through our innovative platform.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'image', content: './assets/images/meta.jpg' },
      { charset: 'UTF-8' }
    ];
    const spy = spyOn(metaService, 'addTags');

    component.ngOnInit();

    expect(spy).toHaveBeenCalledWith(expectedMetaTags);
  });
});