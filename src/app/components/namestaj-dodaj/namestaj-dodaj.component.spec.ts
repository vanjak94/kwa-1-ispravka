import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamestajDodajComponent } from './namestaj-dodaj.component';

describe('NamestajDodajComponent', () => {
  let component: NamestajDodajComponent;
  let fixture: ComponentFixture<NamestajDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamestajDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamestajDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
