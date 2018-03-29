new Vue({
    el: '#app',
    data() {
        return {
            total: 0,
            items: [
                {title: 'abc', id: 1},
                {title: 'ABC', id: 2},
                {title: 'Title Item', id: 3}
            ],
            cart: []
        }
    },
    methods: {
        addItem(index) {
            this.total += 9.99;
            this.cart.push(this.items[index]);
        }
    }
});