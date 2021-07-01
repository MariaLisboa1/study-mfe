import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { buildRoutes } from './menu-utils';
import { LookUpService } from './microfrontends/lookup.service';
import { Microfrontend } from './microfrontends/microfrontends';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  microfrontends: Microfrontend[] = [];

  constructor(
    private router: Router,
    private lookupService: LookUpService
  ) {}

  async ngOnInit(): Promise<void> {
    this.microfrontends = await this.lookupService.lookup();
    const routes = buildRoutes(this.microfrontends);
    this.router.resetConfig(routes);
  }
}
