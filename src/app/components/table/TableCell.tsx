import { PropsWithChildren } from "react";

type TableCellProps = PropsWithChildren<{
    width?: number
}>
export default function TableCell(props: TableCellProps) {
    const { width } = props;
    return (
        <th className="cursor-default" style={width ? { width: `${width}px` } : {}}>
            <div className="flex flex-row items-center">
                <span>{props.children}</span>
            </div>
        </th >
    );
}