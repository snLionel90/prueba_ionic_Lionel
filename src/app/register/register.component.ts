import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  email: string;
  password: string;
  password: string;
  passwordError: boolean;

  constructor(public userService: UsersService) {}

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
    });
  }
}
