import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewChecked,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live-logs',
  imports: [CommonModule],
  templateUrl: './live-logs.html',
  styleUrl: './live-logs.css',
})
export class LiveLogs implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild('logContainer') private logContainer!: ElementRef;

  logs: string[] = [];
  intervalId: any;

  randomMessages = [
    'User logged in successfully',
    'Error: Could not connect to database',
    'New ticket created',
    'Payment processed successfully',
    'Server restarted',
  ];

  private userScrolled = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Add log every 2 seconds
    this.intervalId = setInterval(() => this.addRandomLog(), 2000);
  }

  ngAfterViewChecked() {
    if (!this.userScrolled) {
      this.scrollToBottom();
    }
  }

  addRandomLog() {
    const randomIndex = Math.floor(Math.random() * this.randomMessages.length);
    const timestamp = new Date().toLocaleTimeString();
    this.logs.push(`[${timestamp}] ${this.randomMessages[randomIndex]}`);
    this.cdr.detectChanges();
    this.scrollToBottom();
  }

  scrollToBottom() {
    try {
      const container = this.logContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    } catch (err) {
      console.error('Scroll error', err);
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
