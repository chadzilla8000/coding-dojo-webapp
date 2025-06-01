# Coding Dojo - Programming Skills Training Platform

A gamified learning platform that uses martial arts belt progression to track coding skill development. Practice coding katas, take quizzes, and advance through belt ranks as you master programming concepts.

## 🥋 Features

- **Belt Progression System**: Advance from White Belt to Black Belt through skill demonstration
- **Interactive Katas**: Coding challenges and quizzes across multiple programming languages
- **Progress Tracking**: Detailed history of attempts, successes, and skill development
- **Real-time Feedback**: Immediate validation and scoring of solutions
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd martial_arts
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

4. Open your browser and navigate to your development server (e.g., VS Code Live Server)

### Development Setup

1. **Start the API Server:**
   ```bash
   cd /path/to/martial_arts
   node server.js
   ```
   Server runs on `http://localhost:4000`

2. **Access Frontend:**
   Use your preferred development server (VS Code Live Server, etc.)

## 🏗️ Architecture

### Tech Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js + Express
- **Data Storage**: JSON files (development), easily migrated to database
- **API**: RESTful endpoints

### Project Structure
```
martial_arts/
├── server.js              # Express API server
├── index.html             # Main application interface
├── kata-runner.js         # Frontend application logic
├── dojo-style.css         # Application styling
├── katas.json            # Kata/quiz content
├── progress.json         # User progress data
├── package.json          # Node.js dependencies
├── belts/                # Belt rank SVG icons
│   ├── white.svg
│   ├── yellow.svg
│   └── ...
└── docs/
    ├── Z_DOJO_BUILD.md   # Comprehensive build documentation
    └── Z_PROJECT_PLAN.md # Project planning and requirements
```

## 🎯 Belt Progression System

| Belt | Requirements | Time Window | Description |
|------|-------------|-------------|-------------|
| White | 5 katas + form test | 7 days | Basic programming concepts |
| Yellow | 6 katas + form test | 10 days | Variables, functions, basic logic |
| Green | 7 katas + form test | 14 days | Control structures, loops |
| Blue | 8 katas + form test | 21 days | Data structures, algorithms |
| Brown | 9 katas + form test | 30 days | Advanced concepts, optimization |
| Red | 10 katas + form test | 45 days | Expert-level challenges |
| Black (Rec.) | 12 katas + form test | 60 days | Teaching and mentoring |
| Black | Continuous practice | 365 days | Mastery and innovation |

## 📚 API Documentation

### Endpoints

- `GET /api/katas` - Retrieve all available katas
- `GET /api/katas/:id` - Get specific kata by ID
- `GET /api/progress` - Get user progress and current belt
- `POST /api/submit` - Submit kata solution
- `POST /api/progress` - Update user progress

### Example Usage

```javascript
// Fetch available katas
const response = await fetch('http://localhost:4000/api/katas');
const katas = await response.json();

// Submit a solution
const submission = {
  kataId: 'wb-js-1',
  answer: 'let myVar;',
  result: 'pass',
  belt: 'white'
};
await fetch('http://localhost:4000/api/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(submission)
});
```

## 🔧 Development

### Branching Strategy

- **`master`**: Production-ready code
- **`feature`**: Stable feature releases
- **`development`**: Active development and testing

### Contributing

1. Create a feature branch from `development`
2. Make your changes
3. Test thoroughly
4. Submit a pull request to `development`

### Testing

```bash
# Test API endpoints
curl http://localhost:4000/api/katas
curl http://localhost:4000/api/progress

# Check server status
ps aux | grep "node server.js"
```

## 🐛 Troubleshooting

### Common Issues

1. **404 API Errors**: Ensure server is running on port 4000
2. **CORS Issues**: Check CORS configuration in server.js
3. **DOM Errors**: Verify all DOM elements exist before manipulation

See `Z_DOJO_BUILD.md` for comprehensive troubleshooting guide.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Acknowledgments

- Inspired by martial arts progression systems
- Built as a learning exercise in full-stack development
- Part of the personal development journey documented in `/finances` project