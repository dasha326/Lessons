<template>
    <div id="app">
        <div class="container pt-5">
            <div class="row">
                <div class="col-3">
                    <div class="from-group">
                        <label for="form-price">Цена</label>
                        <input id="form-price" type="text" name="price" class="form-control" :value="price" @input="calc($event.target)">
                    </div>
                    <span class="badge rounded-pill">{{price}}</span>
                </div>
                <div class="col-3">
                    <div class="from-group">
                        <label for="form-qty">Кол-во</label>
                        <input id="form-qty" type="text" name="qty" class="form-control" v-model="qty">
                    </div>
                    <span class="badge rounded-pill">{{ qty }}</span>
                </div>
                <div class="col-3">
                    <div class="from-group">
                        <label for="form-amount">Сумма</label>
                        <input id="form-amount" type="text" name="amount" class="form-control" v-model="amount">
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
            localStorage: 'пусто'
        }
    },
    methods: {
        addLogs(val){
            this.logs.unshift(val);
        },
        priceChange(value){
            this.price = value;
            this.addLogs('Поменялось поле "Цена"');
            if(this.qty === 0 && this.amount === 0) return;
            // if (this.qty > 0 && ){
            //     this.amount = value * this.qty
            // }
            // if()
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
    watch:{
        qty(){
            this.addLogs('Поменялось поле "Кол-во"')
        },
        amount(){
            this.addLogs('Поменялось поле "Сумма"')
        },
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
