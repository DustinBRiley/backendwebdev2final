import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/item/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/items'
  constructor(private http: HttpClient) {}
  //Get Items
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}`)
  }
  //Get Item
  getItem(id: string): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/${id}`)
  }
  //Update Item
  updateItem(item: Item): Observable<Item> {
    console.log('Sending update request for item: ', item)
    return this.http.put<Item>(`${this.apiUrl}`, {
      body: {
        id: item._id,
        name: item.name,
        price: item.price
      }
    })
  }
  //Delete Item
  deleteItem(id: string): Observable<any> {
    return this.http.request('delete', `${this.apiUrl}`, {body: {id: id}})
  }
}
