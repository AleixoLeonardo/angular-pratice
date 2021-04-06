import { Injectable } from '@angular/core';
import { DB } from '../constants/db.enum';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class GoalDbService {

  constructor(private dbService: DbService) { }

  insert(goal: any) {
    this.dbService.insert(goal, DB.GOAL);
  }

  update(goal: any, key: string) {
    this.dbService.update(goal, key, DB.GOAL);
  }

  getAll() {
    return this.dbService.getAll(DB.GOAL);
  }

  getByKey(key: string) {
    return this.dbService.getByKey(key, DB.GOAL);
  }

  delete(key: string) {
    this.dbService.delete(key, DB.GOAL);
  }
}
