import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../../app.routes';
import { filter, map, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './navbar.html',
})
export class Navbar {

  active = "badge badge-primary w-full justify-start";

  router = inject(Router)

  routes = routes.map((route) => ({
    path: route.path,
    title: `${route.title ?? 'Maps en Angular'}`,
  })).filter((route) => route.path !== '**');

  pageTitle$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event) => event.url),
    map((url) => routes.find((route) => `/${route.path}` === url)?.title ?? 'Mapas')
  );
}
