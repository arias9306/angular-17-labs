import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'labs-basic-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './basic-layout.component.html',
  styleUrl: './basic-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicLayoutComponent {}
