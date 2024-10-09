import { TAppListItemProps } from '.'

export function isSupportingTextTrue(
  props: TAppListItemProps,
): props is TAppListItemProps & { supportingText: true; subTitle: string } {
  return props.supportingText === true
}
