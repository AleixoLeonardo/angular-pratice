import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EnglishDictionaryDbService } from 'src/app/services/english-dictionary-db.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { ToastMessage } from 'src/app/constants/toast-message.enum';

@Component({
  selector: 'app-english-dictonary-list',
  templateUrl: './english-dictonary-list.component.html',
  styleUrls: ['./english-dictonary-list.component.css']
})
export class EnglishDictonaryListComponent implements OnInit {
  englishDictionarys: any = [];
  englishDictionaryFiltered: any = [];
  englishDictionary: any;
  loading: boolean = false;
  modalRef: BsModalRef;
  valuePaid: number = 0;
  phrase: string = "";
  phrases: any;
  filter: string = "";
  paginaAtual = 1;

  constructor(private englishDictionarydbService: EnglishDictionaryDbService,
    private router: Router,
    private toastService: ToastService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getEnglishDictionarys();
  }

  getEnglishDictionarys() {
    this.englishDictionarydbService.getAll().subscribe((res: any) => {
      this.englishDictionarys = res;
      this.englishDictionaryFiltered = this.englishDictionarys;
    }, error => {
    })
  }

  search() {
    this.englishDictionaryFiltered = this.englishDictionarys.filter((v => {
      return v.value.title.toLowerCase().indexOf(this.filter.toLowerCase()) > -1 ||
        v.value.translation.toLowerCase().indexOf(this.filter.toLocaleLowerCase()) > -1;
    }))
  }


  onBack(e) {
    this.phrases = null;
  }


  select(englishDictionary) {
    this.router.navigate(["english-dictionary", englishDictionary.key])
  }

  showPhrases(englishDictionary) {
    this.phrases = englishDictionary.value.phrases;
  }

  finish() {
    try {
      if (!this.englishDictionary.value.phrases) {
        this.englishDictionary.value.phrases = [];
      }
      this.englishDictionary.value.phrases.push(this.phrase);
      this.englishDictionarydbService.update(this.englishDictionary.value, this.englishDictionary.key);
      this.toastService.showSuccess(ToastMessage.ENGLISH_DICT_HISTORY_SUCCESS);
      this.modalRef.hide();
      this.phrase = "";
    } catch (e) {
      this.toastService.showError(ToastMessage.ERROR);
    }
  }

  openModal(template: TemplateRef<any>, englishDictionary) {
    this.modalRef = this.modalService.show(template);
    this.englishDictionary = englishDictionary;
  }

  goHome() {
    this.router.navigate(["home"]);
  }
}
