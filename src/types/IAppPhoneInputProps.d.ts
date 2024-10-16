export interface AppPhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    countryList?: any[]
    placeholder?: string
    value?: string
    label: string
    error?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onClear?: () => void
}
