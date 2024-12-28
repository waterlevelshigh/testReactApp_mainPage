import React from 'react'
import logo from './logo.svg';
const Content = () => {

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }


  return (
    <main>
        <img src={logo} className="App-logo" alt="logo" ></img>
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>

        <div class="jumbotron p-3 p-md-5 text-white rounded bg-light" id="chemtronicsBlurb">

              <div class="row mb-3 p-1 " >
                  <div class="card text-light flex-md-row mb-4 box-shadow h-md-250 bg-color-blue-600">
                      <div class="card-body d-flex flex-column align-items-start" >
                          <strong class="d-inline-block mb-2 text-warning ">Manufacturing - Chemicals, Materials</strong>
                          <h3 class="mb-3"> Chemtronics </h3>

                          <div class="position-absolute end-0 p-3 dropdown">
                              <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Maps
                              </button>
                              <ul class="dropdown-menu">
                                  <li><a class="dropdown-item" target="_self" href="chemtronics_child\index.html">Main Webmap</a></li>
                              </ul>
                          </div>
                          <div class="d-flex mb-3">
                              <div class="p-2 fw-semibold fst-italic">Swannanoa, NC</div>

                              <div class="position-absolute end-0 p-2 dropdown">
                                  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      Documents
                                  </button>
                                  <ul class="dropdown-menu">
                                      <li><h6 class="dropdown-header">Miscellaneous</h6></li>
                                      <li><a class="dropdown-item" target="_blank" href="chemtronics_child\assets\documents\89_ROA_Ammendment.pdf">89 ROD Ammendment</a></li>
                                      <li><a class="dropdown-item" target="_blank" href="chemtronics_child\assets\documents\89_ROD.pdf">89 ROD</a></li>
                                      <li><a class="dropdown-item" target="_blank" href="chemtronics_child\assets\documents\2015_RemedInvestReport.pdf">2015 Final Remedial Investagative Report</a></li>
                                      <li><h6 class="dropdown-header">Five Year Reviews</h6></li>
                                      <li><a class="dropdown-item" target="_blank" href="chemtronics_child\assets\documents\FirstFYR.pdf">First Five Year Review</a></li>
                                      <li><a class="dropdown-item" target="_blank" href="chemtronics_child\assets\documents\SecondFYR.pdf">Second Five Year Review</a></li>
                                      <li><a class="dropdown-item" target="_blank" href="chemtronics_child\assets\documents\ThirdFYR_factsheet.pdf">Third FYR Factsheet</a></li>
                                      <li><a class="dropdown-item" target="_blank" href="chemtronics_child\assets\documents\FourthFYR.pdf">Fourth Five Year Review</a></li>
                                      <li><a class="dropdown-item" target="_blank" href="chemtronics_child\assets\documents\FifthFYR.pdf">Fifth Five Year Review</a></li>
                                      {/* <!-- FUTURE DOCUMENTS HERE --> */}
                                  </ul>
                              </div>



                          </div>

                          <div class="row py-4 mb-2">
                              <p class="card-text opacity-75 ">
                                  <i>From the Fourth FYR...</i><br></br>
                                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp " The 535-acre Superfund Site is located in a semi-rural area about eight miles east of Asheville, in the
                                      Town of Swannanoa in Buncombe County, North Carolina (Figure E-1). The Site is divided into two
                                      distinct geographical areas known as the Front Valley (FV) and Back Valley (BV) (Figure 1). A
                                      prominent ridge separates the FV and the BV. Different companies manufactured explosives,
                                      incapacitating agents and chemical intermediates at the Site between 1952 and 1994. During facility
                                      operations, manufacturing occurred primarily in the FV. Material testing and waste disposal occurred
                                      primarily in the BV. Manufacturing, testing and waste disposal occurred on about 200 acres of the 535-
                                      acre Site. This included 23 individual disposal areas which were grouped into six discrete waste disposal
                                      areas (DAs). These areas are designated as DA-10/1 1 and DA-23 (located in the FV) and DA-6, DA-7/8,
                                      DA-9 and the Acid Pit Area (APA) (located in the BV).</p>

                              <a class="btn btn-md btn-secondary p-2 mb-auto" data-bs-toggle="collapse" href="#chemtronicsCollapse" role="button" aria-expanded="false" aria-controls="chemtronicsCollapse">
                                  Read more...
                              </a>
                              <div class="collapse" id="chemtronicsCollapse">
                                  <div class="card card-body text-light">

                                      Together, these DAs occupy less than 10 acres
                                      of the Site. Solid waste material and possibly solvents were reportedly incinerated in the APA. Chemical
                                      waste and spent acid were also disposed in trenches in the APA. Chemical wastes fi*om the
                                      manufacturing of ortho-chlorobenzylidene malononitrile (CS) and agent 3-quinuclidinyl benzilate (BZ)
                                      were placed in metal 5 5-gallon drums and reportedly neutralized with a kill solution. These drums were
                                      buried in DA-6, DA-7/8, DA-9, and DA-10/11 along with other process wastes and solid wastes. DA-23
                                      is a former wastewater treatment biolagoon associated with Building 113 (B113). This biolagoon was
                                      built on top of an abandoned leach field also associated with B113. The leach field was in use during the
                                      years CS and BZ were generated. B1 13 was the building where the majority of production/
                                      manufacturing occurred.
                                    <br></br>
                                          &nbsp&nbsp&nbsp&nbsp&nbsp&nbspThe Site is not currently in use and the owner of the property, Chemtronics, Inc., has no current plans for
                                          reuse, other than potential, sustainable forestry practices. Most of the Site is heavily wooded. Current
                                          site features include concrete former building pads, ponds, fenced and capped disposal areas, remedial
                                          components, a security guard hut and a maintenance shed (Figures 1 and 2). The Site’s 2016 Record of
                                          Decision (ROD) Amendment split the originally established site into the Chemtronics Superfund site
                                          and the Chemtronics property (Figures 1 and E-1). The Chemtronics Superfund site is located within the
                                          larger Chemtronics property. The Chemtronics property outside of the Chemtronics Superfimd site is not
                                          considered part of the Superfund site. There are plans underway to establish a conservation easement on
                                          those portions of the Chemtronics property outside of the Chemtronics Superfund site in the future.
                                          Once established, the conservation easement area will be used for sustainable forestry and conservation
                                          practices. The site property is bordered to the north, northeast, and northwest by sparsely populated
                                          woodlands, primarily national forests or State game lands. Unincorporated residential neighborhoods are
                                          located immediately east, west, and south of the Site and include the Bee Tree Road community,
                                          Dillingham Circle, and the Old Bee Tree/Rainbow Ridge community, respectively. An industrial facility
                                          (the former RadioShack Swannanoa property), located immediately south of the Site, has recently been
                                          returned to active use and was being investigated/remediated imder the North Carolina Registered
                                          Environmental Consultant Program. "
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        </div> {/* <!-- CHEMTRONICS BLURB END --> */}









    </main>    
  )
}

export default Content
