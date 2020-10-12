import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component'
import { ResumeComponent } from './resume/resume.component'


const routes: Routes = [
	{ path: 'landing', component: LandingPageComponent },
	{ path: '', component: LandingPageComponent },
	{ path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
