import React from "react";
import { TextInput, Label } from "evergreen-ui";

export class CoordinateInputWithLabel extends React.Component {
    render() {
        const { label, placeholder, onChange } = this.props;

        return (
            <div className="coordinateInputWithLabel--container">
                <Label>{label}</Label>
                <TextInput
                    placeholder={placeholder}
                    width="150px"
                    onChange={e => !!onChange && onChange(e.target.value)}
                />
            </div>
        );
    }
}