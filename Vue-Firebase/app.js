const app = Vue.createApp({
    data(){
        return{
            title: "Some title",
            author: "Priyanshu Dave",
            age : 45
        }
    },
    methods: {
        changeTitle(title){
            // this.title = "Book by obama"
            this.title = title
        }
    }
})

app.mount('#app')