# Prompt: DrivLynk Admin Dashboard - Waitlist Management

## Project Overview
Saya ingin membuat **DrivLynk Admin Dashboard** untuk mengelola waitlist dari landing page. Dashboard ini akan digunakan oleh admin untuk melihat, mengelola, dan mengupdate data waitlist yang masuk dari form registrasi.

---

## Tech Stack Requirements
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui atau custom components
- **State Management**: React hooks (useState, useEffect)
- **Authentication**: NextAuth.js atau custom JWT
- **API Client**: Fetch API dengan clean architecture pattern
- **Icons**: Lucide React

---

## Design System - DrivLynk Theme

### Color Palette
```css
/* Primary Colors */
--color-primary: #14532d;        /* Dark Forest Green */
--color-primary-hover: #166534;  /* Slightly lighter */
--color-accent: #16a34a;         /* Bright Green */
--color-accent-hover: #15803d;   /* Darker accent */

/* Neutral Colors */
--color-background: #ffffff;
--color-foreground: #0f172a;     /* Slate 900 */
--color-muted: #f8fafc;          /* Slate 50 */
--color-muted-foreground: #64748b; /* Slate 500 */

/* Status Colors */
--color-success: #16a34a;        /* Green 600 */
--color-warning: #f59e0b;        /* Amber 500 */
--color-error: #dc2626;          /* Red 600 */
--color-info: #3b82f6;           /* Blue 500 */

/* Border & Input */
--color-border: #e2e8f0;         /* Slate 200 */
--color-input: #cbd5e1;          /* Slate 300 */
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, tracking-tight
- **Body**: Regular, leading-relaxed

### Component Styling
- **Border Radius**: 0.75rem (12px) untuk cards, 0.5rem (8px) untuk buttons
- **Shadows**: Subtle, menggunakan green tint untuk primary actions
- **Spacing**: Consistent 4px grid system

---

## Features Required

### 1. Authentication System
**Login Page:**
- Email/username input
- Password input
- "Remember me" checkbox
- Login button dengan loading state
- Error handling dengan toast notification
- Redirect ke dashboard setelah login sukses

**Session Management:**
- Store token di localStorage atau httpOnly cookie
- Auto logout setelah token expired
- Protected routes (redirect ke login jika belum authenticated)

---

### 2. Dashboard Layout

**Sidebar Navigation:**
```
┌─────────────────────────────────────┐
│ 🚛 DrivLynk Admin                   │
├─────────────────────────────────────┤
│ 📊 Dashboard                        │
│ 📋 Waitlist Management    [Active] │
│ 👤 Profile                          │
│ 🚪 Logout                           │
└─────────────────────────────────────┘
```

**Top Bar:**
- Logo DrivLynk (kiri)
- Search bar (tengah) - optional untuk fase 1
- User profile dropdown (kanan)
  - Profile settings
  - Logout

**Main Content Area:**
- Breadcrumb navigation
- Page title
- Content area (responsive)

---

### 3. Waitlist Management Page

#### A. Statistics Cards (Top Section)
Display 4 cards dengan metrics:

```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Total        │ │ Pending      │ │ Contacted    │ │ Converted    │
│ 4,520        │ │ 3,200        │ │ 890          │ │ 430          │
│ +12% ↑      │ │ +8% ↑       │ │ +5% ↑       │ │ +15% ↑      │
└──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘
```

**Card Design:**
- White background
- Green accent untuk icons
- Subtle shadow
- Trend indicator (percentage change)

#### B. Filters & Actions Bar
```
┌─────────────────────────────────────────────────────────────┐
│ [🔍 Search by name/email...]  [Role ▼]  [Status ▼]  [Export CSV] │
└─────────────────────────────────────────────────────────────┘
```

**Filters:**
- Search input (debounced, search by name/email)
- Role dropdown: All, Carrier, Driver, Dispatcher, Lease-Operator
- Status dropdown: All, Pending, Contacted, Converted, Rejected
- Export CSV button (green accent)

#### C. Data Table
**Columns:**
1. **Checkbox** - untuk bulk actions
2. **Name** - Full name
3. **Email** - Email address
4. **Phone** - Phone number (optional field)
5. **Role** - Badge dengan warna berbeda per role
6. **Status** - Badge dengan warna status
7. **Registered** - Tanggal pendaftaran (relative time)
8. **Actions** - Edit, View, Delete icons

**Table Features:**
- Sortable columns (click header to sort)
- Pagination (10, 25, 50, 100 per page)
- Row hover effect
- Responsive (mobile: card view, desktop: table view)
- Loading skeleton saat fetch data
- Empty state dengan ilustrasi

**Role Badge Colors:**
- Carrier: Green
- Driver: Blue
- Dispatcher: Indigo
- Lease-Operator: Amber

**Status Badge Colors:**
- Pending: Gray
- Contacted: Blue
- Converted: Green
- Rejected: Red

#### D. Bulk Actions
```
┌─────────────────────────────────────┐
│ ☑ 5 selected                        │
│ [Mark as Contacted] [Delete]        │
└─────────────────────────────────────┘
```

#### E. Edit/Update Modal
**Trigger:** Click "Edit" icon pada row

**Modal Content:**
```
┌──────────────────────────────────────┐
│ Edit Waitlist Entry                  │
├──────────────────────────────────────┤
│ Name:     [Muhammad Rifki         ]  │
│ Email:    [rifki@example.com      ]  │
│ Phone:    [085751748482           ]  │
│ Role:     [Driver ▼               ]  │
│ Status:   [Pending ▼              ]  │
│ Notes:    [                       ]  │
│           [                       ]  │
├──────────────────────────────────────┤
│           [Cancel]  [Save Changes]   │
└──────────────────────────────────────┘
```

**Validation:**
- Required fields: name, email, role, status
- Email format validation
- Phone number format validation (optional)

---

## API Integration

### Base Configuration
```typescript
// API Base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:9001';

