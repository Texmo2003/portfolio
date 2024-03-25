import React from 'react';

function Profile () {
    return (
        <div className='flex flex-col justify-between space-y-16 py-10'>
            <h1 className='text-4xl font-bold mx-auto'>Profil</h1>
            <div className='flex px-16'>
                <div>
                    <h2 className='text-2xl font-bold px-24'>Hvem er jeg?</h2>
                    <p className='px-24'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <img src='https://t4.ftcdn.net/jpg/05/51/34/51/240_F_551345154_YiMKHXcKEOineXBmkmMMRktVRfyPba6T.jpg' alt='bilde av meg' className='px-24 delay-[300ms] duration-[600ms] taos:'></img>
            </div>
            <div className='flex px-16'>
                <img alt='Bilde av fest ellerno' className='px-24 w-96'></img>
                <div>
                    <h2 className='text-2xl font-bold px-24'>Hva gjør jeg på fritiden?</h2>
                    <p className=' px-24'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div className='flex px-16'>
                <div>
                    <h2 className='text-2xl font-bold px-24'>Hva gjør jeg på fritiden?</h2>
                    <p className=' px-24'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <img alt='Bilde av trening ellerno' className='px-24 w-96'></img>
            </div>
        </div>
    );
};

export default Profile;