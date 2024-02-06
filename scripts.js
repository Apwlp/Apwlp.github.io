let products = []
let total = 0


function add(product, price){
    console.log(product, price)
    products.push(product)
    total = total + price
    document.getElementById('checkout').innerHTML = `Pagar $${total}`
}

function addColorVariable(product, price) {
    var checkboxes = document.getElementsByName('color');
    var selectedColor = '';

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedColor = checkboxes[i].id;
            break;
        }
    }

    if (selectedColor !== '') {
        console.log("Producto:", product, "Color:", selectedColor, "Precio:", price);
        products.push(product)
        total = total + price
        document.getElementById('checkout').innerHTML = `Pagar $${total}`
    } else {
        alert("Por favor, seleccione un color.");
    }
}

function removeLastProduct() {
    if (products.length > 0) {
        var lastProduct = products.pop();
        total = total - 0;
        document.getElementById('checkout').innerHTML = `Pagar $${total}`;
        alert("Se eliminó el último producto agregado: " + lastProduct);
    } else {
        alert("No hay productos para eliminar.");
    }
}

function pay(){
    window.alert(products.join(', \n'))
    total = 0
    document.getElementById('checkout').innerHTML = `Pagar $${total}`
}