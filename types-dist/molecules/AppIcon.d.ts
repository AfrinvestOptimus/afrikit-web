import { FC } from 'react';
export type AppIconSize = '16' | '20' | '24' | '40' | '48' | '98';
export type AppIconProps = {
    iconClassName: string;
    size: AppIconSize;
    muted?: boolean;
    statusBadge?: 'interest' | 'pending' | 'failed' | 'cancelled';
};
declare const AppIcon: FC<AppIconProps>;
export default AppIcon;
