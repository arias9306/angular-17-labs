import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@labs-web-shared-layout-basic').then(
        (component) => component.BasicLayoutComponent
      ),
  },
];
