import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService, DashboardService } from "../../services";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  @ViewChild("postInput", { static: true }) public postInput: ElementRef;

  articles;
  form: FormGroup;
  newPost: any;
  usuario: string;
  displayComentar: boolean = false;
  display: boolean = false;
  selected;
  selectedItem;

  constructor(
    private dashService: DashboardService,
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.createform();
    this.getPosts();
    this.usuario = this.loginService.usuario.username;
  }

  createform() {
    this.form = this.fb.group({
      title: ["inflr", Validators.required],
      short_content: ["inflr", Validators.required],
      content: ["", Validators.required]
    });
  }

  getPosts() {
    this.dashService.getPosts().subscribe(data => {
      this.articles = data;
    });
  }

  postar() {
    this.newPost = this.form.value;
    if (!this.newPost.content) {
      alert("Digite alguma coisa");
      return;
    }
    this.dashService.post(this.newPost).subscribe(
      ret => {
        this.postInput.nativeElement.value = "";
        this.getPosts();
      },
      error => {
        alert("Algo de errado não está certo!");
      }
    );
  }

  select(id) {
    this.selected = true;
  }

  comentar(event, newValue) {
    this.selectedItem = newValue;
    this.displayComentar = !this.displayComentar;
  }

  goHome() {
    this.router.navigate(["/"]);
  }

  displayLogout() {
    this.display = !this.display;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(["/"]);
  }
}
