const app = Vue.createApp({
    data(){
        return{
            isFav : true,
            showBooks : true,
            books : [
                { title: "The Guide", author: "R.K. Narayan", age: 98 , img: "../assets/boy.png", isFav : true},
                { title: "God of Small Things", author: "Arundhati Roy", age: 62 ,img: "../assets/employee.png", isFav : true},
                { title: "Train to Pakistan", author: "Khushwant Singh", age: 99 ,img: "../assets/man.png", isFav : false},
                { title: "A Suitable Boy", author: "Vikram Seth", age: 72 ,img: "../assets/girl.png", isFav : true},
                { title: "The White Tiger", author: "Aravind Adiga", age: 49 ,img: "../assets/woman.png", isFav : true}
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        toggleIsFav(book){
            book.isFav = !book.isFav
        }
    }
})

app.mount('#lists')