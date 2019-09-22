import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-router.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { BodyComponent } from './layout/body/body.component';

import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { AboutModule } from './about/about.module';
import { EventsModule } from './events/events.module';
import { ProjectsModule } from './projects/projects.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { WidgetsModule } from './widgets/widgets.module';
import { ServicesModule } from './services/services.module';
import { RegisterModule } from './register/register.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CoreModule,
    AboutModule,
    EventsModule,
    ProjectsModule,
    TestimonialsModule,
    WidgetsModule,
    ServicesModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent, LayoutComponent, HeaderComponent, BodyComponent]
})
export class AppModule { }
