import { loadRemoteModule } from "@angular-architects/module-federation";
import { Routes } from "@angular/router";

const URL = 'http://localhost:4000/remoteEntry.js';

export const APP_ROUTES: Routes = [
  {
    path: 'documents',
    loadChildren: () => loadRemoteModule({
      remoteName: 'mfeDocuments',
      exposedModule: './Module'
    })
    .then(m => m.DocumentsModule)
  }
];
