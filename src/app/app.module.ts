import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './core/components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/inter/auth-interceptor.service';
import { HomeComponent } from './features/home/home/home.component';
import { ListTransactionsComponent } from './core/components/list-transactions/list-transactions.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardComponent } from './core/components/card/card.component';
import { AuthGuard } from './core/guards/AuthGuard';
import { PaginacaoComponent } from './core/components/paginacao/paginacao.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ListTransactionsComponent,
    HomeComponent,
    CardComponent,
    PaginacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
