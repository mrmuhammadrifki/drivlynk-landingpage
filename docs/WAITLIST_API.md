# Waitlist API Integration

## Architecture Overview

This implementation follows **Clean Architecture** principles with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────┐
│                    Presentation Layer                    │
│              (Hero.tsx - UI Component)                   │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                    Service Layer                         │
│         (waitlist.service.ts - Business Logic)           │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                  Infrastructure Layer                    │
│           (api-client.ts - HTTP Client)                  │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                   External API                           │
│              (Backend Waitlist API)                      │
└─────────────────────────────────────────────────────────┘
```

## File Structure

```
src/
├── types/
│   └── waitlist.ts              # Domain types & interfaces
├── config/
│   └── api.ts                   # API configuration
├── lib/
│   └── api-client.ts            # Generic HTTP client
├── services/
│   └── waitlist.service.ts      # Business logic layer
└── components/
    ├── ui/
    │   └── Toast.tsx            # Visual feedback component
    └── landing/
        └── Hero.tsx             # Form component (updated)
```

## Layer Responsibilities

### 1. **Types Layer** (`src/types/waitlist.ts`)
- Defines domain models
- Type-safe contracts between layers
- No business logic

### 2. **Configuration Layer** (`src/config/api.ts`)
- Centralized API settings
- Environment-based configuration
- Constants management

### 3. **Infrastructure Layer** (`src/lib/api-client.ts`)
- Generic HTTP client
- Request/response handling
- Timeout management
- Error handling

### 4. **Service Layer** (`src/services/waitlist.service.ts`)
- Business logic
- Data transformation
- Error mapping
- Use case implementation

### 5. **Presentation Layer** (`src/components/`)
- UI components
- User interactions
- Visual feedback
- Form validation

## Setup

1. **Create environment file:**
```bash
cp .env.local.example .env.local
```

2. **Configure API endpoint:**
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:9001
```

3. **Restart dev server** (if running):
```bash
# Stop current server (Ctrl+C)
npm run dev
```

## API Contract

### Endpoint
```
POST /api/v1/waiting-list
```

### Request Body
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone_number": "string (optional)",
  "role": "string (required)"
}
```

### Response (Success)
```json
{
  "success": true,
  "message": "Successfully joined the waitlist!",
  "data": { ... }
}
```

### Response (Error)
```json
{
  "success": false,
  "message": "Error message here"
}
```

## Features Implemented

### ✅ Clean Architecture
- Separation of concerns
- Dependency inversion
- Single responsibility principle
- Easy to test and maintain

### ✅ Error Handling
- Network timeout (10s)
- API error responses
- Form validation
- User-friendly error messages

### ✅ Visual Feedback
- Success toast notification
- Error toast notification
- Auto-dismiss (5s)
- Manual close button
- Progress bar animation

### ✅ Form Validation
- Required field validation
- Email format validation
- Trim whitespace
- Clear error messages

### ✅ UX Enhancements
- Loading state on submit button
- Form reset on success
- Auto-navigation to dashboard (1.5s delay)
- Smooth animations

## Usage Example

```typescript
// Service usage (if needed elsewhere)
import { waitlistService } from '@/services/waitlist.service';

const response = await waitlistService.joinWaitlist({
  name: "John Doe",
  email: "john@example.com",
  phone_number: "1234567890",
  role: "driver"
});

if (response.success) {
  console.log("Success:", response.message);
} else {
  console.error("Error:", response.message);
}
```

## Testing

### Manual Testing
1. Fill out the form with valid data
2. Click "Get Early Access"
3. Verify success toast appears
4. Check form is reset
5. Verify navigation to dashboard

### Error Scenarios
1. **Empty name**: Shows error toast
2. **Empty email**: Shows error toast
3. **No role selected**: Shows error toast
4. **Network timeout**: Shows timeout error
5. **API error**: Shows API error message

## Benefits of This Architecture

1. **Testability**: Each layer can be tested independently
2. **Maintainability**: Clear separation makes changes easier
3. **Scalability**: Easy to add new features/endpoints
4. **Reusability**: API client can be used for other endpoints
5. **Type Safety**: Full TypeScript support
6. **Error Handling**: Centralized and consistent
7. **Configuration**: Environment-based settings

## Future Enhancements

- [ ] Add retry mechanism for failed requests
- [ ] Implement request caching
- [ ] Add analytics tracking
- [ ] Implement rate limiting
- [ ] Add form field-level validation
- [ ] Add email format validation
- [ ] Add phone number formatting
- [ ] Implement CAPTCHA for spam prevention
