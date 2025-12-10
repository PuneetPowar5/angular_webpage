import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-knowledgebase',
  imports: [CommonModule, FormsModule, MarkdownComponent],
  templateUrl: './knowledgebase.html',
  styleUrl: './knowledgebase.css',
})
export class Knowledgebase {
  content: string = localStorage.getItem('kb_draft') || '';
  preview = false;

  toggleMode() {
    this.preview = !this.preview;
  }

  save() {
    localStorage.setItem('kb_article', this.content);
    alert('Article Saved!');
  }

  autoSave() {
    localStorage.setItem('kb_draft', this.content);
  }
}
