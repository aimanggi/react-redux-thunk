import React, { useRef } from 'react';

const AppHooks = () => {
    const inputRef = useRef();

    const makeFocus = () => {
        const ref = inputRef.current;
        ref.focus();
        ref.value = "gilbert"
    }

    return (
        <div>
            <input type="text" ref={inputRef} placeholder="Field.."/>
            <button onClick={makeFocus}>Click Mee</button>
        </div>
    );
};

export default AppHooks;