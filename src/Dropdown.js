// components/Dropdown.jsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';


const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            {/* Green-colored text above the dropdown */}


            <div>
                <button
                    onClick={toggleDropdown}
                    className="tw-inline-flex tw-justify-center tw-rounded-md 
                    tw-border tw-border-sky-600 tw-shadow-sm tw-px-4 tw-py-2 tw-bg-sky-600 
                     hover:tw-bg-sky-50 
                    focus:tw-outline-none tw-gap-2 tw-items-center"
                >
                    


                    <FontAwesomeIcon className="tw-text-slate-800" icon={faList} />
                    <FontAwesomeIcon icon={faCaretDown} />

                </button>

                
                <button className='btn btn-primary dropdown-toggle'></button>

            </div>

            {isOpen && (
                <div
                    className="tw-origin-top-right tw-absolute tw-right-0 tw-mt-2 tw-w-56 
                    tw-rounded-md tw-shadow-lg tw-bg-white tw-ring-1 tw-ring-black tw-ring-opacity-5
                    focus:tw-outline-none"
                    role="menu"
                >
                    <div className="py-1" role="none">
                        <a
                            href="#"
                            className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 
                            hover:bg-gray-100"
                            role="menuitem"
                        >
                            Account settings
                        </a>
                        <a
                            href="#"
                            className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700
                            hover:bg-gray-100"
                            role="menuitem"
                        >
                            Support
                        </a>
                        <a
                            href="#"
                            className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700
                            hover:bg-gray-100"
                            role="menuitem"
                        >
                            License
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;