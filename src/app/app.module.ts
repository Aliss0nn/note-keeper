import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardNotaComponent } from './components/notas/card-nota/card-nota.component';
import { ListarNotasComponent } from './components/notas/listar-notas/listar-notas.component';
import { FormsModule } from '@angular/forms';
import { CriarNotaComponent } from './components/notas/criar-nota/criar-nota.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { EditarNotasComponent } from './components/notas/editar-notas/editar-notas.component';
import { ExcluirNotasComponent } from './components/notas/excluir-notas/excluir-notas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardNotaComponent,
    ListarNotasComponent,
    CriarNotaComponent,
    EditarNotasComponent,
    ExcluirNotasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot({

    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
