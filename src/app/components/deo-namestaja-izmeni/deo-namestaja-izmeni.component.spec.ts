import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoNamestajaIzmeniComponent } from './deo-namestaja-izmeni.component';

describe('DeoNamestajaIzmeniComponent', () => {
  let component: DeoNamestajaIzmeniComponent;
  let fixture: ComponentFixture<DeoNamestajaIzmeniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoNamestajaIzmeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoNamestajaIzmeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
