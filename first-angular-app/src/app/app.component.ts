import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId!: string ;
  isAddingTask = false;
  


  onUserSelected(userId: string) {
    this.selectedUserId = userId;
  }

  onAddTask() {
    this.isAddingTask = true;
  }

  get selectedUser() {
    const selectedUser = this.users.find(user => user.id === this.selectedUserId);
    return selectedUser ? selectedUser : null;
  }
}
