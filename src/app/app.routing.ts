import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

const myRoutes = [
    // story/:idにredirectするように設定
    { path: 'story/:id',
      component: MainComponent
    },
    { path: '',
      redirectTo: '/story/1',
      pathMatch: 'full'
    },
];

export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);
