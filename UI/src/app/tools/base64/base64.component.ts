import { ViewEncapsulation } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { encode, decode } from 'js-base64';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.css'],  
})
export class Base64Component {

  @Input() isEncode = true;
}
