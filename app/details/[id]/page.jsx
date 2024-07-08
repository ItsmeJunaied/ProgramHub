'use client'

import usePrograms from "@/app/Api/usePrograms";
import DetailsDescription from "@/app/component/DetailsDescription";
import DetailsImage from "@/app/component/DetailsImage";

const Details = ({ params }) => {
    const { programData } = usePrograms();
    const dataID = params?.id;



    return (
        <div className=' container mx-auto mb-40 mt-20'>

            <h1 className=' text-center text-4xl uppercase mb-20 font-bold underline'> Details Description</h1>
            <div className=' flex flex-col lg:flex-row justify-center items-center gap-0'>
                <div className=' w-full lg:w-1/2'>
                    <DetailsImage
                        dataID={dataID}
                        programData={programData}
                    />
                </div>
                <div className=' w-full lg:w-1/2'>
                    <DetailsDescription
                        dataID={dataID}
                        programData={programData}
                    />
                </div>
            </div>
        </div>
    );
};

export default Details;