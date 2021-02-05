import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastMessage } from 'src/app/constants/toast-message.enum';
import { EnglishDictionaryDbService } from 'src/app/services/english-dictionary-db.service';

@Component({
  selector: 'app-english-dictonary',
  templateUrl: './english-dictonary.component.html',
  styleUrls: ['./english-dictonary.component.css']
})
export class EnglishDictonaryComponent implements OnInit {

  englishDictionary: any;
  id: string = "";
  allSelected: boolean = false;

  constructor(private englishDictionaryDbService: EnglishDictionaryDbService,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.checkParams();
  }

  checkParams() {
    this.route.params.subscribe(params => {
      this.getById(params['id']);
    });
  }

  getById(id) {
    if (id !== "0") {
      this.englishDictionaryDbService.getByKey(id).subscribe((res: any) => {
        this.englishDictionary = res;
        this.id = id;
      }, error => { })
    } else {
      this.buildEnglishDictionary();
    }
  }

  goHome() {
    this.router.navigate(["home"]);
  }

  save() {
    try {
      if (this.id) {
        this.englishDictionaryDbService.update(this.englishDictionary, this.id);
      } else {
        this.englishDictionaryDbService.insert(this.englishDictionary);
      }
      this.toastService.showSuccess(ToastMessage.BILL_SUCCESS.toString());
      this.router.navigate(["english-dictionary-list"]);
    } catch (e) {
      this.toastService.showError(ToastMessage.ERROR.toString());
    }
  }

  buildEnglishDictionary() {
    this.englishDictionary = { title: "", translation: "" };
  }
}
