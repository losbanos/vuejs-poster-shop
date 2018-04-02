const PRICE = 9.99;
new Vue({
    el: '#app',
    data() {
        return {
            total: 0,
            items: [],
            cart: [],
            search: ''
        }
    },
    methods: {
        addItem(index) {
            this.total += PRICE;
            let item = this.items[index];
            let isExistInCart = false;
            for(let i = 0, l = this.cart.length; i< l; ++i) {
                let cartItem = this.cart[i];
                if(cartItem.id === item.id) {
                    isExistInCart = true;
                    cartItem.qty++;
                    break;
                }
            }
            if(!isExistInCart) {
                this.cart.push({
                    id: item.id,
                    title: item.title,
                    price: PRICE,
                    qty: 1
                })
            }
        },
        inc(item) {
            item.qty++;
            this.total += PRICE;
        },
        dec(item) {
            item.qty--;
            this.total -= PRICE;
            if(item.qty <= 0) {
                for(var i = 0,l = this.cart.length; i< l; ++i){
                    if(this.cart[i].id === item.id) {
                        this.cart.splice(i, 1);
                        break;
                    }
                }
            }
        },
        onSubmit() {
            this.$http.get('/search/'.concat('90s'))
                .then(function (res) {
                    this.items = res.data;
                })
            ;
        }
    },
    filters: {
        currency(price) {
            return '$'.concat(price.toFixed(2));
        }
    }
});