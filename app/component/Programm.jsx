'use client'

import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import usePrograms from '../Api/usePrograms';

const Programm = () => {

    const { programData } = usePrograms();
    const [selectedCategory, setSelectedCategory] = useState('ALL');


    // Function to handle category selection
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    // Render category buttons only if programData is not null
    const renderCategoryButtons = () => {
        if (!programData) {
            return null;
        }

        return (
            <div className="mb-8">
                {/* Category filter buttons */}
                <button
                    className={`mr-4 ${selectedCategory === 'ALL' ? 'bg-red-400 text-white border-2 rounded-lg px-5 py-2 mr-5 lg:mr-0 mb-5 ' : 'bg-gray-200 text-gray-800 border-2 rounded-lg px-5 py-2'}`}
                    onClick={() => handleCategorySelect('ALL')}
                >
                    All
                </button>
                {Object.keys(programData).map((category, index) => (
                    <button
                        key={index}
                        className={`mr-4 ${selectedCategory === category ? 'bg-red-400 text-white border-2 rounded-lg px-5 py-2 mb-5' : 'bg-gray-200 text-gray-800 border-2 rounded-lg px-5 py-2'}`}
                        onClick={() => handleCategorySelect(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        );
    };

    // Filtered programs based on selectedCategory
    let filteredPrograms = [];
    if (programData) {
        if (selectedCategory === 'ALL') {
            // If selectedCategory is 'ALL', flatten all categories into one array
            filteredPrograms = Object.values(programData).reduce((accumulator, category) => [...accumulator, ...category], []);
        } else {
            // Otherwise, show programs from the selected category
            filteredPrograms = programData[selectedCategory] || [];
        }
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Programs</h1>
            {renderCategoryButtons()}

            {/* Display programs based on selected category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {filteredPrograms.map((event) => (
                    <div key={event.id} className="bg-white rounded-lg  overflow-hidden lg:h-[300px]">
                        <div className="flex flex-col lg:flex-row">
                            {/* Left side: Image */}
                            <div className=" w-[325px] relative h-40 md:h-auto rounded-lg">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg h-full "
                                />
                            </div>
                            {/* Right side: Text data */}
                            <div className="p-4 ">
                                <h3 className="text-lg font-bold mb-2 text-black hover:text-red-500">{event.title}</h3>
                                <p className="text-[#4A5B6F] font-bold mb-2">
                                    <FontAwesomeIcon icon={faLocationDot} style={{ color: "#FFD43B", }} className=' mr-2' />
                                    {event.dateTimePlace}
                                </p>
                                <p className=" mb-2 text-red-500 font-bold ">{event.entryFee}</p>
                                <p className=" text-zinc-500">{event.description}</p>

                                <Link href={`/details/${event.id}`}>
                                    <button className=" px-5 py-3 border-2 rounded-md bg-transparent hover:bg-red-400 mt-8 hover:text-white ">
                                        Book & Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Programm;