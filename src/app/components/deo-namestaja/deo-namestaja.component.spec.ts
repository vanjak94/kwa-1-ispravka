import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoNamestajaComponent } from './deo-namestaja.component';

describe('DeoNamestajaComponent', () => {
  let component: DeoNamestajaComponent;
  let fixture: ComponentFixture<DeoNamestajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoNamestajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoNamestajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
