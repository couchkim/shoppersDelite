window.addEventListener('load', function(){
    
    let products = [
    
    makeProduct('http://cdn.shopify.com/s/files/1/0297/6313/products/seedbeadchokerhavanamoon.jpg?v=1472686292', 'Pura Vida', 'Havana Moon Necklace', 32),
    // makeProduct('Honda', 'Odyssey', 3, 100),
    // makeProduct('Honda', 'Odyssey', 3, 100),
    // makeProduct('Honda', 'Odyssey', 3, 100),
    // makeProduct('Honda', 'Odyssey', 3, 100),
    // makeProduct('Honda', 'Odyssey', 3, 100),
     ];

    console.log (products);


    
    function makeProduct(image, name, description, cost){
    return{
        image: image,
        name: name,
        description: description,
        cost: cost,
    }
}


    loadProducts(products);

    
    
})
   

function loadProducts(items){
    for (let i=0; i<items.length; i++){
    
        let parent = document.querySelector('#stuff');
        let oneItem = document.createElement('li');

        parent.appendChild(oneItem);
        
        let picture = document.createElement('img');
        picture.src = items[i].image;
        picture.setAttribute('id', 'picture');
        oneItem.appendChild(picture);

        let brand = document.createElement('h2');
        brand.textContent = items[i].name;
        brand.setAttribute('id', 'brand');
        oneItem.appendChild(brand);

        let description = document.createElement('p');
        description.textContent = items[i].description;
        description.setAttribute('id', 'spaces');
        oneItem.appendChild(description);

        let cost = document.createElement('p');
        cost.textContent = "$" + items[i].cost;
        oneItem.appendChild(cost);

        let addToCart = document.createElement('button');
        addToCart.textContent = "Add to Cart";
        addToCart.setAttribute('id', 'addToCart');
        oneItem.appendChild(addToCart);
        addToCart.addEventListener('click', function(){
            itemToCart(items[i]);
        });

    };

};