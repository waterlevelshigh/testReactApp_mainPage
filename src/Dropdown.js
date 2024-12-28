// components/Dropdown.jsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import Dropdown from 'react-bootstrap/Dropdown';

const HeaderDropdown = () => {
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



            </div>

            {isOpen && (
                <div
                    className="tw-origin-top-right tw-absolute tw-right-0 tw-mt-2 tw-w-56 
                    tw-rounded-md tw-shadow-lg tw-bg-white tw-ring-1 tw-ring-black tw-ring-opacity-5
                    focus:tw-outline-none"
                    role="menu"
                >
                    <ul className="dropdown-menu">
                        <li><h6 className="dropdown-header">Miscellaneous</h6></li>
                        <li><a className="dropdown-item" target="_blank" href=""></a></li>
                        <li><a className="dropdown-item" target="_blank" href=""></a></li>
                        <li></li>
                        <li><h6 className="dropdown-header">Five Year Reviews</h6></li>
                        <li><a className="dropdown-item" target="_blank" href="">First Five Year Review</a></li>
                        <li><a className="dropdown-item" target="_blank" href="chemtronics_child\assets\documents\SecondFYR.pdf">Second Five Year Review</a></li>
                        <li><a className="dropdown-item" target="_blank" href="chemtronics_child\assets\documents\ThirdFYR_factsheet.pdf">Third FYR Factsheet</a></li>
                        <li><a className="dropdown-item" target="_blank" href="chemtronics_child\assets\documents\FourthFYR.pdf">Fourth Five Year Review</a></li>
                        <li><a className="dropdown-item" target="_blank" href="chemtronics_child\assets\documents\FifthFYR.pdf">Fifth Five Year Review</a></li>
                        {/* <!-- FUTURE DOCUMENTS HERE --> */}
                    </ul>
                    <div className="py-1 tw-grid-flow-row" role="none">
                        <a
                            href="chemtronics_child\assets\documents\89_ROA_Ammendment.pdf"
                            className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 
                            hover:bg-gray-100"
                            role="menuitem"
                        >
                            89 ROD Ammendment                       
                        </a>
                        <a
                            href="chemtronics_child\assets\documents\89_ROD.pdf"
                            className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700
                            hover:bg-gray-100"
                            role="menuitem"
                        >
                            89 ROD
                        </a>
                        <a
                            href="#"
                            className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700
                            hover:bg-gray-100"
                            role="menuitem"
                        >
                            License
                        </a>
                        <a className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700
                            hover:bg-gray-100" target="_blank" href="chemtronics_child\assets\documents\2015_RemedInvestReport.pdf">2015 Final Remedial Investagative Report
                        </a>



                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeaderDropdown;