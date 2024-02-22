import { twMerge } from 'tailwind-merge'

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className, ...rest }: TextareaProps) {
    return (
        <textarea
            className={twMerge(
                'p-4 rounded-[6px] border border-black',
                className
            )}
            {...rest}
        />
    )
}