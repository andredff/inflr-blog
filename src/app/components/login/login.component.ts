import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../../services";

@Component({
  selector: "login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  usuario: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.createform();
    console.log(this.loginService.token);
  }

  createform() {
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    this.usuario = this.form.value;
    this.loginService.login(this.usuario).subscribe(
      ret => {
        ret = ret;
        this.router.navigate(["/dashboard"]);
      },
      error => {
        alert("Algo de errado não está certo!");
      }
    );
  }

  goRegister() {
    this.router.navigate(["/cadastro"]);
  }
}
