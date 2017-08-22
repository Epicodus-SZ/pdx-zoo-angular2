import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalListComponent } from './animal-list.component';
import { FilterAnimalsPipe } from '../filter-animals.pipe';
import { Animal } from '../animal';


describe('AnimalListComponent', () => {
  let component: AnimalListComponent;
  let fixture: ComponentFixture<AnimalListComponent>;
  let pipe: FilterAnimalsPipe; 
  let listFilter: string = "";
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalListComponent, FilterAnimalsPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pipe = new FilterAnimalsPipe();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
