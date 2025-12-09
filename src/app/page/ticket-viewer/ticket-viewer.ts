import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-viewer',
  imports: [CommonModule],
  templateUrl: './ticket-viewer.html',
  styleUrl: './ticket-viewer.css',
})
export class TicketViewer {
  filter: string = 'All';

  tickets = [
    { id: 1, subject: 'Login issue on portal', status: 'Open', createdAt: '2025-01-09' },
    { id: 2, subject: 'Payment failed error', status: 'In Progress', createdAt: '2025-01-08' },
    { id: 3, subject: 'Email not sending', status: 'Closed', createdAt: '2025-01-07' },
    { id: 4, subject: 'Slow performance', status: 'Open', createdAt: '2025-01-06' },
  ];

  get filteredTickets() {
    if (this.filter === 'All') return this.tickets;
    return this.tickets.filter((t) => t.status === this.filter);
  }
}
