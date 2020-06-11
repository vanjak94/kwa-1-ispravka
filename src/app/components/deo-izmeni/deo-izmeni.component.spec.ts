import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoIzmeniComponent } from './deo-izmeni.component';

describe('DeoIzmeniComponent', () => {
  let component: DeoIzmeniComponent;
  let fixture: ComponentFixture<DeoIzmeniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoIzmeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoIzmeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
