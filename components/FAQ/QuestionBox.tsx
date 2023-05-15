import React from "react";
import clsx from "clsx";
import { useState } from "react";
import { ReactNode } from "react";
import { classicNameResolver } from "typescript";

interface QuestionBoxProps {
    question: string;
    className?: string;
    children?: ReactNode;
}
export default function QuestionBox({
    question,
    className,
    children
}: QuestionBoxProps) {

    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <button 
                onClick={toggleExpanded} 
                className={clsx("bg-amber-200 text-gray-900 border-stone-950 font-bold flex-row w-1/2 p-2 hover:bg-amber-100",
                className)}
            >
                {question}
            </button>
            { expanded && <div>{children}</div> }
        </div>
    );
};
