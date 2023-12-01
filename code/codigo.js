document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault()

    let name = document.getElementById("nameId").value
    let price = document.getElementById("priceId").value
    let category = document.getElementById("categoryId").value

    if (name === " " || price === " " || category === " ") {
        alert("Todos los campos son requeridos")
    } else{
        let product = {
            name: name,
            price: "$"+ price,
            category: category
        };
        console.log(product)
        alert("Producto agregado" + JSON.stringify(product))
    }
})