import { RadioGroup } from '@headlessui/react'
import { ReactNode } from 'react'

interface Option {
  id: string
  name: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface RadioPillGroupProps {
  options: Array<{
    id: string
    name: string
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  }>
  value: string | null
  onChange: (value: string) => void
  label: string
  columns?: number
  showIcons?: boolean
}

export const RadioPillGroup = ({
  options,
  value,
  onChange,
  label,
  columns = 1,
  showIcons = false,
}: RadioPillGroupProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div
        className={`grid gap-2 ${
          columns === 1
            ? 'grid-cols-1'
            : columns === 2
            ? 'grid-cols-2'
            : 'grid-cols-3'
        }`}
      >
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-full border ${
              value === option.id
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700'
            } transition-colors cursor-pointer`}
          >
            {showIcons && option.icon && (
              <option.icon className="h-5 w-5" />
            )}
            <span>{option.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
} 