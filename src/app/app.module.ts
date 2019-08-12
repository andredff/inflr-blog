import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { routing } from "./routes/app.routing";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { CadastroComponent } from "./components/cadastro/cadastro.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

import { CadastroService, LoginService, DashboardService } from "./services";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CadastroService, LoginService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
