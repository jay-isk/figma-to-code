# Project Checkpoints

This file tracks all major checkpoints in the project development. Use these checkpoints to restore specific versions of the code.

## Current Checkpoints

### 1. Step Interface v1
**Branch:** `checkpoint/step-interface-v1`
**Date:** March 2024
**Description:** Initial implementation of the step interface with chat-like experience

**Features:**
- Chat-like interface for step-by-step conversion
- Contextual system messages
- Edit functionality for previous steps
- Processing status display
- Preview section
- File upload and URL input support
- Stack, styling, and unit selection

**To restore:**
```bash
# Clone the specific checkpoint
git clone -b checkpoint/step-interface-v1 git@github.com:jay-isk/figma-to-code.git

# OR if you already have the repository, checkout the branch
git checkout checkpoint/step-interface-v1

# To pull latest changes from this checkpoint
git pull origin checkpoint/step-interface-v1
```

**Key Components:**
- `StepInterface.tsx`: Main step-by-step flow
- `RadioPillGroup.tsx`: Selection options
- `FileUpload.tsx`: File upload handling
- `ProgressSection.tsx`: Processing status

---

## How to Use Checkpoints

1. To view available checkpoints:
```bash
git branch | grep checkpoint
```

2. To restore a checkpoint:
```bash
git checkout <checkpoint-branch-name>
```

3. To create a new checkpoint:
```bash
git checkout -b checkpoint/<version-name>
git add .
git commit -m "checkpoint: <description>"
```

## Checkpoint Naming Convention

- Format: `checkpoint/<feature-name>-v<version>`
- Example: `checkpoint/step-interface-v1`

## Best Practices

1. Create checkpoints for major feature completions
2. Include descriptive commit messages
3. Document features and components in this file
4. Test the checkpoint before marking it as stable 