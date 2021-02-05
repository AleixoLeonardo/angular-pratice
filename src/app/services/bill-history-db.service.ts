import { Injectable } from '@angular/core';
import { DB } from '../constants/db.enum';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class BillHistoryDbService {

  constructor(private dbService: DbService) { }

  insert(bill: any) {
    this.dbService.insert(bill, DB.BILL_HISTORY);
  }

  update(bill: any, key: string) {
    this.dbService.update(bill, key, DB.BILL_HISTORY);
  }

  getAll() {
    return this.dbService.getAll(DB.BILL_HISTORY);
  }

  getByKey(key: string) {
    return this.dbService.getByKey(key, DB.BILL_HISTORY);
  }

  delete(key: string) {
    this.dbService.delete(key, DB.BILL_HISTORY);
  }
}
