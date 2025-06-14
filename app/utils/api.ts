import axios from 'axios'

const FIGMA_API_BASE = 'https://api.figma.com/v1'

export interface FigmaFileResponse {
  file: any
  nodes: any
}

export const fetchFigmaFile = async (fileKey: string): Promise<FigmaFileResponse> => {
  try {
    const [fileResponse, nodesResponse] = await Promise.all([
      axios.get(`${FIGMA_API_BASE}/files/${fileKey}`, {
        headers: {
          'X-Figma-Token': process.env.FIGMA_ACCESS_TOKEN,
        },
      }),
      axios.get(`${FIGMA_API_BASE}/files/${fileKey}/nodes`, {
        headers: {
          'X-Figma-Token': process.env.FIGMA_ACCESS_TOKEN,
        },
        params: {
          ids: fileKey,
        },
      }),
    ])

    return {
      file: fileResponse.data,
      nodes: nodesResponse.data,
    }
  } catch (error) {
    console.error('Figma API Error:', error)
    throw new Error('Failed to fetch Figma data')
  }
}

export const validateFigmaUrl = (url: string): string | null => {
  const figmaUrlPattern = /^https:\/\/www\.figma\.com\/file\/([a-zA-Z0-9]+)/
  const match = url.match(figmaUrlPattern)
  return match ? match[1] : null
}

export const processFigmaFile = async (file: File): Promise<any> => {
  // Implementation for processing local Figma file
  // This would be implemented based on your specific requirements
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string)
        resolve(data)
      } catch (error) {
        reject(new Error('Invalid Figma file format'))
      }
    }
    reader.onerror = () => reject(new Error('Error reading file'))
    reader.readAsText(file)
  })
}

export const processXDFile = async (file: File): Promise<any> => {
  // Implementation for processing XD file
  // This would be implemented based on your specific requirements
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string)
        resolve(data)
      } catch (error) {
        reject(new Error('Invalid XD file format'))
      }
    }
    reader.onerror = () => reject(new Error('Error reading file'))
    reader.readAsText(file)
  })
} 