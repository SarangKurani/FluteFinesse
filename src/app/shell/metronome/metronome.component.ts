import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-metronome',
  standalone: true,
  imports: [MatInputModule, FormsModule],
  templateUrl: './metronome.component.html',
  styleUrl: './metronome.component.scss'
})
export class MetronomeComponent {
stopMetronome() {
throw new Error('Method not implemented.');
}
startMetronome() {
throw new Error('Method not implemented.');
}
  selectedBPM: number = 0;

}
