import { Router } from 'express';
import { getUsers, getUserById , createUser, deleteUser, updateUser} from '../controllers/users.controllers.js';
import { createProduct, getProducts, getProductById, deleteProduct, updateProduct} from '../controllers/controllers.sequelize.js'

const router = Router();

router.get('/', (req, res) => {res.send('This is the main route');});
router.get('/users', getUsers);
router.get('/users/:userId', getUserById);
router.post('/users', createUser);
router.delete('/users/:userId', deleteUser);
router.put('/users/:userId', updateUser);

router.post('/products', createProduct);
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

// router.post('api/users', registerUser);

// router.post('api/users', loginUser);

// router.get('api/category/:categoryId', getCategoryById);

// router.post('api/category', createCategory);

// router.get('api/reviews/:productId', getUserReviews);

// router.post('api/reviews', createUserReview);

// router.get('api/wishList/:userId', getWishList);

// router.post('api/wishList', addToWishList);

// router.delete('api/wishList/:productId', removeFromWishList);

// router.get('api/orders/:userId', getOrders);

// router.post('api/orders', createOrder);

// router.get('api/payments/:userId', getPayments);

// router.post('api/payments', createPayment);


export default router;