import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DbService } from './db.service';
import { DB } from '../constants/db.enum';


@Injectable({
  providedIn: 'root'
})
export class TaskDbService {

  constructor(private dbService: DbService) { }

  insert(task: any) {
    this.dbService.insert(task, DB.TASK);
  }

  update(task: any, key: string) {
    this.dbService.update(task, key, DB.TASK);
  }

  getAll() {
    return this.dbService.getAll(DB.TASK);
  }

  getByKey(key: string) {
    return this.dbService.getByKey(key, DB.TASK);
  }

  delete(key: string) {
    this.dbService.delete(key, DB.TASK);
  }
}
