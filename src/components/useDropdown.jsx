import React, { useState } from "react";

const useDropdown = (defaultState, label, options) => {
    const [state, setState] = useState(defaultState);
    const id = `use-dropdown-${label}`;
    const Dropdown = () => {
        return (
            <label htmlFor={id}>
                {label}
                <select
                    name=""
                    id={id}
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                    onBlur={(event) => setState(event.target.value)}
                >
                    {options.map((option) => {
                        return (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        );
                    })}
                </select>
            </label>
        );
    };
    return [state, Dropdown, setState];
};

export default useDropdown;
