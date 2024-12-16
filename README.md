<p align="center">
<a href="https://github.com/donotdisturb7/relax_shutter">
<img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo">
</a>
</p>

# Relax Shutter 📸

Relax Shutter is a social media platform dedicated to sharing weekend and travel experiences through photography. It's a space where users can document their adventures, discover new destinations, and connect with fellow travelers.

## 🌟 Features

### Core Functionality
- **Photo Sharing**: Share your weekend and travel moments with high-quality image uploads
- **User Profiles**: Customizable profiles with:
  - Profile picture
  - Cover photo
  - Bio information
  - Photo gallery

### Social Features
- **Follow System**: Connect with other travelers
- **Feed**: Personalized feed showing posts from followed users
- **Discover**: Explore photos from the community
- **Interactions**: 
  - Like posts
  - Share experiences

### User Experience
- **Responsive Design**: Fully responsive interface that works on desktop and mobile devices
- **Real-time Updates**: Instant notifications for likes and follows
- **Image Management**: Upload, crop, and edit photos before sharing

## 🛠 Technical Stack

### Frontend
- Vue.js 3 with Composition API
- Inertia.js for seamless client-side navigation
- Tailwind CSS for styling
- Heroicons for icons

### Backend
- Laravel 10
- MySQL database
- Laravel Sanctum for authentication
- Laravel Storage for file management

## 🚀 Getting Started

### Prerequisites
- PHP >= 8.1
- Composer
- Node.js & NPM
- MySQL

### Installation

1. Clone the repository

```bash
git clone https://github.com/donotdisturb7/relax_shutter.git
cd relax_shutter
```

2. Install PHP dependencies

```bash
composer install
```

3. Install NPM packages

```bash
npm install
```

4. Configure environment

```bash
cp .env.example .env
php artisan key:generate
```

5. Configure your database in `.env`

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=relax_shutter
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

6. Run migrations

```bash
php artisan migrate
```

7. Link storage

```bash
php artisan storage:link
```

8. Start the development server

```bash
php artisan serve
npm run dev
```

## 📱 Usage

1. Create an account or log in
2. Set up your profile with a photo and cover image
3. Start sharing your weekend and travel photos
4. Follow other users to see their content in your feed
5. Explore the discover page to find new content
6. Interact with the community through likes


## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 👥 Authors

- [donotdisturb7](https://github.com/donotdisturb7)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape Relax Shutter
- Special thanks to the Vue.js and Laravel communities for their excellent documentation
- Inspiration from various travel and photography platforms

## Security Vulnerabilities

If you discover a security vulnerability within Relax Shutter, please send an e-mail via [GitHub](https://github.com/donotdisturb7). All security vulnerabilities will be promptly addressed.

---

<p align="center">Built with ❤️ using Laravel and Vue.js</p>
