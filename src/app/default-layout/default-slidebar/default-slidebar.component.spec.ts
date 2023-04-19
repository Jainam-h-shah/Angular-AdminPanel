import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSlidebarComponent } from './default-slidebar.component';

describe('DefaultSlidebarComponent', () => {
  let component: DefaultSlidebarComponent;
  let fixture: ComponentFixture<DefaultSlidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultSlidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultSlidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
