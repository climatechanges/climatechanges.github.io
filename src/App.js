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

function App() {
  // const sumOfExposureValuesOG = 'https://public.tableau.com/views/SumExposureMap/Dashboard12?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const sumOfExposureValues = 'https://public.tableau.com/views/SumExposureMap_17330841124910/Dashboard13?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const exposureValues2022 = 'https://public.tableau.com/views/ExposureValues2022/ExposureValues?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  // const yearlyTempAnomoliesOG = 'https://public.tableau.com/views/BasicTemperatureVis/AreaChart?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const yearlyTempAnomolies = 'https://public.tableau.com/views/yearlyTempAnomolies/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  // const monthlyTempAnomoliesOG = 'https://public.tableau.com/views/UniqueTemperatureVis/Heatmap?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const monthlyTempAnomolies = 'https://public.tableau.com/views/UniqueTemperatureVis_17330212511100/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  // const magnitudeOfTempAnomoliesByMonthOG = 'https://public.tableau.com/views/UniqueTemperatureVis/RadialChart?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link ';
  const monthlyTempAnomoliesMagnitudes = 'https://public.tableau.com/views/UniqueTemperatureVis_17330212511100/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const nationalAndStateRiskLevel = 'https://public.tableau.com/shared/4NHP76KDY?:display_count=n&:origin=viz_share_link ';
  const precipitationAndTempChangesbyState = 'https://public.tableau.com/views/BetterMaps_17324144202350/ScatterPlotbyChanges?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';

  // const testLink = 'https://public.tableau.com/views/Group_Project_17330019467830/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';

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
  });

  const [currentSpec, setCurrentSpec] = useState(forestWildfiresSpec);

  const [exposureExplanation, setExposureExplanation] = useState("Percentage of forested areas at risk of burning.");
  const specExplanations = {
    forestWildfiresSpec : "Percentage of forested areas at risk of burning.",
    populationWildfiresSpec : "Percentage of population located in areas at risk of burning.",
    populationViolentStormsSpec : "Percentage of population exposed to wind gust speeds greater than 28.6 m/s.",
    populationIcingDaysSpec : "Percentage of population exposed to days with a maximum temperature less than 0°C.",
    populationHotDaysSpec : "Percentage of population exposed to days with a maximum temperature greater than 35°C.",
    landViolentStormsSpec : "Percentage of population exposed to wind gust speeds greater than 28.6 m/s.",
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
            Using the mean temperature of 1951-1980 as a baseline, it can be seen that in the years following, 
            there has been a <bold>growing increase in global temperature.</bold> Studies have indicated that even a single
            degree change can lead to rising sea levels, loss of arctic ice, extreme heat waves, and force changes
            in agricultural practices. A continuing increase of temperature could lead to rapid changes in other weather
            events, which could have <bold>catastrophic effects on the world. </bold>
            {/* The following graph shows the magnitude of the anomaly for each year compared to the baseline years of 1951-1980. 
            For example, in 1947 the anomaly was .460 which means that 1947 was .46 degrees Celsius warmer than in 1951-1980. 
            As can be seen, nearly every year before 1951 was cooler than the baseline of 1951-1980 (with the exception of 
            1940-1945 which was during World War 2 leading to a change and inconsistency of measurement) and every year after 
            1980 was warmer than the baseline. In fact, 2023 had an anomaly of 1.170. According to Mapfre, a single degree 
            change can lead to rising sea levels, loss of arctic ice, extreme heat waves, and force changes in agricultural 
            practices (due to temperatures changing in agricultural regions). A continuing increase of temperature could lead 
            to rapid changes in participation, temperature, and extreme weather events. */}
        </div>
        <div className="yearlyTempAnomolies">
          <TableauEmbed url={yearlyTempAnomolies}/> 
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
          This graph shows the same data while adding information about the months. As is seen, the anomaly has continued to increase from the baseline.
        </div>
        <div className="monthlyTempAnomoliesMagnitudes">
          <TableauEmbed url={monthlyTempAnomoliesMagnitudes}/>
        </div>
      </div>
      <div className="exposureSums">
        <div className="cautionTape">.</div>
        <div className="text">
          <div className="caution">
            CAUTION
          </div>
          <div className="textSumOfExposureValues">
            The effects of climate change can take on a variety forms: rising temperature, changing precipitation patterns, more extreme weather like floods 
            and storms. One way to understand the impact of these effects is to look at the percentage of population or land exposed.
          </div>
        </div>
        <div className="instructions">
          Click on a country to see the exposure value breakdown at a country level
        </div>
        <div className="sumOfExposureValues">
          <TableauEmbed url={sumOfExposureValues}/>
        </div>
        <div className="summaryExposureValues">
          Only one country had no exposure to any of the measured events in 2022: Tokelau.
          On average, nations experienced 4.5 out of 9 of the measured events, revealing the vast and relentless reach of this crisis. 
          This stark reality shows that no nation, no matter its size or location, is untouched by our changing world. 
          The biggest concerns may differ from region to region, but one thing is clear: climate change is a global emergency, and the danger is everywhere.
        </div>
        <div className="cautionTape">.</div>
      </div>
      <div className="exposureValues">
        <div className="exposureExplanation">
          {exposureExplanation}
        </div>
        <div className="exposureGraphWrapper">
          <div className="exposureValuesGraph">
            <VegaVisualization spec={currentSpec} />
            <div className="explain">
              Each square above is a country with its color representing the percentage of its land exposed.
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
      <br/>

      <TableauEmbed url={exposureValues2022}/>
      <br/>

      <p>The following map shows the anticipated climate risk level for each county in 2040-2049. The risk is made up of the amount of hazard, exposure, and vulnerability in each county. Click on a county to learn more about their specific risk as well as state-wide risk.</p>
      <TableauEmbed url={nationalAndStateRiskLevel}/>
      <br/>

      <p>This scatter plot shows anticipated temperature and precipitation changes in 2040-2049 for each state. Click on an item to learn more about state-risks.</p>
      <TableauEmbed url={precipitationAndTempChangesbyState}/>
      <br/>
      <br/>
      <p>WOAH Guy's super cool oxygen stuff is going to go here</p>
      <p>Maybe some really cool rain graphs might go here, idk</p>
      
      {/* <p>Forest Exposure to Wildfires</p>
      <p>Percentage of forested areas at risk of burning.</p>
      <p>In the following, each square is a country with its color representing the percentage of its forest exposed.</p>
      <VegaVisualization spec={forestWildfiresSpec} />

      <p>Population Exposure to Wildfires</p>
      <p>Percentage of population located in areas at risk of burning.</p>
      <p>In the following, each square is a country with its color representing the percentage of its population exposed.</p>
      <VegaVisualization spec={populationWildfiresSpec} />

      <p>Population Exposure to Hot Days</p>
      <p>Percentage of population exposed to days with a maximum temperature greater than 35°C.</p>
      <p>In the following, each square is a country with its color representing the percentage of its population exposed.</p>
      <VegaVisualization spec={populationHotDaysSpec} />

      <p>Population Exposure to Icing Days</p>
      <p>Percentage of population exposed to days with a maximum temperature less than 0°C.</p>
      <p>In the following, each square is a country with its color representing the percentage of its population exposed.</p>
      <VegaVisualization spec={populationIcingDaysSpec} />

      <p>Land Exposure to Violent Storms</p>
      <p>Percentage of population exposed to wind gust speeds greater than 28.6 m/s.</p>
      <p>In the following, each square is a country with its color representing the percentage of its land exposed.</p>
      <VegaVisualization spec={landViolentStormsSpec} />

      <p>Population Exposure to Violent Storms</p>
      <p>Percentage of population exposed to wind gust speeds greater than 28.6 m/s.</p>
      <p>In the following, each square is a country with its color representing the percentage of its population exposed.</p>
      <VegaVisualization spec={populationViolentStormsSpec} />

      <p>Land Exposure to Extreme Precipation</p>
      <p>Land exposed to 2+ weeks of days exceeding the 99th percentile of daily precipitation values over the reference period (1981-2010).</p>
      <p>In the following, each square is a country with its color representing the percentage of its land exposed.</p>
      <VegaVisualization spec={landExtremePrecipitationSpec} />

      <p>Land Exposure to River Flooding</p>
      <p>Percentage of land area to river flooding at a 10 year return period.</p>
      <p>In the following, each square is a country with its color representing the percentage of its land exposed.</p>
      <VegaVisualization spec={landRiverFloodingSpec} />

      <p>Land Exposure to Coastal Flooding</p>
      <p>Percentage of land area to coastal flooding at a 10 year return period.</p>
      <p>In the following, each square is a country with its color representing the percentage of its land exposed.</p>
      <VegaVisualization spec={landCoastalFloodingSpec} /> */}
    </div>
    
  );
}

export default App;