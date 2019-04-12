import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTemaComponent } from './detalle-tema.component';

describe('DetalleTemaComponent', () => {
  let component: DetalleTemaComponent;
  let fixture: ComponentFixture<DetalleTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
