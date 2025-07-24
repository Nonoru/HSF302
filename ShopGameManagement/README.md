# TEAM MEMBER
Nguyễn Minh Khôi
Nguyễn Phú Quý
Nguyễn Thành Thắng
Nguyễn Nhựt Huy

# Game Shop Management System

A Spring Boot application for managing a digital game shop, similar to platforms like Steam.

## Features

- Browse games in a user-friendly interface
- View detailed game information
- Filter games by category, price, and features
- Add games to cart and wishlist
- Responsive design that works on desktop and mobile

## Technologies Used

- Spring Boot 3.5.3
- Spring Security
- Spring Data JPA
- Thymeleaf
- Bootstrap 5
- MS SQL Server
- Lombok

## Setup Instructions

### Prerequisites

- Java 21 or later
- Maven
- MS SQL Server

### Database Setup

1. Create a database named `gameshopdb`
2. Update the database credentials in `src/main/resources/application.properties` if needed

### Running the Application

1. Clone this repository
2. Navigate to the project directory
3. Run `mvn spring-boot:run` or use your IDE to run the application
4. Access the application at `http://localhost:8080`

### Default Login

- Username: admin
- Password: admin

## Project Structure

- `src/main/java/com/se182393/shopgamemanagement` - Java source code
  - `controller` - Web controllers
  - `model` - Entity classes
  - `config` - Configuration classes
- `src/main/resources` - Resources
  - `templates` - Thymeleaf templates
  - `static` - Static assets (CSS, JS, images)

## Adding Game Images

Before running the application, you should add some game images to the `src/main/resources/static/images` directory. See the README in that directory for more details.

## Screenshots

(Add screenshots of your application here once it's running)

## License

This project is available for educational purposes only.

## Contributors

- [Your Name] 