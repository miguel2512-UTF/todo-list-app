import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { FormsModule } from '@angular/forms';
import { TrashIconComponent } from './components/icons/trash.component';
import { LoadingIconComponent } from './components/icons/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    TrashIconComponent,
    LoadingIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
