import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnimalFormComponent } from './edit-animal-form.component';

describe('EditAnimalFormComponent', () => {
  let component: EditAnimalFormComponent;
  let fixture: ComponentFixture<EditAnimalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAnimalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAnimalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
