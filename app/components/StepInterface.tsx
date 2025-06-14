import { useState } from 'react'
import { RadioPillGroup } from './RadioPillGroup'
import { FileUpload } from './FileUpload'
import { 
  CloudArrowUpIcon, 
  LinkIcon, 
  ArrowRightIcon, 
  ExclamationCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  PencilSquareIcon
} from '@heroicons/react/24/outline'

type FileType = 'figma-file' | 'figma-url' | 'xd-file'
type StackType = 'html' | 'nextjs' | 'reactjs'
type StyleType = 'css' | 'tailwind'
type UnitType = 'px' | 'vw' | 'percentage'

interface Step {
  id: number
  title: string
  description: string
  isCompleted: boolean
  isCurrent: boolean
}

interface ValidationError {
  field: string
  message: string
}

interface ProcessingStatus {
  id: string
  title: string
  status: 'pending' | 'processing' | 'completed' | 'error'
  message?: string
  details?: string
}

interface ChatMessage {
  type: 'user' | 'system'
  content: string
  data?: any
  step?: number
}

interface UserChatMessage extends ChatMessage {
  type: 'user'
  step: number
}

interface SystemChatMessage extends ChatMessage {
  type: 'system'
}

interface StepInterfaceProps {
  onComplete: (data: {
    fileType: FileType
    stack: StackType
    style: StyleType
    unit: UnitType
    file?: File
    figmaUrl?: string
  }) => void
}

const fileTypes = [
  { id: 'figma-file', name: 'Figma File', icon: CloudArrowUpIcon },
  { id: 'figma-url', name: 'Figma Link', icon: LinkIcon },
  { id: 'xd-file', name: 'XD File', icon: CloudArrowUpIcon },
]

const stackOptions = [
  { id: 'html', name: 'HTML' },
  { id: 'nextjs', name: 'Next.js' },
  { id: 'reactjs', name: 'React.js' },
]

const styleOptions = [
  { id: 'css', name: 'CSS' },
  { id: 'tailwind', name: 'Tailwind' },
]

const unitOptions = [
  { id: 'px', name: 'PX' },
  { id: 'vw', name: 'VW' },
  { id: 'percentage', name: 'Percentage' },
]

const validateFigmaUrl = (url: string): boolean => {
  const figmaUrlPattern = /^https:\/\/www\.figma\.com\/file\/[a-zA-Z0-9]+\/[^/]+/
  return figmaUrlPattern.test(url)
}

const validateFile = (file: File, type: FileType): boolean => {
  if (type === 'figma-file') {
    return file.name.endsWith('.fig')
  } else if (type === 'xd-file') {
    return file.name.endsWith('.xd')
  }
  return false
}

const getHumanReadableLabel = (type: string, value: string): string => {
  switch (type) {
    case 'fileType':
      return fileTypes.find(ft => ft.id === value)?.name || value
    case 'stack':
      return stackOptions.find(s => s.id === value)?.name || value
    case 'style':
      return styleOptions.find(s => s.id === value)?.name || value
    case 'unit':
      return unitOptions.find(u => u.id === value)?.name || value
    case 'url':
      return 'Figma Link'
    case 'file':
      return 'Design File'
    default:
      return value
  }
}

const getSystemMessage = (step: number, type: string, value: string): string => {
  switch (step) {
    case 1:
      return `You've selected ${getHumanReadableLabel(type, value)}. Please proceed with your design file.`
    case 2:
      if (type === 'url') {
        return 'Figma link received. We\'ll now fetch and process your design.'
      } else {
        return 'File received. We\'ll now process your design file.'
      }
    case 3:
      return `Great! We'll generate the code using ${getHumanReadableLabel(type, value)}.`
    case 4:
      return `Perfect! We'll style your design using ${getHumanReadableLabel(type, value)}.`
    case 5:
      return `Excellent! We'll use ${getHumanReadableLabel(type, value)} for measurements. Let's start the conversion!`
    default:
      return 'Moving to the next step...'
  }
}

