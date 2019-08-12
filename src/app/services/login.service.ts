import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.token = currentUser && currentUser.token;
    this.usuario = currentUser;
  }

  url = "https://sample-inflr.herokuapp.com/api";

  public token: string;
  public usuario;

  public login(usuario) {
    return this.http
      .post(this.url + "/accounts/login/", usuario, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      })
      .map(usuario => {
        if (usuario) {
          localStorage.setItem("currentUser", JSON.stringify(usuario));
        }
        this.usuario = usuario;
        return usuario;
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem("currentUser");
  }
}
