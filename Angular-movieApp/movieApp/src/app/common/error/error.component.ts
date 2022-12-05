import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input() message: string ;
  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.close.emit();
  }

}