export const StepInterface = ({ onComplete }: StepInterfaceProps) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [fileType, setFileType] = useState<FileType | null>(null)
  const [stack, setStack] = useState<StackType | null>(null)
  const [style, setStyle] = useState<StyleType | null>(null)
  const [unit, setUnit] = useState<UnitType | null>(null)
  const [figmaUrl, setFigmaUrl] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [validationError, setValidationError] = useState<ValidationError | null>(null)
  const [chatHistory, setChatHistory] = useState<Array<UserChatMessage | SystemChatMessage>>([])

  const [processingStatus, setProcessingStatus] = useState<ProcessingStatus[]>([
    {
      id: 'file-validation',
      title: 'File Validation',
      status: 'pending',
      message: 'Waiting for file input'
    },
    {
      id: 'file-processing',
      title: 'File Processing',
      status: 'pending',
      message: 'Waiting for file validation'
    },
    {
      id: 'code-generation',
      title: 'Code Generation',
      status: 'pending',
      message: 'Waiting for file processing'
    },
    {
      id: 'asset-extraction',
      title: 'Asset Extraction',
      status: 'pending',
      message: 'Waiting for file processing'
    }
  ])

  const [stepHistory, setStepHistory] = useState<Array<{
    step: number
    data: any
  }>>([])

  const steps: Step[] = [
    {
      id: 1,
      title: 'Select Input Type',
      description: 'Choose how you want to import your design',
      isCompleted: false,
      isCurrent: currentStep === 1,
    },
    {
      id: 2,
      title: 'Upload File or Enter URL',
      description: 'Provide your design file or Figma URL',
      isCompleted: false,
      isCurrent: currentStep === 2,
    },
    {
      id: 3,
      title: 'Choose Stack',
      description: 'Select your preferred technology stack',
      isCompleted: false,
      isCurrent: currentStep === 3,
    },
    {
      id: 4,
      title: 'Choose Styling',
      description: 'Select your preferred styling approach',
      isCompleted: false,
      isCurrent: currentStep === 4,
    },
    {
      id: 5,
      title: 'Choose Units',
      description: 'Select your preferred measurement units',
      isCompleted: false,
      isCurrent: currentStep === 5,
    },
  ]

  const validateCurrentStep = (): boolean => {
    setValidationError(null)

    switch (currentStep) {
      case 1:
        return true // File type is always selected
      case 2:
        if (fileType === 'figma-url') {
          if (!figmaUrl) {
            setValidationError({ field: 'figmaUrl', message: 'Please enter a Figma URL' })
            return false
          }
          if (!validateFigmaUrl(figmaUrl)) {
            setValidationError({ field: 'figmaUrl', message: 'Please enter a valid Figma URL' })
            return false
          }
        } else {
          if (!selectedFile) {
            setValidationError({ field: 'file', message: 'Please select a file' })
            return false
          }
          if (!validateFile(selectedFile, fileType)) {
            setValidationError({ 
              field: 'file', 
              message: `Please select a valid ${fileType === 'figma-file' ? 'Figma' : 'XD'} file` 
            })
            return false
          }
        }
        return true
      case 3:
      case 4:
      case 5:
        return true // These steps always have a value selected
      default:
        return false
    }
  }

  const updateProcessingStatus = (id: string, status: ProcessingStatus['status'], message?: string, details?: string) => {
    setProcessingStatus(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, status, message, details }
          : item
      )
    )
  }

  const handleStepComplete = (stepData: any) => {
    if (!validateCurrentStep()) {
      return
    }

    // Save step data to history
    setStepHistory(prev => [...prev, { step: currentStep, data: stepData }])

    setChatHistory((prev) => [
      ...prev,
      { 
        type: 'user', 
        content: getHumanReadableLabel(stepData.type, stepData.label),
        data: stepData,
        step: currentStep
      },
      { 
        type: 'system', 
        content: getSystemMessage(currentStep, stepData.type, stepData.label)
      },
    ])

    // Update processing status based on the step
    if (currentStep === 2) {
      if (fileType === 'figma-url') {
        updateProcessingStatus('file-validation', 'processing', 'Validating Figma URL...')
        // Simulate validation
        setTimeout(() => {
          updateProcessingStatus('file-validation', 'completed', 'Figma URL validated successfully')
          updateProcessingStatus('file-processing', 'processing', 'Processing Figma file...')
        }, 1000)
      } else {
        updateProcessingStatus('file-validation', 'processing', 'Validating file...')
        // Simulate validation
        setTimeout(() => {
          updateProcessingStatus('file-validation', 'completed', 'File validated successfully')
          updateProcessingStatus('file-processing', 'processing', 'Processing file...')
        }, 1000)
      }
    }

    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete({
        fileType: fileType!,
        stack: stack!,
        style: style!,
        unit: unit!,
        file: selectedFile || undefined,
        figmaUrl: fileType === 'figma-url' ? figmaUrl : undefined,
      })
    }
  }

  const handleEditStep = (stepNumber: number) => {
    // Find the last occurrence of the step in history
    const stepIndex = stepHistory.findIndex(item => item.step === stepNumber)
    if (stepIndex === -1) return

    // Remove all steps after the selected step
    setStepHistory(prev => prev.slice(0, stepIndex + 1))
    
    // Update current step
    setCurrentStep(stepNumber)

    // Reset processing status for steps after the selected step
    setProcessingStatus(prev => 
      prev.map(item => ({
        ...item,
        status: 'pending',
        message: 'Waiting for previous steps to complete'
      }))
    )
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <RadioPillGroup
              options={fileTypes}
              value={fileType}
              onChange={(value) => {
                setFileType(value as FileType)
                handleStepComplete({ label: value, type: 'fileType' })
              }}
              label="Select Input Type"
              columns={1}
              showIcons
            />
          </div>
        )
      case 2:
        return fileType === 'figma-url' ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Figma URL
            </label>
            <div className="relative">
              <input
                type="url"
                value={figmaUrl}
                onChange={(e) => setFigmaUrl(e.target.value)}
                placeholder="https://www.figma.com/file/..."
                className={`w-full p-2 border ${
                  validationError?.field === 'figmaUrl' 
                    ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                } rounded-md`}
              />
              {validationError?.field === 'figmaUrl' && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              )}
            </div>
            {validationError?.field === 'figmaUrl' && (
              <p className="mt-2 text-sm text-red-600">{validationError.message}</p>
            )}
            <button
              onClick={() => handleStepComplete({ label: figmaUrl, type: 'url' })}
              className="mt-4 flex items-center text-blue-600 hover:text-blue-500 cursor-pointer"
            >
              Continue <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </div>
        ) : (
          <div>
            <FileUpload
              fileType={fileType as 'figma-file' | 'xd-file'}
              onFileSelect={(file) => {
                setSelectedFile(file)
                handleStepComplete({ label: file.name, type: 'file' })
              }}
            />
            {validationError?.field === 'file' && (
              <p className="mt-2 text-sm text-red-600">{validationError.message}</p>
            )}
          </div>
        )
      case 3:
        return (
          <div>
            <RadioPillGroup
              options={stackOptions}
              value={stack}
              onChange={(value) => {
                setStack(value as StackType)
                handleStepComplete({ label: value, type: 'stack' })
              }}
              label="Choose Stack"
              columns={3}
            />
          </div>
        )
      case 4:
        return (
          <div>
            <RadioPillGroup
              options={styleOptions}
              value={style}
              onChange={(value) => {
                setStyle(value as StyleType)
                handleStepComplete({ label: value, type: 'style' })
              }}
              label="Choose Styling"
              columns={2}
            />
          </div>
        )
      case 5:
        return (
          <div>
            <RadioPillGroup
              options={unitOptions}
              value={unit}
              onChange={(value) => {
                setUnit(value as UnitType)
                handleStepComplete({ label: value, type: 'unit' })
              }}
              label="Choose Unit"
              columns={3}
            />
          </div>
        )
      default:
        return null
    }
  }

  const getStatusIcon = (status: ProcessingStatus['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      case 'error':
        return <XCircleIcon className="h-5 w-5 text-red-500" />
      case 'processing':
        return <ClockIcon className="h-5 w-5 text-blue-500 animate-spin" />
      default:
        return <ClockIcon className="h-5 w-5 text-gray-400" />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left side - Steps and Chat */}
      <div className="w-[30%] bg-white border-r border-gray-200 flex flex-col">
        {/* Chat-like interface */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`group relative rounded-lg px-4 py-2 max-w-[80%] ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span>{message.content}</span>
                    {message.type === 'user' && typeof message.step === 'number' && (
                      <button
                        onClick={() => handleEditStep(message.step)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      >
                        <PencilSquareIcon className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current step */}
        <div className="border-t border-gray-200 p-4">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {steps[currentStep - 1].title}
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              {steps[currentStep - 1].description}
            </p>
          </div>
          {renderStepContent()}
        </div>
      </div>

      {/* Right side - Processing Status */}
      <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Processing Status</h2>
          <div className="space-y-4">
            {processingStatus.map((status) => (
              <div
                key={status.id}
                className="bg-white rounded-lg shadow-sm p-4 border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(status.status)}
                    <h3 className="text-lg font-medium text-gray-900">
                      {status.title}
                    </h3>
                  </div>
                  <span className={`px-2 py-1 text-sm rounded-full cursor-pointer ${
                    status.status === 'completed' ? 'bg-green-100 text-green-800' :
                    status.status === 'error' ? 'bg-red-100 text-red-800' :
                    status.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {status.status.charAt(0).toUpperCase() + status.status.slice(1)}
                  </span>
                </div>
                {status.message && (
                  <p className="mt-2 text-sm text-gray-600">{status.message}</p>
                )}
                {status.details && (
                  <p className="mt-1 text-sm text-gray-500">{status.details}</p>
                )}
              </div>
            ))}
          </div>

          {/* Preview Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Preview</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">
                  {currentStep < 3 ? 'Preview will be available after file processing' : 'Preview will be available soon'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 