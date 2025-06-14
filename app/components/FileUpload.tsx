import { CloudArrowUpIcon } from '@heroicons/react/24/outline'

interface FileUploadProps {
  fileType: 'figma-file' | 'xd-file'
  onFileSelect: (file: File) => void
}

export const FileUpload = ({ fileType, onFileSelect }: FileUploadProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0])
    }
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Upload {fileType === 'figma-file' ? 'Figma' : 'XD'} File
      </label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center">
          <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
          <div className="flex text-sm text-gray-600">
            <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
              <span>Upload a file</span>
              <input
                type="file"
                className="sr-only"
                accept={fileType === 'figma-file' ? '.fig' : '.xd'}
                onChange={handleFileChange}
              />
            </label>
          </div>
          <p className="text-xs text-gray-500">
            {fileType === 'figma-file' ? 'Figma' : 'XD'} file up to 10MB
          </p>
        </div>
      </div>
    </div>
  )
} 