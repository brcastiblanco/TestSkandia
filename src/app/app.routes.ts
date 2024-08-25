import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ActionsComponent } from './features/actions/actions.component';
import { AgreementsComponent } from './features/agreements/agreements.component';
import { CustomerServiceComponent } from './features/customer-service/customer-service.component';
import { GoalsComponent } from './features/goals/goals.component';
import { ToolsComponent } from './features/tools/tools.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { CardResolver } from './core/resolvers/card.resolver';

export const routes: Routes = [
    { path: '', title: 'Home', component: HomeComponent, resolve: { card: CardResolver } },
    { path: 'home', title: 'Home', component: HomeComponent, resolve: { card: CardResolver } },
    { path: 'actions', title: 'Actions', component: ActionsComponent },
    { path: 'agreements', title: 'Agreements', component: AgreementsComponent },
    { path: 'customer-service', title: 'CustomerService', component: CustomerServiceComponent },
    { path: 'goals', title: 'Goals', component: GoalsComponent },
    { path: 'tools', title: 'Tools', component: ToolsComponent },
    { path: '**', component: PageNotFoundComponent }
];
 