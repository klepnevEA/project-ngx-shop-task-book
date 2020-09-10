import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ICartProduct } from 'shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})

export class ShopCardComponent {
  @Output()
  public decrement: EventEmitter<any> = new EventEmitter();
  @Output()
  public increment: EventEmitter<any> = new EventEmitter();

  @Input() product = {} as ICartProduct;

  decrementProductInCart(): void {
    this.decrement.emit();
  }

  incrementProductInCart(): void {
    this.increment.emit();
  }
}
