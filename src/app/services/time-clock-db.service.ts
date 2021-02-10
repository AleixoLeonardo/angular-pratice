import { Injectable } from '@angular/core';
import { DB } from '../constants/db.enum';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class TimeClockDbService {

  constructor(private dbService: DbService) { }

  insert(taskHistory: any) {
    this.dbService.insert(taskHistory, DB.TIME_CLOCK);
  }

  update(taskHistory: any, key: string) {
    this.dbService.update(taskHistory, key, DB.TIME_CLOCK);
  }

  getAll() {
    return this.dbService.getAll(DB.TIME_CLOCK);
  }

  getByKey(key: string) {
    return this.dbService.getByKey(key, DB.TIME_CLOCK);
  }

  delete(key: string) {
    this.dbService.delete(key, DB.TIME_CLOCK);
  }
}
