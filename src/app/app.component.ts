import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp4';
  users: User[] = [];  // Define an array to hold users

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Call the service to fetch users when the component initializes
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
}
}
