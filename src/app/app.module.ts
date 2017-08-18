import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewAnimalFormComponent } from './new-animal-form/new-animal-form.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { EditAnimalFormComponent } from './edit-animal-form/edit-animal-form.component';
import { FilterAnimalsPipe } from './filter-animals.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewAnimalFormComponent,
    AnimalListComponent,
    EditAnimalFormComponent,
    FilterAnimalsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
