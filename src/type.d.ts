type IWheelItemProps = {
  label?: string | number;
  value?: string | number;
  id: string | number;
};

type IParallelItemsProps = IWheelItemProps[][];

type SlidePickerType = {
  visible: boolean;
  wheels: number;
  value: IWheelItemProp[];

  animationDuration?: number;

  checkRange?: number;
  itemHeight?: number;
  checkedTextStyle?: TextStyle;
  normalTextStyle?: TextStyle;
  data: IParallelItemsProps;

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
