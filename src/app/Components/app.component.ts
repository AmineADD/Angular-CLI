import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '../View/app.component.html'
})
export class AppComponent {
  title = 'project';
  banks = ["No bank", "LCL", "BMP", "Boursorama"]
}
