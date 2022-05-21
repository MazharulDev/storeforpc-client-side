import React from 'react';
import CountUp from "react-countup";


const Summary = () => {
    return (
        <div className='flex justify-center'>
            <div>
                <h2 className='text-6xl text-center'>Millions Business Trust us</h2>
                <p className='text-2xl my-5 text-center'>Try to understand users expectation</p>
                <div className='md:h-72 flex items-center count-bg mb-5'>
                    <div className='md:grid grid-cols-4 gap-28 w-fit mx-auto'>
                        <div className='text-center'>
                            <CountUp end={47} redraw={true}>
                                {({ countUpRef }) => (

                                    <span className='text-5xl font-bold' ref={countUpRef} />

                                )}
                            </CountUp>
                            <h2 className='text-2xl uppercase mt-4'>Counties</h2>
                        </div>
                        <div className='text-center'>
                            <CountUp end={627} redraw={true}>
                                {({ countUpRef }) => (

                                    <span className='text-5xl font-bold' ref={countUpRef} />

                                )}
                            </CountUp>
                            <h2 className='text-2xl uppercase mt-4'>Complete Projects</h2>
                        </div>
                        <div className='text-center'>
                            <CountUp end={125} redraw={true}>
                                {({ countUpRef }) => (

                                    <span className='text-5xl font-bold' ref={countUpRef} />

                                )}
                            </CountUp>
                            <h2 className='text-2xl uppercase mt-4'>Happy clients</h2>
                        </div>
                        <div className='text-center'>
                            <CountUp end={356} redraw={true}>
                                {({ countUpRef }) => (

                                    <span className='text-5xl font-bold' ref={countUpRef} />


                                )}
                            </CountUp>
                            <h2 className='text-2xl uppercase mt-4'>Feedbacks</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;