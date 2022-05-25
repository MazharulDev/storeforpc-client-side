import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import Mazharul from '../../assets/images/mazharul.jpg'
import Footer from '../../shared/Footer/Footer';

const MyPortfolio = () => {
    return (
        <div className='mt-5'>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-5">
                <div className="card-body">
                    <div className="avatar mx-auto">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={Mazharul} alt='' />
                        </div>
                    </div>
                    <h2 className='text-xl font-bold text-center'>Md Mazharul Islam</h2>
                    <div className='flex items-center gap-3 justify-center'>
                        <MdOutlineMailOutline className='text-lg'></MdOutlineMailOutline>
                        <h2>miforbd@gmail.com</h2>
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <div className="card-body">

                        <h2 className='card-title'>Educational Background:</h2>
                        <p className='badge'>Secondary</p>
                        <p>Kumaruli High School <br />
                            Department of Science <br />
                            S.Y. 2013 - 2018
                        </p>
                        <p className='badge'>Higher Secondary</p>
                        <p>Ishwarganj Ideal College <br />
                            Department of Arts <br />
                            S.Y. 2018-2020
                        </p>
                        <p className='badge'>Honours Degree</p>
                        <p>Ishwarganj University College <br />
                            Department of Business <br />
                            S.Y. 2020-running
                        </p>




                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Skill</h2>
                        <h2>HTML</h2>
                        <progress class="progress progress-primary w-56" value="85" max="100"></progress>
                        <h2>CSS</h2>
                        <progress class="progress progress-primary w-56" value="90" max="100"></progress>
                        <h2>Javascript</h2>
                        <progress class="progress progress-primary w-56" value="80" max="100"></progress>
                        <h2>REACT</h2>
                        <progress class="progress progress-primary w-56" value="78" max="100"></progress>
                        <h2>Tailwind</h2>
                        <progress class="progress progress-primary w-56" value="90" max="100"></progress>
                        <h2>Bootstrap</h2>
                        <progress class="progress progress-primary w-56" value="85" max="100"></progress>
                        <h2>MongoDB</h2>
                        <progress class="progress progress-primary w-56" value="55" max="100"></progress>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">My Project</h2>
                        <a className='link link-accent' href="https://vehicle-storehouse.web.app/">Vehicle Store House</a>
                        <a className='link link-accent' href="https://assignment-ten.netlify.app/">Health is Happiness</a>
                        <a className='link link-accent' href="https://assignment-nine.netlify.app/">Simple Laptop Shop</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyPortfolio;



