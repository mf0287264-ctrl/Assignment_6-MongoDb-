# Assignment 7 - Express.js & MongoDB API

This project contains the implementation of **Assignment 7**, featuring an Express.js API interacting with MongoDB via the native MongoDB driver, complete MongoDB Shell (`mongosh`) query solutions in `mongo_query.txt`, and full Postman documentation.

---

## 📌 Postman Documentation

The full API documentation with request and response examples is published here:
👉 **[Postman API Documentation](https://documenter.getpostman.com/view/52196999/2sBYB4KRpr)**

---

## 📄 Questions & MongoDB Shell Queries

- **Assignment Questions**: Found in [Assignment7.pdf](./Assignment7.pdf).
- **MongoDB Shell Queries & Output**: The file [mongo_query.txt](./mongo_query.txt) contains all MongoDB Shell commands along with their inputs and outputs.

---

## 📁 Project Folder Structure

The project follows a clean, modular MVC/layered architecture:

```
assignement6/
├── Assignment7.pdf                # Assignment questions document
├── mongo_query.txt                # MongoDB Shell queries & outputs
├── package.json                   # Project dependencies & scripts
├── README.md                      # Project documentation
├── src/
│   ├── index.js                   # Application entry point & server setup
│   ├── Config/
│   │   └── mongodb.config.js      # MongoClient database connection setup
│   ├── DB/
│   │   ├── db.connection.js       # Centralized database export
│   │   └── Models/                # MongoDB collection model instances
│   │       ├── books.model.js
│   │       ├── authors.model.js
│   │       └── logs.model.js
│   └── Module/                    # Application feature modules
│       ├── Books/                 # Books module (CRUD, filtering, aggregations)
│       │   ├── Books.routes.js
│       │   ├── Books.controller.js
│       │   └── Books.service.js
│       ├── Collection/            # Collection operations (explicit/capped/indexes)
│       │   ├── Collection.routes.js
│       │   ├── Collection.controller.js
│       │   └── Collection.service.js
│       ├── Logs/                  # Logs module (log creation)
│       │   ├── Logs.routes.js
│       │   ├── Logs.controller.js
│       │   └── Logs.service.js
│       └── Authors/               # Authors module (implicit creation)
│           ├── Authors.routes.js
│           ├── Authors.controller.js
│           └── Authors.service.js
```

### Module Breakdown:
- **`src/Config/`**: Configures MongoDB connection using `MongoClient`.
- **`src/DB/Models/`**: Collection references (`books`, `authors`, `logs`).
- **`src/Module/Collection/`**: Manages explicit collection creation with `$jsonSchema` validation, implicit author creation, capped collections, and indexes.
- **`src/Module/Books/`**: Handles single & batch inserts, title updates, range filters, genre matching, skip/limit, integer type queries, `$nin` genre exclusion, deletion before year, and 4 `$match`, `$sort`, `$project`, `$unwind`, and `$lookup` aggregation pipelines.
- **`src/Module/Logs/`**: Handles insertion of log records linked with `ObjectId` references to books.
- **`src/Module/Authors/`**: Handles author records insertion.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- MongoDB running on `mongodb://localhost:27017`

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run start:dev
```
Server runs at `http://localhost:3000`.
