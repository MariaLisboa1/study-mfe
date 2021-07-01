import { Injectable } from "@angular/core";
import { Microfrontend } from "./microfrontends";

@Injectable({
  providedIn: 'root'
})
export class LookUpService {

  lookup(): Promise<Microfrontend[]> {
    return Promise.resolve([
        {
          //for loading
          remoteEntry: 'http://localhost:4000/remoteEntry.js',
          remoteName: 'mfeDocuments',
          exposedModule: './Module',

          //for routing
          displayName: 'Documents',
          routePath: 'documents',
          ngModuleName: 'DocumentsModule',
        },
        // {
        //   //for loading
        //   remoteEntry: 'http://localhost:4000/remoteEntry.js',
        //   remoteName: 'mfeDocuments',
        //   exposedModule: './Module',

        //   //for routing
        //   displayName: 'Documents',
        //   routePath: 'documents',
        //   ngModuleName: 'DocumentsModule',
        // },
    ] as Microfrontend[]);
  }
}
