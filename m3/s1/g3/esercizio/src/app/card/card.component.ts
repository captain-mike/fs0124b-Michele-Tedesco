import { Component, Input } from '@angular/core';
import { iPost } from '../Models/ipost';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() post!:iPost

}
