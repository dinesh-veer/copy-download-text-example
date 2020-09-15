import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'copy-download-text-example';
  textValue = '';
   textMessage: any;
    msgHideAndShow: boolean = false;
    textPresent :boolean=false;
    constructor() {
    }
    ngOnInit() {
    }
    // Text Message
    textMessageFunc(msgText){
      this.textMessage=msgText+' Copied to Clipboard';
      this.msgHideAndShow=true;
      setTimeout(() => {
        this.textMessage='';
        this.msgHideAndShow=false;
      }, 1000);
    }
    /* To copy Text from Textbox */
    copyInputMessage(inputElement) {
      inputElement.select();
      document.execCommand('copy');
      inputElement.setSelectionRange(0, 0);
      this.textMessageFunc('Text');

    }
    /* Download text from textarea */
    downloadText(){
      console.log(this.textValue);
      var blob = new Blob([this.textValue], { type: 'text/plain'});
      var anchor = document.createElement('a');
      anchor.download = 'download.txt';
      anchor.href = window.URL.createObjectURL(blob);
      anchor.target ='_blank';
      anchor.style.display = 'none'; // just to be safe!
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }
}

