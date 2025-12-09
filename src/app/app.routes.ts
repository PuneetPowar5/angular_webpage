import { Routes } from '@angular/router';
import { TicketViewer } from './page/ticket-viewer/ticket-viewer';
import { Knowledgebase } from './page/knowledgebase/knowledgebase';
import { LiveLogs } from './page/live-logs/live-logs';

export const routes: Routes = [
  { path: '', component: TicketViewer },
  { path: 'kb', component: Knowledgebase },
  { path: 'logs', component: LiveLogs },
];
