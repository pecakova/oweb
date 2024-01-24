import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Driver } from '../module/klasa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent implements OnInit {

  @Input()
  ime: String = "";

  @Input()
  vozac: Driver = {} as Driver;

  @Input()
  reden: Number = 0;

  @Output()
  cuci: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
      
  }

  klasi() {
    return {'poz':this.vozac.category == "ADVANCED", 
    'course-card': true};
  }
  // so ngStyle da se proveri neshto za drivers i posle da se napravi underline ili da se oboi ili neshto
  getColor() {
    if(this.vozac.id % 2 == 0) {
      return 'black';
    }
    return 'blue';
  }
  getDecoration() {
    if(this.vozac.category == "ADVANCED") {
      return 'underline';
    }
    return 'none'
  }

  klik() {
    var link=this.vozac.iconUrl;
    window.open(link, "_blank");
    console.log("Me klikna");
    this.cuci.emit(this.vozac);
  }

}