import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamestajiComponent } from './namestaji.component';

describe('NamestajiComponent', () => {
  let component: NamestajiComponent;
  let fixture: ComponentFixture<NamestajiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamestajiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamestajiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
