import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamestajIzmeniComponent } from './namestaj-izmeni.component';

describe('NamestajIzmeniComponent', () => {
  let component: NamestajIzmeniComponent;
  let fixture: ComponentFixture<NamestajIzmeniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamestajIzmeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamestajIzmeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
