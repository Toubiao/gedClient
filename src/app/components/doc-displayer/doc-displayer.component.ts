import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthServiceService} from "../../service/auth-service.service";
import { mimeTypes } from "mime-wrapper";

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
    this.downloadFile();
    let test:any =  { };
    test.FileName = "salut";
    test.File = "salut";
    this.metadata = (test);
    this.metadataLoaded = true;
  }

  searchDoc() {
    const val = this.form.value;
    if(val.docId != null){
      this.authService.getDocumentDisplay(val.docId).subscribe(value => {

      });
      this.authService.getDocumentMetaData(val.docId).subscribe(value => {
        let url = window.URL.createObjectURL(value);
        let a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = "metadata"+val.docId+".json";
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      });

    }

  }

  downloadFile(){
    var binaryData = [];
    binaryData.push("/+6UksztjBPcD0HartlrtvfTfZ7N1nuScCNG7013IbOrS5O5IY90szfdH9T7Vr2mnx28rzMzSTuMM57D0HoKr6Ppf2GIySt5lzLzI38+RuA");
    let filename:string = "";

    console.log(mimeTypes.getExtension("jpg"));
     filename = mimeTypes.getExtension("Que-mangent-les-astronautes-de-la-Station-spatiale-internationale.jpg");

    let url = window.URL.createObjectURL(new Blob(binaryData, {type: "image/jpeg"}))
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download = "Que-mangent-les-astronautes-de-la-Station-spatiale-internationale.jpg";
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
  isPdf() {

    return this.pdfB64Loaded;
  }
  isMetadata(){
    return this.metadataLoaded;
  }
}
