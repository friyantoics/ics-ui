import { twMerge } from 'tailwind-merge'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...rest }: InputProps) {
    let defaultClassName = `h-11 px-4 rounded-[6px] bg-white border border-black text-sm`

    if (rest.type === 'file') {
        defaultClassName = twMerge(
            defaultClassName,
            'pl-0 file:bg-black file:border-0 file:me-4 file:h-full file:px-4 file:text-white file:cursor-pointer'
        )
    }

    return (
        <input
            className={twMerge(
                defaultClassName,
                className
            )}
            {...rest}
        />
    )
}