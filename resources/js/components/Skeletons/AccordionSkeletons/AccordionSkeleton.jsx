import './AccordionSkeletons.css';

const AccordionSkeleton = ({ quantity }) => {
    return (
        <>
            { [...Array( quantity )].map(( row, index ) => {
                return <div className="accordion-skeleton" key={ index } ><div></div></div>;
            })}
        </>
    );
}

export default AccordionSkeleton;
