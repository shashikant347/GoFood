# 🚀 GoFood – Real-Time Food Delivery Application
live - https://gofood-1-wlop.onrender.com
GoFood is a full-stack food delivery web application featuring **real-time live order tracking**, a **role-based dashboard** (User, Restaurant Owner, Delivery Boy), and **Google Authentication via Firebase**.  
The system is built using **React + Node.js + Express + MongoDB + Socket.io** with modern UI using **Tailwind CSS**.

---

## use this
Email: demo@foodapp.com
Password: Demo@123
Role: User

## 🧠 Key Features

### 👤 **User**
- Browse restaurants & menus  
- Add to cart & place orders  
- Google Login (Firebase Auth)  
- Live order status updates  
- Track delivery progress in real-time  

### 🏪 **Restaurant Owner**
- Login to owner dashboard  
- Handle incoming orders  
- Update order status: *Preparing → Packed → Out for Delivery → Delivered*  
- View total sales, analytics, inventory  

### 🛵 **Delivery Boy**
- View assigned deliveries  
- Update live delivery status  
- Real-time location updates (if implemented)  

---

## ⚡ Real-Time Functionality (Socket.io)

GoFood uses **Socket.io** to provide:

- Real-time order updates  
- Instant status changes to user screen  
- Live communication between Owner → Delivery Boy → User  
- Real-time dashboard metrics  

Example events:
orderPlaced
orderUpdated
deliveryLocationUpdated
connect / disconnect


---

## 🔐 Authentication (Firebase)

Authentication is powered by **Firebase Authentication**, enabling:

- Google Sign-In  
- Secure login for Users, Owners, Delivery Boys  
- Token-based session management  

---

## 🏗️ Tech Stack

### **Frontend (React + Vite)**
- React.js  
- Tailwind CSS  
- React Router  
- Axios  
- Zustand / Redux Toolkit (if you used)  
- Socket.io Client  
- Firebase Client SDK  

### **Backend (Node + Express)**
- Express.js  
- MongoDB + Mongoose  
- Socket.io (Server)  
- JSON Web Tokens (JWT)  
- bcrypt  
- cookie-parser  
- cors  

### **Database**
- MongoDB (Mongoose models for Users, Orders, Restaurants, Delivery Agents)

---

## 📦 Packages Used

### **Frontend Packages**
| Package | Purpose |
|--------|---------|
| `react` | UI library |
| `react-router-dom` | Routing |
| `axios` | API calls |
| `socket.io-client` | Real-time updates |
| `firebase` | Google Login |
| `tailwindcss` | UI styling |
| `zustand / redux-toolkit` | State management |
| `react-icons` | Icons |

### **Backend Packages**
| Package | Purpose |
|--------|---------|
| `express` | Server framework |
| `mongoose` | MongoDB ORM |
| `socket.io` | Real-time communication |
| `jsonwebtoken` | Auth tokens |
| `bcrypt` | Password hashing |
| `cors` | API access |
| `dotenv` | Environment variables |
| `cookie-parser` | Cookie auth |
| `morgan` | Logging |
| `nodemon` | Dev server reload |

---

## 🛰️ System Workflow

### 1️⃣ **User places an order**  
- Order gets stored in MongoDB  
- Backend emits a **socket event** `orderPlaced` to Owner panel  

### 2️⃣ **Owner updates order status**  
- Owner dashboard updates order:  
  `received → preparing → packed → out for delivery → delivered`  
- Each update emits **socket event → User dashboard**  

### 3️⃣ **Delivery Boy accepts order**  
- Receives real-time notification  
- Marks status: `Picked`, `On the way`, `Reached`  


## 📁 Folder Structure
GoFood/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── config/
│ ├── socket/
│ └── index.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ ├── utils/
│ │ ├── hooks/
│ │ └── App.jsx
│ ├── public/
│
└── README.md
