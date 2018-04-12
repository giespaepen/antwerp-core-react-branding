/// <reference types="react" />
import * as React from "react";
import { StyleProperties } from "../common/properties";
export declare enum SpacingStyle {
    Margin = "u-margin",
    MarginBottom = "u-margin-bottom",
    MarginBottomLarge = "u-margin-bottom-lg",
    MarginBottomXs = "u-margin-bottom-xs",
    MarginBottomXx = "u-margin-bottom-xx",
    MarginLeft = "u-margin-left",
    MarginLeftLg = "u-margin-left-lg",
    MarginLeftXs = "u-margin-left-xs",
    MarginLeftXx = "u-margin-left-xx",
    MarginLg = "u-margin-lg",
    MarginRight = "u-margin-right",
    MarginRightLg = "u-margin-right-lg",
    MarginRightXs = "u-margin-right-xs",
    MarginRightXx = "u-margin-right-xx",
    MarginTop = "u-margin-top",
    MarginTopLg = "u-margin-top-lg",
    MarginTopXs = "u-margin-top-xs",
    MarginTopXx = "u-margin-top-xx",
    MarginXs = "u-margin-xs",
    MarginXx = "u-margin-xx",
    NoMargin = "u-no-margin",
}
export declare type SpacingProperties = {
    type: SpacingStyle | SpacingStyle[];
    className?: string;
} & StyleProperties;
/**
 * Utilities: Layouts component, renamed as block
 */
export declare class Spacing extends React.Component<SpacingProperties, {}> {
    render(): any;
    private className();
}
