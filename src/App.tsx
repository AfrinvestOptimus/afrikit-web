import { Controller, useForm } from 'react-hook-form'
import AppButton from './molecules/AppButton'
import AppCodeInput from './molecules/AppCodeInput'
import DropdownComponent from './molecules/AppDropdownMenu'
import { AppFileUploader } from './molecules/AppFileUpload'
import AppPhoneInput from './molecules/AppPhoneInput'
import AppSidebar from './molecules/AppSideBar'
import AppTopBar from './molecules/AppTopBar'
import { TSideBarItem } from './types'
import { DropdownItemProps } from './types/TAppDropdownMenu'
import AppLoader from './atoms/AppLoader'
import AppModal from './molecules/AppModal/AppModal'

interface FormData {
  email: string
}

const links: TSideBarItem[] = [
  {
    id: '1',
    text: 'Get started',
    icon: true,
    iconName: 'ri-map-pin-time-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: false,
  },
  {
    id: '2',
    text: 'Home',
    icon: true,
    iconName: 'ri-home-6-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: false,
  },
  {
    id: '4',
    text: 'Portfolio',
    icon: true,
    iconName: 'ri-bar-chart-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: false,
  },
  {
    id: '5',
    text: 'Savings',
    icon: true,
    iconName: 'ri-bank-card-2-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    current: true,
    hasDropdown: true,
    openDropdown: true,
    dropDownElement: [
      {
        text: 'Dashboard',
      },
      {
        text: 'Open Savings',
      },
      {
        text: 'Fund Wallet',
      },
    ],
  },
  {
    id: '6',
    text: 'Invest',
    icon: true,
    iconName: 'ri-copper-coin-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: true,
    openDropdown: true,
    dropDownElement: [
      {
        text: 'Nigeria Stocks',
      },
      {
        text: 'US Stocks',
      },
      {
        text: 'Commercial papers',
      },
    ],
  },
  {
    id: '7',
    text: 'Send Money',
    icon: true,
    iconName: 'ri-send-plane-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: false,
  },
  {
    id: '8',
    text: 'Wallets',
    icon: true,
    iconName: 'ri-wallet-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: true,
    openDropdown: true,
    dropDownElement: [
      {
        text: 'Naira Wallet',
      },
      {
        text: 'Dollar Wallet',
      },
      {
        text: 'Main Wallet',
      },
    ],
  },
  {
    id: '9',
    text: 'Learn',
    icon: true,
    iconName: 'ri-graduation-cap-fill',
    color: 'accent',
    position: 'bottom',
    badge: false,
    hasDropdown: false,
  },
  {
    id: '10',
    text: 'Support',
    icon: true,
    iconName: 'ri-lifebuoy-fill',
    color: 'accent',
    position: 'bottom',
    badge: false,
    hasDropdown: false,
  },
  {
    id: '12',
    text: 'Settings',
    icon: true,
    iconName: 'ri-settings-5-fill',
    color: 'accent',
    position: 'bottom',
    badge: false,
    hasDropdown: false,
  },
]

//Dropdown List Items With Avatar Image
const items: DropdownItemProps[] = [
  {
    label: 'Item 1',
    hasIcon: false,
    hasAvatar: true,
    showCheck: false,
    state: 'active',
    subLabel: 'SubLabel',
  },
  {
    label: 'Item 2',
    hasIcon: false,
    hasAvatar: true,
    showCheck: false,
    state: 'active',
    subLabel: 'SubLabel',
    avatarSrc: 'images/jpg/avatar1.jpeg',
    subContent: ['Sub menu 1', 'Sub menu 2'],
  },
  {
    label: 'Item 3',
    hasIcon: false,
    hasAvatar: true,
    showCheck: false,
    state: 'active',
    subLabel: 'SubLabel',
    avatarSrc: 'images/jpg/avatar1.jpeg',
    subContent: ['Sub menu 1', 'Sub menu 2'],
  },
  {
    label: 'Item 4',
    hasIcon: false,
    hasAvatar: true,
    showCheck: true,
    subLabel: 'SubLabel',
    state: 'active', // Must be 'active', 'disabled', or 'default'
  },
]
//Dropdown List Items with Remix icon classes
const items2: DropdownItemProps[] = [
  {
    label: 'Item 1',
    hasIcon: true,
    hasAvatar: false,
    showCheck: false,
    state: 'active',
    subLabel: 'SubLabel',
  },
  {
    label: 'Item 2',
    hasIcon: true,
    hasAvatar: false,
    showCheck: false,
    state: 'active',
    subLabel: 'SubLabel',
    avatarSrc: 'images/jpg/avatar1.jpeg',
    subContent: ['Sub menu 1', 'Sub menu 2', 'Sub menu 3', 'Sub menu 4', 'Sub menu 5'],
  },
  {
    label: 'Item 3',
    hasIcon: true,
    hasAvatar: false,
    showCheck: false,
    state: 'active',
    subLabel: 'SubLabel',
    avatarSrc: 'images/jpg/avatar1.jpeg',
    subContent: ['Sub menu 1', 'Sub menu 2', 'Sub menu 3', 'Sub menu 4', 'Sub menu 5'],
  },
  {
    label: 'Item 4',
    hasIcon: true,
    hasAvatar: false,
    showCheck: true,
    subLabel: 'SubLabel',
    state: 'active', // Must be 'active', 'disabled', or 'default'
  },
]
const items3: DropdownItemProps[] = [
  {
    label: 'Item 1',
    hasIcon: true,
    hasAvatar: false,
    showCheck: false,
    state: 'disabled',
    subLabel: 'SubLabel',
  },
  {
    label: 'Item 2',
    hasIcon: true,
    hasAvatar: false,
    showCheck: false,
    state: 'disabled',
    subLabel: 'SubLabel',
    avatarSrc: 'images/jpg/avatar1.jpeg',
    subContent: ['Sub menu 1', 'Sub menu 2', 'Sub menu 3', 'Sub menu 4', 'Sub menu 5'],
  },
  {
    label: 'Item 3',
    hasIcon: true,
    hasAvatar: false,
    showCheck: false,
    state: 'disabled',
    subLabel: 'SubLabel',
    avatarSrc: 'images/jpg/avatar1.jpeg',
    subContent: ['Sub menu 1', 'Sub menu 2', 'Sub menu 3', 'Sub menu 4', 'Sub menu 5'],
  },
  {
    label: 'Item 4',
    hasIcon: true,
    hasAvatar: false,
    showCheck: true,
    subLabel: 'SubLabel',
    state: 'disabled', // Must be 'active', 'disabled', or 'default'
  },
]

// Return the URL of the uploaded image
const mockUpload = async (file: File): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      // Returning a mock URL after the delay
      resolve('images/jpg/avatar.jpeg' + file.name)
    }, 2000) // 2 seconds delay
  })
}

function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
    },
  })

  const handleClearEmail = () => {
    setValue('email', '') // Clear the email value
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-light-page-bg2 dark:bg-dark-page-bg2 font-sans antialiased mx-auto">
     

        <AppModal title='Title Goes here...'>
        <div className="p-4">
          <p className="mb-4">We only need access to your</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center">
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>
              Full name
            </li>
            <li className="flex items-center">
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>
              Phone number
            </li>
            <li className="flex items-center">
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>
              Date of Birth
            </li>
          </ul>
          <div className="flex items-center mb-4">
            <i className="ri-lock-fill text-gray-500 mr-2"></i>
            <p className="text-sm text-gray-600">Your BVN does not give us access to your bank accounts or transactions.</p>
          </div>
        </div>
        </AppModal>
        
    </div>
  )
}

export default App
