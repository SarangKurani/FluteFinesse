import { Routes } from '@angular/router';
import { TunerComponent } from './shell/tuner/tuner.component';
import { MetronomeComponent } from './shell/metronome/metronome.component';
import { RecorderComponent } from './shell/recorder/recorder.component';

export const routes: Routes = [
    { path: '', title: "Tuner", component: TunerComponent },
    { path: 'tuner', title: "Tuner", component: TunerComponent },
    { path: 'metronome', title: "Metronome", component: MetronomeComponent },
    { path: 'recorder', title: "Recorder", component: RecorderComponent },
];
