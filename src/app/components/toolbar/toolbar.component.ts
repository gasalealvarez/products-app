import { Component,} from '@angular/core';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent  {
  constructor(public authSvc: AuthService) {}

  ngOnInit() {}

  onLogout(): void {
    this.authSvc.logout();
    window.location.reload();
  }
}
