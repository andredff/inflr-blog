import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";
import { LoginService } from "./login.service";

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient, private loginService: LoginService) {}
  url = "https://sample-inflr.herokuapp.com/api";

  token = "Token " + this.loginService.usuario.token;

  public post(article) {
    return this.http
      .post(this.url + "/articles/", article, {
        headers: new HttpHeaders({
          Authorization: this.token,
          "Content-Type": "application/json"
        })
      })
      .map(data => data);
  }

  getPosts() {
    return this.http.get(this.url + "/articles/");
  }
}
