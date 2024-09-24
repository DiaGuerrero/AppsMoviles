import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContProfesorPage } from './cont-profesor.page';

describe('ContProfesorPage', () => {
  let component: ContProfesorPage;
  let fixture: ComponentFixture<ContProfesorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
