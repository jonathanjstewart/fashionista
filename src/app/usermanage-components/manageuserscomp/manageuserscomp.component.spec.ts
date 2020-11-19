import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageuserscompComponent } from './manageuserscomp.component';

describe('ManageuserscompComponent', () => {
  let component: ManageuserscompComponent;
  let fixture: ComponentFixture<ManageuserscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageuserscompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageuserscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
