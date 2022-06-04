import clsx from "clsx";
import React, { ReactNode } from 'react';

interface PopupWindowProps {
    className?: "string";
    content?: "string";
    children?: "slot";
}

export default function PopupWindow( {
    className,
    content,
    children,
}: PopupWindowProps) {
    return (
    <div className = {clsx("w-full h-screen bg-zinc-500 top-0 left-0 fixed", className)}>
        <div className='box'>
            <button className='button-close' >x</button>
            {content}
            {children}
            Test popup component
        </div>
    </div>);
}

