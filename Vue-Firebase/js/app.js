const app = Vue.createApp({
    data(){
        return{
            showBooks : true,
            title: "Some title",
            author: "Priyanshu Dave",
            age : 45,
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title){
            // this.title = "Book by obama"
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if(data)
                console.log(data)
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')