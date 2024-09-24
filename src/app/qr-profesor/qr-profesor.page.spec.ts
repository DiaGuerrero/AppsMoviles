import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrProfesorPage } from './qr-profesor.page';

describe('QrProfesorPage', () => {
  let component: QrProfesorPage;
  let fixture: ComponentFixture<QrProfesorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
