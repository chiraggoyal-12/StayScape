# 🏡 StayScape

StayScape is a full-stack web application that allows users to browse, list, review, and manage travel property listings. It's built using the **MERN-style tech stack** (MongoDB, Express.js, Node.js, EJS), and includes features such as user authentication, image uploads, form validation, flash messaging, and more.

## 🚀 Features

* User Authentication (Sign up / Login / Logout)
* CRUD Operations for Listings
* Reviews with Ratings
* Flash Messages for Success/Error
* Responsive Design
* Secure Session Handling
* Image Upload with Cloudinary
* Protected Routes (only logged-in users can create/edit/delete)

## 🧠 Tech Stack

* **Backend:** Node.js, Express.js, MongoDB, Mongoose
* **Frontend:** EJS, HTML, CSS, JavaScript
* **Authentication:** Passport.js, express-session
* **File Uploads:** Multer, Cloudinary
* **Validation:** JOI Schema Validation
* **Utilities:** Method Override, Connect-Flash

## 📁 Project Structure

```bash
StayScape/
│
├── controllers/         # Logic for listings, users, and reviews
├── models/              # Mongoose models (User, Listing, Review)
├── routes/              # Express routes (listing.js, review.js, user.js)
├── views/               # EJS views (includes, listings, users)
│   ├── includes/        # Navbar, footer, flash messages
│   ├── listings/        # CRUD pages for listings
│   └── users/           # Login and signup pages
├── public/              # Static assets (CSS, JS)
├── utils/               # Custom utilities like ExpressError, wrapAsync
├── init/                # DB seed scripts
├── .env                 # Environment variables
├── app.js               # Main entry point
├── cloudConfig.js       # Cloudinary config
├── middleware.js        # Custom middleware functions
├── schema.js            # JOI validation schemas
├── package.json
└── README.md
```

## 🔐 Environment Variables

Create a `.env` file in the root directory and add:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
```

> Make sure to never upload your `.env` to GitHub. It's already ignored in `.gitignore`.

## 🧰 Seed the Database

Run the seed script if needed:

```bash
node init/index.js
```

## ✅ Getting Started

1. Clone the repository:

```bash
git clone https://github.com/chiraggoyal-12/StayScape.git
cd StayScape
```

2. Install dependencies:

```bash
npm install
```

3. Start the app:

```bash
nodemon app.js
```

Visit: [http://localhost:8080](http://localhost:8080)

## 📸 Screenshots

*Add your application screenshots here (optional).*

## 🙌 Author

**Chirag Goyal**
[GitHub Profile](https://github.com/chiraggoyal-12)

---

> ⚠️ This project is for educational/demo purposes only.
