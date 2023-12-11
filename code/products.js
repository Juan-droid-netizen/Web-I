const products = [
    {
        name: 'Bicicleta montaña',
        image: './styles/img/bicicleta.jpg',
        price: 200,
        quantity: 2,
    },
    {
        name: 'Iphone 7',
        image: './styles/img/iphone.jpg',
        price: 500,
        quantity: 4,
    },
    {
        name: 'Gafas de sol',
        image: './styles/img/gafas.jpg',
        price: 100,
        quantity: 6,
    },
    {
        name: 'Juego comedor',
        image: './styles/img/comedor.jpg',
        price: 320,
        quantity: 1,
    }
];

window.onload = function() {
    const container = document.getElementById('product-container');

    products.forEach(product => {
        const total = product.price * product.quantity;

        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Precio: ${product.price}</p>
            <p>Cantidad: ${product.quantity}</p>
            <p>Total: ${total}</p>
        `;

        container.appendChild(productElement);
    });
};