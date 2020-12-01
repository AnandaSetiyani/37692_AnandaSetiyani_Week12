import { Component, OnInit } from '@angular/core';
import { MahasiswaService } from '../mahasiswa.service';

@Component({
  selector: 'app-matkul-list',
  templateUrl: './matkul-list.component.html',
  styleUrls: ['./matkul-list.component.css']
})
export class MatakuliahListComponent implements OnInit {

  public matkul = [];

  constructor(private mhsService: MahasiswaService) { }

  ngOnInit(): void {
    this.matkul = this.mhsService.getMatkul();
  }

}
