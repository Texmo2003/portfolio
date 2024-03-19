import React from 'react';

function Header(props) {
    return (
        <nav className='bg-gray-100'>
            <div className='items-center mx-auto max-w-7xl'>
                <div className='flex justify-around'>
                    <div className='flex space-x-4'>
                        
                        {/* logo */}
                        
                        <a href='/' className='flex items-center px-2 py-5 text-gray-700 hover:text-gray-900'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 mr-1 text-green-400 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>
                        <span className='font-bold'>Jørgen Texmo</span>
                        </a>
                        
                        {/* primary nav */}
                        
                        <div className='flex items-center space-x-1'>
                            <a className='px-3 py-5 text-gray-700 hover:text-gray-900' href='/'>Hjem</a>
                            <a className='px-3 py-5 text-gray-700 hover:text-gray-900' href='/profile'>Profil</a>
                            <a className='px-3 py-5 text-gray-700 hover:text-gray-900' href='/'>Projekter</a>
                        </div>
                    </div>

                    {/* secondary nav */}

                    
                    <div className='flex items-center'>
                        <a className='px-1 py-2 text-green-700 bg-green-200 rounded hover:bg-green-100 hover:text-green-900' href='/'>Kontakt meg</a>
                    </div>

                    
                </div>
            </div>
        </nav>
    );
}

export default Header;