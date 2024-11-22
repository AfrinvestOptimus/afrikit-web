import { useTheme } from 'next-themes'

const NG = () => {
  const { theme } = useTheme()
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.62741 0.020366H5.88231V3.37331H4.25802L1.78427 0V3.37331H0.666626V4.11841H1.78427V4.8635H0.666626V5.6086H1.78427V7.84389H2.52937V5.6086H4.97327L6.62741 7.86426V5.6086H7.74506V4.8635H6.62741V4.11841H7.74506V3.37331H6.62741V0.020366ZM2.52937 2.27603L3.33405 3.37331H2.52937V2.27603ZM2.52937 4.8635V4.11841H3.88046L4.42686 4.8635H2.52937ZM5.88231 4.8635H5.35083L4.80443 4.11841H5.88231V4.8635Z"
        fill={theme === 'dark' ? '#45FFA6' : '#006B3B'}
        fill-opacity="0.823"
      />
    </svg>
  )
}

export default NG
