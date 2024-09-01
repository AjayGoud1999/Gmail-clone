import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { reducers, metaReducers } from './store/store';
import { AppEffects } from './store/app.effects';

import { AppComponent } from './app-root/index';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { EmailAppComponent } from './pages/email-app/email-app.component';

import { AppHeaderComponent } from './components/app-header/app-header.component'


import { EmailDetailsComponent } from './pages/email-details/email-details.component';
import { EmailPreviewComponent } from './components/email-preview/email-preview.component';
import { EmailFilterComponent } from './components/email-filter/email-filter.component';
import { FolderListComponent } from './components/folder-list/folder-list.component';
import { EmailListComponent } from './pages/email-list/email-list.component';
import { EmailComposeComponent } from './components/email-compose/email-compose.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { HeaderSvgComponent } from './svg-cmps/header-svg/header-svg.component';
import { FolderListSvgComponent } from './svg-cmps/folder-list-svg/folder-list-svg.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { LabelEditComponent } from './components/label-edit/label-edit.component';
import { FirstWordPipe } from './pipes/first-word.pipe';

import { LabelSelectorComponent } from './components/label-selector/label-selector.component';
import { LabelTagComponent } from './components/label-tag/label-tag.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DateOrAgoPipe } from './pipes/date-or-ago.pipe';

@NgModule({
  declarations: [
   AppComponent,
   HomeComponentComponent,
   AppHeaderComponent,
   EmailAppComponent,
    
   EmailDetailsComponent,
   EmailPreviewComponent,
   EmailFilterComponent,
   FolderListComponent,
   EmailListComponent,
   EmailComposeComponent,
   SearchInputComponent,
   HeaderSvgComponent,
   FolderListSvgComponent,
   CapitalizePipe,
   FirstWordPipe,
   LabelEditComponent,
   LabelSelectorComponent,
   LabelTagComponent,
   DateFormatPipe,
   DateOrAgoPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
