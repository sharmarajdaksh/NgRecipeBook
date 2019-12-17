import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { LoggingService } from './logging.service';
import * as fromApp from './store/app.reducer';
import { AuthEffects } from './auth/store/auth.effects';
import { environment } from 'src/environments/environment';
import { RecipesEffects } from './recipes/store/recipes.effects';

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		HttpClientModule,
		AppRoutingModule,
		SharedModule,
		CoreModule,
		StoreModule.forRoot(fromApp.appReducer),
		EffectsModule.forRoot([AuthEffects, RecipesEffects]),
		StoreDevtoolsModule.instrument({ logOnly: environment.production }),
		StoreRouterConnectingModule.forRoot(),
		BrowserAnimationsModule
	],
	providers: [LoggingService],
	bootstrap: [AppComponent]
})
export class AppModule {}
