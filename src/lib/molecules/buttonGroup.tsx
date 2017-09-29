import * as React from "react";

import { Button } from "../atoms/button";
import { AccordeonItem } from "./accordeonItem";

export type ButtonGroupProperties = {};

type Properties = ButtonGroupProperties;

/**
 * Molecules: Accordeon item
 */
export class ButtonGroup extends React.Component<Properties, {}> {

    public render(): any {
        return (
            <div className="m-button-group">
                {this.renderItems()}
            </div>
        );
    }

    private renderItems(): any[] {
        if (this.props.children) {
            // Filter out the allowed children
            const allowedChildren: AccordeonItem[] = (this.props.children as any[])
                .filter((x) => (x.type as any).name === Button.name);

            // Send out a warning
            if (allowedChildren.length < (this.props.children as any[]).length) {
                // tslint:disable-next-line:no-console
                console.warn(`ButtonGroup: Only children of type ${Button.name} are allowed.`);
            }

            return allowedChildren;

        }
        return null;
    }
}