import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

const myRoutes = [
    { path: 'story/:id', component: MainComponent},
];

export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);
