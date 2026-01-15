'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full py-4 px-6 flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors"
                onClick={onClick}
            >
                <span className="text-lg font-semibold text-[#1A1A2E] text-left">{question}</span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#7B2CBF]" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
}

interface AccordionProps {
    items: { question: string; answer: string }[];
}

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
}
