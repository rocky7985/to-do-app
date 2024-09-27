import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoremenuPage } from './moremenu.page';

describe('MoremenuPage', () => {
  let component: MoremenuPage;
  let fixture: ComponentFixture<MoremenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MoremenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
