import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MahasiswaListComponent } from './mahasiswa-list/mahasiswa-list.component';
import { PengurusListComponent } from './pengurus-list/pengurus-list.component';
import { MatakuliahListComponent } from './matkul-list/matkul-list.component';

const routes: Routes = [
  { path: 'mahasiswa-list', component: MahasiswaListComponent },
  { path: 'pengurus-list', component: PengurusListComponent },
  { path: 'matkul-list', component: MatakuliahListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
