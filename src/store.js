import { EventEmitter } from 'events';

const store = Object.assign({}, EventEmitter.prototype, {
  goods: [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Basketball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
  ],
  sortGoods(){
    this.goods.sort(function(a, b){
      let result = a.category.localeCompare(b.category);
      return result === 0 ?
        a.name.localeCompare(b.name)
        : result;
    });
    return this.getGoods();
  },
  getGoods() {
    return this.goods;
  },
  addGood(good) {
    this.goods.push(good);
    this.emit('change');
  },
  addChangeListener(callback) {
    this.on('change', callback);
  },
  removeChangeListener(callback) {
    this.removeListener('change', callback)
  }
});

export default store;