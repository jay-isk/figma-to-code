import { NextResponse } from 'next/server'
import { Figma } from 'figma-api'

// Initialize Figma client
const figma = new Figma({
  personalAccessToken: process.env.FIGMA_ACCESS_TOKEN,
})

export async function POST(request: Request) {
  try {
    const { fileKey } = await request.json()

    if (!fileKey) {
      return NextResponse.json(
        { error: 'File key is required' },
        { status: 400 }
      )
    }

    // Get file data
    const file = await figma.getFile(fileKey)
    
    // Get file nodes
    const nodes = await figma.getFileNodes(fileKey, {
      ids: Object.keys(file.document.children),
    })

    return NextResponse.json({
      file,
      nodes,
    })
  } catch (error) {
    console.error('Figma API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Figma data' },
      { status: 500 }
    )
  }
} 