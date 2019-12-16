import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { YouTubeSearchService } from './services/you-tube-search.service';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeResultComponent } from './components/youtube-result/youtube-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFieldComponent,
    YoutubeResultComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  providers: [YouTubeSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
