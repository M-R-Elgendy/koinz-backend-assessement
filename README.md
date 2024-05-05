## Project Overview
This is the backend assessment application for Koinz.


## Installation

```bash
$ npm install
```

## Running the Application

```bash
# Build nest.js app
$ npm run build

# Seed database
$ npm run seed

# Start app
$ npm run start

# The application should start at:
http://localhost:3001
```

# Online APIs
```
https://koinz-backend-assessement.onrender.com/api/v1

Note: Due to the use of a free hosting service, requests may experience delays of up to 1 minute due to inactivity on the application endpoints.
```


# API Documentation

### Add interval [POST]
Endpoint: https://koinz-backend-assessment.onrender.com/api/v1/interval

```javascript
{
	"user_id": 1,
    "book_id": 1,
    "start_page": 100,
    "end_page": 101
}

// Available user IDs: 1, 2, 3
// Available book IDs: 1, 2, 3, 4
```
#### Response
```json
{ 
    "status": 200,
    "message": "Interval created successfully",
    "interval": {
        "id": 6,
        "user_id": 1,
        "book_id": 1,
        "start_page": 100,
        "end_page": 101
    }
}
```

### Get Recommendations [GET]
Endpoint: https://koinz-backend-assessment.onrender.com/api/v1/interval

#### Response
```json
[
    {
        "book_id": 1,
        "book_name": "The Awakening",
        "author": "Kate Chopin",
        "num_of_read_pages": 29
    },
    {
        "book_id": 2,
        "book_name": "City of Glass",
        "author": "Paul Auster",
        "num_of_read_pages": 21
    },
    {
        "book_id": 3,
        "book_name": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "num_of_read_pages": 0
    },
    {
        "book_id": 4,
        "book_name": "The Odyssey",
        "author": "Homer",
        "num_of_read_pages": 0
    }
]
```


