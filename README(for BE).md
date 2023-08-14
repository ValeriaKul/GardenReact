## REST Endpoints

**General URL**: https://dry-island-42334-f1f2e58883c2.herokuapp.com

### Get All Categories

- **Method**: GET
- **Path**: /categories/all
- **Description**: Retrieve a list of all categories
- **Response**: List<Category>

```json
[
{
"id": 1,
"title": "Annuals",
"createdAt": "2022-10-02 14:43:29",
"updatedAt": "2022-10-02 14:43:29",
"image": "/category_img/1.jpeg"
},
{
"id": 2,
"title": "Nursery",
"createdAt": "2022-10-02 14:43:29",
"updatedAt": "2022-10-02 14:43:29",
"image": "/category_img/2.jpeg"
}
// More category entries...
]
```

### Get All Products by Category ID

- **Method**: GET
- **Path**: /categories/{id}
- **Description**: Retrieve a list of products associated with a specific category ID
- **Response**: List<Product>

```json
[
{
"id": 1,
"title": "Savannah Summer Annual Collection",
"price": 53,
"discount_price": 50,
"description": "We love this fusion of colorful blossoms, created by combining some of the most floriferous and high performance annuals we know in our Savannah Summer Collection. Cherry-red Zinnia and sunrise-hued Lantana provide a perpetual fountain of flowers amidst the dark purple spiky foliage of Tradescantia.",
"createdAt": "2022-10-02 14:43:29",
"updatedAt": "2022-10-02 14:43:29",
"categoryId": 1,
"image": "/product_img/1.jpeg"
},
{
"id": 2,
"title": "Angelonia angustifolia Archangel™ White",
"price": 10.75,
"discount_price": null,
"description": "Angelonia angustifolia Archangel™ White displays pristine white blossoms arranged on tall stems that sparkle above clean, glossy, dark green foliage. These sturdy, well-branched plants add texture and commanding presence to borders, containers, and flower arrangements.",
"createdAt": "2022-10-02 14:43:29",
"updatedAt": "2022-10-02 14:43:29",
"categoryId": 1,
"image": "/product_img/2.jpeg"
},
// more products in category #1
]
```
Status: 200 OK

### Get All Products

- **Method**: GET
- **Path**: /products/all
- **Description**: Retrieve a list of all products
- **Response**: List<Product>

```json
[
{
"id": 1,
"title": "Savannah Summer Annual Collection",
"price": 53,
"discount_price": 50,
"description": "We love this fusion of colorful blossoms, created by combining some of the most floriferous and high performance annuals we know in our Savannah Summer Collection. Cherry-red Zinnia and sunrise-hued Lantana provide a perpetual fountain of flowers amidst the dark purple spiky foliage of Tradescantia.",
"createdAt": "2022-10-02 14:43:29",
"updatedAt": "2022-10-02 14:43:29",
"categoryId": 1,
"image": "/product_img/1.jpeg"
},
{
"id": 2,
"title": "Angelonia angustifolia Archangel™ White",
"price": 10.75,
"discount_price": null,
"description": "Angelonia angustifolia Archangel™ White displays pristine white blossoms arranged on tall stems that sparkle above clean, glossy, dark green foliage. These sturdy, well-branched plants add texture and commanding presence to borders, containers, and flower arrangements.",
"createdAt": "2022-10-02 14:43:29",
"updatedAt": "2022-10-02 14:43:29",
"categoryId": 1,
"image": "/product_img/2.jpeg"
},
// more products
]
```

### Get Product by ID

- **Method**: GET
- **Path**: /products/{id}
- **Description**: Retrieve a product with a specific ID
- **Response**: Product
```json
{
"id": 1,
"title": "Savannah Summer Annual Collection",
"price": 53,
"discount_price": 50,
"description": "We love this fusion of colorful blossoms, created by combining some of the most floriferous and high performance annuals we know in our Savannah Summer Collection. Cherry-red Zinnia and sunrise-hued Lantana provide a perpetual fountain of flowers amidst the dark purple spiky foliage of Tradescantia.",
"createdAt": "2022-10-02 14:43:29",
"updatedAt": "2022-10-02 14:43:29",
"categoryId": 1,
"image": "/product_img/1.jpeg"
}
```

### Get All Clients

- **Method**: GET
- **Path**: /sale/send/all
- **Response**: List<Client>
```json
[
{
"phoneNumber": “+49123456789”,
"createdAt": "2022-10-02 14:43:29"
},
{
"phoneNumber": “+49987654321”,
"createdAt": "2022-10-05 14:45:00"
},
// more clients
]
```


### Create New Client

- **Method**: POST
- **Path**: /sale/send
- **Description**: Check if the customer's phone number is in the database for a discount coupon
- **Request**: DiscountRequestDTO
```json
{
"phoneNumber": “+49123456789”,
}
```
- **Response**: DiscountResponseDTO
```json
{
"isClientRegistered": true
}
```

### Receive Client’s Order

- **Method**: POST
- **Path**: /order/send
- **Description**: Receive a customer order for further processing
- **Request**: List<OrderRequestDTO>
```json
[
{
"id": 1,
“count”: “3”,
“price”:  “12.95”
},
{
"id": 5,
“count”: “1”,
“price”:  “88”
},
// more products …
]
```
- **Response**: OrderResponseDTO

```json
{
"message": “Order placed successfully. Confirmation will be sent to you by email."
}
```
