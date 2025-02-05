import React from "react";
import cn from "../../utils/cn";

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  variant?: "income" | "outcome";
}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, variant, ...props }, ref) => {
    const variantClasses = {
      income: "text-green-500",
      outcome: "text-red-500",
    };

    return (
      <td
        ref={ref}
        className={cn(
          "py-5 px-8 text-sm font-medium bg-gray-700 first:rounded-l-md last:rounded-r-md",
          variant ? variantClasses[variant] : "text-gray-300",
          className
        )}
        {...props}
      />
    );
  }
);
TableCell.displayName = "TableCell";

export { TableCell };
