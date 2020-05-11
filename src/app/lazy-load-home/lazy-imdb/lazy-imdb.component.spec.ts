import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyImdbComponent } from './lazy-imdb.component';

describe('LazyImdbComponent', () => {
  let component: LazyImdbComponent;
  let fixture: ComponentFixture<LazyImdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyImdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyImdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
