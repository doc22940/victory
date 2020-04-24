import * as React from "react";
import {
  OrientationTypes,
  NumberOrCallback,
  StringOrNumberOrCallback,
  VictoryCommonProps,
  VictoryLabelableProps,
  VictoryNumberCallback,
  VictoryThemeDefinition,
  VictoryStyleObject
} from "victory-core";

export interface VictoryTooltipProps extends VictoryCommonProps, VictoryLabelableProps {
  active?: boolean;
  activateData?: boolean;
  activePoints?: any[];
  angle?: string | number;
  center?: { x: number; y: number };
  centerOffset?: {
    x?: NumberOrCallback;
    y?: NumberOrCallback;
  };
  constrainToVisibleArea?: boolean;
  cornerRadius?: NumberOrCallback;
  datum?: {};
  data?: any[];
  dx?: NumberOrCallback;
  dy?: NumberOrCallback;
  events?: { [key: string]: (event: React.SyntheticEvent<any>) => void };
  flyoutHeight?: NumberOrCallback;
  flyoutWidth?: NumberOrCallback;
  flyoutStyle?: VictoryStyleObject;
  flyoutComponent?: React.ReactElement;
  index?: number | string;
  orientation?: OrientationTypes | VictoryNumberCallback;
  pointerLength?: NumberOrCallback;
  pointerOrientation?: OrientationTypes | ((...args: any[]) => OrientationTypes);
  pointerWidth?: NumberOrCallback;
  renderInPortal?: boolean;
  style?: React.CSSProperties;
  text?: StringOrNumberOrCallback | string[] | number[];
  x?: number;
  y?: number;
}

export interface FlyoutProps extends VictoryCommonProps {
  active?: boolean;
  center?: {
    x?: number;
    y?: number;
  };
  className?: string;
  cornerRadius?: number;
  data?: any[];
  datum?: object;
  dx?: number;
  dy?: number;
  events?: object;
  height?: number;
  id?: string | number;
  index?: number;
  orientation?: OrientationTypes;
  origin?: object;
  pathComponent?: React.ReactElement;
  pointerLength?: number;
  pointerWidth?: number;
  polar?: boolean;
  role?: string;
  shapeRendering?: string;
  style?: VictoryStyleObject;
  transform?: string;
  width?: number;
  x?: number;
  y?: number;
}

export class Flyout extends React.Component<FlyoutProps, any> {}
export class VictoryTooltip extends React.Component<VictoryTooltipProps, any> {}
