<template>
    <v-app>
        <v-table theme="dark">
            <thead>
                <tr>
                    <th v-for="headItem in headers"
                        :key="headItem.text">{{ headItem.text }}
                    </th>
                    <th>Del</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(item, id) in desserts"
                    :key="id"
                >
                    <td>{{ item.date }}</td>
                    <td>
                        {{ item.delta2 * 2 }}

                    </td>
                    <td>
                        <v-text-field
                            :value="item.delta2"
                        ></v-text-field>
                    </td>
                    <td>
                        <v-btn color="error"
                                plain
                                @click="delRow(id)">
                            <v-icon icon="mdi-close"></v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </v-app>
</template>

<script>
export default {
    name: "TheTable",
    data: () => ({
        desserts: [],
        headers: [
            {
                text: 'Dates',
                value: 'date',
            },
            {
                text: 'Adjustment Delta',
                value: 'delta',
            },
            {text: 'Adjusted to Date', value: 'delta2'},
        ],
    }),
    methods: {
        renderMonth(firstDate, lastDate) {
            firstDate = new Date(firstDate);
            lastDate = new Date(lastDate);
            for (var a = [], d = firstDate; d <= lastDate; d.setDate(d.getDate() + 1)) {
                if (d.getDate() <= 1) {
                    a.push(`${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`);
                }
            }
            return a;
        },
        renderThird(array) {
            console.log(array)
            const centerPosition = array.indexOf(0);
            console.log(array.indexOf(0))
            const result = array.map((el, index) => {
                if(index < centerPosition) el = this.getRandomFloat(-30, -1).toFixed(2);
                if(index > centerPosition) el = this.getRandomFloat(0, 30).toFixed(2);
                return el;
            });
            return result;
        },
        getRandomFloat(min, max) {
            return Math.random() * (max - min) + min;
        },
        delRow(id){
            const elIndex = this.desserts.indexOf(this.desserts[id]);
            this.desserts.splice(elIndex, 1)
        }
    },
    created() {
        const dates = this.renderMonth("2018-01-01", "2018-09-01");
        let delta2 = Array.from({length: dates.length}).map(() => '');//сохздаем пустой и наполняем
        delta2[Math.ceil(this.getRandomFloat(0, delta2.length))] = 0;//ставим 0 в рандомное место
        delta2 = this.renderThird(delta2); //наполняем данными от -30 до 30
        dates.forEach((date, id) => {
            this.desserts.push({
                date,
                delta: delta2[id] *2,
                delta2: delta2[id],
            })
        })
    }
}
</script>

<style scoped>

</style>