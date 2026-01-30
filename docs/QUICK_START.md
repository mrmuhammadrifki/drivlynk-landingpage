# Quick Start Guide - Waitlist API Integration

## 🚀 Getting Started

### 1. Environment Setup

Create `.env.local` file in the root directory:

```bash
# Copy from example
cp .env.local.example .env.local
```

Or create manually with this content:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:9001
```

### 2. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### 3. Test the Integration

1. Navigate to `http://localhost:3000`
2. Scroll to the Hero section
3. Fill in the form:
   - **Name**: Your full name
   - **Email**: Your email address
   - **Phone**: (Optional) Your phone number
   - **Role**: Select from dropdown
4. Click "Get Early Access"
5. Watch for the toast notification (top-right corner)

## 📋 Form Fields Mapping

| Form Field | API Field | Required | Type |
|------------|-----------|----------|------|
| Name | `name` | ✅ Yes | string |
| Email | `email` | ✅ Yes | string |
| Phone | `phone_number` | ❌ No | string |
| Role | `role` | ✅ Yes | string |

## 🎨 Visual Feedback

### Success State
- ✅ Green toast notification appears (top-right)
- ✅ Message: "Successfully joined the waitlist!"
- ✅ Form is reset automatically
- ✅ Auto-redirects to dashboard after 1.5s
- ✅ Progress bar shows auto-dismiss countdown

### Error States
- ❌ Red toast notification appears (top-right)
- ❌ Specific error messages:
  - "Please enter your name"
  - "Please enter your email address"
  - "Please select your role"
  - API error messages from backend
  - "Request timeout. Please try again."

## 🔧 Configuration

### Change API Base URL

Edit `.env.local`:
```env
# For production
NEXT_PUBLIC_API_BASE_URL=https://api.drivlynk.com

# For staging
NEXT_PUBLIC_API_BASE_URL=https://staging-api.drivlynk.com

# For local development
NEXT_PUBLIC_API_BASE_URL=http://localhost:9001
```

**Important**: Restart the dev server after changing environment variables!

### Change Toast Duration

Edit `src/components/landing/Hero.tsx`:
```typescript
<Toast
  message={toast.message}
  type={toast.type}
  isVisible={toast.isVisible}
  onClose={hideToast}
  duration={5000} // Change this value (in milliseconds)
/>
```

## 🧪 Testing Scenarios

### ✅ Happy Path
1. Fill all required fields
2. Submit form
3. See success toast
4. Form resets
5. Navigate to dashboard

### ❌ Validation Errors
1. Leave name empty → Error toast
2. Leave email empty → Error toast
3. Don't select role → Error toast

### ⚠️ Network Errors
1. Stop backend server
2. Submit form
3. See network error toast

### ⏱️ Timeout Test
1. Simulate slow network
2. Wait 10 seconds
3. See timeout error toast

## 📁 Key Files

```
src/
├── types/waitlist.ts              # Type definitions
├── config/api.ts                  # API configuration
├── lib/api-client.ts              # HTTP client
├── services/waitlist.service.ts   # Business logic
├── components/
│   ├── ui/Toast.tsx              # Toast component
│   └── landing/Hero.tsx          # Form component
└── .env.local                     # Environment variables
```

## 🐛 Troubleshooting

### Issue: Toast not showing
**Solution**: Check browser console for errors

### Issue: API request fails
**Solutions**:
1. Verify backend is running on port 9001
2. Check `.env.local` has correct URL
3. Restart Next.js dev server
4. Check CORS settings on backend

### Issue: Form doesn't submit
**Solutions**:
1. Check browser console for errors
2. Verify all required fields are filled
3. Check network tab for API calls

### Issue: Environment variable not working
**Solutions**:
1. Ensure file is named `.env.local` (not `.env`)
2. Restart dev server (Ctrl+C, then `npm run dev`)
3. Clear Next.js cache: `rm -rf .next`

## 🎯 Next Steps

1. ✅ Test the integration with your backend
2. ✅ Customize toast messages
3. ✅ Add analytics tracking
4. ✅ Implement email validation
5. ✅ Add CAPTCHA if needed

## 📞 Support

For detailed architecture documentation, see:
- `docs/WAITLIST_API.md` - Full architecture guide
- `README.md` - Project overview
