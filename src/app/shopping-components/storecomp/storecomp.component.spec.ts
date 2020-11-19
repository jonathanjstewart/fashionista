import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorecompComponent } from './storecomp.component';

describe('StorecompComponent', () => {
  let component: StorecompComponent;
  let fixture: ComponentFixture<StorecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorecompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
