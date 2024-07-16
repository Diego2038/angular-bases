import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent,
  ],
})
export class DbzModule { }
