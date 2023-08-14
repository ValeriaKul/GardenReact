# REST endpoints

# General URL: https://dry-island-42334-f1f2e58883c2.herokuapp.com

Operation	                        Method	Path
Get all categories	                GET	    /categories/all
Get all products by category ID	    GET	    /categories/{id}
Get all products	                GET	    /products/all
Get product by ID	                GET	    /products/{id}
Get all clients	                    GET	    /sale/send/all
Create new client	                POST	/sale/send
Create new oder	                    POST	/order/send

# Get All categories
Method:         GET
Path:           /categories/all
Description:    Retrieve a list of all categories
Response:       List<Category>

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

Status: 200 OK

# Get all products by category ID
Method:         GET
Path:           /categories/{id}
Description:    Retrieve a list of products associated with a specific category ID
Response:       List<Product>

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
Status: 200 OK



# Get all products
Method:         GET
Path:           /products/all
Description:    Retrieve a list of all products
Response:       List<Product>
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

# Get product by ID
Method:         GET
Path:           /products/{id}
Description:    Retrieve a product with a specific ID.
Response:       Product

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



# Get all clients
Method:     GET
Path:       /sale/send/all
Response:   List<Client>
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


# Create new client
Method:         POST
Path:           /sale/send
Description:    Checking if the customer's phone number is in the database when trying to get a discount coupon. If the client's phone number is missing, “false” is returned and a new client (phone number) is added. If the client with the same phone number is already registered, then “true” is returned.

Request: DiscountRequestDTO
{
"phoneNumber": “+49123456789”,
}

Response: DiscountResponseDTO
{
"isClientRegistered": true
}

Status: 200 Ok



# Receive client’s order
Method:         POST
Path:           /order/send
Description:    Receipt of a customer order for further processing.

Request: List<OrderRequestDTO>

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

Response: OrderResponseDTO 
{
"message": “Order placed successfully. Confirmation will be sent to you by email."
}

Status: 200 Ok



