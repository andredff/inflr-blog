import { Component, OnInit } from "@angular/core";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { CadastroService } from "../../services";
import { Router } from "@angular/router";

@Component({
  selector: "cadastro",
  templateUrl: "./cadastro.component.html"
})
export class CadastroComponent implements OnInit {
  form: FormGroup;
  usuario: any;

  constructor(
    private fb: FormBuilder,
    private cadastroService: CadastroService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createform();
  }

  createform() {
    this.form = this.fb.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  cadastrar() {
    this.usuario = this.form.value;
    if (!this.usuario.first_name) {
      alert("Inclua um nome");
      return;
    }
    if (!this.usuario.last_name) {
      alert("Inclua um sobrenome");
      return;
    }
    if (!this.usuario.username) {
      alert("Inclua um nome de usuário");
      return;
    }
    if (!this.usuario.password) {
      alert("Inclua uma senha");
      return;
    }

    this.cadastroService.cadastro(this.usuario).subscribe(
      ret => {
        alert("Usuário cadastrado com sucesso!");
        this.router.navigate(["/"]);
      },
      error => {
        alert("Algo de errado não está certo!");
      }
    );
  }

  goHome() {
    this.router.navigate(["/"]);
  }
}
