import React from 'react';

const DetailsDescription = ({ dataID, programData }) => {

    const findEventData = () => {
        if (!programData) return null;

        for (const category in programData) {
            for (const event of programData[category]) {
                if (parseInt(event.id) === parseInt(dataID)) {
                    return event;
                }
            }
        }

        return null;
    };

    const eventData = findEventData();

    if (!eventData) {
        return (
            <div>
                <h1>Event not found</h1>
            </div>
        );
    }

    return (
        <div className=' flex flex-col justify-start items-start h-full gap-2'>
            <h1 className=' custom-font-2 text-3xl text-black font-bold mb-3 uppercase '>{eventData.title}</h1>
            <div className=' flex flex-row gap-2 items-center'>
                <p className=' text-2xl font-semibold text-red-400'> {eventData.entryFee}</p>

            </div>
            <p className=' text-lg font-semibold'>Availability: <span className=' text-green-400 font-semibold'>
                {eventData.dateTimePlace}
            </span></p>




            <div className=' flex flex-col lg:flex-row justify-center items-center gap-4 mt-10'>
                <div><button className=' bg-red-400 text-white px-28 py-3 rounded-md '><p>Book Now</p></button></div>
                <div><button className=' bg-black text-white px-28 py-3 rounded-md'><p>Add to cart</p></button></div>
            </div>
            <p className=' uppercase text-sm font-bold custom-font-2 mt-10'>Description</p>
            <p className=' w-fit'>{eventData.description}</p>


        </div>
    );
};

export default DetailsDescription;