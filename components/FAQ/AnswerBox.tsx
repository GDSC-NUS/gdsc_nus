import React from "react";
import clsx from "clsx";
import { useState } from "react";

interface AnswerBoxProps {
    answer?: string;
    className?: string;
}
export default function AnswerBox({
    answer,
    className,
    }: AnswerBoxProps) {

    return (
        <div className={clsx("bg-amber-50 text-gray-900 border-stone-950 w-1/2 p-1 font-medium m-auto", className)}>
            {<div>{answer}</div>}
        </div>
    );
};