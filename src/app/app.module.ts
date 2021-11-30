import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosService } from './cursos/cursos.service';
import { CursosModule } from './cursos/cursos.module';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursosModule
  ],
  //providers: [CursosService],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
