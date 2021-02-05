import { Injectable } from '@angular/core';
import { DB } from '../constants/db.enum';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private db: AngularFireDatabase) { }


  insert(task: any, dbName: DB) {
    this.db.list(dbName.toString()).push(task)
      .then((result: any) => {
      });
  }

  update(task: any, key: string, dbName: DB) {
    this.db.list(dbName.toString()).update(key, task)
      .then((result: any) => {
      }).catch((error: any) => {
        console.error(error);
      });;
  }

  getAll(dbName: DB) {
    return this.db.list(dbName.toString())
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }

  getByKey(key: string, dbName: DB) {
    return this.db.object(`/${dbName}/${key}`).valueChanges();
  }

  delete(key: string, dbName: DB) {
    this.db.object(`/${dbName}/${key}`).remove();
  }
}
