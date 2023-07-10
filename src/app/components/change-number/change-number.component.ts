import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent {
  @Output() changeNumber : EventEmitter<any> = new EventEmitter();

  handleClick(){
    //console.log("mudou o numero");
    this.changeNumber.emit();
  }

}
