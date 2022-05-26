import React from 'react';
import preview from '../../../assets/images/preview.jpg'

const PreviewSection = () => {
    return (
        <div className='bg-gray-100'>
            <div className='container md:grid grid-cols-2 mx-auto gap-8 items-center my-10 p-10 '>
                <div>
                    <img src={preview} alt="" />
                </div>
                <div>
                    <h2 className='text-4xl font-bold my-3 font-serif'>Buy any Computer parts in this place</h2>
                    <p>The computer case is the metal and plastic box that contains the main components of the computer, including the motherboard, central processing unit (CPU), and power supply. The front of the case usually has an On/Off button and one or more optical drives.

                        Computer cases come in different shapes and sizes. A desktop case lies flat on a desk, and the monitor usually sits on top of it. A tower case is tall and sits next to the monitor or on the floor. All-in-one computers come with the internal components built into the monitor, which eliminates the need for a separate case.</p>
                </div>
            </div>
        </div>
    );
};

export default PreviewSection;