import { Component, Input } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() balance: number | undefined;
  @Input() title: string = '';

}
