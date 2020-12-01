import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatkulListComponent } from './matkul-list.component';

describe('MatkulListComponent', () => {
  let component: MatkulListComponent;
  let fixture: ComponentFixture<MatkulListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatkulListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatkulListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
