import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddtaskPage } from './addtask.page';

describe('AddtaskPage', () => {
  let component: AddtaskPage;
  let fixture: ComponentFixture<AddtaskPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
