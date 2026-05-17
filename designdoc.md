# AI Invoice SaaS — Design Document

## Overview
This is a full-stack Software-as-a-Service (SaaS) application for **AI-powered invoice generation and management**. The platform enables users to create, manage, and preview professional invoices with intelligent automation powered by Google's Gemini AI.

---

## Architecture

### Pattern: MVC (Model-View-Controller)
The application follows a classic MVC architecture with a clear separation of concerns:

```
Client (React Frontend)
         ↓
   REST API (Express Backend)
    ↙    ↓    ↘
Routes  Controllers  Models
         ↓
    MongoDB Database
```

### Tech Stack

**Backend:**
- **Framework:** Express.js (Node.js)
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** Clerk API
- **AI Integration:** Google Generative AI (Gemini)
- **File Storage:** Multer for file uploads
- **Utilities:** CORS, dotenv, bcryptjs, JWT

**Frontend:**
- **Framework:** React 19 with Vite
- **Styling:** Tailwind CSS + Tailwind Vite plugin
- **Routing:** React Router v7
- **Authentication:** Clerk React SDK
- **Build Tool:** Vite

---

## Core Features

### 1. **User Authentication & Authorization**
- **Implementation:** Clerk Auth
- **Features:**
  - Secure sign-up and login
  - JWT-based session management
  - User identity tracking via `userId` from Clerk
  - Protected API routes requiring authentication

### 2. **Invoice Management (CRUD)**
- **Implementation:** `invoiceRouter`, `invoiceController`, `invoiceModel`
- **Features:**
  - ✅ **Create Invoice** - Generate new invoices with automatic invoice numbering
  - ✅ **Read Invoices** - Retrieve all invoices for authenticated user
  - ✅ **Get Invoice by ID** - Fetch single invoice details
  - ✅ **Update Invoice** - Modify invoice details, items, and metadata
  - ✅ **Delete Invoice** - Remove invoices from the system
  - **Invoice Fields:**
    - Invoice number (auto-generated, unique)
    - Issue date & due date
    - Business information (name, email, address, phone, GST)
    - Client information (name, email, address, phone, GST)
    - Line items (description, quantity, unit price)
    - Tax percentage & calculations
    - File attachments (logo, stamp, signature)

### 3. **Business Profile Management**
- **Implementation:** `bussinessProfileRouter`, `bussinessProfileController`, `bussinessProfileModel`
- **Features:**
  - Store and manage business details
  - Reusable business information across invoices
  - Update company profile information

### 4. **AI-Powered Invoice Generation**
- **Implementation:** `AiInvoiceRouter` with Google Generative AI
- **Features:**
  - ✅ **Text-to-Invoice:** Convert plain text/natural language prompts into structured invoice JSON
  - ✅ **Gemini Integration:** Uses `gemini-3-flash-preview` model
  - **AI Extraction:** Automatically extracts:
    - Client name & email
    - Line items (description, quantity, price)
    - Due date from text descriptions
  - **Error Handling:** Graceful handling of rate limits (429) and API failures
  - **Response Format:** Returns clean JSON structure ready for invoice creation

### 5. **File Upload & Management**
- **Implementation:** Multer middleware for handling file uploads
- **Supported Files:**
  - Business logo
  - Invoice stamp
  - Digital signature
- **File URL Conversion:** Uploaded files are converted to public URLs for display

### 6. **Tax Calculation**
- **Implementation:** `computeTotals()` utility function
- **Features:**
  - Automatic subtotal calculation from line items
  - Tax computation based on percentage
  - Total amount = Subtotal + Tax
  - Precision handling for financial calculations

### 7. **Invoice Preview**
- **Implementation:** `InvoicePreview.jsx` component
- **Features:**
  - Visual rendering of invoice
  - Display of all invoice details with formatting
  - Client and business information display
  - Item breakdown with totals

### 8. **Dashboard & Analytics**
- **Implementation:** `Dashboard.jsx` + `KpiCard.jsx` component
- **Features:**
  - Overview of key metrics
  - KPI cards for tracking invoice stats
  - Quick access to business metrics

### 9. **User Interface Pages**
- **Implementation:** React components in `pages/` and `components/`
- **Features:**
  - ✅ **Home Page** - Landing page with product overview
  - ✅ **Dashboard** - User workspace with analytics
  - ✅ **Create Invoice** - Form-based invoice creation
  - ✅ **Invoices List** - View all user invoices
  - ✅ **Business Profile** - Manage business information
  - ✅ **Features Page** - Product features showcase
  - ✅ **Pricing Page** - Pricing plans
  - ✅ **Hero Section** - Marketing landing area
  - ✅ **Footer** - Navigation footer
  - ✅ **Navigation Bar** - Top navigation with auth integration

### 10. **AI Invoice Modal**
- **Implementation:** `AiInvoiceModel.jsx`
- **Features:**
  - Modal interface for AI-powered invoice generation
  - Text input for natural language prompts
  - Real-time AI processing
  - Integration with Gemini API

### 11. **Status Badges**
- **Implementation:** `StatusBadge.jsx` component
- **Features:**
  - Visual status indicators for invoices
  - Customizable badge styling

---

## API Endpoints

### Invoice Routes (`/api/invoice`)
```
GET     /                   - Get all invoices
POST    /                   - Create new invoice
GET     /:id                - Get invoice by ID
PUT     /:id                - Update invoice
DELETE  /:id                - Delete invoice
```

