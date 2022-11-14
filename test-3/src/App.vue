<template>
    <div id="app">
        <div class="container pt-5">
            <div class="row">
                <div class="col-3">
                    <div class="from-group">
                        <label for="form-price">Цена</label>
                        <input id="form-price" type="text" name="price" class="form-control" :value="price" @input="priceChange($event.target.value)">
                    </div>
                    <span class="badge rounded-pill">{{price}}</span>
                </div>
                <div class="col-3">
                    <div class="from-group">
                        <label for="form-qty">Кол-во</label>
                        <input id="form-qty" type="text" name="qty" class="form-control"  :value="qty" @input="qtyChange($event.target.value)">
                    </div>
                    <span class="badge rounded-pill">{{ qty }}</span>
                </div>
                <div class="col-3">
                    <div class="from-group">
                        <label for="form-amount">Сумма</label>
                        <input id="form-amount" type="text" name="amount" class="form-control"  :value="amount" @input="amountChange($event.target.value)">
                    </div>
                    <span class="badge rounded-pill">{{ amount }}</span>
                </div>
                <div class="col-3">
                    <button class="btn btn-primary w-100" @click="submit()">Отправить</button>
                    <span class="badge rounded-pill w-100 text-wrap" >{{localStorage}}</span>
                </div>
            </div>
            <div class="table-container">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col" colspan="2">События</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, i) in logs" :key="i">
                        <th scope="row">{{logs.length - i}}</th>
                        <td>{{ item }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="card">
                <div class="card-body">
                    {{ result }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    components: {},
    data(){
        return{
            nonce: 0,
            price: 0,
            qty: 0,
            amount: 0,
            result: '',
            logs: [],
            localStorage: 'пусто',
            inputPlaces: ['price', 'qty', 'amount'],
        }
    },
    methods: {
        addLogs(val){
            this.logs.unshift(val);
        },
        changePlaces(text){
            console.log(33)
            this.inputPlaces.push(...this.inputPlaces.splice(this.inputPlaces.indexOf(text),1));
        },
        priceChange(value){
            this.changePlaces('price');
            this.price = Number(value);
            this.calculate();
            this.addLogs('Поменялось поле "Цена"');
        },
        qtyChange(value) {
            this.changePlaces('qty');
            this.qty = Number(value);
            this.calculate();
            this.addLogs('Поменялось поле "Кол-во"')
        },
        amountChange(value){
            this.changePlaces('amount');
            this.amount = Number(value);
            this.calculate();
            this.addLogs('Поменялось поле "Сумма"')
        },
        calculate() {
            console.log(this.inputPlaces)
            switch (this.inputPlaces[0]){
                case 'qty':
                    this.qty = this.amount / this.price
                    break
                case 'price':
                    this.price = this.amount / this.qty
                    break
                case 'amount':
                    this.amount = this.price * this.qty
                    break
            }
        },
        submit(){
            ++this.nonce;
            const itemsData = {
                price: this.price,
                qty: this.qty,
                amount: this.amount,
                nonce: this.nonce
            }

            const isEven = this.amount % 2 === 0;
            this.addLogs('Нажалась кнопка');
            setTimeout(()=>{
                if(isEven){
                    localStorage.setItem('items', JSON.stringify(itemsData));
                    this.localStorage = itemsData
                    this.result = '{success:true}'

                } else{
                    this.result = '{success:false}'
                }
                this.addLogs('Получен результат нажатия кнопки')
            }, 1000)
        }
    },
    computed: {
        // price() {
        //     return this.amount / this.qty
        // },
        // qty() {
        //     return this.amount / this.price
        // },
        // amount() {
        //     return this.price * this.qty
        // }
    }
}
</script>

<style>
.row{
    min-height: 135px;
}
.badge{
    display: inline-block;
    margin-top: 10px;
    padding: 5px 10px;
    background-color: lightgrey;
    line-height: 1.3;
}
button{
    margin-top: 30px;
}
.table-container{
    height: 300px;
    overflow-y: scroll;
    margin-top: 30px;
    margin-bottom: 15px;
}
</style>
