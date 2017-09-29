import * as React from "react";

import { Levels } from "../common/levels";
import { BadgeProperties } from "./badge";

export type LabelProperties = BadgeProperties;

type Properties = LabelProperties;

/**
 * Atoms: badge component
 */
export class Label extends React.Component<Properties, {}> {

    public render(): any {
        return (
            <span className={this.className()}>
                {this.props.value}
            </span>
        );
    }

    private className(): string {
        const type = this.props.level || Levels.None;
        return `a-label a-label--${type}`;
    }
}
