import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component.ts'
import { ResumeComponent } from './resume/resume.component.ts'


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
