import { Component } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { AudioRecordingService } from './audio-recording.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recorder',
  standalone: true,
  // CommonModule for old *ngIf?
  imports: [CommonModule],
  providers: [AudioRecordingService],
  templateUrl: './recorder.component.html',
  styleUrl: './recorder.component.scss'
})
export class RecorderComponent {
  isRecording = false;
  recordedTime: any;
  blobUrl: any;
  teste: any;

  constructor(
    private audioRecordingService: AudioRecordingService,
    private sanitizer: DomSanitizer
  ) {
    this.audioRecordingService
      .recordingFailed()
      .subscribe(() => (this.isRecording = false));
    this.audioRecordingService
      .getRecordedTime()
      .subscribe(time => (this.recordedTime = time));
    this.audioRecordingService.getRecordedBlob().subscribe(data => {
      this.teste = data;
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(data.blob)
      );
    });
  }

  startRecording() {
    if (!this.isRecording) {
      this.isRecording = true;
      this.audioRecordingService.startRecording();
    }
  }

  abortRecording() {
    if (this.isRecording) {
      this.isRecording = false;
      this.audioRecordingService.abortRecording();
    }
  }

  stopRecording() {
    if (this.isRecording) {
      this.audioRecordingService.stopRecording();
      this.isRecording = false;
    }
  }

  clearRecordedData() {
    this.blobUrl = null;
  }

  ngOnDestroy(): void {
    this.abortRecording();
  }

  download(): void {
    const url = window.URL.createObjectURL(this.teste.blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = this.teste.title;
    link.click();
  }
}


// Code picked up from https://stackblitz.com/edit/angular-audio-recorder