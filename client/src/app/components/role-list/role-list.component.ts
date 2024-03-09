import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Role } from '../../interfaces/role';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-role-list',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.css',
})
export class RoleListComponent {
  @Input({ required: true }) roles!: Role[] | null;
  @Output() deleteRole: EventEmitter<string> = new EventEmitter<string>();

  delete(id: string) {
    this.deleteRole.emit(id);
  }
}
