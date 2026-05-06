import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // Must import these for routing to work
  template: `
    <nav style="padding: 15px; background-color: #2c3e50; color: white;">
      <button routerLink="/tasks" style="margin-right: 10px; cursor: pointer;">Manage Tasks</button>
      <button routerLink="/users" style="cursor: pointer;">Manage Users</button>
    </nav>

    <div style="padding: 20px;">
      <router-outlet></router-outlet> <!-- Pages load here -->
    </div>
  `
})
export class AppComponent {
  title = 'Task Manager';
}