import * as React from "react";

import { AccordeonItem, AccordeonItemProperties } from "./accordeonItem";

export type AccordeonProperties = {
    activeIndex?: number,
    allClosed?: boolean,
};
export type AccordeonState = { activeIndex: number };

/**
 * Molecules: Accordeon item
 */
export class Accordeon extends React.Component<AccordeonProperties, AccordeonState> {

    public constructor(props: AccordeonProperties) {
        super(props);
        this.state = { activeIndex: props.allClosed ? -1 : props.activeIndex === undefined ? 0 : props.activeIndex };
    }

    public render(): any {
        return (
            <div className="m-accordion">
                {this.renderItems()}
            </div>
        );
    }

    public componentWillReceiveProps(nextProps: AccordeonProperties) {
        if (nextProps.activeIndex) {
            this.setState({ activeIndex: nextProps.activeIndex });
        }
    }

    private renderItems(): any[] {
        if (this.props.children) {
            // Filter out the allowed children
            const allowedChildren: any[] =
                (React.Children.toArray(this.props.children) as Array<React.ReactElement<AccordeonItemProperties>>)
                    .filter((x: any) => (x.type as any).name === AccordeonItem.name);

            // Send out a warning
            if (allowedChildren.length < (this.props.children as any[]).length) {
                // tslint:disable-next-line:no-console
                console.warn(`${Accordeon.name}: Only children of type ${AccordeonItem.name} are allowed.`);
            }

            return allowedChildren.map((x: AccordeonItem, i) => (
                <AccordeonItem
                    collapsed={i !== this.state.activeIndex}
                    index={i}
                    key={i}
                    onClick={() => this.onClick(i)}
                    {...x.props}
                >
                    {x.props.children}
                </AccordeonItem>
            ));

        }
        return null;
    }

    private onClick(index: number): void {
        this.setState({
            activeIndex: this.state.activeIndex === index ? -1 : index,
        });
    }
}
