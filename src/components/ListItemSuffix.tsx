import clsx from "clsx";
import AppText from "../atoms/AppText";
import { TAppTextProps, TListItemSuffixProps } from "../types";

/**
 * ListItemSuffix Component
 * 
 * This component renders different types of trailing elements based on the `suffix` prop.
 * The `trailingProps` prop provides the necessary properties for the specific trailing element.
 * 
 * @param {TListItemSuffixProps} props - The properties for the ListItemSuffix component.
 * @param {Exclude<SuffixType, 'none'>} props.suffix - The type of trailing element to render.
 *    It can be one of the following:
 *    - 'textContent': Renders a text content block.
 *    - 'text': Renders a text element.
 *    - 'link': Renders a link element.
 *    - 'icon': Renders an icon.
 * @param {SuffixProps[Exclude<SuffixType, 'none'>]} props.trailingProps - The properties for the specific trailing element.
 *    The structure of this object depends on the value of the `suffix` prop.
 * 
 * @returns {JSX.Element | null} The rendered trailing element or null if the `suffix` prop is 'none'.
 */
const ListItemSuffix = ({suffix, trailingProps}: TListItemSuffixProps) => {
    switch (suffix) {
        case 'textContent':
            return <TextContent {...trailingProps} />
        case 'text':
            return <Text {...trailingProps} />
        case 'link':
            return <Link {...trailingProps} />
        case 'icon':
            return <Icon {...trailingProps} />
        default:
            return null
    }
};

export default ListItemSuffix;

const TextContent = (props: {text: string, content: string}) => {
    const { text, content } = props;
    return (
        <div className="flex flex-col items-end text-right space-y-xs self-end">
            <p className="type-sm-head text-light-type-gray dark:text-dark-type-gray">{text}</p>
            <p className="type-xs-body text-light-type-gray-muted dark:text-dark-type-gray-muted line-clamp-1">{content}</p>
        </div>
    );
}

const Text = (props: {text: string, textProps: TAppTextProps}) => {
    const { text, textProps } = props;
    return (
        <AppText {...textProps} className="self-center">{text}</AppText>
    );
}

const Link = (props: {link: string, linkProps: TAppTextProps}) => {
    const { link, linkProps } = props;
    return (
        <AppText {...linkProps} size={2} color="accent" weight="regular" className="self-stretch cursor-pointer flex items-center">{link}</AppText> // TODO: Switch to AppLink component when available
    );
}

const Icon = (props: { iconClass: string }) => {
    const { iconClass } = props
    return (
      <div className="w-3xl h-3xl rounded-sm-max bg-light-surface-gray dark:bg-dark-surface-gray gap-lg justify-center items-center flex shadow-inner">
        <i className={clsx('text-xl', iconClass)} />
      </div> // TODO: To be replaced with AppIcon component when available
    )
  }
