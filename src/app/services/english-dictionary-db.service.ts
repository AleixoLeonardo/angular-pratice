import { Injectable } from '@angular/core';
import { DB } from '../constants/db.enum';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class EnglishDictionaryDbService {

  constructor(private dbService: DbService) { }

  insert(englishDictionary: any) {
    this.dbService.insert(englishDictionary, DB.ENGLISH_DICT);
  }

  update(englishDictionary: any, key: string) {
    this.dbService.update(englishDictionary, key, DB.ENGLISH_DICT);
  }

  getAll() {
    return this.dbService.getAll(DB.ENGLISH_DICT);
  }

  getByKey(key: string) {
    return this.dbService.getByKey(key, DB.ENGLISH_DICT);
  }

  delete(key: string) {
    this.dbService.delete(key, DB.ENGLISH_DICT);
  }
}
