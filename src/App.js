import './App.css';
import React from 'react';
import TableauEmbed from './TableauEmbed';
import VegaVisualization from './SanddanceEmbed';
import { forestWildfiresSpec, populationWildfiresSpec, 
  populationViolentStormsSpec, populationIcingDaysSpec, 
  populationHotDaysSpec, landViolentStormsSpec, 
  landRiverFloodingSpec, landExtremePrecipitationSpec,
  landCoastalFloodingSpec} from './sanddanceSpecs.js'
import Earth from './globe_spinning.gif';
import { useState } from 'react';
import deltaO1 from './deltaO1.png';
import deltaO2 from './deltaO2.png';
import deltaO3 from './deltaO3.png';
import deltaO4 from './deltaO4.png';

function App() {
  // const sumOfExposureValuesOG = 'https://public.tableau.com/views/SumExposureMap/Dashboard12?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const sumOfExposureValues = 'https://public.tableau.com/views/SumExposureMap1/Dashboard13?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  // const sumOfExposureValues = 'https://public.tableau.com/views/SumExposureMap_17330841124910/Dashboard13?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const exposureValues2022 = 'https://public.tableau.com/views/ExposureValues2022/ExposureValues?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  // const yearlyTempAnomoliesOG = 'https://public.tableau.com/views/BasicTemperatureVis/AreaChart?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const yearlyTempAnomolies = 'https://public.tableau.com/views/yearlyTempAnomolies/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  // const yearlyTempAnomolies = 'https://public.tableau.com/views/yearlyTempAnomolies/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  // const monthlyTempAnomoliesOG = 'https://public.tableau.com/views/UniqueTemperatureVis/Heatmap?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  // const monthlyTempAnomolies = 'https://public.tableau.com/views/UniqueTemperatureVis_17330212511100/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  // const magnitudeOfTempAnomoliesByMonthOG = 'https://public.tableau.com/views/UniqueTemperatureVis/RadialChart?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link ';
  const monthlyTempAnomoliesMagnitudes = 'https://public.tableau.com/views/UniqueTemperatureVis_17330212511100/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  // const monthlyTempAnomoliesMagnitudes = 'https://public.tableau.com/views/UniqueTemperatureVis_17330212511100/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  // const nationalAndStateRiskLevelOG = 'https://public.tableau.com/shared/4NHP76KDY?:display_count=n&:origin=viz_share_link ';
  //const nationalAndStateRiskLevel = 'https://public.tableau.com/views/BetterMaps_17333238426540/Dashboard5?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const nationalAndStateRiskLevel = 'https://public.tableau.com/views/BetterMaps_17324144202350/Dashboard5?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
  // const precipitationAndTempChangesbyState = 'https://public.tableau.com/views/BetterMaps_17324144202350/ScatterPlotbyChanges?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const medianAnnualPrecipitationChange = 'https://public.tableau.com/views/Group_Project_17330019467830/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const mediaCroplandExposure = 'https://public.tableau.com/views/Group_Project_17330019467830/Sheet5?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  let scale = 1;
  let offsetX = 0; 
  let distanceX = 0;

  window.onload = function() {
    window.scrollTo(0, 0);
    document.body.style.overflowY = 'hidden';
  }

  window.addEventListener('wheel', function(e) {
      const earth = document.querySelector('.earth');
      const blueCover = document.querySelector('.blueCover');
      const scrollBar = window.scrollY;
      const maxSize = 8; 

      if (e.deltaY > 0 || (e.deltaY < 0 && scrollBar === 0))
      {
        const scaleIncrement = e.deltaY > 0 ? 0.05 : -0.05;
        scale += scaleIncrement;
        
        if (scale < 1)
        {
            scale = 1;
        }

        if (scale > maxSize)
        {
            scale = maxSize;
        }

        if (scale > 6)
        {
          blueCover.style.display = 'flex';
            if (blueCover.style.opacity < 1)
            {
                earth.style.opacity = 1 - (scale - 6) / 2; 
                earth.style.display = 'block';
            }
            else
            {
                earth.style.opacity = 0;
                earth.style.display = 'none';
            }
            blueCover.style.opacity = 0.8 + (scale - 6) / 2;
        }
        else
        {
            blueCover.style.opacity = 0;
            blueCover.style.display = 'none';
            earth.style.display = 'block';
        }
      
        
        offsetX = e.deltaY; 
        distanceX += offsetX;

        if (distanceX > 60)
        {
            distanceX = 60;
        }

        if (distanceX < 0)
        {
            distanceX = 0;
        }

        earth.style.transform = `scale(${scale})`;
        earth.style.right = `${distanceX}%`;


        if (blueCover.style.opacity >= 1) 
        {
            document.body.style.overflowY = '';
        } 
        else if (e.deltaY < 0) 
        {
            document.body.style.overflowY = '';
        }
        else
        {
            document.body.style.overflowY = 'hidden';
        }
      }

      const endStart = 1050.254 * window.innerHeight / 100;
      const targetPosition = 990.254 * window.innerHeight / 100;
      const targetPosition2 = 1150.254 * window.innerHeight / 100;
      const targetPosition3 = 1300.254 * window.innerHeight / 100;
      const targetPosition4 = 1420.254 * window.innerHeight / 100;
      const startEnd = 1500.254 * window.innerHeight / 100;
      const end= 1550.254 * window.innerHeight / 100;
      const deltaOVis = document.getElementById("deltaOViz");

      let opacity = (scrollBar - targetPosition) / (endStart - targetPosition);
      opacity = Math.max(opacity, 0); 
      let exitOpacity = (end - scrollBar) / (end - startEnd);
      exitOpacity = Math.max(exitOpacity, 0); 

      deltaOVis.style.opacity = opacity;

      if (deltaOVis.style.opacity == 0)
      {
        deltaOVis.style.display = 'none';
      }
      else
      {
        deltaOVis.style.display = 'block';
      }

      if (scrollBar >= targetPosition || scrollBar + e.deltaY >= targetPosition)
      {
        deltaOVis.style.position = 'fixed';
        deltaOVis.style.top = '-10vh';
        deltaOVis.style.height = '70%';

        console.log(scrollBar + " " + (100 * this.window.innerHeight / 100));
        if (scrollBar >= targetPosition && scrollBar < targetPosition2)
        {
          deltaOVis.src = deltaO1;
        }
        if (scrollBar >= targetPosition2 && scrollBar < targetPosition3)
        {
          deltaOVis.src = deltaO2;
        }
        if (scrollBar >= targetPosition3 && scrollBar < targetPosition4)
        {
          deltaOVis.src = deltaO3;
        }
        if (scrollBar >= targetPosition4)
        {
          deltaOVis.src = deltaO4;
        }
        if (scrollBar >= startEnd)
        {
          deltaOVis.style.opacity = exitOpacity;
        }
      }
      else
      {
        deltaOVis.style.opacity = 0;
      }
  });

  const [currentSpec, setCurrentSpec] = useState(forestWildfiresSpec);

  const [exposureExplanation, setExposureExplanation] = useState("Percentage of forested areas at risk of burning.");
  const specExplanations = {
    forestWildfiresSpec : "Percentage of forested areas at risk of burning.",
    populationWildfiresSpec : "Percentage of population located in areas at risk of burning.",
    populationViolentStormsSpec : "Percentage of population exposed to wind gust speeds greater than 28.6 m/s.",
    populationIcingDaysSpec : "Percentage of population exposed to days with a maximum temperature less than 0°C.",
    populationHotDaysSpec : "Percentage of population exposed to days with a maximum temperature greater than 35°C.",
    landViolentStormsSpec : "Percentage of land exposed to wind gust speeds greater than 28.6 m/s.",
    landRiverFloodingSpec : "Percentage of land area to river flooding at a 10 year return period.",
    landExtremePrecipitationSpec : "Land exposed to 2+ weeks of days exceeding the 99th percentile of daily precipitation values over the reference period (1981-2010).",
    landCoastalFloodingSpec : "Percentage of land area to coastal flooding at a 10 year return period."
  };

  const changeSpec = (spec, specName) => {
    setCurrentSpec(spec);
    setExposureExplanation(specExplanations[specName]);
  };

  
  return (
    <div className="App">
      <div className="blueCover" id="blueCover">
        <div className="textYearlyTempAnomolies">
            <div className="ribbon">
              <div className="text">
                Using the mean temperature of 1951-1980 as a baseline, it can be seen that in the years following, 
                there has been a <bold>growing increase in global temperature.</bold> Studies have indicated that even a single
                degree change can lead to rising sea levels, loss of arctic ice, extreme heat waves, and force changes
                in agricultural practices. A continuing increase of temperature could lead to rapid changes in other weather
                events, which could have <bold>catastrophic effects on the world. </bold>
              </div>
            </div>
        </div>
        <div className="yearlyTempAnomolies">
          <div className="polaroid">
            <div className="polaroidTitle">Global Yearly Temperature Anomaly Means from the 1951-1980 Baseline</div>
            <TableauEmbed url={yearlyTempAnomolies}/> 
          </div>
          <div className="string"></div>
        </div>
      </div>
      <div className="titleBox">
        <div className="title">
            Climate in Motion
        </div>
        <div className="spinningEarth">
            <img id="earth" className="earth" src={Earth} alt="Spinning Earth"/>
        </div>
      </div>
      <div className="monthlyTempAnomolies">
        <div className="textMonthlyTempAnomoliesMagnitudes">
        While certain months have larger anomalies than others in any given year, every month has increasing temperature based off of the baseline. These can lead to longer hotter summers, more frequent winter storms, and more droughts. Seasonal pattern differences such as these lead to eco-system disruption and food shortages. Additionally, anomalies are increasing at a faster rate, meaning more extreme environmental effects are expected.
        </div>
        <div className="bgMonthlyTempAnomoliesMagnitudes" />
        <div className="accentMonthlyTempAnomoliesMagnitudes" />
        <div className="monthlyTempAnomoliesMagnitudes">
          <TableauEmbed url={monthlyTempAnomoliesMagnitudes}/>
        </div>
      </div>
      <div className="exposureIntro">
        <div className="text">
          The effects of climate change can take on a variety forms: rising temperature, changing precipitation patterns, more extreme weather 
          like floods and storms, etc. One way to understand the impact of these effects is to look at the percentage of population or land exposed. 
        </div>
        <div className="shadow" />
        <div className="bg" />
      </div>
      <div className="exposureSums">
          <div className="exposureTextTotal">
            <div className="exposureTextBlock">
              <div className="textSumOfExposureValues">
              The Organization for Economic Cooperation and Development (OECD) monitors the exposure to various climate-related hazards in recent years for areas
              word-wide. Only one country had no exposure to any of the measured events in 2022: Tokelau.
              </div>
            </div>
            <div className="exposureAccent"/>
          </div>
        <div className="instructions">
          <div>
            ⓘ Hover over a country to see its name and sum exposure value
          </div>
          <div>
            ⓘ Click on a country to see the exposure value breakdown at a country level (ctrl + click to select multiple)
          </div>
        </div>
        <div className="sumOfExposureValues">
          <TableauEmbed url={sumOfExposureValues}/>
        </div>
        <div className="sandDances">
          <div className="summaryBlock">
            <div className="summaryExposureValues">
              In the following, each square is a country with its color representing the exposure value for a specific year.
            </div>
          </div>
          <div className="summaryAccent" />
          <div className="instructions">
            <div>
              ⓘ Hover over a square to view the country's name and exposure value 
            </div>
            <div>
              ⓘ Click on a measure to the right to see its data
            </div>
          </div>
          <div className="exposureGraphWrapper">
            <div className="exposureGraphExplain">
              <div className="exposureExplanation">
                {exposureExplanation}
              </div>
              <div className="exposureValuesGraph">
                <VegaVisualization spec={currentSpec} />
              </div>
            </div>
            <div className="exposureValuesButtons">
              <button onClick={() => changeSpec(forestWildfiresSpec, "forestWildfiresSpec")} className={`${currentSpec === forestWildfiresSpec ? "selected" : "unselected"}`}>Forest Exposure to Wildfires</button>
              <button onClick={() => changeSpec(populationWildfiresSpec, "populationWildfiresSpec")} className={`${currentSpec === populationWildfiresSpec ? "selected" : "unselected"}`}>Population Exposure to Wildfires</button>
              <button onClick={() => changeSpec(populationHotDaysSpec, "populationHotDaysSpec")} className={`${currentSpec === populationHotDaysSpec ? "selected" : "unselected"}`}>Population Exposure to Hot Days</button>
              <button onClick={() => changeSpec(populationIcingDaysSpec, "populationIcingDaysSpec")} className={`${currentSpec === populationIcingDaysSpec ? "selected" : "unselected"}`}>Population Exposure to Icing Days</button>
              <button onClick={() => changeSpec(landViolentStormsSpec, "landViolentStormsSpec")} className={`${currentSpec === landViolentStormsSpec ? "selected" : "unselected"}`}>Land Exposure to Violent Storms</button>
              <button onClick={() => changeSpec(populationViolentStormsSpec, "populationViolentStormsSpec")} className={`${currentSpec === populationViolentStormsSpec ? "selected" : "unselected"}`}>Population Exposure to Violent Storms</button>
              <button onClick={() => changeSpec(landExtremePrecipitationSpec, "landExtremePrecipitationSpec")} className={`${currentSpec === landExtremePrecipitationSpec ? "selected" : "unselected"}`}>Land Exposure to Extreme Precipitation</button>
              <button onClick={() => changeSpec(landRiverFloodingSpec, "landRiverFloodingSpec")} className={`${currentSpec === landRiverFloodingSpec ? "selected" : "unselected"}`}>Land Exposure to River Flooding</button>
              <button onClick={() => changeSpec(landCoastalFloodingSpec, "landCoastalFloodingSpec")} className={`${currentSpec === landCoastalFloodingSpec ? "selected" : "unselected"}`}>Land Exposure to Coastal Flooding</button>
            </div>
          </div>
        </div>
        <div className="exposureTextBlock" style={{marginTop: '15vh'}}>
          <div className="textSumOfExposureValues">
            On average, nations experienced 4.5 out of 9 of the measured events in 2022, revealing the vast and relentless reach of this crisis. 
            This stark reality shows that no nation, no matter its size or location, is untouched by our changing world. 
            The biggest concerns may differ from region to region, but one thing is clear: climate change is a global emergency, and the danger is everywhere.
          </div>
        </div>
        <div className="exposureAccent" />
        <div className="instructions">
          <div>
            ⓘ Hover over a block to see the area's name and exposure value
          </div>
          <div>
            ⓘ Click on the [+] under Continent to see the data at a country level 
          </div>
        </div>
        <div className="exposureValues">
          <TableauEmbed url={exposureValues2022}></TableauEmbed>
        </div>
      </div>
      <div className="precipEffects">
        <div className="precip">
          <div className="precipTopBlock">
            <div className="precipExplain" />
              <div className="precipText" >
              Over the past 4 and a half decades, annual precipitation patterns have shifted dramatically across the globe, with some 
              regions experiencing increased rainfall while others face prolonged droughts. These changes can have 
              profound effects on ecosystems, agriculture, and human livelihoods. Too little precipitation can lead to 
              water scarcity, crop failures, and desertification, devastating communities that rely on consistent 
              rainfall for food and drinking water. Conversely, excessive precipitation can result in flooding, soil 
              erosion, and the destruction of infrastructure, displacing millions and threatening food security in 
              vulnerable regions. 
              </div>
            <div className="precipAccent" />
          </div>
          <div className="instructions">
            ⓘ Hover over a country to see its name, year of measurement, and precipitation change for that year
          </div>
          <div className="instructions">
            ⓘ Click on a country to view the preciptation change over the entire time period in the area chart on the right, ctrl + click 
            to select multiple regions
          </div>
          <div className="globalTitle">Global Median Annual Precipitation Change</div>
          <div className="globalPrecipChange">
            <TableauEmbed url={medianAnnualPrecipitationChange}/>
          </div>
        </div>
        <div className="crop">
          <div className="cropTopBlock">
            <div className="cropText">
              <div className="text">
                Extreme precipitation events—intense rainfall or prolonged wet periods—pose significant threats to agricultural 
                croplands world-wide. When croplands are exposed to these events, the excess water can lead to soil erosion, 
                nutrient depletion, and waterlogging, all of which hinder crop growth and reduce yields. In regions dependent 
                on agriculture for local food supplies and economic stability, these impacts can be devastating, leading to 
                food insecurity, increased costs, and a loss of livelihoods. On a global scale, widespread crop damage from 
                extreme precipitation disrupts food supply chains, drives up food prices, and exacerbates inequalities in 
                access to resources. The graph below highlights the countries most affected by these events, underscoring the 
                urgent need for climate resilience strategies in agriculture.
              </div>
            </div>
            <div className="cropAccent" />
          </div>
          <div className="croplandExposure">
            <div className="cropPolaroid">
              <TableauEmbed url={mediaCroplandExposure}/>
            </div>
          </div>
        </div>
      </div>
      <div className="oxygenIntro">
        <div className="oxygenText">
          <div className="text">
            On the subject of precipitation, it can also indicate climate change based on its concentration of Delta-O-18. <bold>Delta-O-18 (δ18O)
            </bold> is a scientific measure used to understand past and present environmental conditions, particularly 
            climate. The value is calculated as the deviation in ratio of stable isotopes oxygen-18 (18O) and oxygen-16 (16O). 
            Water in warmer areas tends to have higher concentrations of 18O while areas in colder regions tend to have a higher 
            density of 16O. This is because 18O is heavier, and falls from clouds as rain before the clouds reach the colder 
            polar regions. By analyzing δ18O in materials like ice cores, deep-sea sediment, and fossilized shells, scientists 
            can infer how warm the oceans and atmosphere were at different times. <bold>Higher δ18O</bold> values indicate <bold>colder periods</bold>, 
            while <bold>lower δ18O</bold> values suggest <bold>warmer eras</bold> with less ice and higher sea levels.
          </div>
        </div>
        <div className="oxygenBG" />
        <div className="oxygenShadow" />
      </div>
      <div className="deltaO">
          <div className="deltaOWrapper">
            <div className="deltaOText" id="deltaOText">
              <div className="text">
                <div className="oSection" style={{marginTop: '65vh'}}>
                  This map shows δ¹⁸O values calculated from a collection of over 26,000 seawater ¹⁸O values prepared by NASA. Overall, the values 
                  mostly sit around or above 0, indicating a normal, expected ratio of 18O and 16O. However, there is a noticeable patch of very 
                  low δ¹⁸O values off the Northern coast of Russia, a highly frozen glacial sea region.
                </div>
                <div className="oSection">
                  This trend of low negative Delta-O-18 values is more apparent if we create longitude and latitude bins, and look at the average 
                  Delta-O-18 values in the resulting grid. Notice how again, it seems that towards the equator, the values are mostly normal, 
                  but as the samples get closer to the north pole they trend more negative. These lower Delta-O-18 values indicate a deviation 
                  from the typical 18O/16O ratio, potentially from melting polar ice.
                </div>
                <div className="oSection">
                  We can also look at Delta-O-18 values by depth. This visualization shows Delta-O-18 again binned by longitude, and 
                  organized by depth. Negative Delta-O-18 values are represented as larger and more orange. Notice that the negative Delta-O-18 
                  values are concentrated near the surface (depth equals zero).
                </div>
                <div className="oSection">
                  We can also swap Longitude for Temperature, and look at average Delta-O-18 divided into Temperature and Depth regions. 
                  Looking at this breakdown, it is clear that the negative Delta-O-18 regions are mainly located near the surface in colder 
                  regions. This visualization also exposes that many of the higher Delta-O-18 samples are from below the surface, indicating a shift 
                  away from colder years. Overall, the Delta-O-18 data suggests that in a relatively recent period, glacial ice has been 
                  melting at an increased rate than normal.               
                </div>
              </div>
            </div>
            <div className="deltaOVizFormat">
              <img className="deltaOViz" id="deltaOViz" alt="deltaOViz" src="" />
            </div>
          </div>
      </div>
      <div className="natRisk">
        <div className="riskTopBox">
          <div className="riskMainBox">
          </div>
            <div className="riskText">
              So, what effect is this going to have on you in the coming years? The following map shows the anticipated climate risk level for 
              each county in 2040-2049. The risk is made up of the amount of hazard, exposure, and vulnerability in each county. Click on 
              a county to learn more about their specific risk as well as state-wide risk.
            </div>
          <div className="riskAccent"/>
        </div>
        <div className="nationalStateRisk">
          <TableauEmbed url={nationalAndStateRiskLevel}/>
        </div>
      </div>
      <div className="footer">
        <a href="https://github.com/climatechanges/climatechanges.github.io"><i class="devicon-github-original colored"></i></a>
        Created by Guy Broome, Grace Driskill, Emily Eby, and Alysha Irvin for CS 6730 Final Project
      </div>
    </div>
    
  );
}

export default App;