import React from 'react';
interface Item {
    id: number | string;
    name: string;
}
export interface AppFormDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    itemList: Item[];
    onItemSelect: (selectedItems: Item) => void;
    selectedItem?: Item;
    placeholder: string;
    error?: string;
    label?: string;
    dataTestId?: string;
}
declare const AppFormDropdown: React.FC<AppFormDropdownProps>;
export default AppFormDropdown;
