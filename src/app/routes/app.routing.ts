import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { LoginComponent } from "../components/login/login.component";
import { CadastroComponent } from "../components/cadastro/cadastro.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";

const INFLR_ROUTES: Routes = [
  { path: "", component: LoginComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: "dashboard", component: DashboardComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(INFLR_ROUTES);
