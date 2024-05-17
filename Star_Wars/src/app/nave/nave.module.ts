import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaveListComponent } from './nave-list/nave-list.component';
import { NaveDetailComponent } from './nave-detail/nave-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NaveComponent } from './nave.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [NaveListComponent, NaveDetailComponent],
  exports: [NaveListComponent, NaveDetailComponent]
})
export class NaveModule { }
