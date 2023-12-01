import RowTableSkeleton from "./RowTableSkeleton";

const RowsTableSkeletons = ( {quantity, cols} ) => {
    return (
        <>
            { [...Array( quantity )].map(( row, index ) => {
                return <RowTableSkeleton key={ index } { ...generateColsProps( cols )} editHref="disabled" deleteHref="disabled"/>;
            })}
        </>
    );
}

const generateColsProps = (cols) => {
    const colsProps = {};
    for (let i = 1; i <= cols; i++) {
        colsProps[`col_${i}`] = "";
    }
    return colsProps;
  };

export default RowsTableSkeletons;
