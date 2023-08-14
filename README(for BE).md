## REST Endpoints

**General URL**: https://dry-island-42334-f1f2e58883c2.herokuapp.com

### Get All Categories

- **Method**: GET
- **Path**: /categories/all
- **Description**: Retrieve a list of all categories
- **Response**: List<Category>

### Get All Products by Category ID

- **Method**: GET
- **Path**: /categories/{id}
- **Description**: Retrieve a list of products associated with a specific category ID
- **Response**: List<Product>

### Get All Products

- **Method**: GET
- **Path**: /products/all
- **Description**: Retrieve a list of all products
- **Response**: List<Product>

### Get Product by ID

- **Method**: GET
- **Path**: /products/{id}
- **Description**: Retrieve a product with a specific ID
- **Response**: Product

### Get All Clients

- **Method**: GET
- **Path**: /sale/send/all
- **Response**: List<Client>

### Create New Client

- **Method**: POST
- **Path**: /sale/send
- **Description**: Check if the customer's phone number is in the database for a discount coupon
- **Request**: DiscountRequestDTO
- **Response**: DiscountResponseDTO

### Receive Client’s Order

- **Method**: POST
- **Path**: /order/send
- **Description**: Receive a customer order for further processing
- **Request**: List<OrderRequestDTO>
- **Response**: OrderResponseDTO
