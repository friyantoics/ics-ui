import { twMerge } from 'tailwind-merge'

export interface SwitchProps {
    isActivated: boolean,
    className?: string,
    defaultBgColor?: string,
    activeBgColor?: string,
    onChecked: (value: boolean) => void,
}

export function Switch({
    isActivated,
    defaultBgColor = '#ddd',
    activeBgColor = '#06c25e',
    onChecked,
}: SwitchProps) {
    let classes = `w-11 h-6 bg-[${defaultBgColor}] rounded-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`

    if (isActivated) {
        // move the switch to the right
        classes = twMerge(classes, 'after:translate-x-full')
    }

    return (
        <button type="button" className="relative inline-flex items-center cursor-pointer" onClick={() => onChecked(!isActivated)}>
            <input type="checkbox" className="sr-only peer" checked={isActivated} readOnly />
            <div
                className={classes}
                style={{
                    backgroundColor: isActivated ? activeBgColor : defaultBgColor,
                }}
            ></div>
        </button>
    )
}