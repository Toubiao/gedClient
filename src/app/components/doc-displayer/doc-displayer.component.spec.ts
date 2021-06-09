import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocDisplayerComponent } from './doc-displayer.component';

describe('DocDisplayerComponent', () => {
  let component: DocDisplayerComponent;
  let fixture: ComponentFixture<DocDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
