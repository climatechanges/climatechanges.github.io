import './App.css';
import React from 'react';
import TableauEmbed from './TableauEmbed';
import VegaVisualization from './SanddanceEmbed';
import { forestWildfiresSpec, populationWildfiresSpec, 
  populationViolentStormsSpec, populationIcingDaysSpec, 
  populationHotDaysSpec, landViolentStormsSpec, 
  landRiverFloodingSpec, landExtremePrecipitationSpec,
  landCoastalFloodingSpec} from './sanddanceSpecs.js'

function App() {
  const sumOfExposureValues = 'https://public.tableau.com/views/SumExposureMap/Dashboard12?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const exposureValues2022 = 'https://public.tableau.com/views/ExposureValues2022/ExposureValues?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const yearlyTempAnomolies = 'https://public.tableau.com/views/BasicTemperatureVis/AreaChart?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const monthlyTempAnomolies = 'https://public.tableau.com/views/UniqueTemperatureVis/Heatmap?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const magnitudeOfTempAnomoliesByMonth = 'https://public.tableau.com/views/UniqueTemperatureVis/RadialChart?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link ';
  const nationalAndStateRiskLevel = 'https://public.tableau.com/shared/4NHP76KDY?:display_count=n&:origin=viz_share_link ';
  const precipitationAndTempChangesbyState = 'https://public.tableau.com/views/BetterMaps_17324144202350/ScatterPlotbyChanges?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';


  return (
    <div className="App">
      <p>The effects of climate change can take on a variety forms: rising temperature, changing precipitation patterns, more extreme weather like floods and storms. One way to understand the impact of these effects is to look at the percentage of population or land exposed.</p>
      <TableauEmbed url={sumOfExposureValues}/>
      <br/>

      <p>Only one country had no exposure to any of the measured events in 2022:  Tokelau.
On average, nations experienced 4.5 out of 9 of the measured events, revealing the vast and relentless reach of this crisis. 

This stark reality shows that no nation, no matter its size or location, is untouched by our changing world. The biggest concerns may differ from region to region, but one thing is clear: climate change is a global emergency, and the danger is everywhere.

Click on the + under Continent to see the measures at a country level. (maybe we could put this next to where they should click)
</p>
      <TableauEmbed url={exposureValues2022}/>
      <br/>

      <p>The following graph shows the magnitude of the anomaly for each year compared to the baseline years of 1951-1980. For example, in 1947 the anomaly was .460 which means that 1947 was .46 degrees Celsius warmer than in 1951-1980. As can be seen, nearly every year before 1951 was cooler than the baseline of 1951-1980 (with the exception of 1940-1945 which was during World War 2 leading to a change and inconsistency of measurement) and every year after 1980 was warmer than the baseline. In fact, 2023 had an anomaly of 1.170. According to Mapfre, a single degree change can lead to rising sea levels, loss of arctic ice, extreme heat waves, and force changes in agricultural practices (due to temperatures changing in agricultural regions). A continuing increase of temperature could lead to rapid changes in participation, temperature, and extreme weather events. 
      </p>
      <TableauEmbed url={yearlyTempAnomolies}/>
      <br/>

      <p>This graph shows the same data while adding information about the months. As is seen, the anomaly has continued to increase from the baseline.</p>
      <TableauEmbed url={monthlyTempAnomolies}/>
      <br/>

      <p>The following chart illustrates the magnitude of the anomaly per month. The color code here is the years with lighter colors being earlier years and darker colors being later years. Not only are the more recent years showing a greater anomaly (farther from the center of the chart), they are getting increasingly spaced out (the outer spokes have larger distances than earlier years). This shows that not only is temperature increasing, but it is increasing at a faster rate than earlier years.</p>
      <TableauEmbed url={magnitudeOfTempAnomoliesByMonth}/>
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
      
      <p>Forest Exposure to Wildfires</p>
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
      <VegaVisualization spec={landCoastalFloodingSpec} />
    </div>
    
  );
}

export default App;