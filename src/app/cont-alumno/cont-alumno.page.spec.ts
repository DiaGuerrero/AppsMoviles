import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContAlumnoPage } from './cont-alumno.page';

describe('ContAlumnoPage', () => {
  let component: ContAlumnoPage;
  let fixture: ComponentFixture<ContAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
