import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();
  constructor(private route:Router)
  {}
  toAbout()
  {
    return this.route.navigate(['/about']);
  }
}
