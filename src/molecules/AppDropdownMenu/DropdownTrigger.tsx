import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { buttonSizes, textSizes } from '../AppButton/button'

export const DropdownTrigger: React.FC<{ label?: string; trigger?: React.ReactNode; alignment?: 'left' | 'right' | 'center'}> = ({
  label,
  trigger,
  alignment
}) => {
  const getAlignment = () => {
    switch(alignment) {
      case 'left': 
        return 'justify-start';
      case 'right': 
        return 'justify-end';
      case 'center':
        return 'justify-center'
      default:
        return 'justify-start'
    }
  }
  return (
    <DropdownMenu.Trigger asChild>
      {trigger ? (
        <div className={`min-w-[300px] flex space-y-lg  ${getAlignment()}`}>
          {trigger}
        </div>
        
      ) : (
        <div className={`min-w-[300px] flex ${getAlignment()}`}>
          <button
            className={`flex items-center justify-between ${buttonSizes[3]} ${textSizes[3]} text-light-gray10 bg-light-background-neutral-light dark:bg-dark-background-neutral-light border-light-edge-neutral rounded-xs-max shadow-sm hover:bg-light-background-accent-light dark:hover:bg-dark-background-accent-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-indigoA12`}>
            <span>{label || 'Open'}</span>
            <i className="ri-arrow-down-s-line ml-2 text-lg" aria-hidden="true" />
          </button>
        </div>
      )}
    </DropdownMenu.Trigger>
  )
}