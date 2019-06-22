var app = new Vue({ 
    el: '#app',
    data: {
        results: []
    },
    mounted () {
        axios
            .get("https://crypto-price-api.herokuapp.com/price/zny")
            .then(response => {this.results = response})
    }
});