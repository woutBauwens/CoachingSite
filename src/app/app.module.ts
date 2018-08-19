import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatToolbarModule, MatIconModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {AgmCoreModule} from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {AppComponent} from './components/app-component/app.component';
import {MapComponent} from './components/map-component/map.component';
import {HomeComponent} from "./components/home-component/home.component";
import {PageNotFoundComponent} from "./components/page-not-found-component/page-not-found.component";
import {MyLocationComponent} from './components/my-location-component/my-location.component';
import {SearchComponent} from './components/search-component/search.component';
import { StravaComponent } from './components/strava-component/strava.component';
import { SidebarComponent } from './components/sidebar-component/sidebar.component';
import {ProfileComponent} from "./components/profile-component/profile.component";
import { CalorieFormComponent } from './components/calorie-form/calorie-form.component';

import {LocationService} from './services/location.service';
import {UserService} from './services/user.service';
import { StravaService } from './services/strava.service';

import { HttpModule } from '@angular/http';
import {HttpClientModule} from "@angular/common/http";

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from "angularfire2/firestore";


import {environment} from '../environments/environment';
import {AngularFireAuthModule} from "angularfire2/auth";

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'search',
        component: SearchComponent

    },
    {
        path: 'caloriecalc',
        component: CalorieFormComponent
    },
    {
        path: 'map',
        component: MapComponent
    },
    {
        path: 'profiel',
        component: ProfileComponent
    },
    {
        path: 'statistics',
        component: StravaComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {path: '**', component: PageNotFoundComponent}
];


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MapComponent,
        MyLocationComponent,
        PageNotFoundComponent,
        SearchComponent,
        ProfileComponent,
        StravaComponent,
        SidebarComponent,
        CalorieFormComponent
    ],
    imports: [
        BrowserModule,
    	   HttpModule, 
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserModule,
        MatToolbarModule,
        MatIconModule,
        RouterModule.forRoot(appRoutes, {enableTracing: false}),
        AgmCoreModule.forRoot({apiKey: 'AIzaSyBqbMc0QvT-oozPV1NZnepq9GLa2Wj90_U'}),
        AngularFireModule.initializeApp(environment.firebase, 'Coaching'),
        AngularFirestoreModule,
        AngularFireAuthModule
    ],
    providers: [
        LocationService,
        UserService,
	   StravaService
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
