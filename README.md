# ✅ To-Do-List

A simple and clean To-Do List web application. This app allows users to add, update, delete, and mark tasks as completed. It follows a basic security configuration without authentication.

---

## 📌 Features

- Add new tasks to your to-do list
- Edit existing tasks
- Delete tasks
- Mark tasks as complete or incomplete
- View all, completed, and pending tasks
- Simple user interface using HTML and CSS
- Connected to a MySQL database using Spring Data JPA
- Spring Boot based backend with basic security configuration (no login or auth)

---

## 🛠️ Technologies Used

- ☕ **Java 21**
- 🌱 **Spring Boot**
- 🛢️ **MySQL**
- 📄 **Spring Data JPA**
- 🖥️ **HTML5**
- 🎨 **CSS3**
- 🔐 **Spring Security (Basic Config Only)**

---

## ⚙️ Project Structure

```plaintext
To-Do-List/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/todolist/
│   │   │       ├── controller/
│   │   │       ├── entity/
│   │   │       ├── repository/
│   │   │       └── service/
│   │   ├── resources/
│   │   │   ├── static/
│   │   │   │   ├── css/
│   │   │   │   └── js/
│   │   │   ├── templates/
│   │   │   └── application.properties
│
├── README.md
└── pom.xml
