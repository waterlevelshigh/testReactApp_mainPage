import React from 'react'
import ReactDOM from 'react-dom'
import Dropdown from './Dropdown.js'
import Button from 'react-bootstrap/Button';




const Header = () => {
  return (
    <header>
      <div className="tw-grid  tw-grid-flow-row">
        <div className=" tw-cover tw-bg-center  tw-h-10 tw-bg-banner tw-py-0"></div>

        <div className='tw-grid tw-grid-cols-5 tw-py-0 tw-bg-sky-900 '>
          <div><h1 className='tw-text-3xl tw-col-span-3 tw-p-5 tw-font-mono tw-font-bold tw-text-white'>WaterLevelsHigh</h1></div>
          <Button variant="primary">Test</Button>
            <div className="tw-relative tw-p-4 tw-col-span-4 tw-inline-block tw-text-right">
              <Dropdown />
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
