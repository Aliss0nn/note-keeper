import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardNotaComponent } from './components/notas/card-nota/card-nota.component';
import { ListarNotasComponent } from './components/notas/listar-notas/listar-notas.component';
import { FormsModule } from '@angular/forms';
import { CriarNotaComponent } from './components/notas/criar-nota/criar-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardNotaComponent,
    ListarNotasComponent,
    CriarNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
