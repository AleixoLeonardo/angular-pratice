import { Injectable } from '@angular/core';
import { DB } from '../constants/db.enum';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class TaskHistoryDbService {

  constructor(private dbService: DbService) { }

  insert(taskHistory: any) {
    this.dbService.insert(taskHistory, DB.TASK_HISTORY);
  }

  update(taskHistory: any, key: string) {
    this.dbService.update(taskHistory, key, DB.TASK_HISTORY);
  }

  getAll() {
    return this.dbService.getAll(DB.TASK_HISTORY);
  }

  getByKey(key: string) {
    return this.dbService.getByKey(key, DB.TASK_HISTORY);
  }

  delete(key: string) {
    this.dbService.delete(key, DB.TASK_HISTORY);
  }
}
