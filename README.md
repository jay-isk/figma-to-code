# Figma to Code Converter

## Checkpoint: Step Interface v1

This checkpoint represents a stable version of the step interface with the following features:

### Features
- Chat-like interface for step-by-step conversion
- Contextual system messages based on user selections
- Edit functionality for previous steps
- Processing status display
- Preview section
- File upload and URL input support
- Stack, styling, and unit selection

### Key Components
1. `StepInterface.tsx`: Main component handling the step-by-step flow
2. `RadioPillGroup.tsx`: Reusable component for selection options
3. `FileUpload.tsx`: Component for handling file uploads
4. `ProgressSection.tsx`: Component for displaying processing status

### How to Restore
To restore this checkpoint:
```bash
git checkout checkpoint/step-interface-v1
```

### Notable Features
- No default selections (user must make explicit choices)
- Contextual feedback messages
- Edit buttons for previous selections
- Processing status indicators
- Responsive layout (30/70 split)
- Cursor pointer for all interactive elements

### Dependencies
- Next.js
- @headlessui/react
- @heroicons/react
- Tailwind CSS

### Next Steps
Potential improvements:
1. Add more detailed system messages
2. Enhance hover effects
3. Add tooltips
4. Implement actual file processing
5. Add preview functionality

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
