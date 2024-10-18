export interface AppPhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    countryList?: CountryList[]
    onCountrySelect?: (country: CountryList) => void
    placeholder?: string
    value?: string
    label: string
    error?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onClear?: () => void
}

interface CountryList {
    flag: string;
    name: string;
    code?: string;
    phone_code?: string;
}