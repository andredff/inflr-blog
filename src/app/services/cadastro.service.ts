import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class CadastroService {
  constructor(private http: HttpClient) {}
  url = "https://sample-inflr.herokuapp.com/api";

  public cadastro(usuario) {
    return this.http
      .post(this.url + "/accounts/", usuario, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      })
      .map(data => data);
  }
}
