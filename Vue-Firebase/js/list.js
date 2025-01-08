const app = Vue.createApp({
    data(){
        return{
            showBooks : true,
            books : [
                { title: "The Guide", author: "R.K. Narayan", age: 98 },
                { title: "God of Small Things", author: "Arundhati Roy", age: 62 },
                { title: "Train to Pakistan", author: "Khushwant Singh", age: 99 },
                { title: "A Suitable Boy", author: "Vikram Seth", age: 72 },
                { title: "The White Tiger", author: "Aravind Adiga", age: 49 }
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#lists')