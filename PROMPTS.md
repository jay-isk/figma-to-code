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
```

### 2. UI Component Structure
```
Create a step-by-step interface for the Figma converter with:
- A left section (30% width) for steps
- A right section (70% width) for processing status
- Chat-like experience where only the current input type is visible
- Options should appear on the right side after selection
- Implement proper state management for steps
- Add smooth transitions between steps
```

### 3. Input Type Selection
```
Create a radio button pill group component for selecting input type with:
- Figma File
- Figma URL
- XD File
- No default selection
- Cursor pointer for all interactive elements
- Hover effects
- Proper TypeScript types
- Accessibility features
```

### 4. File Upload Component
```
Create a file upload component that:
- Accepts Figma and XD files
- Shows file name after upload
- Has drag and drop functionality
- Shows upload progress
- Validates file types
- Handles errors gracefully
- Provides user feedback
```

### 5. URL Input Component
```
Create a URL input component for Figma links that:
- Validates Figma URL format
- Shows validation status
- Has a clean input field design
- Provides feedback on invalid URLs
- Handles edge cases
- Shows loading state during validation
```

### 6. Processing Status Component
```
Create a processing status component that:
- Shows current processing step
- Displays progress
- Has loading indicators
- Shows success/error states
- Updates in real-time
- Handles different processing states
- Provides clear visual feedback
```

### 7. Step Navigation
```
Implement step navigation that:
- Allows going back to previous steps
- Shows edit buttons next to selected answers
- Maintains step history
- Provides contextual feedback messages
- Has smooth transitions between steps
- Preserves user selections
- Handles edge cases
```

### 8. API Integration
```
Set up API integration for:
- Figma file processing
- URL validation
- File upload handling
- Progress tracking
- Error handling
- Type-safe API responses
- Proper error boundaries
```

### 9. State Management
```
Implement state management for:
- Current step tracking
- File/URL input handling
- Processing status
- Step history
- User selections
- Error states
- Loading states
```

### 10. Styling and UX
```
Enhance the UI with:
- Consistent spacing and alignment
- Clear visual hierarchy
- Responsive design
- Loading states
- Error states
- Success states
- Hover effects
- Cursor pointers
- Proper color scheme
- Accessible design
```

### 11. Documentation and Checkpoints
```
Create documentation that includes:
- Project setup instructions
- Component documentation
- API documentation
- Checkpoint system
- Git workflow
- Development guidelines
- Best practices
```

## Implementation Guidelines

### Key Dependencies
- Next.js
- TypeScript
- Tailwind CSS
- @headlessui/react
- @heroicons/react
- Axios

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