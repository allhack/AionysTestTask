import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavFilterComponent } from './nav-filter/nav-filter.component';
import { TasksService } from './services/tasks.service';
import { UsersComponent } from './users/users.component';
import { TasksComponent } from './tasks/tasks.component';
import { FilterService } from './services/filter.service';
import { FilterPipe } from './filter.pipe';
import { KeysPipe } from './keys.pipe';
import { DataService } from './services/data.service';
import { TasksFilterPipe } from './tasks-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavFilterComponent,
    UsersComponent,
    TasksComponent,
    FilterPipe,
    KeysPipe,
    TasksFilterPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      //{ path: '', component: HomeComponent, pathMatch: 'full' },
      //{ path: 'counter', component: CounterComponent },
      //{ path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [TasksService, FilterService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
