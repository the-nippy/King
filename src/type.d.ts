type IWheelItemProps = {
  label?: string | number;
  value?: string | number;
  contents?: IWheelItemProps[] | null;
  id: string | number;
};

type IParallelItemsProps = IWheelItemProps[][];
type ICascadeItemsProps = IWheelItemProps[];

type IPickerValueProps = Omit<IWheelItemProps, 'contents'>;

type SlidePickerType = {
  visible: boolean;
  wheels: number;
  value: IWheelItemProp[];
  data: IParallelItemsProps | ICascadeItemsProps;

  closeOnMaskClick?: boolean;

  animationDuration?: number;

  checkRange?: 3 | 5 | 7;
  itemHeight?: number;

  contentBackgroundColor?: string;
  itemDividerColor?: string;
  checkedTextStyle?: TextStyle;
  normalTextStyle?: TextStyle;

  titleText?: string;
  titleTextStyle?: TextStyle;
  cancelText?: string;
  cancelTextStyle?: TextStyle;
  onCancelClick?: () => void;
  confirmText?: string;
  confirmTextStyle?: TextStyle;
  onConfirmClick?: (result: IWheelItemProps[]) => void;

  HeaderComponent?: React.ReactNode;
};
