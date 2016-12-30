window.addEventListener('load', function(){
    
    let products = [
    
    makeProduct('http://cdn.shopify.com/s/files/1/0297/6313/products/seedbeadchokerhavanamoon.jpg?v=1472686292', 'Pura Vida', 'Havana Moon Necklace', 32),
    makeProduct('http://verabradley.scene7.com/is/image/VeraBradley/15460669-V1?$zoom_alt_large$', 'Vera Bradley', 'Large Travel Bag', 85),
    makeProduct('https://images.lululemon.com/is/image/lululemon/LW7ACQT_0001_3?$gsr-pdt-half-lg$', 'lululemon', 'Running Short', 58),
    makeProduct('https://cdn.shopify.com/s/files/1/1538/4985/products/745_1_sky_1024x1024.jpg?v=1478891325', 'Balega', 'No Show Sock', 12),
    makeProduct('http://s7d1.scene7.com/is/image/MoosejawMB/10262254x1012379_zm?$thumb225$', 'Hunter', 'Original Tall Boot', 150),
    makeProduct('http://img.tennis-warehouse.com/watermark/rs.php?path=PDT-1.jpg&nw=350', 'Babolat', 'Pure Drive Team', 195),
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
        
        let imgSection = document.createElement('div');
        imgSection.setAttribute('id', 'imgSection');
        oneItem.appendChild(imgSection);

        let productSection = document.createElement('div');
        productSection.setAttribute('id', 'productSection');
        oneItem.appendChild(productSection);

        let picture = document.createElement('img');
        picture.src = items[i].image;
        picture.setAttribute('id', 'picture');
        imgSection.appendChild(picture);

        let brand = document.createElement('h2');
        brand.textContent = items[i].name;
        brand.setAttribute('id', 'brand');
        productSection.appendChild(brand);

        let description = document.createElement('p');
        description.textContent = items[i].description;
        description.setAttribute('id', 'spaces');
        productSection.appendChild(description);

        let cost = document.createElement('p');
        cost.textContent = "$" + items[i].cost;
        productSection.appendChild(cost);

        let addToCart = document.createElement('button');
        addToCart.textContent = "Add to Cart";
        addToCart.setAttribute('id', 'addToCart');
        productSection.appendChild(addToCart);
        addToCart.addEventListener('click', function(){
            itemToCart(items[i]);
        });

    };

};

function itemToCart(item){

    let parent = document.querySelector('#itemsBought');
    let purchasedItem = document.createElement('li');
    purchasedItem.setAttribute('id', 'bought');
    parent.appendChild(purchasedItem);

    let store = document.createElement('h3');
    store.textContent = item.name;
    purchasedItem.appendChild(store);

    let description = document.createElement('p');
    description.textContent = item.description;
    purchasedItem.appendChild(description);

    let cost = document.createElement('p');
    cost.textContent = "$" + item.cost;
    purchasedItem.appendChild(cost);

    

}