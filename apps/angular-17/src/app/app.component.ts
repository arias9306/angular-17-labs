import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'labs-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'angular-17';
}
