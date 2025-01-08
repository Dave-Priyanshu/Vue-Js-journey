const app = Vue.createApp({
    data(){
        return{
            showBooks : true,
            title: "Some title",
            author: "Priyanshu Dave",
            age : 45
        }
    },
    methods: {
        changeTitle(title){
            // this.title = "Book by obama"
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')