class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct (title, description, price, thumbnail, code, stock) {
        const product = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
        };
    
        const isValid = Object.values(product).every((value) => !!value);
    
        const isDuplicate = this.products.some((p) => p.code === code);
    
        if (isValid) {
            if (!isDuplicate) {
                product.id = this.nextId++;
                this.products.push(product);
                console.log("Producto agregado.");
                return true;
            } else {
                console.log("Error: El código ya fue utilizado.");
                return false;
            }
        } else {
            console.log("Error: Todos los campos son obligatorios.");
            return false;
        }
    }
    
    getProducts() {
        return this.products;
    }
    
    getProductById(productId) {
        const product = this.products.find((p) => p.id === productId);
    
        if (product) {
            return product;
        } else {
            return "Not found.";
        }
    }
}

const customProductManager = new ProductManager();

console.log(customProductManager.addProduct("Producto 1", "Descripción", 230, "img1.jpg", "COD001", 53));
console.log(customProductManager.addProduct("Producto 2", "Descripción", 170, "img2.jpg", "COD002", 28));
console.log(customProductManager.addProduct("Producto 3", "Descripción", 300, "img3.jpg", "COD003", 36));

// Prueba para ver si el error funciona.
console.log(customProductManager.addProduct("Producto 4", "Descripción", 550, "img3.jpg", "COD003", 76));


// muestra todos los productos
console.log(customProductManager.getProducts());

console.log("-------------------------------------------------")

//muestra la busqueda de productos por Id - Encuentra el primer producto.
console.log(customProductManager.getProductById(1));

//muestra la busqueda de productos por Id - No encuentra el producto 5 ya que no está agregado.
console.log(customProductManager.getProductById(5));