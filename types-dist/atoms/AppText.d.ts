import { TAppTextProps } from '../types';
/**
 * AppText Component
 *
 * A customizable text component that applies various styles based on the provided props.
 *
 * @param {number} [size=3] - The size of the text, ranging from 1 to 9.
 * @param {string} [color='gray'] - The color of the text.
 * @param {string} [weight='regular'] - The font weight of the text.
 * @param {boolean} [highContrast=false] - Whether to use high contrast version of the color.
 * @param {string} [align='left'] - The text alignment.
 * @param {React.ReactNode} children - The content to be rendered within the text component.
 * @param {string} [className] - Additional CSS classes to be applied.
 * @param {object} [rest] - Any additional props to be spread on the element.
 *
 * @returns {JSX.Element} A paragraph element with the specified styles applied.
 */
export default function AppText({ size, color, weight, highContrast, align, children, className, rest, }: TAppTextProps): JSX.Element;
