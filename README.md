# StayScape 🏡

StayScape is a full-stack web application that allows users to explore, create, edit, and review travel property listings. It includes features like user authentication, image uploads, interactive maps, flash messages, and form validations.

## Features ✨

* Create, update, delete listings
* Add and remove reviews for listings
* Authentication system with login & signup
* Flash messages for feedback
* Form validations (server-side)
* Image uploads
* Map integration

## Technologies Used 💻

* **Frontend:** EJS, HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB with Mongoose
* **Authentication:** Passport.js
* **Templating Engine:** EJS-Mate
* **Image Uploads:** Multer, Cloudinary
* **Map Integration:** Mapbox

## Project Structure 📁

```
STAYSCAPE
│
├── controllers       # Route logic for listings, reviews, users
├── init              # Initialization and data seeding scripts
├── models            # Mongoose models
├── public            # Static files (CSS, JS)
├── routes            # Express route handlers
├── utils             # Custom utilities (e.g., ExpressError)
├── views             # EJS templates
│   ├── includes      # Partials like navbar, footer, flash
│   ├── layouts       # Boilerplate layout file
│   ├── listings      # Listing-related templates
│   └── users         # Login and signup pages
├── app.js            # Main server file
├── cloudConfig.js    # Cloudinary configuration
├── middleware.js     # Custom middlewares
├── package.json      # Project metadata and dependencies
├── schema.js         # Joi validation schemas
```

## Setup Instructions 🚀

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/StayScape.git
   cd StayScape
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   node app.js
   ```

4. **Access the app**
   Open your browser and navigate to `http://localhost:8080`

## 🙌 Author

**Chirag Goyal**
[GitHub Profile](https://github.com/chiraggoyal-12)

---

> ⚠️ This project is for educational/demo purposes only.
