import React, { useEffect, useRef } from 'react'

interface AppCodeInputProps {
  length?: number
  errorMessage?: string
  secureEntry: boolean
  boxWidth?: number
  boxHeight?: number
  value?: string
  onChange?: (code: string) => void
}

const AppCodeInput: React.FC<AppCodeInputProps> = ({
  length = 6,
  errorMessage,
  secureEntry = true,
  onChange,
  boxHeight,
  boxWidth,
  value = '',
}) => {
  const inputs = useRef<(HTMLInputElement | null)[]>([])

  // Update input values when value prop changes
  useEffect(() => {
    const valueArray = value.split('')
    inputs.current.forEach((input, index) => {
      if (input) {
        input.value = valueArray[index] || ''
      }
    })
  }, [value])

  // Focus first input on mount
  useEffect(() => {
    inputs.current[0]?.focus()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const currentValue = e.target.value

    // Create new code string
    const newCode = inputs.current
      .map((input, i) => {
        if (i === index) {
          return currentValue.slice(-1) // Only take the last character
        }
        return input?.value || ''
      })
      .join('')

    // Call onChange with the new code
    if (onChange) {
      onChange(newCode)
    }

    // Handle focus management
    if (currentValue && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus()
    } else if (!currentValue && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !inputs.current[index]?.value && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').trim()
    const digits = pastedData.split('').slice(0, length)

    // Create the new code string
    const newCode = Array(length)
      .fill('')
      .map((_, index) => digits[index] || '')
      .join('')

    if (onChange) {
      onChange(newCode)
    }
  }

  return (
    <div>
      <div id="code-input" className="flex space-x-sm">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            type={secureEntry ? 'password' : 'text'}
            className={`appearance-none rounded-md border-0 px-lg py-md text-center outline-none type-lg-head focus:bg-light-background-accent-light focus:outline-none focus:ring-0 dark:focus:bg-dark-background-accent-light ${
              errorMessage
                ? 'bg-light-background-error-light text-light-type-error dark:bg-dark-background-error-light dark:text-dark-type-error'
                : 'bg-light-surface-gray text-light-type-gray dark:bg-dark-surface-gray dark:text-dark-type-gray'
            }`}
            style={{
              width: boxWidth ? `${boxWidth}px` : '62px',
              height: boxHeight ? `${boxHeight}px` : '64px',
            }}
            maxLength={1}
            value={value[index] || ''}
            onChange={e => handleChange(e, index)}
            onKeyDown={e => handleKeyDown(e, index)}
            onPaste={handlePaste}
            ref={el => (inputs.current[index] = el)}
            aria-invalid={!!errorMessage}
            aria-describedby={errorMessage ? `code-input-error-${index}` : undefined}
          />
        ))}
      </div>
      {errorMessage && (
        <span
          id="code-input-error"
          className="mt-xs block text-left text-light-type-error type-sm-title dark:text-dark-type-error">
          {errorMessage}
        </span>
      )}
    </div>
  )
}

export default AppCodeInput
