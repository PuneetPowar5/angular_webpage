import { RouterModule, Routes } from '@angular/router';
import { TicketViewer } from './page/ticket-viewer/ticket-viewer';
import { Knowledgebase } from './page/knowledgebase/knowledgebase';
import { LiveLogs } from './page/live-logs/live-logs';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/tickets', pathMatch: 'full' },
  { path: 'tickets', component: TicketViewer },
  { path: 'kb-editor', component: Knowledgebase },
  { path: 'logs', component: LiveLogs },
  { path: '**', redirectTo: '/tickets' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
