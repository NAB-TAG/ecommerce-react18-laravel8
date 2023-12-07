import './AccordionSkeletons.css';

const AccordionColorSkeletons = ({ quantity }) => {
    return (
        <div className='justify-content-center d-flex flex-wrap'>
            { [...Array( quantity )].map(( row, index ) => {
                return <div className="accordion-color-skeleton input-group mb-2 mx-3 mt-1 px-2" key={ index } ><div></div></div>;
            })}
        </div>
    );
}

export default AccordionColorSkeletons;
