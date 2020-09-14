import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prod8uctItemComponent } from './prod8uct-item.component';

describe('Prod8uctItemComponent', () => {
  let component: Prod8uctItemComponent;
  let fixture: ComponentFixture<Prod8uctItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prod8uctItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prod8uctItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
