import * as classNames from "classnames";
import * as React from "react";

import { Levels } from "../common/levels";
import { StyleProperties } from "../common/properties";
import { Sizes } from "../common/sizes";

export enum ButtonType {
    Default = "default",
    Negative = "negative",
    Outline = "outline",
    Transparent = "transparent",
}

export type ButtonProperties = {
    className?: string;
    disabled?: boolean;
    focus?: boolean;
    level?: Levels;
    negative?: boolean;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    reset?: boolean;
    size?: Sizes;
    submit?: boolean;
    tabIndex?: number;
    text?: string | JSX.Element;
    type?: ButtonType;
} & StyleProperties;

/**
 * Atoms: button component
 */
export class Button extends React.Component<ButtonProperties, {}> {

    private buttonRef: HTMLButtonElement;

    public render(): any {
        return (
            <button
                className={this.className()}
                disabled={this.props.disabled}
                onClick={(e) => this.onClick(e)}
                ref={(b: any) => this.buttonRef = b}
                style={this.props.style}
                tabIndex={this.props.tabIndex}
                type={this.buttonType()}
                autoFocus
            >
                {this.props.children || this.props.text}
            </button>
        );
    }

    public componentDidMount() {
        if (this.buttonRef && this.props.focus) {
            setTimeout(() => this.buttonRef.focus(), 0);
        }
    }


    private className(): string {
        return classNames(
            this.props.type && this.props.type !== ButtonType.Default ? `a-button-${this.props.type}` : "a-button",
            this.props.level ? `a-button--${this.props.level}` : "",
            this.props.size ? `a-button--${this.props.size}` : "",
            this.props.className,
        );
    }

    private buttonType(): string {
        if (this.props.submit) {
            return "submit";
        }
        if (this.props.reset) {
            return "reset";
        }
        return "button";
    }

    private onClick(e: React.MouseEvent<HTMLButtonElement>): void {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }
}
