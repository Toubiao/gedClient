import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthServiceService} from "../../service/auth-service.service";

@Component({
  selector: 'app-doc-displayer',
  templateUrl: './doc-displayer.component.html',
  styleUrls: ['./doc-displayer.component.css']
})
export class DocDisplayerComponent implements OnInit {

  form:FormGroup;
  pdfB64Loaded:boolean = false;
  metadataLoaded:boolean = false;
  base64: string = "";
  metadata:string = "";

  constructor(private fb:FormBuilder,private authService: AuthServiceService) {
    this.form = this.fb.group({docId: ['',Validators.required]});
  }

  ngOnInit(): void {
  }

  searchDoc() {
    const val = this.form.value;
    if(val.docId != null){
      this.authService.getDocumentDisplay(val.docId).subscribe(value => {this.base64 = value.toString();this.pdfB64Loaded=true;});
      this.authService.getDocumentMetaData(val.docId).subscribe(value => {this.metadata = value.toString();this.metadataLoaded=true;});

    }

  }

  isPdf() {
    return this.pdfB64Loaded;
  }
  isMetadata(){
    return this.metadataLoaded;
  }
}
