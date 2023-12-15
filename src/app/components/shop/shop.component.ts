import { Component } from '@angular/core';
import { Item } from '../../model/item/item.model'
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  cart: [] = []
  items: Item[] = []
  item: any = {
    _id: '',
    name: '',
    price: ''
  }

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data: any) => {
      this.items = data as Item[]
    })
  }

  // Updated Data
  loadItems() {
    this.itemService.getItems().subscribe((data: any) => {
      this.items = data
    })
  }

  // Get Item
  getItem(id: string) {
    if(id) {
      this.itemService.getItems().subscribe((itemData) => {
        this.item = itemData
        return(itemData)
      })
    } else {
      console.log('Item id is undefined')
    }
  }

  // Update Item
  updateItem() {
    if(this.item._id && this.item) {
      this.itemService.updateItem(this.item).subscribe({
        next: (updateItem) => {
          console.log('Item successfully updated: ', updateItem)
          this.loadItems()
        },
        error: (error) => {
          console.error('error updating item: ', error)
        }
      })
    } else {
      console.log('Item Id is undefined')
    }
  }

  // Delete Item
  deleteItem(id: string) {
    this.itemService.deleteItem(id).subscribe((response) => {
      console.log('Item deleted: ', response)
      this.loadItems()
    })
  }
}
