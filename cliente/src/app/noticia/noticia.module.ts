import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaService } from './noticia.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ NoticiaService ]
})
export class NoticiaModule {
}