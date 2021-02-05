import { Injectable } from '@angular/core';
import { DB } from '../constants/db.enum';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class SalaryDbService {

  constructor(private dbService: DbService) { }

  insert(salary: any) {
    this.dbService.insert(salary, DB.SALARY);
  }

  update(salary: any, key: string) {
    this.dbService.update(salary, key, DB.SALARY);
  }

  getAll() {
    return this.dbService.getAll(DB.SALARY);
  }

  getByKey(key: string) {
    return this.dbService.getByKey(key, DB.SALARY);
  }

  delete(key: string) {
    this.dbService.delete(key, DB.SALARY);
  }
}
