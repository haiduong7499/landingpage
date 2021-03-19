const productItems = [
    {
        name: 'Product 1',
        price: 100000,
        image: './images/product-1.png',
        type: 'woman',
        description: 'This is a description of product 1'
    },
    {
        name: 'Product 2',
        price: 200000,
        image: './images/product-2.png',
        type: 'woman',
        description: 'This is a description of product 2'
    },
    {
        name: 'Product 3',
        price: 300000,
        image: './images/product-3.png',
        type: 'woman',
        description: 'This is a description of product 3'
    },
    {
        name: 'Product 4',
        price: 100000,
        image: './images/product-4.png',
        type: 'men',
        description: 'This is a description of product 4'
    },
    {
        name: 'Product 5',
        price: 200000,
        image: './images/product-5.png',
        type: 'men',
        description: 'This is a description of product 5'
    },
    {
        name: 'Product 6',
        price: 300000,
        image: './images/product-6.png',
        type: 'men',
        description: 'This is a description of product 6'
    }
]

const selectedItems = [];

function createProduct(product) {
    const productItemElement = document.createElement('div');
    productItemElement.classList.add('product-items');
    //Create product image
    const productimgElement = document.createElement('img');
    productimgElement.setAttribute('src', product.image);
    productItemElement.appendChild(productimgElement);
    // Create product title
    const productTitleElement = document.createElement('h5');
    productTitleElement.classList.add('product-item');
    productTitleElement.innerHTML = product.name;
    productItemElement.appendChild(productTitleElement);
    // Create product description
    const productdescriptionElement = document.createElement('small');
    productdescriptionElement.innerHTML = product.description;
    productItemElement.appendChild(productdescriptionElement);
    // Create product price
    const productpriceElement = document.createElement('p');
    productpriceElement.innerHTML = `<strong>${product.price}</strong> VND`
    productItemElement.appendChild(productpriceElement);
    // Create product button
    const productbtnElement = document.createElement('button');
    productbtnElement.classList.add('btn', 'btn-buy');
    productbtnElement.addEventListener('click', ()=> updateCart(product))
    productbtnElement.innerHTML = "ADD TO CART"
    productItemElement.appendChild(productbtnElement);

    return productItemElement;
}


function createWomanProduct(productList) {

    const rowElem = document.getElementById('woman-product');
    
    //Remove old nodes
    while(rowElem.hasChildNodes()){
        rowElem.removeChild(rowElem.firstChild);
    }
    
    
    const womanItems = productList.filter(p => p.type == 'woman');
    womanItems.forEach(womanProduct => {
        const colElem = document.createElement('div');
        colElem.classList.add('col');
        rowElem.appendChild(colElem);

        colElem.appendChild(createProduct(womanProduct));
    })
}


function createMenProduct() {
}
//get filter button
const filterButtonElem = document.getElementById('btn-filter');

filterButtonElem.addEventListener('click', (e) => {
    e.preventDefault();

    // Get Min/Max values
    const minVal = document.getElementById('minPrice').value;
    const maxVal = document.getElementById('maxPrice').value;

    // Filter products
    const filteredProduct = productItems.filter(product => {
        if(minVal == '' && maxVal ==''){
            return product;
        }
        if(product.price >= minVal && product.price <= maxVal){
            return product;
        }
    });
    console.log(filteredProduct);

    // Re-render product list
    createWomanProduct(filteredProduct);


})

//count cart
function updateCart(product){
    selectedItems.push(product);
    // Query badge
    document.getElementById('count').innerHTML = selectedItems.length;
};
createWomanProduct(productItems);
createMenProduct();

