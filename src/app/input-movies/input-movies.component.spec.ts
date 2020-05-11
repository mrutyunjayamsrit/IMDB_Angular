import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMoviesComponent } from './input-movies.component';

describe('InputMoviesComponent', () => {
  let component: InputMoviesComponent;
  let fixture: ComponentFixture<InputMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
