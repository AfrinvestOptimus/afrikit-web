import React from 'react';
interface AvatarProps {
    src?: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg';
    fallback?: string;
    className?: string;
}
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
