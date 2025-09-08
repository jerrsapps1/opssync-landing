# SafetySync.AI - Enterprise Safety Management Platform

An AI-powered enterprise safety management platform that transforms workforce document processing and OSHA compliance through intelligent extraction, verification, and proactive risk management.

## 🚀 Features

### Core Platform Features
- **AI-Powered Document Processing** with OpenAI GPT-4o integration
- **Real-time Compliance Tracking** and monitoring
- **Employee Certificate Management** with QR Code verification
- **Training Matrix** and OSHA Standards alignment
- **Mobile-Responsive Design** with adaptive UI components
- **Advanced Security** with authentication and rate limiting

### Key Modules
- **Employee Management** - Complete employee database with 200+ records
- **Training Management** - Course creation, tracking, and certification
- **Compliance Manager** - OSHA compliance tracking and audit management
- **Document Hub** - AI-powered document upload and processing
- **AI Insights** - Predictive analytics and safety recommendations
- **Dashboard Analytics** - Real-time metrics and reporting

## 🛠️ Technology Stack

### Backend
- **Node.js** with Express.js
- **JWT Authentication** with bcrypt
- **OpenAI API** integration for AI features
- **Multer** for file uploads
- **Express Validator** for input validation
- **Helmet** for security headers
- **CORS** and rate limiting

### Frontend
- **React 18** with Vite
- **React Router** for navigation
- **React Query** for state management
- **Tailwind CSS** for styling
- **React Hook Form** for forms
- **Recharts** for data visualization
- **Lucide React** for icons

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Backend Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

3. **Configure environment variables:**
   ```env
   PORT=5000
   NODE_ENV=development
   JWT_SECRET=your-secret-key
   OPENAI_API_KEY=your-openai-api-key
   ```

4. **Start the server:**
   ```bash
   npm run server
   ```

### Frontend Setup

1. **Navigate to client directory:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

### Production Build

1. **Build the frontend:**
   ```bash
   cd client
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

## 🔐 Authentication

### Default Login Credentials
- **Email:** admin@safetysync.ai
- **Password:** password

### JWT Token Management
- Tokens are automatically stored in localStorage
- Automatic token refresh and validation
- Secure logout with token removal

## 📊 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user

### Employees
- `GET /api/employees` - Get all employees
- `POST /api/employees` - Create employee
- `PUT /api/employees/:id` - Update employee
- `DELETE /api/employees/:id` - Delete employee
- `GET /api/employees/:id/certifications` - Get employee certifications

### Training
- `GET /api/training/courses` - Get training courses
- `POST /api/training/courses` - Create course
- `GET /api/training/records` - Get training records
- `POST /api/training/records` - Create training record
- `GET /api/training/analytics` - Get training analytics

### Compliance
- `GET /api/compliance/records` - Get compliance records
- `POST /api/compliance/records` - Create compliance record
- `GET /api/compliance/violations` - Get violations
- `POST /api/compliance/violations` - Create violation
- `GET /api/compliance/analytics` - Get compliance analytics

### Documents
- `GET /api/documents` - Get all documents
- `POST /api/documents/upload` - Upload document
- `POST /api/documents/:id/process` - Process document with AI
- `GET /api/documents/:id/analysis` - Get AI analysis

### AI Services
- `POST /api/ai/analyze-document` - Analyze document
- `POST /api/ai/generate-insights` - Generate safety insights
- `POST /api/ai/detect-anomalies` - Detect anomalies
- `POST /api/ai/validate-certificate` - Validate certificate
- `POST /api/ai/generate-report` - Generate AI report

## 🎨 UI Components

### Design System
- **Color Palette:** Professional blue and purple gradients
- **Typography:** Inter font family
- **Components:** Reusable card, button, and form components
- **Responsive:** Mobile-first design approach

### Key Components
- **Dashboard Cards** - Real-time metrics display
- **Data Tables** - Sortable and filterable employee/training data
- **Charts** - Interactive compliance and training analytics
- **File Upload** - Drag-and-drop document upload
- **Status Badges** - Visual status indicators
- **Loading States** - Smooth loading animations

## 🔧 Development

### Project Structure
```
safetysync-ai-clean1/
├── server/
│   ├── routes/
│   │   ├── auth.js
│   │   ├── employees.js
│   │   ├── training.js
│   │   ├── compliance.js
│   │   ├── documents.js
│   │   └── ai.js
│   └── index.js
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
├── package.json
└── README.md
```

### Available Scripts

#### Backend
- `npm run server` - Start development server with nodemon
- `npm start` - Start production server
- `npm run dev` - Start development server

#### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Environment Variables
```env
PORT=5000
NODE_ENV=production
JWT_SECRET=your-production-secret-key
OPENAI_API_KEY=your-openai-api-key
```

### Build Commands
```bash
# Install all dependencies
npm install
cd client && npm install

# Build frontend
cd client && npm run build

# Start production server
npm start
```

## 📈 Analytics & Reporting

### Dashboard Metrics
- **Employee Overview** - Total employees, departments, positions
- **Training Progress** - Completion rates, average scores
- **Compliance Status** - OSHA compliance rates, violations
- **Document Processing** - AI processing success rates
- **Risk Assessment** - AI-powered risk analysis

### AI-Powered Features
- **Document Analysis** - Automatic data extraction from certificates
- **Anomaly Detection** - Identify compliance risks
- **Predictive Analytics** - Forecast training needs
- **Certificate Validation** - Verify document authenticity
- **Safety Insights** - AI-generated recommendations

## 🔒 Security Features

- **JWT Authentication** with secure token storage
- **Password Hashing** with bcrypt
- **Rate Limiting** to prevent abuse
- **Input Validation** with express-validator
- **Security Headers** with helmet
- **CORS Protection** for cross-origin requests
- **File Upload Validation** with type and size limits

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- **Email:** support@safetysync.ai
- **Documentation:** [SafetySync.AI Docs](https://docs.safetysync.ai)
- **Issues:** [GitHub Issues](https://github.com/safetysync-ai/issues)

## 🎯 Roadmap

### Upcoming Features
- **Mobile App** - Native iOS and Android applications
- **Advanced AI** - Enhanced document processing capabilities
- **Integration APIs** - Third-party system integrations
- **Advanced Reporting** - Custom report builder
- **Multi-language Support** - Internationalization
- **Advanced Analytics** - Machine learning insights

---

**SafetySync.AI** - Transforming workplace safety through intelligent technology. "# opssync-landing" 
