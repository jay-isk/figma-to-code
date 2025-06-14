'use client'

import { StepInterface } from './components/StepInterface'

export default function Home() {
  const handleComplete = (data: any) => {
    console.log('Process completed with data:', data)
    // Here you would typically start the conversion process
  }

  return (
    <main className="min-h-screen">
      <StepInterface onComplete={handleComplete} />
    </main>
  )
}
