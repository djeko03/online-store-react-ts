import {makeAutoObservable} from "mobx";
import {BasketProductInterface} from "../interface/basket-product.interface";



class Basket {

    basketProducts: BasketProductInterface[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addProduct(product: BasketProductInterface) {
        product.count = 1
        product.isChecked = false
        this.basketProducts.push(product)
    }

    removeProduct() {
        this.basketProducts = this.basketProducts.filter(product => product.isChecked !== true)
    }

    showDiscount() {
        let finalDiscount = 0
        this.basketProducts.forEach(item => finalDiscount += ((+item.ordinaryPrice - +item.cardPrice) * item.count))
        return finalDiscount
    }

    countIncrement(product: BasketProductInterface) {
        product.count += 1
    }
    countDecrement(product: BasketProductInterface) {
        product.count -= 1
    }

    changeChecked(product: BasketProductInterface) {
        if (product.isChecked === false) {
            product.isChecked = true
        } else {
            product.isChecked = false
        }
        console.log(product.isChecked)
    }

    doAllChecked() {
       this.basketProducts.map(item => item.isChecked = !item.isChecked)
    }

    calculateAllPrices() {
        let allPrices = 0
        this.basketProducts.forEach(item => allPrices += (+item.ordinaryPrice * item.count) || +item.price * item.count)
        return allPrices.toFixed(1)
    }

    calculateFinalPrice() {
        let finalPrice = 0
        this.basketProducts.forEach(item => finalPrice += (+item.cardPrice * item.count) || +item.price * item.count)
        return finalPrice.toFixed(1)
    }



}



export default new Basket();