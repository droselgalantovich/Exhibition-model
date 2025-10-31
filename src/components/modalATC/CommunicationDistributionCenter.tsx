import {Link} from "react-router-dom";

export const CommunicationDistributionCenter = () => {
    return (
        <div>
            <div className='w-[1319px] bg-deep-blue top-0 left-1/2 transform -translate-x-1/2 absolute flex items-center justify-center pt-[30px] pb-[43px] text-extra text-white leading-[1] rounded-b-[60px]'>
                Распределенный узел связи
            </div>
            <Link to='/ObjectNodeMediumATC'>
                <img className='w-[2327px] mt-[68px]' src='/images/CommunicationScheme.png' alt='' />
            </Link>
        </div>
    );
};