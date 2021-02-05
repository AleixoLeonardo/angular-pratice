import { Injectable } from '@angular/core';
import { DB } from '../constants/db.enum';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class BillDbService {

  constructor(private dbService: DbService) { }

  insert(bill: any) {
    this.dbService.insert(bill, DB.BILL);
  }

  update(bill: any, key: string) {
    this.dbService.update(bill, key, DB.BILL);
  }

  getAll() {
    return this.dbService.getAll(DB.BILL);
  }

  getByKey(key: string) {
    return this.dbService.getByKey(key, DB.BILL);
  }

  delete(key: string) {
    this.dbService.delete(key, DB.BILL);
  }
}