// Endpoints
/api/v1/auth/login          // POST - Login
/api/v1/waiting-list        // GET - List waitlist (with pagination & filters)
/api/v1/waiting-list/:id    // GET - Get single waitlist
/api/v1/waiting-list/:id    // PUT - Update waitlist
/api/v1/waiting-list/:id    // DELETE - Delete waitlist
```

### Expected API Responses

**GET /api/v1/waiting-list**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "uuid-here",
        "name": "Muhammad Rifki",
        "email": "rifki@example.com",
        "phone_number": "085751748482",
        "role": "driver",
        "status": "pending",
        "notes": "",
        "created_at": "2026-01-30T14:30:00Z",
        "updated_at": "2026-01-30T14:30:00Z"
      }
    ],
    "pagination": {
      "current_page": 1,
      "per_page": 25,
      "total_items": 4520,
      "total_pages": 181
    }
  }
}
```

**PUT /api/v1/waiting-list/:id**
```json
{
  "name": "Muhammad Rifki",
  "email": "rifki@example.com",
  "phone_number": "085751748482",
  "role": "driver",
  "status": "contacted",
  "notes": "Called on 2026-01-30"
}
```

---

## Clean Architecture Structure

```
src/
├── app/
│   ├── (auth)/
│   │   └── login/
│   │       └── page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx           # Dashboard layout dengan sidebar
│   │   ├── page.tsx             # Dashboard home
│   │   └── waitlist/
│   │       └── page.tsx         # Waitlist management page
│   └── layout.tsx
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── TopBar.tsx
│   │   └── DashboardLayout.tsx
│   ├── waitlist/
│   │   ├── WaitlistTable.tsx
│   │   ├── WaitlistFilters.tsx
│   │   ├── WaitlistStats.tsx
│   │   ├── EditWaitlistModal.tsx
│   │   └── WaitlistRow.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       ├── Badge.tsx
│       ├── Modal.tsx
│       ├── Table.tsx
│       └── Toast.tsx
├── services/
│   ├── auth.service.ts
│   └── waitlist.service.ts
├── lib/
│   ├── api-client.ts
│   └── utils.ts
├── types/
│   ├── auth.ts
│   └── waitlist.ts
├── hooks/
│   ├── useAuth.ts
│   └── useWaitlist.ts
└── config/
    └── api.ts
```

---

## Implementation Requirements

### 1. Clean Code Principles
- Separation of concerns (presentation, business logic, data)
- Single responsibility principle
- DRY (Don't Repeat Yourself)
- Proper TypeScript typing
- Error handling di setiap layer

### 2. User Experience
- Loading states untuk semua async operations
- Error messages yang jelas dan actionable
- Success feedback dengan toast notifications
- Responsive design (mobile-first)
- Keyboard navigation support
- Accessibility (ARIA labels, semantic HTML)

### 3. Performance
- Debounced search (300ms)
- Pagination untuk large datasets
- Lazy loading untuk images/icons
- Optimistic updates untuk better UX
- Caching untuk frequently accessed data

### 4. Security
- Protected routes dengan middleware
- Token validation
- XSS prevention
- CSRF protection
- Input sanitization

---

## Visual Design References

**Dashboard Style:**
- Clean, minimal, professional
- Plenty of white space
- Green accents untuk primary actions
- Subtle shadows dan borders
- Consistent spacing

**Inspiration:**
- Modern SaaS dashboards
- Clean data tables
- Professional admin panels

---

## Deliverables

1. **Authentication System**
   - Login page
   - Session management
   - Protected routes

2. **Dashboard Layout**
   - Sidebar navigation
   - Top bar dengan user menu
   - Responsive layout

3. **Waitlist Management**
   - Statistics cards
   - Filters & search
   - Data table dengan pagination
   - Edit modal
   - Bulk actions
   - Export CSV

4. **API Integration**
   - Clean architecture
   - Error handling
   - Loading states
   - Toast notifications

5. **Documentation**
   - Setup instructions
   - API documentation
   - Component usage guide

---

## Priority Phases

### Phase 1 (MVP):
- ✅ Login page
- ✅ Dashboard layout
- ✅ Waitlist table (read-only)
- ✅ Basic filters
- ✅ View single waitlist

### Phase 2:
- ✅ Edit waitlist
- ✅ Status update
- ✅ Search functionality
- ✅ Pagination

### Phase 3:
- ✅ Bulk actions
- ✅ Export CSV
- ✅ Statistics cards
- ✅ Advanced filters

---

## Notes
- Gunakan template yang sudah ada sebagai base
- Sesuaikan dengan DrivLynk color scheme (green theme)
- Pastikan konsisten dengan landing page design
- Prioritas: functionality > aesthetics (tapi tetap harus clean)
- Mobile responsive adalah must-have

---

## Questions to Clarify (Optional)
1. Apakah ada role-based access control? (e.g., super admin vs regular admin)
2. Apakah perlu audit log untuk track perubahan?
3. Apakah perlu email notification untuk admin?
4. Apakah perlu dashboard analytics/charts?
5. Apakah perlu export format lain selain CSV? (PDF, Excel)

---

**Start with Phase 1 MVP, pastikan clean architecture dan reusable components dari awal.**
