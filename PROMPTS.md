# Figma to Code Converter - AI Prompts

This file contains a sequence of verified prompts that can be used to recreate the Figma to Code Converter project from scratch. Each prompt has been tested and verified against the current implementation.

## Project Setup Prompts

### 1. Initial Project Setup
```
Create a Next.js project for converting Figma designs to HTML/CSS. The project should:
- Use TypeScript
- Include Tailwind CSS
- Set up a basic layout with a left navigation bar
- Create a main page component
- Use @headlessui/react for UI components
- Set up proper TypeScript configurations
- Configure Next.js for auto-compilation and page refresh
- Set up proper directory structure:
  /app
    /components
    /api
    /utils
    /styles
    /types
```

### 2. UI Component Structure
```
Create a step-by-step interface for the Figma converter with:
- A left section (30% width) for steps with:
  - Chat-like message history
  - Edit buttons on hover for previous selections
  - System messages with contextual feedback
  - Smooth transitions between steps
- A right section (70% width) for:
  - Current step options
  - Processing status
  - Preview section
- Implement proper state management for:
  - Step history
  - Current step
  - User selections
  - Processing status
```

### 3. Input Type Selection
```
Create a radio button pill group component for selecting input type with:
- Figma File
- Figma URL
- XD File
- No default selection
- Cursor pointer for all interactive elements
- Hover effects with:
  - Background color change
  - Smooth transition
  - Scale effect
- Proper TypeScript types
- Accessibility features
- Styling:
  - Rounded corners
  - Proper padding
  - Consistent spacing
  - Clear active state
```

### 4. File Upload Component
```
Create a file upload component that:
- Accepts Figma and XD files
- Shows file name after upload
- Has drag and drop functionality with:
  - Visual drop zone
  - Hover effects
  - Clear feedback
- Shows upload progress with:
  - Progress bar
  - Percentage indicator
  - Status message
- Validates file types
- Handles errors gracefully
- Provides user feedback
- Styling:
  - Dashed border
  - Centered content
  - Clear instructions
  - Proper spacing
```

### 5. URL Input Component
```
Create a URL input component for Figma links that:
- Validates Figma URL format
- Shows validation status with:
  - Success/error icons
  - Color-coded feedback
  - Clear messages
- Has a clean input field design:
  - Proper padding
  - Clear placeholder
  - Focus states
  - Error states
- Provides feedback on invalid URLs
- Handles edge cases
- Shows loading state during validation
- Styling:
  - Consistent with other inputs
  - Clear focus states
  - Proper error styling
  - Responsive width
```

### 6. Processing Status Component
```
Create a processing status component that:
- Shows current processing step with:
  - Step number
  - Step description
  - Status indicator
- Displays progress with:
  - Progress bar
  - Percentage
  - Time estimate
- Has loading indicators:
  - Spinner animation
  - Pulsing effect
  - Clear states
- Shows success/error states:
  - Checkmark icon
  - Error icon
  - Status message
- Updates in real-time
- Handles different processing states
- Provides clear visual feedback
- Styling:
  - Consistent spacing
  - Clear hierarchy
  - Proper alignment
  - Responsive layout
```

### 7. Step Navigation
```
Implement step navigation that:
- Allows going back to previous steps with:
  - Edit buttons on hover
  - Clear visual feedback
  - Smooth transitions
- Shows edit buttons next to selected answers:
  - Pencil icon
  - Hover effect
  - Clear positioning
- Maintains step history with:
  - Chat-like interface
  - Timestamp
  - User/system messages
- Provides contextual feedback messages
- Has smooth transitions between steps
- Preserves user selections
- Handles edge cases
- Styling:
  - Consistent spacing
  - Clear visual hierarchy
  - Proper alignment
  - Responsive design
```

### 8. API Integration
```
Set up API integration for:
- Figma file processing:
  - File upload endpoint
  - Progress tracking
  - Error handling
- URL validation:
  - Format checking
  - Accessibility verification
  - Error reporting
- File upload handling:
  - Chunked uploads
  - Progress tracking
  - Error recovery
- Progress tracking:
  - Real-time updates
  - Status reporting
  - Error handling
- Type-safe API responses
- Proper error boundaries
- Styling:
  - Loading states
  - Error states
  - Success states
  - Progress indicators
```

### 9. State Management
```
Implement state management for:
- Current step tracking:
  - Step number
  - Step type
  - Step status
- File/URL input handling:
  - File data
  - URL data
  - Validation status
- Processing status:
  - Current operation
  - Progress
  - Errors
- Step history:
  - User selections
  - System messages
  - Timestamps
- User selections:
  - Input type
  - File data
  - URL data
- Error states:
  - Validation errors
  - Processing errors
  - Network errors
- Loading states:
  - Upload progress
  - Processing status
  - Validation status
```

### 10. Styling and UX
```
Enhance the UI with:
- Consistent spacing and alignment:
  - 1rem base spacing
  - Proper margins
  - Consistent padding
- Clear visual hierarchy:
  - Heading sizes
  - Text weights
  - Color contrast
- Responsive design:
  - Mobile-first approach
  - Breakpoint handling
  - Flexible layouts
- Loading states:
  - Spinner animations
  - Progress indicators
  - Placeholder content
- Error states:
  - Clear messages
  - Visual indicators
  - Recovery options
- Success states:
  - Checkmark icons
  - Success messages
  - Next step indicators
- Hover effects:
  - Color transitions
  - Scale effects
  - Shadow changes
- Cursor pointers:
  - Interactive elements
  - Buttons
  - Links
- Proper color scheme:
  - Primary colors
  - Secondary colors
  - Accent colors
  - Status colors
- Accessible design:
  - ARIA labels
  - Keyboard navigation
  - Focus states
  - Color contrast
```

### 11. Documentation and Checkpoints
```
Create documentation that includes:
- Project setup instructions:
  - Dependencies
  - Configuration
  - Environment setup
- Component documentation:
  - Props
  - Usage examples
  - Styling guidelines
- API documentation:
  - Endpoints
  - Request/response formats
  - Error handling
- Checkpoint system:
  - Branch naming
  - Commit messages
  - Version tracking
- Git workflow:
  - Branch strategy
  - Commit guidelines
  - PR process
- Development guidelines:
  - Code style
  - Best practices
  - Testing requirements
- Best practices:
  - Performance
  - Security
  - Accessibility
  - Testing
```

## Implementation Guidelines

### Key Dependencies
- Next.js 14.1.0
- TypeScript 5.3.3
- Tailwind CSS 3.4.1
- @headlessui/react 1.7.18
- @heroicons/react 2.1.1
- Axios 1.6.7

### Best Practices
1. Use TypeScript for type safety
2. Follow Next.js 13+ app directory structure
3. Implement proper error handling
4. Use proper Git workflow with checkpoints
5. Follow accessibility guidelines
6. Implement responsive design
7. Use proper state management
8. Follow component best practices

### Development Workflow
1. Create feature branches
2. Implement features
3. Create checkpoints
4. Document changes
5. Test thoroughly
6. Review code
7. Merge to main

## Usage

To use these prompts:
1. Start with the Initial Project Setup
2. Follow the sequence of prompts
3. Implement each feature
4. Create checkpoints after major features
5. Document your progress
6. Test thoroughly

## Notes
- Each prompt has been verified against the current implementation
- Prompts are designed to be clear and actionable
- Implementation details are included where necessary
- Best practices are incorporated into each prompt
- Design details match the current implementation
- Structure follows the established patterns 