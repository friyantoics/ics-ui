import { twMerge } from 'tailwind-merge'

export interface TableProps {
    children: React.ReactNode,
    className?: string,
}

export function Table({ children, className }: TableProps) {
    return (
        <div className="relative overflow-x-auto">
            <table className={twMerge(`w-full text-sm text-left rtl:text-right`, className)}>
                {children}
            </table>
        </div>
    )
}

export function TableHead({ children, className }: TableProps) {
    return (
        <thead className={twMerge(`text-sm bg-[#eee]`, className)}>
            {children}
        </thead>
    )
}

export function TableHeadRow({ children, className }: TableProps) {
    return (
        <tr className={className}>
            {children}
        </tr>
    )
}

export function TableHeadCell({ children, className }: TableProps) {
    return (
        <th scope="col" className={twMerge(`px-6 py-3 font-semibold`, className)}>
            {children}
        </th>
    )
}

export function TableBody({ children, className }: TableProps) {
    return (
        <tbody className={className}>
            {children}
        </tbody>
    )
}

export function TableBodyRow({ children, className }: TableProps) {
    return (
        <tr className={twMerge(`bg-white border-b`, className)}>
            {children}
        </tr>
    )
}

export function TableBodyCell({ children, className }: TableProps) {
    return (
        <td className={twMerge(`px-6 py-4`, className)}>
            {children}
        </td>
    )
}