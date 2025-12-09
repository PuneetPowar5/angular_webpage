import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  links = [
    { name: 'Tickets', path: '/tickets' },
    { name: 'Knowledgebase', path: '/kb-editor' },
    { name: 'Live Logs', path: '/logs' },
  ];
}
