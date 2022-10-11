import React, { useEffect, useState } from 'react'
import { colors } from '../../util/colors'

const Color = ({ color, isSelected, onClick }) => {
    return (
        <div className="flex justify-center items-center h-8 w-8 shrink-0">
            <div
                className={`border-2 p-0.5 rounded-full ${
                    isSelected ? 'border-white' : 'border-transparent'
                }`}
            >
                <div
                    className="w-5 h-5 rounded-full border border-black border-opacity-20 cursor-pointer"
                    style={{ backgroundColor: color }}
                    onClick={() => onClick(color)}
                ></div>
            </div>
        </div>
    )
}

export const ColorPicker = ({ onChange }) => {
    const [selectedColorIndex, setSelectedColorIndex] = useState(0)
    const [selectedColor, setSelectedColor] = useState(colors[0])

    const handleColorClick = (color, index) => {
        setSelectedColor(color)
        setSelectedColorIndex(index)
    }

    useEffect(() => {
        if (onChange && typeof onChange === 'function') {
            onChange(selectedColor)
        }
    }, [selectedColor])

    return (
        <div className="fixed bottom-0">
            <div className="fixed left-1/2 -translate-x-1/2 bottom-0 max-w-xs px-5 w-full">
                <div className="bg-btn h-full rounded-t-md shadow-lg px-2">
                    {/* Header */}
                    <div className="flex justify-between items-center h-12 w-full">
                        <div className="flex items-center justify-center w-full">
                            <p className="text-white font-medium">
                                Background Color
                            </p>
                        </div>
                    </div>
                    {/* Body */}
                    <div className="grid justify-items-center grid-cols-6 pb-2">
                        {colors.map((color, index) => (
                            <Color
                                key={index}
                                color={color}
                                isSelected={index === selectedColorIndex}
                                onClick={() => handleColorClick(color, index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
