import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  template: `
    <p>Price: {{ price() }} | Quantity: {{ quantity() }}</p>
    <p>Total: {{ total() }}</p>
    <button (click)="addOne()">Add Item</button>
  `
})
export class CartComponent {
  price = signal(25);
  quantity = signal(1);

  total = computed(() => this.price() * this.quantity());

  addOne() {
    this.quantity.update(q => q + 1);
  }
}