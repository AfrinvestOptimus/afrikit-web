import { useTheme } from 'next-themes'

const US = () => {
  const { theme } = useTheme()
  return (
    <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.50004 4.80396H3.31377V2.19612H5.17651V1.45102H3.31377V0.333374H2.56867V1.45102H2.38239C1.25258 1.45102 0.333374 2.3702 0.333374 3.50004C0.333374 4.62988 1.25258 5.54906 2.38239 5.54906H2.56867V8.1569H0.705923V8.902H2.56867V10.0197H3.31377V8.902H3.50004C4.62986 8.902 5.54906 7.98282 5.54906 6.85298C5.54906 5.72314 4.62986 4.80396 3.50004 4.80396ZM2.38239 4.80396C1.66342 4.80396 1.07847 4.21904 1.07847 3.50004C1.07847 2.78105 1.66342 2.19612 2.38239 2.19612H2.56867V4.80396H2.38239ZM3.50004 8.1569H3.31377V5.54906H3.50004C4.21901 5.54906 4.80396 6.13399 4.80396 6.85298C4.80396 7.57198 4.21901 8.1569 3.50004 8.1569Z"
        fill={theme === 'light' ? '#BB0007' : '#FF858A'}
        fill-opacity="0.836"
      />
    </svg>
  )
}

export default US