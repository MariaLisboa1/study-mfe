import { loadRemoteEntry } from "@angular-architects/module-federation";

Promise.all([
  loadRemoteEntry('http://localhost:4000/remoteEntry.js', 'mfeDocuments')
])
  .catch(err => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));
