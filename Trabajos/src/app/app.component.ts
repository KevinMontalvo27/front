import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./modules/auth/login/login.component";
import { RegisterComponent } from "./modules/auth/register/register.component";
import { WorkerRegisterComponent } from "./modules/auth/worker-register/worker-register.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterComponent, WorkerRegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Trabajos';
}
