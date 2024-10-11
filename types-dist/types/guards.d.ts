import { TAppListItemProps } from '.';
export declare function isSupportingTextTrue(props: TAppListItemProps): props is TAppListItemProps & {
    supportingText: true;
    subTitle: string;
};
