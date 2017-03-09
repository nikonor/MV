import { Component } from '@angular/core';

import { MeComponent} from './me.component';


@Component({
  selector: 'app-root',
  templateUrl: './template/app.component.html',
  styleUrls: ['./css/app.component.css']
})
export class AppComponent {
  Me: MeComponent;
}