### Business Profile Routes (`/api/business-profile`)
```
All CRUD operations for managing business information
```

### AI Invoice Routes (`/api/ai-invoice`)
```
POST    /generate           - Generate invoice from AI prompt
```

---

## Database Schema

### Invoice Model
- `owner` - User ID (indexed)
- `invoiceNumber` - Unique invoice identifier (indexed)
- `issueDate` - Date invoice issued
- `dueDate` - Payment due date
- **Business Info:** name, email, address, phone, GST number
- **Client Info:** name, email, address, phone, GST number
- `items[]` - Array of line items (description, qty, unitPrice)
- `taxPercent` - Tax percentage
- `subtotal`, `tax`, `total` - Calculated amounts
- File URLs - logoDataUrl, stampDataUrl, signatureDataUrl
- `notes` - Additional invoice notes
- Timestamps (createdAt, updatedAt)

---

## Security Features

### Authentication
- ✅ Clerk-powered authentication middleware on all API routes
- ✅ User identity verification via `getAuth(req)`
- ✅ Protected endpoints returning 401 for unauthenticated requests

### Authorization
- ✅ User can only access their own invoices (owner field)
- ✅ Business profile tied to authenticated user

### Data Protection
- ✅ Sensitive API keys stored in `.env` files (not committed)
- ✅ CORS configured for trusted origins only
- ✅ Request body size limits (20mb)
- ✅ Input validation on invoice fields

---

## Development Workflow

### Backend Startup
```bash
cd backend
npm install
# Configure .env with Clerk and Gemini keys
npm run start
# Server runs on http://localhost:4000
```

### Frontend Startup
```bash
cd frontend
npm install
# Configure .env with Clerk publishable key
npm run dev
# Frontend runs on http://localhost:5173
```

### Environment Variables Required

**Backend (.env):**
```
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
GEMINI_API_KEY=AIzaSy...
```

**Frontend (.env):**
```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
```

---

## Deployment

### Frontend Deployment
- **Platform:** Vercel
- **Configuration:** `frontend/vercel.json` with SPA rewrite rules
- **Build Command:** `cd frontend && npm install && npm run build`
- **Output Directory:** `frontend/dist`

### Backend Deployment
- **Recommended:** Railway, Render, or AWS
- **Requirements:** Node.js v18+, MongoDB Atlas connection
- **Environment Variables:** Must be added via platform dashboard

---

## Future Enhancements

- [ ] Add Docker support for consistent deployment
- [ ] Implement CI/CD with GitHub Actions
- [ ] Advanced input validation and sanitization
- [ ] Invoice templates customization
- [ ] Email notifications for due invoices
- [ ] Multi-currency support
- [ ] Invoice payment tracking
- [ ] Client portal for invoice access
- [ ] Automated invoice reminders
- [ ] Advanced reporting and analytics

---

## Project Structure

```
SAAS-projects/
├── backend/
│   ├── config/
│   │   └── db.js                    # MongoDB connection
│   ├── controllers/
│   │   ├── invoiceController.js     # Invoice CRUD logic
│   │   └── bussinessProfileController.js
│   ├── models/
│   │   ├── invoiceModel.js          # Invoice schema
│   │   └── bussinessProfileModel.js
│   ├── routes/
│   │   ├── invoiceRouter.js         # Invoice endpoints
│   │   ├── bussinessProfileRoutes.js
│   │   └── AiInvoiceRouter.js       # AI generation endpoint
│   ├── server.js                    # Express app setup
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── CreateInvoice.jsx
│   │   │   ├── Invoices.jsx
│   │   │   └── BusinessProfile.jsx
│   │   ├── components/
│   │   │   ├── AiInvoiceModel.jsx   # AI modal
│   │   │   ├── InvoicePreview.jsx   # Invoice display
│   │   │   ├── KpiCard.jsx          # Metrics card
│   │   │   ├── Navbar.jsx
│   │   │   └── ... (other components)
│   │   ├── App.jsx                  # Router config
│   │   └── main.jsx                 # Entry point
│   ├── vite.config.js
│   └── package.json
│
├── DESIGN.md                        # This file
└── README.md                        # Quick start guide
```

---

## Key Implementation Highlights

### Smart Invoice Numbering
- Unique auto-generated invoice numbers combining timestamp and random suffix
- Collision detection with database fallback to ObjectId

### Tax Calculation
- Precise financial calculations with floating-point handling
- Support for variable tax percentages per invoice

### AI Text Extraction
- Natural language processing via Gemini API
- Automatic JSON parsing from AI response
- Error recovery for malformed AI output

### File Upload Integration
- Multi-file upload support
- Conversion to public URLs
- Mapping of field names to API response format

### User Data Isolation
- Every invoice scoped to authenticated user
- Index on owner field for performance
- Query filtering ensures users only access their data

---

## Testing & Quality

- **Linting:** ESLint configured for code quality
- **Framework Validation:** React and React-DOM types
- **API Testing:** Ready for manual or automated testing

---

## Summary

This SaaS platform provides a complete solution for **AI-assisted invoice generation and management**, combining modern web technologies with intelligent automation. The MVC architecture ensures clean code separation, while Clerk and Gemini integrations provide robust authentication and AI capabilities.

All features listed in this document represent the core functionality built into the application for professional invoice handling in a SaaS environment.
