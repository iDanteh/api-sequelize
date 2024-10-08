import Product from '../model/users.model.js'

// Crear un nuevo producto
export const createProduct = async (req, res) => {
    try {
        const { product_name, price, stock } = req.body;
        console.log(req.body);  // Verifica qué datos están llegando al servidor
        const product = await Product.create({ product_name, price, stock });
        res.status(201).json(product);
    } catch (error) {
        console.error(error);  // Esto te permitirá ver el error específico
        res.status(500).json({ error: 'Error al crear el producto' });
    }
};


// Obtener todos los productos
export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

// Obtener un producto por ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
};

// Actualizar un producto
export const updateProduct = async (req, res) => {
    try {
        const { product_name, price, stock } = req.body;
        const product = await Product.findByPk(req.params.id);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        product.product_name = product_name;
        product.price = price;
        product.stock = stock;
        await product.save();

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        await product.destroy();
        res.status(200).json({ message: 'Producto eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
};
