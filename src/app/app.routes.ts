import { Routes } from '@angular/router';
import { TicketViewer } from './page/ticket-viewer/ticket-viewer';
import { Knowledgebase } from './page/knowledgebase/knowledgebase';

export const routes: Routes = [
  { path: '', component: TicketViewer },
  { path: 'kb', component: Knowledgebase },
];
