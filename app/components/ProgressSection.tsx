interface ProgressItem {
  text: string
  status: 'Completed' | 'In-progress' | 'Pending'
}

interface ProgressSectionProps {
  items: ProgressItem[]
  fileType: 'figma-file' | 'figma-url' | 'xd-file'
}

export const ProgressSection = ({ items, fileType }: ProgressSectionProps) => {
  return (
    <div className="mb-6">
      <p className="text-gray-600 mb-4">
        I have started importing your {fileType === 'figma-file' ? 'Figma' : 'XD'} frames. This may take a moment. Once completed, you can start interacting with your design.
      </p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <span className="text-gray-700">{item.text}</span>
            <span
              className={`font-semibold ${
                item.status === 'Completed'
                  ? 'text-green-600'
                  : item.status === 'In-progress'
                  ? 'text-blue-600'
                  : 'text-gray-600'
              }`}
            >
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
} 