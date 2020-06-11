import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoNamestajaDodajComponent } from './deo-namestaja-dodaj.component';

describe('DeoNamestajaDodajComponent', () => {
  let component: DeoNamestajaDodajComponent;
  let fixture: ComponentFixture<DeoNamestajaDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoNamestajaDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoNamestajaDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
