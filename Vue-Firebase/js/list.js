const app = Vue.createApp({
    data(){
        return{
            showBooks : true,
            books : [
                { title: "The Guide", author: "R.K. Narayan", age: 98 , img: "../assets/boy.png"},
                { title: "God of Small Things", author: "Arundhati Roy", age: 62 ,img: "../assets/employee.png"},
                { title: "Train to Pakistan", author: "Khushwant Singh", age: 99 ,img: "../assets/man.png"},
                { title: "A Suitable Boy", author: "Vikram Seth", age: 72 ,img: "../assets/girl.png"},
                { title: "The White Tiger", author: "Aravind Adiga", age: 49 ,img: "../assets/woman.png"}
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