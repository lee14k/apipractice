function fetchData() {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(console.log)
        .then (data => {
            const products=Object.keys(data)
          })       
        }

fetchData()
