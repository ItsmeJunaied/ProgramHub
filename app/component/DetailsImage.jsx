'use client '
import React from 'react';
import Image from 'next/image';
import usePrograms from '../Api/usePrograms';


const DetailsImage = ({ dataID, programData }) => {


    const findImageData = () => {
        if (!programData) return null;

        for (const category in programData) {
            for (const event of programData[category]) {
                if (parseInt(event.id) === parseInt(dataID)) {
                    return {
                        image: event.image,
                        title: event.title,
                    };
                }
            }
        }

        return null;
    };


    const imageData = findImageData();

    if (!imageData) {
        return (
            <div>
                <h1>Image not found</h1>
            </div>
        );
    }
    return (

        <div className={`w-[300px]  object-cover rounded-lg`}>
         
            <Image
                src={imageData.image}
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
           alt='image'
            />
        </div>


    );
};

export default DetailsImage;