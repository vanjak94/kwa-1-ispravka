import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeloviNamestajaComponent } from './delovi-namestaja.component';

describe('DeloviNamestajaComponent', () => {
  let component: DeloviNamestajaComponent;
  let fixture: ComponentFixture<DeloviNamestajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeloviNamestajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeloviNamestajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
