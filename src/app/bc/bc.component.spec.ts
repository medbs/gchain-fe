import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcComponent } from './bc.component';

describe('BcComponent', () => {
  let component: BcComponent;
  let fixture: ComponentFixture<BcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
