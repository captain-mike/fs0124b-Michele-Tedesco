import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pipe-direttive';

  testo = `Questa stringa verrà troncata. Cupiditate aliquid rerum laboriosam ut sint id velit officia quaerat, libero, commodi voluptas in, rem enim facilis? Iste ipsa vitae ut non.
  Dolore libero ipsum nesciunt expedita in labore accusantium, dolores consequuntur amet doloribus. Incidunt eveniet quam voluptatum quae obcaecati eos recusandae aperiam nesciunt! At, eaque. Consectetur iure dicta incidunt ipsa dolor?`

  now = new Date()
}
