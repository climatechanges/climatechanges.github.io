import './App.css';
import React from 'react';
import TableauEmbed from './TableauEmbed';

function App() {
  const sumOfExposureValues = 'https://public.tableau.com/views/SumExposureMap/Dashboard12?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const exposureValues2022 = 'https://public.tableau.com/views/ExposureValues2022/ExposureValues?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const yearlyTempAnomolies = 'https://public.tableau.com/views/BasicTemperatureVis/AreaChart?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const monthlyTempAnomolies = 'https://public.tableau.com/views/UniqueTemperatureVis/Heatmap?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const magnitudeOfTempAnomoliesByMonth = 'https://public.tableau.com/views/UniqueTemperatureVis/RadialChart?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link ';
  const nationalAndStateRiskLevel = 'https://public.tableau.com/shared/4NHP76KDY?:display_count=n&:origin=viz_share_link ';
  const precipitationAndTempChangesbyState = 'https://public.tableau.com/views/BetterMaps_17324144202350/ScatterPlotbyChanges?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
  const forstWildfiresSpec = 
  {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "data": [
      {
        "name": "input",
        "format": {
          "parse": "auto",
          "type": "json"
        },
        "values": [
          {
            "Reference_area": "Australia",
            "Year": 2000,
            "Percentage": 66.90672866,
            "GL_ORDINAL": 0
          },
          {
            "Reference_area": "Australia",
            "Year": 2001,
            "Percentage": 68.32376419,
            "GL_ORDINAL": 1
          },
          {
            "Reference_area": "Australia",
            "Year": 2002,
            "Percentage": 73.2558639,
            "GL_ORDINAL": 2
          },
          {
            "Reference_area": "Australia",
            "Year": 2003,
            "Percentage": 75.25766494,
            "GL_ORDINAL": 3
          },
          {
            "Reference_area": "Australia",
            "Year": 2004,
            "Percentage": 67.16916001,
            "GL_ORDINAL": 4
          },
          {
            "Reference_area": "Australia",
            "Year": 2005,
            "Percentage": 67.26000345,
            "GL_ORDINAL": 5
          },
          {
            "Reference_area": "Australia",
            "Year": 2006,
            "Percentage": 56.58688104,
            "GL_ORDINAL": 6
          },
          {
            "Reference_area": "Australia",
            "Year": 2007,
            "Percentage": 51.53145723,
            "GL_ORDINAL": 7
          },
          {
            "Reference_area": "Australia",
            "Year": 2008,
            "Percentage": 47.8556331,
            "GL_ORDINAL": 8
          },
          {
            "Reference_area": "Australia",
            "Year": 2009,
            "Percentage": 74.61838966,
            "GL_ORDINAL": 9
          },
          {
            "Reference_area": "Australia",
            "Year": 2010,
            "Percentage": 56.89788074,
            "GL_ORDINAL": 10
          },
          {
            "Reference_area": "Australia",
            "Year": 2011,
            "Percentage": 56.90999004,
            "GL_ORDINAL": 11
          },
          {
            "Reference_area": "Australia",
            "Year": 2012,
            "Percentage": 65.41869944,
            "GL_ORDINAL": 12
          },
          {
            "Reference_area": "Australia",
            "Year": 2013,
            "Percentage": 70.84059366,
            "GL_ORDINAL": 13
          },
          {
            "Reference_area": "Australia",
            "Year": 2014,
            "Percentage": 73.42875496,
            "GL_ORDINAL": 14
          },
          {
            "Reference_area": "Australia",
            "Year": 2015,
            "Percentage": 64.30705849,
            "GL_ORDINAL": 15
          },
          {
            "Reference_area": "Australia",
            "Year": 2016,
            "Percentage": 26.07949215,
            "GL_ORDINAL": 16
          },
          {
            "Reference_area": "Australia",
            "Year": 2017,
            "Percentage": 73.63085132,
            "GL_ORDINAL": 17
          },
          {
            "Reference_area": "Australia",
            "Year": 2018,
            "Percentage": 72.15072831,
            "GL_ORDINAL": 18
          },
          {
            "Reference_area": "Australia",
            "Year": 2019,
            "Percentage": 81.20168169,
            "GL_ORDINAL": 19
          },
          {
            "Reference_area": "Australia",
            "Year": 2020,
            "Percentage": 69.87412011,
            "GL_ORDINAL": 20
          },
          {
            "Reference_area": "Australia",
            "Year": 2021,
            "Percentage": 68.76502618,
            "GL_ORDINAL": 21
          },
          {
            "Reference_area": "Australia",
            "Year": 2022,
            "Percentage": 55.7852853,
            "GL_ORDINAL": 22
          },
          {
            "Reference_area": "Austria",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 23
          },
          {
            "Reference_area": "Austria",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 24
          },
          {
            "Reference_area": "Austria",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 25
          },
          {
            "Reference_area": "Austria",
            "Year": 2003,
            "Percentage": 0.183940219,
            "GL_ORDINAL": 26
          },
          {
            "Reference_area": "Austria",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 27
          },
          {
            "Reference_area": "Austria",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 28
          },
          {
            "Reference_area": "Austria",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 29
          },
          {
            "Reference_area": "Austria",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 30
          },
          {
            "Reference_area": "Austria",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 31
          },
          {
            "Reference_area": "Austria",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 32
          },
          {
            "Reference_area": "Austria",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 33
          },
          {
            "Reference_area": "Austria",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 34
          },
          {
            "Reference_area": "Austria",
            "Year": 2012,
            "Percentage": 0.442248587,
            "GL_ORDINAL": 35
          },
          {
            "Reference_area": "Austria",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 36
          },
          {
            "Reference_area": "Austria",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 37
          },
          {
            "Reference_area": "Austria",
            "Year": 2015,
            "Percentage": 1.416589545,
            "GL_ORDINAL": 38
          },
          {
            "Reference_area": "Austria",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 39
          },
          {
            "Reference_area": "Austria",
            "Year": 2017,
            "Percentage": 2.553702226,
            "GL_ORDINAL": 40
          },
          {
            "Reference_area": "Austria",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 41
          },
          {
            "Reference_area": "Austria",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 42
          },
          {
            "Reference_area": "Austria",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 43
          },
          {
            "Reference_area": "Austria",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 44
          },
          {
            "Reference_area": "Austria",
            "Year": 2022,
            "Percentage": 0.570072732,
            "GL_ORDINAL": 45
          },
          {
            "Reference_area": "Belgium",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 46
          },
          {
            "Reference_area": "Belgium",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 47
          },
          {
            "Reference_area": "Belgium",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 48
          },
          {
            "Reference_area": "Belgium",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 49
          },
          {
            "Reference_area": "Belgium",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 50
          },
          {
            "Reference_area": "Belgium",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 51
          },
          {
            "Reference_area": "Belgium",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 52
          },
          {
            "Reference_area": "Belgium",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 53
          },
          {
            "Reference_area": "Belgium",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 54
          },
          {
            "Reference_area": "Belgium",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 55
          },
          {
            "Reference_area": "Belgium",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 56
          },
          {
            "Reference_area": "Belgium",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 57
          },
          {
            "Reference_area": "Belgium",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 58
          },
          {
            "Reference_area": "Belgium",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 59
          },
          {
            "Reference_area": "Belgium",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 60
          },
          {
            "Reference_area": "Belgium",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 61
          },
          {
            "Reference_area": "Belgium",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 62
          },
          {
            "Reference_area": "Belgium",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 63
          },
          {
            "Reference_area": "Belgium",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 64
          },
          {
            "Reference_area": "Belgium",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 65
          },
          {
            "Reference_area": "Belgium",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 66
          },
          {
            "Reference_area": "Belgium",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 67
          },
          {
            "Reference_area": "Belgium",
            "Year": 2022,
            "Percentage": 27.89331144,
            "GL_ORDINAL": 68
          },
          {
            "Reference_area": "Canada",
            "Year": 2000,
            "Percentage": 0.813864072,
            "GL_ORDINAL": 69
          },
          {
            "Reference_area": "Canada",
            "Year": 2001,
            "Percentage": 0.465205895,
            "GL_ORDINAL": 70
          },
          {
            "Reference_area": "Canada",
            "Year": 2002,
            "Percentage": 2.005936384,
            "GL_ORDINAL": 71
          },
          {
            "Reference_area": "Canada",
            "Year": 2003,
            "Percentage": 2.55625553,
            "GL_ORDINAL": 72
          },
          {
            "Reference_area": "Canada",
            "Year": 2004,
            "Percentage": 2.775506146,
            "GL_ORDINAL": 73
          },
          {
            "Reference_area": "Canada",
            "Year": 2005,
            "Percentage": 0.057892262,
            "GL_ORDINAL": 74
          },
          {
            "Reference_area": "Canada",
            "Year": 2006,
            "Percentage": 0.17912954,
            "GL_ORDINAL": 75
          },
          {
            "Reference_area": "Canada",
            "Year": 2007,
            "Percentage": 1.321259214,
            "GL_ORDINAL": 76
          },
          {
            "Reference_area": "Canada",
            "Year": 2008,
            "Percentage": 0.152436885,
            "GL_ORDINAL": 77
          },
          {
            "Reference_area": "Canada",
            "Year": 2009,
            "Percentage": 1.007223708,
            "GL_ORDINAL": 78
          },
          {
            "Reference_area": "Canada",
            "Year": 2010,
            "Percentage": 1.715598989,
            "GL_ORDINAL": 79
          },
          {
            "Reference_area": "Canada",
            "Year": 2011,
            "Percentage": 1.649338001,
            "GL_ORDINAL": 80
          },
          {
            "Reference_area": "Canada",
            "Year": 2012,
            "Percentage": 1.942879569,
            "GL_ORDINAL": 81
          },
          {
            "Reference_area": "Canada",
            "Year": 2013,
            "Percentage": 4.084353094,
            "GL_ORDINAL": 82
          },
          {
            "Reference_area": "Canada",
            "Year": 2014,
            "Percentage": 1.988945722,
            "GL_ORDINAL": 83
          },
          {
            "Reference_area": "Canada",
            "Year": 2015,
            "Percentage": 4.103174084,
            "GL_ORDINAL": 84
          },
          {
            "Reference_area": "Canada",
            "Year": 2016,
            "Percentage": 1.143389207,
            "GL_ORDINAL": 85
          },
          {
            "Reference_area": "Canada",
            "Year": 2017,
            "Percentage": 3.345883317,
            "GL_ORDINAL": 86
          },
          {
            "Reference_area": "Canada",
            "Year": 2018,
            "Percentage": 2.155230768,
            "GL_ORDINAL": 87
          },
          {
            "Reference_area": "Canada",
            "Year": 2019,
            "Percentage": 1.865886368,
            "GL_ORDINAL": 88
          },
          {
            "Reference_area": "Canada",
            "Year": 2020,
            "Percentage": 1.793719571,
            "GL_ORDINAL": 89
          },
          {
            "Reference_area": "Canada",
            "Year": 2021,
            "Percentage": 2.83323642,
            "GL_ORDINAL": 90
          },
          {
            "Reference_area": "Canada",
            "Year": 2022,
            "Percentage": 3.74287382,
            "GL_ORDINAL": 91
          },
          {
            "Reference_area": "Chile",
            "Year": 2000,
            "Percentage": 8.551490371,
            "GL_ORDINAL": 92
          },
          {
            "Reference_area": "Chile",
            "Year": 2001,
            "Percentage": 11.26112101,
            "GL_ORDINAL": 93
          },
          {
            "Reference_area": "Chile",
            "Year": 2002,
            "Percentage": 9.316757778,
            "GL_ORDINAL": 94
          },
          {
            "Reference_area": "Chile",
            "Year": 2003,
            "Percentage": 9.236864333,
            "GL_ORDINAL": 95
          },
          {
            "Reference_area": "Chile",
            "Year": 2004,
            "Percentage": 5.794759372,
            "GL_ORDINAL": 96
          },
          {
            "Reference_area": "Chile",
            "Year": 2005,
            "Percentage": 6.653289171,
            "GL_ORDINAL": 97
          },
          {
            "Reference_area": "Chile",
            "Year": 2006,
            "Percentage": 1.080619814,
            "GL_ORDINAL": 98
          },
          {
            "Reference_area": "Chile",
            "Year": 2007,
            "Percentage": 0.137971677,
            "GL_ORDINAL": 99
          },
          {
            "Reference_area": "Chile",
            "Year": 2008,
            "Percentage": 1.499706743,
            "GL_ORDINAL": 100
          },
          {
            "Reference_area": "Chile",
            "Year": 2009,
            "Percentage": 11.15722086,
            "GL_ORDINAL": 101
          },
          {
            "Reference_area": "Chile",
            "Year": 2010,
            "Percentage": 10.38899883,
            "GL_ORDINAL": 102
          },
          {
            "Reference_area": "Chile",
            "Year": 2011,
            "Percentage": 5.233759803,
            "GL_ORDINAL": 103
          },
          {
            "Reference_area": "Chile",
            "Year": 2012,
            "Percentage": 9.816568374,
            "GL_ORDINAL": 104
          },
          {
            "Reference_area": "Chile",
            "Year": 2013,
            "Percentage": 10.07562983,
            "GL_ORDINAL": 105
          },
          {
            "Reference_area": "Chile",
            "Year": 2014,
            "Percentage": 13.67605909,
            "GL_ORDINAL": 106
          },
          {
            "Reference_area": "Chile",
            "Year": 2015,
            "Percentage": 20.17121718,
            "GL_ORDINAL": 107
          },
          {
            "Reference_area": "Chile",
            "Year": 2016,
            "Percentage": 6.396201005,
            "GL_ORDINAL": 108
          },
          {
            "Reference_area": "Chile",
            "Year": 2017,
            "Percentage": 15.05528863,
            "GL_ORDINAL": 109
          },
          {
            "Reference_area": "Chile",
            "Year": 2018,
            "Percentage": 11.87663724,
            "GL_ORDINAL": 110
          },
          {
            "Reference_area": "Chile",
            "Year": 2019,
            "Percentage": 9.997013606,
            "GL_ORDINAL": 111
          },
          {
            "Reference_area": "Chile",
            "Year": 2020,
            "Percentage": 13.98382799,
            "GL_ORDINAL": 112
          },
          {
            "Reference_area": "Chile",
            "Year": 2021,
            "Percentage": 13.88505412,
            "GL_ORDINAL": 113
          },
          {
            "Reference_area": "Chile",
            "Year": 2022,
            "Percentage": 15.16239337,
            "GL_ORDINAL": 114
          },
          {
            "Reference_area": "Colombia",
            "Year": 2000,
            "Percentage": 10.55608405,
            "GL_ORDINAL": 115
          },
          {
            "Reference_area": "Colombia",
            "Year": 2001,
            "Percentage": 13.40326404,
            "GL_ORDINAL": 116
          },
          {
            "Reference_area": "Colombia",
            "Year": 2002,
            "Percentage": 12.83498065,
            "GL_ORDINAL": 117
          },
          {
            "Reference_area": "Colombia",
            "Year": 2003,
            "Percentage": 13.72332103,
            "GL_ORDINAL": 118
          },
          {
            "Reference_area": "Colombia",
            "Year": 2004,
            "Percentage": 22.07194566,
            "GL_ORDINAL": 119
          },
          {
            "Reference_area": "Colombia",
            "Year": 2005,
            "Percentage": 7.856344499,
            "GL_ORDINAL": 120
          },
          {
            "Reference_area": "Colombia",
            "Year": 2006,
            "Percentage": 0.630080155,
            "GL_ORDINAL": 121
          },
          {
            "Reference_area": "Colombia",
            "Year": 2007,
            "Percentage": 16.1404888,
            "GL_ORDINAL": 122
          },
          {
            "Reference_area": "Colombia",
            "Year": 2008,
            "Percentage": 2.625481927,
            "GL_ORDINAL": 123
          },
          {
            "Reference_area": "Colombia",
            "Year": 2009,
            "Percentage": 7.304719151,
            "GL_ORDINAL": 124
          },
          {
            "Reference_area": "Colombia",
            "Year": 2010,
            "Percentage": 11.89728617,
            "GL_ORDINAL": 125
          },
          {
            "Reference_area": "Colombia",
            "Year": 2011,
            "Percentage": 6.330922927,
            "GL_ORDINAL": 126
          },
          {
            "Reference_area": "Colombia",
            "Year": 2012,
            "Percentage": 10.12832188,
            "GL_ORDINAL": 127
          },
          {
            "Reference_area": "Colombia",
            "Year": 2013,
            "Percentage": 9.231110181,
            "GL_ORDINAL": 128
          },
          {
            "Reference_area": "Colombia",
            "Year": 2014,
            "Percentage": 14.77166833,
            "GL_ORDINAL": 129
          },
          {
            "Reference_area": "Colombia",
            "Year": 2015,
            "Percentage": 11.15670558,
            "GL_ORDINAL": 130
          },
          {
            "Reference_area": "Colombia",
            "Year": 2016,
            "Percentage": 18.49665916,
            "GL_ORDINAL": 131
          },
          {
            "Reference_area": "Colombia",
            "Year": 2017,
            "Percentage": 7.734652755,
            "GL_ORDINAL": 132
          },
          {
            "Reference_area": "Colombia",
            "Year": 2018,
            "Percentage": 16.05739636,
            "GL_ORDINAL": 133
          },
          {
            "Reference_area": "Colombia",
            "Year": 2019,
            "Percentage": 13.83365975,
            "GL_ORDINAL": 134
          },
          {
            "Reference_area": "Colombia",
            "Year": 2020,
            "Percentage": 12.99796406,
            "GL_ORDINAL": 135
          },
          {
            "Reference_area": "Colombia",
            "Year": 2021,
            "Percentage": 15.40831232,
            "GL_ORDINAL": 136
          },
          {
            "Reference_area": "Colombia",
            "Year": 2022,
            "Percentage": 9.928847614,
            "GL_ORDINAL": 137
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2000,
            "Percentage": 22.67767182,
            "GL_ORDINAL": 138
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2001,
            "Percentage": 27.33064636,
            "GL_ORDINAL": 139
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2002,
            "Percentage": 25.05001299,
            "GL_ORDINAL": 140
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2003,
            "Percentage": 25.55142222,
            "GL_ORDINAL": 141
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2004,
            "Percentage": 34.53588218,
            "GL_ORDINAL": 142
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2005,
            "Percentage": 25.04877542,
            "GL_ORDINAL": 143
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2006,
            "Percentage": 4.174025367,
            "GL_ORDINAL": 144
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2007,
            "Percentage": 4.0055396,
            "GL_ORDINAL": 145
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2008,
            "Percentage": 4.242821717,
            "GL_ORDINAL": 146
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2009,
            "Percentage": 27.50931571,
            "GL_ORDINAL": 147
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2010,
            "Percentage": 16.40596803,
            "GL_ORDINAL": 148
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2011,
            "Percentage": 23.37554874,
            "GL_ORDINAL": 149
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2012,
            "Percentage": 24.13759355,
            "GL_ORDINAL": 150
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2013,
            "Percentage": 23.19124219,
            "GL_ORDINAL": 151
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2014,
            "Percentage": 27.3813551,
            "GL_ORDINAL": 152
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2015,
            "Percentage": 23.94851109,
            "GL_ORDINAL": 153
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2016,
            "Percentage": 14.93214026,
            "GL_ORDINAL": 154
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2017,
            "Percentage": 23.88878539,
            "GL_ORDINAL": 155
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2018,
            "Percentage": 25.02166225,
            "GL_ORDINAL": 156
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2019,
            "Percentage": 34.64589678,
            "GL_ORDINAL": 157
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2020,
            "Percentage": 33.60287973,
            "GL_ORDINAL": 158
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2021,
            "Percentage": 24.22347522,
            "GL_ORDINAL": 159
          },
          {
            "Reference_area": "Costa Rica",
            "Year": 2022,
            "Percentage": 13.48974582,
            "GL_ORDINAL": 160
          },
          {
            "Reference_area": "Czechia",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 161
          },
          {
            "Reference_area": "Czechia",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 162
          },
          {
            "Reference_area": "Czechia",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 163
          },
          {
            "Reference_area": "Czechia",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 164
          },
          {
            "Reference_area": "Czechia",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 165
          },
          {
            "Reference_area": "Czechia",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 166
          },
          {
            "Reference_area": "Czechia",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 167
          },
          {
            "Reference_area": "Czechia",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 168
          },
          {
            "Reference_area": "Czechia",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 169
          },
          {
            "Reference_area": "Czechia",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 170
          },
          {
            "Reference_area": "Czechia",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 171
          },
          {
            "Reference_area": "Czechia",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 172
          },
          {
            "Reference_area": "Czechia",
            "Year": 2012,
            "Percentage": 5.738115271,
            "GL_ORDINAL": 173
          },
          {
            "Reference_area": "Czechia",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 174
          },
          {
            "Reference_area": "Czechia",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 175
          },
          {
            "Reference_area": "Czechia",
            "Year": 2015,
            "Percentage": 9.905445985,
            "GL_ORDINAL": 176
          },
          {
            "Reference_area": "Czechia",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 177
          },
          {
            "Reference_area": "Czechia",
            "Year": 2017,
            "Percentage": 10.30911333,
            "GL_ORDINAL": 178
          },
          {
            "Reference_area": "Czechia",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 179
          },
          {
            "Reference_area": "Czechia",
            "Year": 2019,
            "Percentage": 4.180377436,
            "GL_ORDINAL": 180
          },
          {
            "Reference_area": "Czechia",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 181
          },
          {
            "Reference_area": "Czechia",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 182
          },
          {
            "Reference_area": "Czechia",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 183
          },
          {
            "Reference_area": "Denmark",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 184
          },
          {
            "Reference_area": "Denmark",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 185
          },
          {
            "Reference_area": "Denmark",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 186
          },
          {
            "Reference_area": "Denmark",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 187
          },
          {
            "Reference_area": "Denmark",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 188
          },
          {
            "Reference_area": "Denmark",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 189
          },
          {
            "Reference_area": "Denmark",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 190
          },
          {
            "Reference_area": "Denmark",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 191
          },
          {
            "Reference_area": "Denmark",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 192
          },
          {
            "Reference_area": "Denmark",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 193
          },
          {
            "Reference_area": "Denmark",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 194
          },
          {
            "Reference_area": "Denmark",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 195
          },
          {
            "Reference_area": "Denmark",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 196
          },
          {
            "Reference_area": "Denmark",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 197
          },
          {
            "Reference_area": "Denmark",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 198
          },
          {
            "Reference_area": "Denmark",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 199
          },
          {
            "Reference_area": "Denmark",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 200
          },
          {
            "Reference_area": "Denmark",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 201
          },
          {
            "Reference_area": "Denmark",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 202
          },
          {
            "Reference_area": "Denmark",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 203
          },
          {
            "Reference_area": "Denmark",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 204
          },
          {
            "Reference_area": "Denmark",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 205
          },
          {
            "Reference_area": "Denmark",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 206
          },
          {
            "Reference_area": "Estonia",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 207
          },
          {
            "Reference_area": "Estonia",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 208
          },
          {
            "Reference_area": "Estonia",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 209
          },
          {
            "Reference_area": "Estonia",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 210
          },
          {
            "Reference_area": "Estonia",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 211
          },
          {
            "Reference_area": "Estonia",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 212
          },
          {
            "Reference_area": "Estonia",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 213
          },
          {
            "Reference_area": "Estonia",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 214
          },
          {
            "Reference_area": "Estonia",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 215
          },
          {
            "Reference_area": "Estonia",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 216
          },
          {
            "Reference_area": "Estonia",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 217
          },
          {
            "Reference_area": "Estonia",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 218
          },
          {
            "Reference_area": "Estonia",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 219
          },
          {
            "Reference_area": "Estonia",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 220
          },
          {
            "Reference_area": "Estonia",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 221
          },
          {
            "Reference_area": "Estonia",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 222
          },
          {
            "Reference_area": "Estonia",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 223
          },
          {
            "Reference_area": "Estonia",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 224
          },
          {
            "Reference_area": "Estonia",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 225
          },
          {
            "Reference_area": "Estonia",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 226
          },
          {
            "Reference_area": "Estonia",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 227
          },
          {
            "Reference_area": "Estonia",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 228
          },
          {
            "Reference_area": "Estonia",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 229
          },
          {
            "Reference_area": "Finland",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 230
          },
          {
            "Reference_area": "Finland",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 231
          },
          {
            "Reference_area": "Finland",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 232
          },
          {
            "Reference_area": "Finland",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 233
          },
          {
            "Reference_area": "Finland",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 234
          },
          {
            "Reference_area": "Finland",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 235
          },
          {
            "Reference_area": "Finland",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 236
          },
          {
            "Reference_area": "Finland",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 237
          },
          {
            "Reference_area": "Finland",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 238
          },
          {
            "Reference_area": "Finland",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 239
          },
          {
            "Reference_area": "Finland",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 240
          },
          {
            "Reference_area": "Finland",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 241
          },
          {
            "Reference_area": "Finland",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 242
          },
          {
            "Reference_area": "Finland",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 243
          },
          {
            "Reference_area": "Finland",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 244
          },
          {
            "Reference_area": "Finland",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 245
          },
          {
            "Reference_area": "Finland",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 246
          },
          {
            "Reference_area": "Finland",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 247
          },
          {
            "Reference_area": "Finland",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 248
          },
          {
            "Reference_area": "Finland",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 249
          },
          {
            "Reference_area": "Finland",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 250
          },
          {
            "Reference_area": "Finland",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 251
          },
          {
            "Reference_area": "Finland",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 252
          },
          {
            "Reference_area": "France",
            "Year": 2000,
            "Percentage": 4.545973475,
            "GL_ORDINAL": 253
          },
          {
            "Reference_area": "France",
            "Year": 2001,
            "Percentage": 17.71179207,
            "GL_ORDINAL": 254
          },
          {
            "Reference_area": "France",
            "Year": 2002,
            "Percentage": 13.71909744,
            "GL_ORDINAL": 255
          },
          {
            "Reference_area": "France",
            "Year": 2003,
            "Percentage": 26.04978557,
            "GL_ORDINAL": 256
          },
          {
            "Reference_area": "France",
            "Year": 2004,
            "Percentage": 22.41340393,
            "GL_ORDINAL": 257
          },
          {
            "Reference_area": "France",
            "Year": 2005,
            "Percentage": 24.27953457,
            "GL_ORDINAL": 258
          },
          {
            "Reference_area": "France",
            "Year": 2006,
            "Percentage": 2.626572675,
            "GL_ORDINAL": 259
          },
          {
            "Reference_area": "France",
            "Year": 2007,
            "Percentage": 2.271327276,
            "GL_ORDINAL": 260
          },
          {
            "Reference_area": "France",
            "Year": 2008,
            "Percentage": 9.813089696,
            "GL_ORDINAL": 261
          },
          {
            "Reference_area": "France",
            "Year": 2009,
            "Percentage": 27.29459912,
            "GL_ORDINAL": 262
          },
          {
            "Reference_area": "France",
            "Year": 2010,
            "Percentage": 6.155161785,
            "GL_ORDINAL": 263
          },
          {
            "Reference_area": "France",
            "Year": 2011,
            "Percentage": 17.2594537,
            "GL_ORDINAL": 264
          },
          {
            "Reference_area": "France",
            "Year": 2012,
            "Percentage": 24.58782362,
            "GL_ORDINAL": 265
          },
          {
            "Reference_area": "France",
            "Year": 2013,
            "Percentage": 6.273893094,
            "GL_ORDINAL": 266
          },
          {
            "Reference_area": "France",
            "Year": 2014,
            "Percentage": 22.70614887,
            "GL_ORDINAL": 267
          },
          {
            "Reference_area": "France",
            "Year": 2015,
            "Percentage": 30.07070336,
            "GL_ORDINAL": 268
          },
          {
            "Reference_area": "France",
            "Year": 2016,
            "Percentage": 11.94869776,
            "GL_ORDINAL": 269
          },
          {
            "Reference_area": "France",
            "Year": 2017,
            "Percentage": 11.69674642,
            "GL_ORDINAL": 270
          },
          {
            "Reference_area": "France",
            "Year": 2018,
            "Percentage": 17.90936605,
            "GL_ORDINAL": 271
          },
          {
            "Reference_area": "France",
            "Year": 2019,
            "Percentage": 25.36394735,
            "GL_ORDINAL": 272
          },
          {
            "Reference_area": "France",
            "Year": 2020,
            "Percentage": 10.86729594,
            "GL_ORDINAL": 273
          },
          {
            "Reference_area": "France",
            "Year": 2021,
            "Percentage": 5.891714509,
            "GL_ORDINAL": 274
          },
          {
            "Reference_area": "France",
            "Year": 2022,
            "Percentage": 41.01295934,
            "GL_ORDINAL": 275
          },
          {
            "Reference_area": "Germany",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 276
          },
          {
            "Reference_area": "Germany",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 277
          },
          {
            "Reference_area": "Germany",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 278
          },
          {
            "Reference_area": "Germany",
            "Year": 2003,
            "Percentage": 14.16237147,
            "GL_ORDINAL": 279
          },
          {
            "Reference_area": "Germany",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 280
          },
          {
            "Reference_area": "Germany",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 281
          },
          {
            "Reference_area": "Germany",
            "Year": 2006,
            "Percentage": 0.019876092,
            "GL_ORDINAL": 282
          },
          {
            "Reference_area": "Germany",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 283
          },
          {
            "Reference_area": "Germany",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 284
          },
          {
            "Reference_area": "Germany",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 285
          },
          {
            "Reference_area": "Germany",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 286
          },
          {
            "Reference_area": "Germany",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 287
          },
          {
            "Reference_area": "Germany",
            "Year": 2012,
            "Percentage": 0.00468973,
            "GL_ORDINAL": 288
          },
          {
            "Reference_area": "Germany",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 289
          },
          {
            "Reference_area": "Germany",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 290
          },
          {
            "Reference_area": "Germany",
            "Year": 2015,
            "Percentage": 0.004669814,
            "GL_ORDINAL": 291
          },
          {
            "Reference_area": "Germany",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 292
          },
          {
            "Reference_area": "Germany",
            "Year": 2017,
            "Percentage": 0.057757436,
            "GL_ORDINAL": 293
          },
          {
            "Reference_area": "Germany",
            "Year": 2018,
            "Percentage": 6.411039289,
            "GL_ORDINAL": 294
          },
          {
            "Reference_area": "Germany",
            "Year": 2019,
            "Percentage": 8.817761305,
            "GL_ORDINAL": 295
          },
          {
            "Reference_area": "Germany",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 296
          },
          {
            "Reference_area": "Germany",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 297
          },
          {
            "Reference_area": "Germany",
            "Year": 2022,
            "Percentage": 21.19935393,
            "GL_ORDINAL": 298
          },
          {
            "Reference_area": "Greece",
            "Year": 2000,
            "Percentage": 67.70862322,
            "GL_ORDINAL": 299
          },
          {
            "Reference_area": "Greece",
            "Year": 2001,
            "Percentage": 40.21153896,
            "GL_ORDINAL": 300
          },
          {
            "Reference_area": "Greece",
            "Year": 2002,
            "Percentage": 46.41713689,
            "GL_ORDINAL": 301
          },
          {
            "Reference_area": "Greece",
            "Year": 2003,
            "Percentage": 31.21698981,
            "GL_ORDINAL": 302
          },
          {
            "Reference_area": "Greece",
            "Year": 2004,
            "Percentage": 31.43197847,
            "GL_ORDINAL": 303
          },
          {
            "Reference_area": "Greece",
            "Year": 2005,
            "Percentage": 26.7216917,
            "GL_ORDINAL": 304
          },
          {
            "Reference_area": "Greece",
            "Year": 2006,
            "Percentage": 14.05987837,
            "GL_ORDINAL": 305
          },
          {
            "Reference_area": "Greece",
            "Year": 2007,
            "Percentage": 53.46631385,
            "GL_ORDINAL": 306
          },
          {
            "Reference_area": "Greece",
            "Year": 2008,
            "Percentage": 19.3129663,
            "GL_ORDINAL": 307
          },
          {
            "Reference_area": "Greece",
            "Year": 2009,
            "Percentage": 30.24644964,
            "GL_ORDINAL": 308
          },
          {
            "Reference_area": "Greece",
            "Year": 2010,
            "Percentage": 29.9060546,
            "GL_ORDINAL": 309
          },
          {
            "Reference_area": "Greece",
            "Year": 2011,
            "Percentage": 43.69870807,
            "GL_ORDINAL": 310
          },
          {
            "Reference_area": "Greece",
            "Year": 2012,
            "Percentage": 74.86971651,
            "GL_ORDINAL": 311
          },
          {
            "Reference_area": "Greece",
            "Year": 2013,
            "Percentage": 61.1354733,
            "GL_ORDINAL": 312
          },
          {
            "Reference_area": "Greece",
            "Year": 2014,
            "Percentage": 45.87127653,
            "GL_ORDINAL": 313
          },
          {
            "Reference_area": "Greece",
            "Year": 2015,
            "Percentage": 44.65633757,
            "GL_ORDINAL": 314
          },
          {
            "Reference_area": "Greece",
            "Year": 2016,
            "Percentage": 13.97290166,
            "GL_ORDINAL": 315
          },
          {
            "Reference_area": "Greece",
            "Year": 2017,
            "Percentage": 64.34755108,
            "GL_ORDINAL": 316
          },
          {
            "Reference_area": "Greece",
            "Year": 2018,
            "Percentage": 29.77138825,
            "GL_ORDINAL": 317
          },
          {
            "Reference_area": "Greece",
            "Year": 2019,
            "Percentage": 66.42030327,
            "GL_ORDINAL": 318
          },
          {
            "Reference_area": "Greece",
            "Year": 2020,
            "Percentage": 47.66003435,
            "GL_ORDINAL": 319
          },
          {
            "Reference_area": "Greece",
            "Year": 2021,
            "Percentage": 91.08052227,
            "GL_ORDINAL": 320
          },
          {
            "Reference_area": "Greece",
            "Year": 2022,
            "Percentage": 68.01570201,
            "GL_ORDINAL": 321
          },
          {
            "Reference_area": "Hungary",
            "Year": 2000,
            "Percentage": 44.68063513,
            "GL_ORDINAL": 322
          },
          {
            "Reference_area": "Hungary",
            "Year": 2001,
            "Percentage": 10.85204994,
            "GL_ORDINAL": 323
          },
          {
            "Reference_area": "Hungary",
            "Year": 2002,
            "Percentage": 1.036060957,
            "GL_ORDINAL": 324
          },
          {
            "Reference_area": "Hungary",
            "Year": 2003,
            "Percentage": 18.28586031,
            "GL_ORDINAL": 325
          },
          {
            "Reference_area": "Hungary",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 326
          },
          {
            "Reference_area": "Hungary",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 327
          },
          {
            "Reference_area": "Hungary",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 328
          },
          {
            "Reference_area": "Hungary",
            "Year": 2007,
            "Percentage": 17.20769217,
            "GL_ORDINAL": 329
          },
          {
            "Reference_area": "Hungary",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 330
          },
          {
            "Reference_area": "Hungary",
            "Year": 2009,
            "Percentage": 4.02476919,
            "GL_ORDINAL": 331
          },
          {
            "Reference_area": "Hungary",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 332
          },
          {
            "Reference_area": "Hungary",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 333
          },
          {
            "Reference_area": "Hungary",
            "Year": 2012,
            "Percentage": 44.60145757,
            "GL_ORDINAL": 334
          },
          {
            "Reference_area": "Hungary",
            "Year": 2013,
            "Percentage": 34.6350134,
            "GL_ORDINAL": 335
          },
          {
            "Reference_area": "Hungary",
            "Year": 2014,
            "Percentage": 5.126048164,
            "GL_ORDINAL": 336
          },
          {
            "Reference_area": "Hungary",
            "Year": 2015,
            "Percentage": 25.98890281,
            "GL_ORDINAL": 337
          },
          {
            "Reference_area": "Hungary",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 338
          },
          {
            "Reference_area": "Hungary",
            "Year": 2017,
            "Percentage": 0.553289717,
            "GL_ORDINAL": 339
          },
          {
            "Reference_area": "Hungary",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 340
          },
          {
            "Reference_area": "Hungary",
            "Year": 2019,
            "Percentage": 0.810115788,
            "GL_ORDINAL": 341
          },
          {
            "Reference_area": "Hungary",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 342
          },
          {
            "Reference_area": "Hungary",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 343
          },
          {
            "Reference_area": "Hungary",
            "Year": 2022,
            "Percentage": 54.97083936,
            "GL_ORDINAL": 344
          },
          {
            "Reference_area": "Iceland",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 345
          },
          {
            "Reference_area": "Iceland",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 346
          },
          {
            "Reference_area": "Iceland",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 347
          },
          {
            "Reference_area": "Iceland",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 348
          },
          {
            "Reference_area": "Iceland",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 349
          },
          {
            "Reference_area": "Iceland",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 350
          },
          {
            "Reference_area": "Iceland",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 351
          },
          {
            "Reference_area": "Iceland",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 352
          },
          {
            "Reference_area": "Iceland",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 353
          },
          {
            "Reference_area": "Iceland",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 354
          },
          {
            "Reference_area": "Iceland",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 355
          },
          {
            "Reference_area": "Iceland",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 356
          },
          {
            "Reference_area": "Iceland",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 357
          },
          {
            "Reference_area": "Iceland",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 358
          },
          {
            "Reference_area": "Iceland",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 359
          },
          {
            "Reference_area": "Iceland",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 360
          },
          {
            "Reference_area": "Iceland",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 361
          },
          {
            "Reference_area": "Iceland",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 362
          },
          {
            "Reference_area": "Iceland",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 363
          },
          {
            "Reference_area": "Iceland",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 364
          },
          {
            "Reference_area": "Iceland",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 365
          },
          {
            "Reference_area": "Iceland",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 366
          },
          {
            "Reference_area": "Iceland",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 367
          },
          {
            "Reference_area": "Ireland",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 368
          },
          {
            "Reference_area": "Ireland",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 369
          },
          {
            "Reference_area": "Ireland",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 370
          },
          {
            "Reference_area": "Ireland",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 371
          },
          {
            "Reference_area": "Ireland",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 372
          },
          {
            "Reference_area": "Ireland",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 373
          },
          {
            "Reference_area": "Ireland",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 374
          },
          {
            "Reference_area": "Ireland",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 375
          },
          {
            "Reference_area": "Ireland",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 376
          },
          {
            "Reference_area": "Ireland",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 377
          },
          {
            "Reference_area": "Ireland",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 378
          },
          {
            "Reference_area": "Ireland",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 379
          },
          {
            "Reference_area": "Ireland",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 380
          },
          {
            "Reference_area": "Ireland",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 381
          },
          {
            "Reference_area": "Ireland",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 382
          },
          {
            "Reference_area": "Ireland",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 383
          },
          {
            "Reference_area": "Ireland",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 384
          },
          {
            "Reference_area": "Ireland",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 385
          },
          {
            "Reference_area": "Ireland",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 386
          },
          {
            "Reference_area": "Ireland",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 387
          },
          {
            "Reference_area": "Ireland",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 388
          },
          {
            "Reference_area": "Ireland",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 389
          },
          {
            "Reference_area": "Ireland",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 390
          },
          {
            "Reference_area": "Israel",
            "Year": 2000,
            "Percentage": 78.54131535,
            "GL_ORDINAL": 391
          },
          {
            "Reference_area": "Israel",
            "Year": 2001,
            "Percentage": 77.53867792,
            "GL_ORDINAL": 392
          },
          {
            "Reference_area": "Israel",
            "Year": 2002,
            "Percentage": 78.12631875,
            "GL_ORDINAL": 393
          },
          {
            "Reference_area": "Israel",
            "Year": 2003,
            "Percentage": 78.1496063,
            "GL_ORDINAL": 394
          },
          {
            "Reference_area": "Israel",
            "Year": 2004,
            "Percentage": 73.83295838,
            "GL_ORDINAL": 395
          },
          {
            "Reference_area": "Israel",
            "Year": 2005,
            "Percentage": 67.78683915,
            "GL_ORDINAL": 396
          },
          {
            "Reference_area": "Israel",
            "Year": 2006,
            "Percentage": 32.14812827,
            "GL_ORDINAL": 397
          },
          {
            "Reference_area": "Israel",
            "Year": 2007,
            "Percentage": 41.73913043,
            "GL_ORDINAL": 398
          },
          {
            "Reference_area": "Israel",
            "Year": 2008,
            "Percentage": 33.16432657,
            "GL_ORDINAL": 399
          },
          {
            "Reference_area": "Israel",
            "Year": 2009,
            "Percentage": 78.67360208,
            "GL_ORDINAL": 400
          },
          {
            "Reference_area": "Israel",
            "Year": 2010,
            "Percentage": 80.80624187,
            "GL_ORDINAL": 401
          },
          {
            "Reference_area": "Israel",
            "Year": 2011,
            "Percentage": 66.08559906,
            "GL_ORDINAL": 402
          },
          {
            "Reference_area": "Israel",
            "Year": 2012,
            "Percentage": 79.03162827,
            "GL_ORDINAL": 403
          },
          {
            "Reference_area": "Israel",
            "Year": 2013,
            "Percentage": 81.16130712,
            "GL_ORDINAL": 404
          },
          {
            "Reference_area": "Israel",
            "Year": 2014,
            "Percentage": 75.53413236,
            "GL_ORDINAL": 405
          },
          {
            "Reference_area": "Israel",
            "Year": 2015,
            "Percentage": 75.53413236,
            "GL_ORDINAL": 406
          },
          {
            "Reference_area": "Israel",
            "Year": 2016,
            "Percentage": 9.792436012,
            "GL_ORDINAL": 407
          },
          {
            "Reference_area": "Israel",
            "Year": 2017,
            "Percentage": 75.35769034,
            "GL_ORDINAL": 408
          },
          {
            "Reference_area": "Israel",
            "Year": 2018,
            "Percentage": 79.99235863,
            "GL_ORDINAL": 409
          },
          {
            "Reference_area": "Israel",
            "Year": 2019,
            "Percentage": 81.71557562,
            "GL_ORDINAL": 410
          },
          {
            "Reference_area": "Israel",
            "Year": 2020,
            "Percentage": 81.14854894,
            "GL_ORDINAL": 411
          },
          {
            "Reference_area": "Israel",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 412
          },
          {
            "Reference_area": "Israel",
            "Year": 2022,
            "Percentage": 90.73875188,
            "GL_ORDINAL": 413
          },
          {
            "Reference_area": "Italy",
            "Year": 2000,
            "Percentage": 23.76619369,
            "GL_ORDINAL": 414
          },
          {
            "Reference_area": "Italy",
            "Year": 2001,
            "Percentage": 20.45034306,
            "GL_ORDINAL": 415
          },
          {
            "Reference_area": "Italy",
            "Year": 2002,
            "Percentage": 5.52608837,
            "GL_ORDINAL": 416
          },
          {
            "Reference_area": "Italy",
            "Year": 2003,
            "Percentage": 27.77633368,
            "GL_ORDINAL": 417
          },
          {
            "Reference_area": "Italy",
            "Year": 2004,
            "Percentage": 20.94015773,
            "GL_ORDINAL": 418
          },
          {
            "Reference_area": "Italy",
            "Year": 2005,
            "Percentage": 23.09858757,
            "GL_ORDINAL": 419
          },
          {
            "Reference_area": "Italy",
            "Year": 2006,
            "Percentage": 5.449654918,
            "GL_ORDINAL": 420
          },
          {
            "Reference_area": "Italy",
            "Year": 2007,
            "Percentage": 21.62591279,
            "GL_ORDINAL": 421
          },
          {
            "Reference_area": "Italy",
            "Year": 2008,
            "Percentage": 6.406741703,
            "GL_ORDINAL": 422
          },
          {
            "Reference_area": "Italy",
            "Year": 2009,
            "Percentage": 25.03150806,
            "GL_ORDINAL": 423
          },
          {
            "Reference_area": "Italy",
            "Year": 2010,
            "Percentage": 6.013334878,
            "GL_ORDINAL": 424
          },
          {
            "Reference_area": "Italy",
            "Year": 2011,
            "Percentage": 22.83974569,
            "GL_ORDINAL": 425
          },
          {
            "Reference_area": "Italy",
            "Year": 2012,
            "Percentage": 35.63005224,
            "GL_ORDINAL": 426
          },
          {
            "Reference_area": "Italy",
            "Year": 2013,
            "Percentage": 15.79308277,
            "GL_ORDINAL": 427
          },
          {
            "Reference_area": "Italy",
            "Year": 2014,
            "Percentage": 11.58473236,
            "GL_ORDINAL": 428
          },
          {
            "Reference_area": "Italy",
            "Year": 2015,
            "Percentage": 15.37333133,
            "GL_ORDINAL": 429
          },
          {
            "Reference_area": "Italy",
            "Year": 2016,
            "Percentage": 2.794116099,
            "GL_ORDINAL": 430
          },
          {
            "Reference_area": "Italy",
            "Year": 2017,
            "Percentage": 32.21086177,
            "GL_ORDINAL": 431
          },
          {
            "Reference_area": "Italy",
            "Year": 2018,
            "Percentage": 4.720336102,
            "GL_ORDINAL": 432
          },
          {
            "Reference_area": "Italy",
            "Year": 2019,
            "Percentage": 10.46285943,
            "GL_ORDINAL": 433
          },
          {
            "Reference_area": "Italy",
            "Year": 2020,
            "Percentage": 12.32469547,
            "GL_ORDINAL": 434
          },
          {
            "Reference_area": "Italy",
            "Year": 2021,
            "Percentage": 32.98384679,
            "GL_ORDINAL": 435
          },
          {
            "Reference_area": "Italy",
            "Year": 2022,
            "Percentage": 29.02902072,
            "GL_ORDINAL": 436
          },
          {
            "Reference_area": "Japan",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 437
          },
          {
            "Reference_area": "Japan",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 438
          },
          {
            "Reference_area": "Japan",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 439
          },
          {
            "Reference_area": "Japan",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 440
          },
          {
            "Reference_area": "Japan",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 441
          },
          {
            "Reference_area": "Japan",
            "Year": 2005,
            "Percentage": 1.592264005,
            "GL_ORDINAL": 442
          },
          {
            "Reference_area": "Japan",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 443
          },
          {
            "Reference_area": "Japan",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 444
          },
          {
            "Reference_area": "Japan",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 445
          },
          {
            "Reference_area": "Japan",
            "Year": 2009,
            "Percentage": 0.132603326,
            "GL_ORDINAL": 446
          },
          {
            "Reference_area": "Japan",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 447
          },
          {
            "Reference_area": "Japan",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 448
          },
          {
            "Reference_area": "Japan",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 449
          },
          {
            "Reference_area": "Japan",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 450
          },
          {
            "Reference_area": "Japan",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 451
          },
          {
            "Reference_area": "Japan",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 452
          },
          {
            "Reference_area": "Japan",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 453
          },
          {
            "Reference_area": "Japan",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 454
          },
          {
            "Reference_area": "Japan",
            "Year": 2018,
            "Percentage": 0.157747785,
            "GL_ORDINAL": 455
          },
          {
            "Reference_area": "Japan",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 456
          },
          {
            "Reference_area": "Japan",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 457
          },
          {
            "Reference_area": "Japan",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 458
          },
          {
            "Reference_area": "Japan",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 459
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 460
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2001,
            "Percentage": 19.55230057,
            "GL_ORDINAL": 461
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 462
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 463
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2004,
            "Percentage": 15.230143,
            "GL_ORDINAL": 464
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 465
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 466
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 467
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 468
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2009,
            "Percentage": 22.33373503,
            "GL_ORDINAL": 469
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 470
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 471
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2012,
            "Percentage": 4.832143767,
            "GL_ORDINAL": 472
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 473
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 474
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2015,
            "Percentage": 4.905248624,
            "GL_ORDINAL": 475
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 476
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2017,
            "Percentage": 8.444570099,
            "GL_ORDINAL": 477
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2018,
            "Percentage": 1.654233632,
            "GL_ORDINAL": 478
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 479
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 480
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 481
          },
          {
            "Reference_area": "Republic of Korea",
            "Year": 2022,
            "Percentage": 34.15954971,
            "GL_ORDINAL": 482
          },
          {
            "Reference_area": "Latvia",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 483
          },
          {
            "Reference_area": "Latvia",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 484
          },
          {
            "Reference_area": "Latvia",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 485
          },
          {
            "Reference_area": "Latvia",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 486
          },
          {
            "Reference_area": "Latvia",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 487
          },
          {
            "Reference_area": "Latvia",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 488
          },
          {
            "Reference_area": "Latvia",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 489
          },
          {
            "Reference_area": "Latvia",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 490
          },
          {
            "Reference_area": "Latvia",
            "Year": 2008,
            "Percentage": 12.02366258,
            "GL_ORDINAL": 491
          },
          {
            "Reference_area": "Latvia",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 492
          },
          {
            "Reference_area": "Latvia",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 493
          },
          {
            "Reference_area": "Latvia",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 494
          },
          {
            "Reference_area": "Latvia",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 495
          },
          {
            "Reference_area": "Latvia",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 496
          },
          {
            "Reference_area": "Latvia",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 497
          },
          {
            "Reference_area": "Latvia",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 498
          },
          {
            "Reference_area": "Latvia",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 499
          },
          {
            "Reference_area": "Latvia",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 500
          },
          {
            "Reference_area": "Latvia",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 501
          },
          {
            "Reference_area": "Latvia",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 502
          },
          {
            "Reference_area": "Latvia",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 503
          },
          {
            "Reference_area": "Latvia",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 504
          },
          {
            "Reference_area": "Latvia",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 505
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 506
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 507
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 508
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 509
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 510
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 511
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 512
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 513
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2008,
            "Percentage": 1.027957215,
            "GL_ORDINAL": 514
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 515
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 516
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 517
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 518
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 519
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 520
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2015,
            "Percentage": 4.505939163,
            "GL_ORDINAL": 521
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 522
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 523
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2018,
            "Percentage": 15.02157269,
            "GL_ORDINAL": 524
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2019,
            "Percentage": 1.263688263,
            "GL_ORDINAL": 525
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 526
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 527
          },
          {
            "Reference_area": "Lithuania",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 528
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 529
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 530
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 531
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 532
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 533
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 534
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 535
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 536
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 537
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 538
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 539
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 540
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 541
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 542
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 543
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 544
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 545
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 546
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 547
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 548
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 549
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 550
          },
          {
            "Reference_area": "Luxembourg",
            "Year": 2022,
            "Percentage": 60.61425352,
            "GL_ORDINAL": 551
          },
          {
            "Reference_area": "Mexico",
            "Year": 2000,
            "Percentage": 85.0422642,
            "GL_ORDINAL": 552
          },
          {
            "Reference_area": "Mexico",
            "Year": 2001,
            "Percentage": 85.20013322,
            "GL_ORDINAL": 553
          },
          {
            "Reference_area": "Mexico",
            "Year": 2002,
            "Percentage": 86.06967069,
            "GL_ORDINAL": 554
          },
          {
            "Reference_area": "Mexico",
            "Year": 2003,
            "Percentage": 90.47077664,
            "GL_ORDINAL": 555
          },
          {
            "Reference_area": "Mexico",
            "Year": 2004,
            "Percentage": 81.67385307,
            "GL_ORDINAL": 556
          },
          {
            "Reference_area": "Mexico",
            "Year": 2005,
            "Percentage": 86.49837697,
            "GL_ORDINAL": 557
          },
          {
            "Reference_area": "Mexico",
            "Year": 2006,
            "Percentage": 68.06820826,
            "GL_ORDINAL": 558
          },
          {
            "Reference_area": "Mexico",
            "Year": 2007,
            "Percentage": 65.4462364,
            "GL_ORDINAL": 559
          },
          {
            "Reference_area": "Mexico",
            "Year": 2008,
            "Percentage": 70.18894778,
            "GL_ORDINAL": 560
          },
          {
            "Reference_area": "Mexico",
            "Year": 2009,
            "Percentage": 87.93139035,
            "GL_ORDINAL": 561
          },
          {
            "Reference_area": "Mexico",
            "Year": 2010,
            "Percentage": 83.93011557,
            "GL_ORDINAL": 562
          },
          {
            "Reference_area": "Mexico",
            "Year": 2011,
            "Percentage": 89.0068756,
            "GL_ORDINAL": 563
          },
          {
            "Reference_area": "Mexico",
            "Year": 2012,
            "Percentage": 82.33108253,
            "GL_ORDINAL": 564
          },
          {
            "Reference_area": "Mexico",
            "Year": 2013,
            "Percentage": 87.27346242,
            "GL_ORDINAL": 565
          },
          {
            "Reference_area": "Mexico",
            "Year": 2014,
            "Percentage": 80.84054365,
            "GL_ORDINAL": 566
          },
          {
            "Reference_area": "Mexico",
            "Year": 2015,
            "Percentage": 77.5475657,
            "GL_ORDINAL": 567
          },
          {
            "Reference_area": "Mexico",
            "Year": 2016,
            "Percentage": 59.49544105,
            "GL_ORDINAL": 568
          },
          {
            "Reference_area": "Mexico",
            "Year": 2017,
            "Percentage": 85.66476718,
            "GL_ORDINAL": 569
          },
          {
            "Reference_area": "Mexico",
            "Year": 2018,
            "Percentage": 82.03175737,
            "GL_ORDINAL": 570
          },
          {
            "Reference_area": "Mexico",
            "Year": 2019,
            "Percentage": 87.66761005,
            "GL_ORDINAL": 571
          },
          {
            "Reference_area": "Mexico",
            "Year": 2020,
            "Percentage": 87.18742878,
            "GL_ORDINAL": 572
          },
          {
            "Reference_area": "Mexico",
            "Year": 2021,
            "Percentage": 89.83204854,
            "GL_ORDINAL": 573
          },
          {
            "Reference_area": "Mexico",
            "Year": 2022,
            "Percentage": 83.16916434,
            "GL_ORDINAL": 574
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 575
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 576
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 577
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 578
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 579
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 580
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 581
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 582
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 583
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 584
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 585
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 586
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 587
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 588
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 589
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 590
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 591
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 592
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 593
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 594
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 595
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 596
          },
          {
            "Reference_area": "Netherlands",
            "Year": 2022,
            "Percentage": 1.189166019,
            "GL_ORDINAL": 597
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 598
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2001,
            "Percentage": 0.124092817,
            "GL_ORDINAL": 599
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 600
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 601
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 602
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 603
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 604
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 605
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 606
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 607
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 608
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 609
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 610
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2013,
            "Percentage": 0.541581848,
            "GL_ORDINAL": 611
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 612
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 613
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 614
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 615
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 616
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 617
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2020,
            "Percentage": 0.224465519,
            "GL_ORDINAL": 618
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 619
          },
          {
            "Reference_area": "New Zealand",
            "Year": 2022,
            "Percentage": 0.440267907,
            "GL_ORDINAL": 620
          },
          {
            "Reference_area": "Norway",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 621
          },
          {
            "Reference_area": "Norway",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 622
          },
          {
            "Reference_area": "Norway",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 623
          },
          {
            "Reference_area": "Norway",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 624
          },
          {
            "Reference_area": "Norway",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 625
          },
          {
            "Reference_area": "Norway",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 626
          },
          {
            "Reference_area": "Norway",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 627
          },
          {
            "Reference_area": "Norway",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 628
          },
          {
            "Reference_area": "Norway",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 629
          },
          {
            "Reference_area": "Norway",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 630
          },
          {
            "Reference_area": "Norway",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 631
          },
          {
            "Reference_area": "Norway",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 632
          },
          {
            "Reference_area": "Norway",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 633
          },
          {
            "Reference_area": "Norway",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 634
          },
          {
            "Reference_area": "Norway",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 635
          },
          {
            "Reference_area": "Norway",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 636
          },
          {
            "Reference_area": "Norway",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 637
          },
          {
            "Reference_area": "Norway",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 638
          },
          {
            "Reference_area": "Norway",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 639
          },
          {
            "Reference_area": "Norway",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 640
          },
          {
            "Reference_area": "Norway",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 641
          },
          {
            "Reference_area": "Norway",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 642
          },
          {
            "Reference_area": "Norway",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 643
          },
          {
            "Reference_area": "Poland",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 644
          },
          {
            "Reference_area": "Poland",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 645
          },
          {
            "Reference_area": "Poland",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 646
          },
          {
            "Reference_area": "Poland",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 647
          },
          {
            "Reference_area": "Poland",
            "Year": 2004,
            "Percentage": 1.449063301,
            "GL_ORDINAL": 648
          },
          {
            "Reference_area": "Poland",
            "Year": 2005,
            "Percentage": 1.084059599,
            "GL_ORDINAL": 649
          },
          {
            "Reference_area": "Poland",
            "Year": 2006,
            "Percentage": 0.990755762,
            "GL_ORDINAL": 650
          },
          {
            "Reference_area": "Poland",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 651
          },
          {
            "Reference_area": "Poland",
            "Year": 2008,
            "Percentage": 7.242460359,
            "GL_ORDINAL": 652
          },
          {
            "Reference_area": "Poland",
            "Year": 2009,
            "Percentage": 0.368618831,
            "GL_ORDINAL": 653
          },
          {
            "Reference_area": "Poland",
            "Year": 2010,
            "Percentage": 0.508586829,
            "GL_ORDINAL": 654
          },
          {
            "Reference_area": "Poland",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 655
          },
          {
            "Reference_area": "Poland",
            "Year": 2012,
            "Percentage": 3.85317143,
            "GL_ORDINAL": 656
          },
          {
            "Reference_area": "Poland",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 657
          },
          {
            "Reference_area": "Poland",
            "Year": 2014,
            "Percentage": 5.349649916,
            "GL_ORDINAL": 658
          },
          {
            "Reference_area": "Poland",
            "Year": 2015,
            "Percentage": 30.22322194,
            "GL_ORDINAL": 659
          },
          {
            "Reference_area": "Poland",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 660
          },
          {
            "Reference_area": "Poland",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 661
          },
          {
            "Reference_area": "Poland",
            "Year": 2018,
            "Percentage": 3.286042233,
            "GL_ORDINAL": 662
          },
          {
            "Reference_area": "Poland",
            "Year": 2019,
            "Percentage": 12.67125076,
            "GL_ORDINAL": 663
          },
          {
            "Reference_area": "Poland",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 664
          },
          {
            "Reference_area": "Poland",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 665
          },
          {
            "Reference_area": "Poland",
            "Year": 2022,
            "Percentage": 1.861303688,
            "GL_ORDINAL": 666
          },
          {
            "Reference_area": "Portugal",
            "Year": 2000,
            "Percentage": 55.07448603,
            "GL_ORDINAL": 667
          },
          {
            "Reference_area": "Portugal",
            "Year": 2001,
            "Percentage": 49.72976111,
            "GL_ORDINAL": 668
          },
          {
            "Reference_area": "Portugal",
            "Year": 2002,
            "Percentage": 60.09354386,
            "GL_ORDINAL": 669
          },
          {
            "Reference_area": "Portugal",
            "Year": 2003,
            "Percentage": 61.20363062,
            "GL_ORDINAL": 670
          },
          {
            "Reference_area": "Portugal",
            "Year": 2004,
            "Percentage": 69.2903524,
            "GL_ORDINAL": 671
          },
          {
            "Reference_area": "Portugal",
            "Year": 2005,
            "Percentage": 77.51049313,
            "GL_ORDINAL": 672
          },
          {
            "Reference_area": "Portugal",
            "Year": 2006,
            "Percentage": 59.67156613,
            "GL_ORDINAL": 673
          },
          {
            "Reference_area": "Portugal",
            "Year": 2007,
            "Percentage": 29.1522382,
            "GL_ORDINAL": 674
          },
          {
            "Reference_area": "Portugal",
            "Year": 2008,
            "Percentage": 24.18802917,
            "GL_ORDINAL": 675
          },
          {
            "Reference_area": "Portugal",
            "Year": 2009,
            "Percentage": 55.02844625,
            "GL_ORDINAL": 676
          },
          {
            "Reference_area": "Portugal",
            "Year": 2010,
            "Percentage": 77.26044184,
            "GL_ORDINAL": 677
          },
          {
            "Reference_area": "Portugal",
            "Year": 2011,
            "Percentage": 61.08563431,
            "GL_ORDINAL": 678
          },
          {
            "Reference_area": "Portugal",
            "Year": 2012,
            "Percentage": 79.0190361,
            "GL_ORDINAL": 679
          },
          {
            "Reference_area": "Portugal",
            "Year": 2013,
            "Percentage": 72.03680927,
            "GL_ORDINAL": 680
          },
          {
            "Reference_area": "Portugal",
            "Year": 2014,
            "Percentage": 47.31741804,
            "GL_ORDINAL": 681
          },
          {
            "Reference_area": "Portugal",
            "Year": 2015,
            "Percentage": 60.01735152,
            "GL_ORDINAL": 682
          },
          {
            "Reference_area": "Portugal",
            "Year": 2016,
            "Percentage": 51.0979832,
            "GL_ORDINAL": 683
          },
          {
            "Reference_area": "Portugal",
            "Year": 2017,
            "Percentage": 82.91646423,
            "GL_ORDINAL": 684
          },
          {
            "Reference_area": "Portugal",
            "Year": 2018,
            "Percentage": 72.40123031,
            "GL_ORDINAL": 685
          },
          {
            "Reference_area": "Portugal",
            "Year": 2019,
            "Percentage": 65.28918331,
            "GL_ORDINAL": 686
          },
          {
            "Reference_area": "Portugal",
            "Year": 2020,
            "Percentage": 76.91407877,
            "GL_ORDINAL": 687
          },
          {
            "Reference_area": "Portugal",
            "Year": 2021,
            "Percentage": 73.0440465,
            "GL_ORDINAL": 688
          },
          {
            "Reference_area": "Portugal",
            "Year": 2022,
            "Percentage": 83.38226933,
            "GL_ORDINAL": 689
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2000,
            "Percentage": 0.230719932,
            "GL_ORDINAL": 690
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2001,
            "Percentage": 0.131472558,
            "GL_ORDINAL": 691
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 692
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2003,
            "Percentage": 0.55302772,
            "GL_ORDINAL": 693
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 694
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 695
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 696
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2007,
            "Percentage": 0.327867779,
            "GL_ORDINAL": 697
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 698
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 699
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 700
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 701
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2012,
            "Percentage": 8.538217313,
            "GL_ORDINAL": 702
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2013,
            "Percentage": 0.073218701,
            "GL_ORDINAL": 703
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2014,
            "Percentage": 1.566967973,
            "GL_ORDINAL": 704
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2015,
            "Percentage": 6.637095341,
            "GL_ORDINAL": 705
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 706
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2017,
            "Percentage": 5.459911946,
            "GL_ORDINAL": 707
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 708
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2019,
            "Percentage": 4.740585194,
            "GL_ORDINAL": 709
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 710
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 711
          },
          {
            "Reference_area": "Slovak Republic",
            "Year": 2022,
            "Percentage": 12.37569518,
            "GL_ORDINAL": 712
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 713
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 714
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 715
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 716
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 717
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 718
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 719
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 720
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 721
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 722
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 723
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 724
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2012,
            "Percentage": 0.745211589,
            "GL_ORDINAL": 725
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2013,
            "Percentage": 0.101418723,
            "GL_ORDINAL": 726
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 727
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 728
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 729
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 730
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 731
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 732
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 733
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 734
          },
          {
            "Reference_area": "Slovenia",
            "Year": 2022,
            "Percentage": 0.715113264,
            "GL_ORDINAL": 735
          },
          {
            "Reference_area": "Spain",
            "Year": 2000,
            "Percentage": 55.24087882,
            "GL_ORDINAL": 736
          },
          {
            "Reference_area": "Spain",
            "Year": 2001,
            "Percentage": 55.09360394,
            "GL_ORDINAL": 737
          },
          {
            "Reference_area": "Spain",
            "Year": 2002,
            "Percentage": 50.23386259,
            "GL_ORDINAL": 738
          },
          {
            "Reference_area": "Spain",
            "Year": 2003,
            "Percentage": 62.87886527,
            "GL_ORDINAL": 739
          },
          {
            "Reference_area": "Spain",
            "Year": 2004,
            "Percentage": 53.35056334,
            "GL_ORDINAL": 740
          },
          {
            "Reference_area": "Spain",
            "Year": 2005,
            "Percentage": 64.17760939,
            "GL_ORDINAL": 741
          },
          {
            "Reference_area": "Spain",
            "Year": 2006,
            "Percentage": 47.11956143,
            "GL_ORDINAL": 742
          },
          {
            "Reference_area": "Spain",
            "Year": 2007,
            "Percentage": 41.83899474,
            "GL_ORDINAL": 743
          },
          {
            "Reference_area": "Spain",
            "Year": 2008,
            "Percentage": 39.29104301,
            "GL_ORDINAL": 744
          },
          {
            "Reference_area": "Spain",
            "Year": 2009,
            "Percentage": 65.65373894,
            "GL_ORDINAL": 745
          },
          {
            "Reference_area": "Spain",
            "Year": 2010,
            "Percentage": 60.32775839,
            "GL_ORDINAL": 746
          },
          {
            "Reference_area": "Spain",
            "Year": 2011,
            "Percentage": 64.12444431,
            "GL_ORDINAL": 747
          },
          {
            "Reference_area": "Spain",
            "Year": 2012,
            "Percentage": 66.89753911,
            "GL_ORDINAL": 748
          },
          {
            "Reference_area": "Spain",
            "Year": 2013,
            "Percentage": 63.11179664,
            "GL_ORDINAL": 749
          },
          {
            "Reference_area": "Spain",
            "Year": 2014,
            "Percentage": 55.10777627,
            "GL_ORDINAL": 750
          },
          {
            "Reference_area": "Spain",
            "Year": 2015,
            "Percentage": 64.80874279,
            "GL_ORDINAL": 751
          },
          {
            "Reference_area": "Spain",
            "Year": 2016,
            "Percentage": 35.94797339,
            "GL_ORDINAL": 752
          },
          {
            "Reference_area": "Spain",
            "Year": 2017,
            "Percentage": 62.86091617,
            "GL_ORDINAL": 753
          },
          {
            "Reference_area": "Spain",
            "Year": 2018,
            "Percentage": 51.91157613,
            "GL_ORDINAL": 754
          },
          {
            "Reference_area": "Spain",
            "Year": 2019,
            "Percentage": 62.74219785,
            "GL_ORDINAL": 755
          },
          {
            "Reference_area": "Spain",
            "Year": 2020,
            "Percentage": 59.43921302,
            "GL_ORDINAL": 756
          },
          {
            "Reference_area": "Spain",
            "Year": 2021,
            "Percentage": 64.4652452,
            "GL_ORDINAL": 757
          },
          {
            "Reference_area": "Spain",
            "Year": 2022,
            "Percentage": 69.57625555,
            "GL_ORDINAL": 758
          },
          {
            "Reference_area": "Sweden",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 759
          },
          {
            "Reference_area": "Sweden",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 760
          },
          {
            "Reference_area": "Sweden",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 761
          },
          {
            "Reference_area": "Sweden",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 762
          },
          {
            "Reference_area": "Sweden",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 763
          },
          {
            "Reference_area": "Sweden",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 764
          },
          {
            "Reference_area": "Sweden",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 765
          },
          {
            "Reference_area": "Sweden",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 766
          },
          {
            "Reference_area": "Sweden",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 767
          },
          {
            "Reference_area": "Sweden",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 768
          },
          {
            "Reference_area": "Sweden",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 769
          },
          {
            "Reference_area": "Sweden",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 770
          },
          {
            "Reference_area": "Sweden",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 771
          },
          {
            "Reference_area": "Sweden",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 772
          },
          {
            "Reference_area": "Sweden",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 773
          },
          {
            "Reference_area": "Sweden",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 774
          },
          {
            "Reference_area": "Sweden",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 775
          },
          {
            "Reference_area": "Sweden",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 776
          },
          {
            "Reference_area": "Sweden",
            "Year": 2018,
            "Percentage": 0.972249771,
            "GL_ORDINAL": 777
          },
          {
            "Reference_area": "Sweden",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 778
          },
          {
            "Reference_area": "Sweden",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 779
          },
          {
            "Reference_area": "Sweden",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 780
          },
          {
            "Reference_area": "Sweden",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 781
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 782
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 783
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 784
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2003,
            "Percentage": 0.550346022,
            "GL_ORDINAL": 785
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 786
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 787
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 788
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 789
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 790
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 791
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 792
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 793
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 794
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 795
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 796
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 797
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 798
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 799
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 800
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 801
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 802
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 803
          },
          {
            "Reference_area": "Switzerland",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 804
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2000,
            "Percentage": 55.13647375,
            "GL_ORDINAL": 805
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2001,
            "Percentage": 59.6774385,
            "GL_ORDINAL": 806
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2002,
            "Percentage": 43.4061179,
            "GL_ORDINAL": 807
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2003,
            "Percentage": 61.25674965,
            "GL_ORDINAL": 808
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2004,
            "Percentage": 56.78357118,
            "GL_ORDINAL": 809
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2005,
            "Percentage": 53.06109397,
            "GL_ORDINAL": 810
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2006,
            "Percentage": 45.85260023,
            "GL_ORDINAL": 811
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2007,
            "Percentage": 51.8529623,
            "GL_ORDINAL": 812
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2008,
            "Percentage": 50.79161866,
            "GL_ORDINAL": 813
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2009,
            "Percentage": 60.10676261,
            "GL_ORDINAL": 814
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2010,
            "Percentage": 65.77318819,
            "GL_ORDINAL": 815
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2011,
            "Percentage": 62.12694864,
            "GL_ORDINAL": 816
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2012,
            "Percentage": 68.46693562,
            "GL_ORDINAL": 817
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2013,
            "Percentage": 66.59564406,
            "GL_ORDINAL": 818
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2014,
            "Percentage": 62.46583959,
            "GL_ORDINAL": 819
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2015,
            "Percentage": 64.50919586,
            "GL_ORDINAL": 820
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2016,
            "Percentage": 30.85124132,
            "GL_ORDINAL": 821
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2017,
            "Percentage": 68.99441894,
            "GL_ORDINAL": 822
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2018,
            "Percentage": 60.60707781,
            "GL_ORDINAL": 823
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2019,
            "Percentage": 67.69645971,
            "GL_ORDINAL": 824
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2020,
            "Percentage": 75.9287689,
            "GL_ORDINAL": 825
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2021,
            "Percentage": 73.7057213,
            "GL_ORDINAL": 826
          },
          {
            "Reference_area": "Türkiye",
            "Year": 2022,
            "Percentage": 73.25646311,
            "GL_ORDINAL": 827
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 828
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 829
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 830
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 831
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 832
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 833
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 834
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 835
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 836
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 837
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 838
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2011,
            "Percentage": 1.627234143,
            "GL_ORDINAL": 839
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 840
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 841
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 842
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 843
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 844
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 845
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 846
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 847
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 848
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 849
          },
          {
            "Reference_area": "United Kingdom",
            "Year": 2022,
            "Percentage": 9.963339655,
            "GL_ORDINAL": 850
          },
          {
            "Reference_area": "United States",
            "Year": 2000,
            "Percentage": 35.42096494,
            "GL_ORDINAL": 851
          },
          {
            "Reference_area": "United States",
            "Year": 2001,
            "Percentage": 26.5641337,
            "GL_ORDINAL": 852
          },
          {
            "Reference_area": "United States",
            "Year": 2002,
            "Percentage": 24.82589882,
            "GL_ORDINAL": 853
          },
          {
            "Reference_area": "United States",
            "Year": 2003,
            "Percentage": 26.86310088,
            "GL_ORDINAL": 854
          },
          {
            "Reference_area": "United States",
            "Year": 2004,
            "Percentage": 25.04426249,
            "GL_ORDINAL": 855
          },
          {
            "Reference_area": "United States",
            "Year": 2005,
            "Percentage": 31.72147689,
            "GL_ORDINAL": 856
          },
          {
            "Reference_area": "United States",
            "Year": 2006,
            "Percentage": 26.91626807,
            "GL_ORDINAL": 857
          },
          {
            "Reference_area": "United States",
            "Year": 2007,
            "Percentage": 26.32465376,
            "GL_ORDINAL": 858
          },
          {
            "Reference_area": "United States",
            "Year": 2008,
            "Percentage": 22.43823442,
            "GL_ORDINAL": 859
          },
          {
            "Reference_area": "United States",
            "Year": 2009,
            "Percentage": 31.78666296,
            "GL_ORDINAL": 860
          },
          {
            "Reference_area": "United States",
            "Year": 2010,
            "Percentage": 32.49678233,
            "GL_ORDINAL": 861
          },
          {
            "Reference_area": "United States",
            "Year": 2011,
            "Percentage": 39.91704054,
            "GL_ORDINAL": 862
          },
          {
            "Reference_area": "United States",
            "Year": 2012,
            "Percentage": 40.42125405,
            "GL_ORDINAL": 863
          },
          {
            "Reference_area": "United States",
            "Year": 2013,
            "Percentage": 28.95063845,
            "GL_ORDINAL": 864
          },
          {
            "Reference_area": "United States",
            "Year": 2014,
            "Percentage": 24.65808637,
            "GL_ORDINAL": 865
          },
          {
            "Reference_area": "United States",
            "Year": 2015,
            "Percentage": 32.86321458,
            "GL_ORDINAL": 866
          },
          {
            "Reference_area": "United States",
            "Year": 2016,
            "Percentage": 19.89446793,
            "GL_ORDINAL": 867
          },
          {
            "Reference_area": "United States",
            "Year": 2017,
            "Percentage": 28.94359235,
            "GL_ORDINAL": 868
          },
          {
            "Reference_area": "United States",
            "Year": 2018,
            "Percentage": 26.76397135,
            "GL_ORDINAL": 869
          },
          {
            "Reference_area": "United States",
            "Year": 2019,
            "Percentage": 32.29454371,
            "GL_ORDINAL": 870
          },
          {
            "Reference_area": "United States",
            "Year": 2020,
            "Percentage": 28.73710969,
            "GL_ORDINAL": 871
          },
          {
            "Reference_area": "United States",
            "Year": 2021,
            "Percentage": 0.234860237,
            "GL_ORDINAL": 872
          },
          {
            "Reference_area": "United States",
            "Year": 2022,
            "Percentage": 0.253042004,
            "GL_ORDINAL": 873
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2000,
            "Percentage": 58.29586331,
            "GL_ORDINAL": 874
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2001,
            "Percentage": 58.55877003,
            "GL_ORDINAL": 875
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2002,
            "Percentage": 58.55495065,
            "GL_ORDINAL": 876
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2003,
            "Percentage": 58.51714006,
            "GL_ORDINAL": 877
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2004,
            "Percentage": 53.70089377,
            "GL_ORDINAL": 878
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2005,
            "Percentage": 51.82554786,
            "GL_ORDINAL": 879
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2006,
            "Percentage": 35.78497791,
            "GL_ORDINAL": 880
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2007,
            "Percentage": 32.57563851,
            "GL_ORDINAL": 881
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2008,
            "Percentage": 38.19233678,
            "GL_ORDINAL": 882
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2009,
            "Percentage": 60.95234353,
            "GL_ORDINAL": 883
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2010,
            "Percentage": 51.99469392,
            "GL_ORDINAL": 884
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2011,
            "Percentage": 64.89511177,
            "GL_ORDINAL": 885
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2012,
            "Percentage": 61.29631998,
            "GL_ORDINAL": 886
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2013,
            "Percentage": 48.9039548,
            "GL_ORDINAL": 887
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2014,
            "Percentage": 51.23120889,
            "GL_ORDINAL": 888
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2015,
            "Percentage": 45.3540949,
            "GL_ORDINAL": 889
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2016,
            "Percentage": 6.634654799,
            "GL_ORDINAL": 890
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2017,
            "Percentage": 61.37876587,
            "GL_ORDINAL": 891
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2018,
            "Percentage": 59.13858188,
            "GL_ORDINAL": 892
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2019,
            "Percentage": 56.67586724,
            "GL_ORDINAL": 893
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2020,
            "Percentage": 51.33528032,
            "GL_ORDINAL": 894
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2021,
            "Percentage": 78.09702967,
            "GL_ORDINAL": 895
          },
          {
            "Reference_area": "Afghanistan",
            "Year": 2022,
            "Percentage": 69.23755468,
            "GL_ORDINAL": 896
          },
          {
            "Reference_area": "Albania",
            "Year": 2000,
            "Percentage": 13.39123575,
            "GL_ORDINAL": 897
          },
          {
            "Reference_area": "Albania",
            "Year": 2001,
            "Percentage": 1.01136873,
            "GL_ORDINAL": 898
          },
          {
            "Reference_area": "Albania",
            "Year": 2002,
            "Percentage": 0.118883795,
            "GL_ORDINAL": 899
          },
          {
            "Reference_area": "Albania",
            "Year": 2003,
            "Percentage": 5.700712589,
            "GL_ORDINAL": 900
          },
          {
            "Reference_area": "Albania",
            "Year": 2004,
            "Percentage": 1.019813752,
            "GL_ORDINAL": 901
          },
          {
            "Reference_area": "Albania",
            "Year": 2005,
            "Percentage": 1.027440868,
            "GL_ORDINAL": 902
          },
          {
            "Reference_area": "Albania",
            "Year": 2006,
            "Percentage": 0.144322905,
            "GL_ORDINAL": 903
          },
          {
            "Reference_area": "Albania",
            "Year": 2007,
            "Percentage": 13.27928652,
            "GL_ORDINAL": 904
          },
          {
            "Reference_area": "Albania",
            "Year": 2008,
            "Percentage": 0.201636178,
            "GL_ORDINAL": 905
          },
          {
            "Reference_area": "Albania",
            "Year": 2009,
            "Percentage": 1.034540808,
            "GL_ORDINAL": 906
          },
          {
            "Reference_area": "Albania",
            "Year": 2010,
            "Percentage": 1.036923666,
            "GL_ORDINAL": 907
          },
          {
            "Reference_area": "Albania",
            "Year": 2011,
            "Percentage": 1.038759928,
            "GL_ORDINAL": 908
          },
          {
            "Reference_area": "Albania",
            "Year": 2012,
            "Percentage": 49.09884345,
            "GL_ORDINAL": 909
          },
          {
            "Reference_area": "Albania",
            "Year": 2013,
            "Percentage": 11.2775033,
            "GL_ORDINAL": 910
          },
          {
            "Reference_area": "Albania",
            "Year": 2014,
            "Percentage": 0.563001651,
            "GL_ORDINAL": 911
          },
          {
            "Reference_area": "Albania",
            "Year": 2015,
            "Percentage": 1.047715611,
            "GL_ORDINAL": 912
          },
          {
            "Reference_area": "Albania",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 913
          },
          {
            "Reference_area": "Albania",
            "Year": 2017,
            "Percentage": 39.54421974,
            "GL_ORDINAL": 914
          },
          {
            "Reference_area": "Albania",
            "Year": 2018,
            "Percentage": 3.735714972,
            "GL_ORDINAL": 915
          },
          {
            "Reference_area": "Albania",
            "Year": 2019,
            "Percentage": 3.421888959,
            "GL_ORDINAL": 916
          },
          {
            "Reference_area": "Albania",
            "Year": 2020,
            "Percentage": 3.774794397,
            "GL_ORDINAL": 917
          },
          {
            "Reference_area": "Albania",
            "Year": 2021,
            "Percentage": 33.93701855,
            "GL_ORDINAL": 918
          },
          {
            "Reference_area": "Albania",
            "Year": 2022,
            "Percentage": 54.86477149,
            "GL_ORDINAL": 919
          },
          {
            "Reference_area": "Algeria",
            "Year": 2000,
            "Percentage": 91.48480772,
            "GL_ORDINAL": 920
          },
          {
            "Reference_area": "Algeria",
            "Year": 2001,
            "Percentage": 91.72236594,
            "GL_ORDINAL": 921
          },
          {
            "Reference_area": "Algeria",
            "Year": 2002,
            "Percentage": 89.57409148,
            "GL_ORDINAL": 922
          },
          {
            "Reference_area": "Algeria",
            "Year": 2003,
            "Percentage": 92.12152128,
            "GL_ORDINAL": 923
          },
          {
            "Reference_area": "Algeria",
            "Year": 2004,
            "Percentage": 89.94138264,
            "GL_ORDINAL": 924
          },
          {
            "Reference_area": "Algeria",
            "Year": 2005,
            "Percentage": 91.2302484,
            "GL_ORDINAL": 925
          },
          {
            "Reference_area": "Algeria",
            "Year": 2006,
            "Percentage": 58.03494437,
            "GL_ORDINAL": 926
          },
          {
            "Reference_area": "Algeria",
            "Year": 2007,
            "Percentage": 59.28573216,
            "GL_ORDINAL": 927
          },
          {
            "Reference_area": "Algeria",
            "Year": 2008,
            "Percentage": 55.2771601,
            "GL_ORDINAL": 928
          },
          {
            "Reference_area": "Algeria",
            "Year": 2009,
            "Percentage": 92.70620876,
            "GL_ORDINAL": 929
          },
          {
            "Reference_area": "Algeria",
            "Year": 2010,
            "Percentage": 90.42184323,
            "GL_ORDINAL": 930
          },
          {
            "Reference_area": "Algeria",
            "Year": 2011,
            "Percentage": 89.97379075,
            "GL_ORDINAL": 931
          },
          {
            "Reference_area": "Algeria",
            "Year": 2012,
            "Percentage": 92.84142774,
            "GL_ORDINAL": 932
          },
          {
            "Reference_area": "Algeria",
            "Year": 2013,
            "Percentage": 90.65080732,
            "GL_ORDINAL": 933
          },
          {
            "Reference_area": "Algeria",
            "Year": 2014,
            "Percentage": 91.39214222,
            "GL_ORDINAL": 934
          },
          {
            "Reference_area": "Algeria",
            "Year": 2015,
            "Percentage": 92.77417649,
            "GL_ORDINAL": 935
          },
          {
            "Reference_area": "Algeria",
            "Year": 2016,
            "Percentage": 44.88897656,
            "GL_ORDINAL": 936
          },
          {
            "Reference_area": "Algeria",
            "Year": 2017,
            "Percentage": 92.87908708,
            "GL_ORDINAL": 937
          },
          {
            "Reference_area": "Algeria",
            "Year": 2018,
            "Percentage": 90.24331978,
            "GL_ORDINAL": 938
          },
          {
            "Reference_area": "Algeria",
            "Year": 2019,
            "Percentage": 92.56904749,
            "GL_ORDINAL": 939
          },
          {
            "Reference_area": "Algeria",
            "Year": 2020,
            "Percentage": 92.20111315,
            "GL_ORDINAL": 940
          },
          {
            "Reference_area": "Algeria",
            "Year": 2021,
            "Percentage": 98.45168476,
            "GL_ORDINAL": 941
          },
          {
            "Reference_area": "Algeria",
            "Year": 2022,
            "Percentage": 92.84250353,
            "GL_ORDINAL": 942
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 943
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 944
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 945
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 946
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 947
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 948
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 949
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 950
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 951
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 952
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 953
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 954
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 955
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 956
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 957
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 958
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 959
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 960
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 961
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 962
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 963
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 964
          },
          {
            "Reference_area": "American Samoa",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 965
          },
          {
            "Reference_area": "Angola",
            "Year": 2000,
            "Percentage": 89.75921391,
            "GL_ORDINAL": 966
          },
          {
            "Reference_area": "Angola",
            "Year": 2001,
            "Percentage": 89.95279057,
            "GL_ORDINAL": 967
          },
          {
            "Reference_area": "Angola",
            "Year": 2002,
            "Percentage": 86.03995277,
            "GL_ORDINAL": 968
          },
          {
            "Reference_area": "Angola",
            "Year": 2003,
            "Percentage": 89.47410214,
            "GL_ORDINAL": 969
          },
          {
            "Reference_area": "Angola",
            "Year": 2004,
            "Percentage": 90.34424102,
            "GL_ORDINAL": 970
          },
          {
            "Reference_area": "Angola",
            "Year": 2005,
            "Percentage": 87.89209211,
            "GL_ORDINAL": 971
          },
          {
            "Reference_area": "Angola",
            "Year": 2006,
            "Percentage": 87.44559809,
            "GL_ORDINAL": 972
          },
          {
            "Reference_area": "Angola",
            "Year": 2007,
            "Percentage": 86.18827398,
            "GL_ORDINAL": 973
          },
          {
            "Reference_area": "Angola",
            "Year": 2008,
            "Percentage": 87.08235585,
            "GL_ORDINAL": 974
          },
          {
            "Reference_area": "Angola",
            "Year": 2009,
            "Percentage": 90.86416793,
            "GL_ORDINAL": 975
          },
          {
            "Reference_area": "Angola",
            "Year": 2010,
            "Percentage": 91.03328849,
            "GL_ORDINAL": 976
          },
          {
            "Reference_area": "Angola",
            "Year": 2011,
            "Percentage": 90.08358846,
            "GL_ORDINAL": 977
          },
          {
            "Reference_area": "Angola",
            "Year": 2012,
            "Percentage": 88.21954591,
            "GL_ORDINAL": 978
          },
          {
            "Reference_area": "Angola",
            "Year": 2013,
            "Percentage": 90.36466922,
            "GL_ORDINAL": 979
          },
          {
            "Reference_area": "Angola",
            "Year": 2014,
            "Percentage": 89.39542335,
            "GL_ORDINAL": 980
          },
          {
            "Reference_area": "Angola",
            "Year": 2015,
            "Percentage": 89.44181194,
            "GL_ORDINAL": 981
          },
          {
            "Reference_area": "Angola",
            "Year": 2016,
            "Percentage": 79.56066871,
            "GL_ORDINAL": 982
          },
          {
            "Reference_area": "Angola",
            "Year": 2017,
            "Percentage": 88.06945709,
            "GL_ORDINAL": 983
          },
          {
            "Reference_area": "Angola",
            "Year": 2018,
            "Percentage": 91.07205712,
            "GL_ORDINAL": 984
          },
          {
            "Reference_area": "Angola",
            "Year": 2019,
            "Percentage": 88.81001095,
            "GL_ORDINAL": 985
          },
          {
            "Reference_area": "Angola",
            "Year": 2020,
            "Percentage": 91.59675246,
            "GL_ORDINAL": 986
          },
          {
            "Reference_area": "Angola",
            "Year": 2021,
            "Percentage": 92.87661062,
            "GL_ORDINAL": 987
          },
          {
            "Reference_area": "Angola",
            "Year": 2022,
            "Percentage": 91.40602754,
            "GL_ORDINAL": 988
          },
          {
            "Reference_area": "Andorra",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 989
          },
          {
            "Reference_area": "Andorra",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 990
          },
          {
            "Reference_area": "Andorra",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 991
          },
          {
            "Reference_area": "Andorra",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 992
          },
          {
            "Reference_area": "Andorra",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 993
          },
          {
            "Reference_area": "Andorra",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 994
          },
          {
            "Reference_area": "Andorra",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 995
          },
          {
            "Reference_area": "Andorra",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 996
          },
          {
            "Reference_area": "Andorra",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 997
          },
          {
            "Reference_area": "Andorra",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 998
          },
          {
            "Reference_area": "Andorra",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 999
          },
          {
            "Reference_area": "Andorra",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 1000
          },
          {
            "Reference_area": "Andorra",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 1001
          },
          {
            "Reference_area": "Andorra",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 1002
          },
          {
            "Reference_area": "Andorra",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 1003
          },
          {
            "Reference_area": "Andorra",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 1004
          },
          {
            "Reference_area": "Andorra",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1005
          },
          {
            "Reference_area": "Andorra",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 1006
          },
          {
            "Reference_area": "Andorra",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 1007
          },
          {
            "Reference_area": "Andorra",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 1008
          },
          {
            "Reference_area": "Andorra",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 1009
          },
          {
            "Reference_area": "Andorra",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 1010
          },
          {
            "Reference_area": "Andorra",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 1011
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 1012
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 1013
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 1014
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 1015
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 1016
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 1017
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1018
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 1019
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1020
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 1021
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 1022
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 1023
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 1024
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 1025
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 1026
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 1027
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1028
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 1029
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 1030
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 1031
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 1032
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 1033
          },
          {
            "Reference_area": "Anguilla",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 1034
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 1035
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 1036
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 1037
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 1038
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 1039
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 1040
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1041
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 1042
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1043
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 1044
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 1045
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 1046
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 1047
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 1048
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 1049
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 1050
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1051
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 1052
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 1053
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 1054
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 1055
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 1056
          },
          {
            "Reference_area": "Antigua and Barbuda",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 1057
          },
          {
            "Reference_area": "Argentina",
            "Year": 2000,
            "Percentage": 43.73498742,
            "GL_ORDINAL": 1058
          },
          {
            "Reference_area": "Argentina",
            "Year": 2001,
            "Percentage": 41.60740846,
            "GL_ORDINAL": 1059
          },
          {
            "Reference_area": "Argentina",
            "Year": 2002,
            "Percentage": 47.68136752,
            "GL_ORDINAL": 1060
          },
          {
            "Reference_area": "Argentina",
            "Year": 2003,
            "Percentage": 54.14534632,
            "GL_ORDINAL": 1061
          },
          {
            "Reference_area": "Argentina",
            "Year": 2004,
            "Percentage": 55.1808753,
            "GL_ORDINAL": 1062
          },
          {
            "Reference_area": "Argentina",
            "Year": 2005,
            "Percentage": 58.33036658,
            "GL_ORDINAL": 1063
          },
          {
            "Reference_area": "Argentina",
            "Year": 2006,
            "Percentage": 53.87766898,
            "GL_ORDINAL": 1064
          },
          {
            "Reference_area": "Argentina",
            "Year": 2007,
            "Percentage": 45.04005543,
            "GL_ORDINAL": 1065
          },
          {
            "Reference_area": "Argentina",
            "Year": 2008,
            "Percentage": 45.57891745,
            "GL_ORDINAL": 1066
          },
          {
            "Reference_area": "Argentina",
            "Year": 2009,
            "Percentage": 68.69323208,
            "GL_ORDINAL": 1067
          },
          {
            "Reference_area": "Argentina",
            "Year": 2010,
            "Percentage": 55.0426162,
            "GL_ORDINAL": 1068
          },
          {
            "Reference_area": "Argentina",
            "Year": 2011,
            "Percentage": 67.947841,
            "GL_ORDINAL": 1069
          },
          {
            "Reference_area": "Argentina",
            "Year": 2012,
            "Percentage": 66.30604097,
            "GL_ORDINAL": 1070
          },
          {
            "Reference_area": "Argentina",
            "Year": 2013,
            "Percentage": 65.26241688,
            "GL_ORDINAL": 1071
          },
          {
            "Reference_area": "Argentina",
            "Year": 2014,
            "Percentage": 55.45704908,
            "GL_ORDINAL": 1072
          },
          {
            "Reference_area": "Argentina",
            "Year": 2015,
            "Percentage": 34.120603,
            "GL_ORDINAL": 1073
          },
          {
            "Reference_area": "Argentina",
            "Year": 2016,
            "Percentage": 30.98369643,
            "GL_ORDINAL": 1074
          },
          {
            "Reference_area": "Argentina",
            "Year": 2017,
            "Percentage": 47.85218102,
            "GL_ORDINAL": 1075
          },
          {
            "Reference_area": "Argentina",
            "Year": 2018,
            "Percentage": 45.86304303,
            "GL_ORDINAL": 1076
          },
          {
            "Reference_area": "Argentina",
            "Year": 2019,
            "Percentage": 54.28553818,
            "GL_ORDINAL": 1077
          },
          {
            "Reference_area": "Argentina",
            "Year": 2020,
            "Percentage": 69.39034352,
            "GL_ORDINAL": 1078
          },
          {
            "Reference_area": "Argentina",
            "Year": 2021,
            "Percentage": 75.20355019,
            "GL_ORDINAL": 1079
          },
          {
            "Reference_area": "Argentina",
            "Year": 2022,
            "Percentage": 82.96424499,
            "GL_ORDINAL": 1080
          },
          {
            "Reference_area": "Armenia",
            "Year": 2000,
            "Percentage": 35.83197001,
            "GL_ORDINAL": 1081
          },
          {
            "Reference_area": "Armenia",
            "Year": 2001,
            "Percentage": 32.97553927,
            "GL_ORDINAL": 1082
          },
          {
            "Reference_area": "Armenia",
            "Year": 2002,
            "Percentage": 6.059081527,
            "GL_ORDINAL": 1083
          },
          {
            "Reference_area": "Armenia",
            "Year": 2003,
            "Percentage": 23.04130227,
            "GL_ORDINAL": 1084
          },
          {
            "Reference_area": "Armenia",
            "Year": 2004,
            "Percentage": 25.13774016,
            "GL_ORDINAL": 1085
          },
          {
            "Reference_area": "Armenia",
            "Year": 2005,
            "Percentage": 14.13341927,
            "GL_ORDINAL": 1086
          },
          {
            "Reference_area": "Armenia",
            "Year": 2006,
            "Percentage": 1.951886136,
            "GL_ORDINAL": 1087
          },
          {
            "Reference_area": "Armenia",
            "Year": 2007,
            "Percentage": 0.119783617,
            "GL_ORDINAL": 1088
          },
          {
            "Reference_area": "Armenia",
            "Year": 2008,
            "Percentage": 0.119689579,
            "GL_ORDINAL": 1089
          },
          {
            "Reference_area": "Armenia",
            "Year": 2009,
            "Percentage": 11.56995005,
            "GL_ORDINAL": 1090
          },
          {
            "Reference_area": "Armenia",
            "Year": 2010,
            "Percentage": 25.80242143,
            "GL_ORDINAL": 1091
          },
          {
            "Reference_area": "Armenia",
            "Year": 2011,
            "Percentage": 22.82954472,
            "GL_ORDINAL": 1092
          },
          {
            "Reference_area": "Armenia",
            "Year": 2012,
            "Percentage": 22.96449056,
            "GL_ORDINAL": 1093
          },
          {
            "Reference_area": "Armenia",
            "Year": 2013,
            "Percentage": 15.76860696,
            "GL_ORDINAL": 1094
          },
          {
            "Reference_area": "Armenia",
            "Year": 2014,
            "Percentage": 27.63139264,
            "GL_ORDINAL": 1095
          },
          {
            "Reference_area": "Armenia",
            "Year": 2015,
            "Percentage": 28.25678389,
            "GL_ORDINAL": 1096
          },
          {
            "Reference_area": "Armenia",
            "Year": 2016,
            "Percentage": 3.266075993,
            "GL_ORDINAL": 1097
          },
          {
            "Reference_area": "Armenia",
            "Year": 2017,
            "Percentage": 28.53618522,
            "GL_ORDINAL": 1098
          },
          {
            "Reference_area": "Armenia",
            "Year": 2018,
            "Percentage": 26.27742591,
            "GL_ORDINAL": 1099
          },
          {
            "Reference_area": "Armenia",
            "Year": 2019,
            "Percentage": 35.07034026,
            "GL_ORDINAL": 1100
          },
          {
            "Reference_area": "Armenia",
            "Year": 2020,
            "Percentage": 17.55903134,
            "GL_ORDINAL": 1101
          },
          {
            "Reference_area": "Armenia",
            "Year": 2021,
            "Percentage": 36.84659628,
            "GL_ORDINAL": 1102
          },
          {
            "Reference_area": "Armenia",
            "Year": 2022,
            "Percentage": 40.23811643,
            "GL_ORDINAL": 1103
          },
          {
            "Reference_area": "Aruba",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 1104
          },
          {
            "Reference_area": "Aruba",
            "Year": 2001,
            "Percentage": 72.8,
            "GL_ORDINAL": 1105
          },
          {
            "Reference_area": "Aruba",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 1106
          },
          {
            "Reference_area": "Aruba",
            "Year": 2003,
            "Percentage": 72.8,
            "GL_ORDINAL": 1107
          },
          {
            "Reference_area": "Aruba",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 1108
          },
          {
            "Reference_area": "Aruba",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 1109
          },
          {
            "Reference_area": "Aruba",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1110
          },
          {
            "Reference_area": "Aruba",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 1111
          },
          {
            "Reference_area": "Aruba",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1112
          },
          {
            "Reference_area": "Aruba",
            "Year": 2009,
            "Percentage": 27.2,
            "GL_ORDINAL": 1113
          },
          {
            "Reference_area": "Aruba",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 1114
          },
          {
            "Reference_area": "Aruba",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 1115
          },
          {
            "Reference_area": "Aruba",
            "Year": 2012,
            "Percentage": 27.2,
            "GL_ORDINAL": 1116
          },
          {
            "Reference_area": "Aruba",
            "Year": 2013,
            "Percentage": 27.2,
            "GL_ORDINAL": 1117
          },
          {
            "Reference_area": "Aruba",
            "Year": 2014,
            "Percentage": 27.2,
            "GL_ORDINAL": 1118
          },
          {
            "Reference_area": "Aruba",
            "Year": 2015,
            "Percentage": 34,
            "GL_ORDINAL": 1119
          },
          {
            "Reference_area": "Aruba",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1120
          },
          {
            "Reference_area": "Aruba",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 1121
          },
          {
            "Reference_area": "Aruba",
            "Year": 2018,
            "Percentage": 68,
            "GL_ORDINAL": 1122
          },
          {
            "Reference_area": "Aruba",
            "Year": 2019,
            "Percentage": 68,
            "GL_ORDINAL": 1123
          },
          {
            "Reference_area": "Aruba",
            "Year": 2020,
            "Percentage": 68,
            "GL_ORDINAL": 1124
          },
          {
            "Reference_area": "Aruba",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 1125
          },
          {
            "Reference_area": "Aruba",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 1126
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2000,
            "Percentage": 62.14360102,
            "GL_ORDINAL": 1127
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2001,
            "Percentage": 39.0388587,
            "GL_ORDINAL": 1128
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2002,
            "Percentage": 21.55319726,
            "GL_ORDINAL": 1129
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2003,
            "Percentage": 29.13052723,
            "GL_ORDINAL": 1130
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2004,
            "Percentage": 34.57491366,
            "GL_ORDINAL": 1131
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2005,
            "Percentage": 23.97725594,
            "GL_ORDINAL": 1132
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2006,
            "Percentage": 16.37209646,
            "GL_ORDINAL": 1133
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2007,
            "Percentage": 2.830355433,
            "GL_ORDINAL": 1134
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2008,
            "Percentage": 3.355507369,
            "GL_ORDINAL": 1135
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2009,
            "Percentage": 37.26537408,
            "GL_ORDINAL": 1136
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2010,
            "Percentage": 54.51960712,
            "GL_ORDINAL": 1137
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2011,
            "Percentage": 34.99963026,
            "GL_ORDINAL": 1138
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2012,
            "Percentage": 33.89409206,
            "GL_ORDINAL": 1139
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2013,
            "Percentage": 13.73301962,
            "GL_ORDINAL": 1140
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2014,
            "Percentage": 46.88421597,
            "GL_ORDINAL": 1141
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2015,
            "Percentage": 35.96549583,
            "GL_ORDINAL": 1142
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2016,
            "Percentage": 4.985043478,
            "GL_ORDINAL": 1143
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2017,
            "Percentage": 55.04513318,
            "GL_ORDINAL": 1144
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2018,
            "Percentage": 43.04404529,
            "GL_ORDINAL": 1145
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2019,
            "Percentage": 50.79403272,
            "GL_ORDINAL": 1146
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2020,
            "Percentage": 34.75584228,
            "GL_ORDINAL": 1147
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2021,
            "Percentage": 67.69294974,
            "GL_ORDINAL": 1148
          },
          {
            "Reference_area": "Azerbaijan",
            "Year": 2022,
            "Percentage": 55.8853932,
            "GL_ORDINAL": 1149
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 1150
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 1151
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2002,
            "Percentage": 1.876791326,
            "GL_ORDINAL": 1152
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 1153
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2004,
            "Percentage": 39.56993262,
            "GL_ORDINAL": 1154
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 1155
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1156
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 1157
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1158
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 1159
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 1160
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 1161
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 1162
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 1163
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 1164
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2015,
            "Percentage": 0.400361833,
            "GL_ORDINAL": 1165
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1166
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 1167
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 1168
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 1169
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 1170
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 1171
          },
          {
            "Reference_area": "Bahamas",
            "Year": 2022,
            "Percentage": 4.658792222,
            "GL_ORDINAL": 1172
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2000,
            "Percentage": 33.33333333,
            "GL_ORDINAL": 1173
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2001,
            "Percentage": 50,
            "GL_ORDINAL": 1174
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2002,
            "Percentage": 50,
            "GL_ORDINAL": 1175
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2003,
            "Percentage": 45.45454545,
            "GL_ORDINAL": 1176
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2004,
            "Percentage": 45.45454545,
            "GL_ORDINAL": 1177
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2005,
            "Percentage": 45.45454545,
            "GL_ORDINAL": 1178
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2006,
            "Percentage": 45.45454545,
            "GL_ORDINAL": 1179
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2007,
            "Percentage": 45.45454545,
            "GL_ORDINAL": 1180
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2008,
            "Percentage": 45.45454545,
            "GL_ORDINAL": 1181
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2009,
            "Percentage": 45.45454545,
            "GL_ORDINAL": 1182
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2010,
            "Percentage": 45.45454545,
            "GL_ORDINAL": 1183
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2011,
            "Percentage": 45.45454545,
            "GL_ORDINAL": 1184
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2012,
            "Percentage": 36.36363636,
            "GL_ORDINAL": 1185
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2013,
            "Percentage": 36.36363636,
            "GL_ORDINAL": 1186
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2014,
            "Percentage": 36.36363636,
            "GL_ORDINAL": 1187
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2015,
            "Percentage": 36.36363636,
            "GL_ORDINAL": 1188
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1189
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2017,
            "Percentage": 36.36363636,
            "GL_ORDINAL": 1190
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2018,
            "Percentage": 36.36363636,
            "GL_ORDINAL": 1191
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2019,
            "Percentage": 36.36363636,
            "GL_ORDINAL": 1192
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2020,
            "Percentage": 50,
            "GL_ORDINAL": 1193
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2021,
            "Percentage": 79.99235383,
            "GL_ORDINAL": 1194
          },
          {
            "Reference_area": "Bahrain",
            "Year": 2022,
            "Percentage": 79.99235383,
            "GL_ORDINAL": 1195
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 1196
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 1197
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 1198
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 1199
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 1200
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 1201
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1202
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 1203
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1204
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 1205
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 1206
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 1207
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 1208
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 1209
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 1210
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 1211
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1212
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 1213
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 1214
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 1215
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 1216
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 1217
          },
          {
            "Reference_area": "Bailiwick of Guernsey",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 1218
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2000,
            "Percentage": 58.85745123,
            "GL_ORDINAL": 1219
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2001,
            "Percentage": 66.76333558,
            "GL_ORDINAL": 1220
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2002,
            "Percentage": 77.19906606,
            "GL_ORDINAL": 1221
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2003,
            "Percentage": 66.88959841,
            "GL_ORDINAL": 1222
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2004,
            "Percentage": 67.91454209,
            "GL_ORDINAL": 1223
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2005,
            "Percentage": 72.47557207,
            "GL_ORDINAL": 1224
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2006,
            "Percentage": 50.66224958,
            "GL_ORDINAL": 1225
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2007,
            "Percentage": 29.68435614,
            "GL_ORDINAL": 1226
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2008,
            "Percentage": 32.84107069,
            "GL_ORDINAL": 1227
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2009,
            "Percentage": 81.52984135,
            "GL_ORDINAL": 1228
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2010,
            "Percentage": 80.40260509,
            "GL_ORDINAL": 1229
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2011,
            "Percentage": 80.50138759,
            "GL_ORDINAL": 1230
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2012,
            "Percentage": 72.13206491,
            "GL_ORDINAL": 1231
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2013,
            "Percentage": 69.04414022,
            "GL_ORDINAL": 1232
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2014,
            "Percentage": 78.97290269,
            "GL_ORDINAL": 1233
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2015,
            "Percentage": 66.08413485,
            "GL_ORDINAL": 1234
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2016,
            "Percentage": 10.26466576,
            "GL_ORDINAL": 1235
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2017,
            "Percentage": 37.28240428,
            "GL_ORDINAL": 1236
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2018,
            "Percentage": 51.81160069,
            "GL_ORDINAL": 1237
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2019,
            "Percentage": 35.40575121,
            "GL_ORDINAL": 1238
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2020,
            "Percentage": 80.01201889,
            "GL_ORDINAL": 1239
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2021,
            "Percentage": 90.02203,
            "GL_ORDINAL": 1240
          },
          {
            "Reference_area": "Bangladesh",
            "Year": 2022,
            "Percentage": 53.8809911,
            "GL_ORDINAL": 1241
          },
          {
            "Reference_area": "Barbados",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 1242
          },
          {
            "Reference_area": "Barbados",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 1243
          },
          {
            "Reference_area": "Barbados",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 1244
          },
          {
            "Reference_area": "Barbados",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 1245
          },
          {
            "Reference_area": "Barbados",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 1246
          },
          {
            "Reference_area": "Barbados",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 1247
          },
          {
            "Reference_area": "Barbados",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1248
          },
          {
            "Reference_area": "Barbados",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 1249
          },
          {
            "Reference_area": "Barbados",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1250
          },
          {
            "Reference_area": "Barbados",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 1251
          },
          {
            "Reference_area": "Barbados",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 1252
          },
          {
            "Reference_area": "Barbados",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 1253
          },
          {
            "Reference_area": "Barbados",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 1254
          },
          {
            "Reference_area": "Barbados",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 1255
          },
          {
            "Reference_area": "Barbados",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 1256
          },
          {
            "Reference_area": "Barbados",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 1257
          },
          {
            "Reference_area": "Barbados",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1258
          },
          {
            "Reference_area": "Barbados",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 1259
          },
          {
            "Reference_area": "Barbados",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 1260
          },
          {
            "Reference_area": "Barbados",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 1261
          },
          {
            "Reference_area": "Barbados",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 1262
          },
          {
            "Reference_area": "Barbados",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 1263
          },
          {
            "Reference_area": "Barbados",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 1264
          },
          {
            "Reference_area": "Belarus",
            "Year": 2000,
            "Percentage": 10.12242709,
            "GL_ORDINAL": 1265
          },
          {
            "Reference_area": "Belarus",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 1266
          },
          {
            "Reference_area": "Belarus",
            "Year": 2002,
            "Percentage": 22.02650602,
            "GL_ORDINAL": 1267
          },
          {
            "Reference_area": "Belarus",
            "Year": 2003,
            "Percentage": 2.660688226,
            "GL_ORDINAL": 1268
          },
          {
            "Reference_area": "Belarus",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 1269
          },
          {
            "Reference_area": "Belarus",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 1270
          },
          {
            "Reference_area": "Belarus",
            "Year": 2006,
            "Percentage": 2.834750811,
            "GL_ORDINAL": 1271
          },
          {
            "Reference_area": "Belarus",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 1272
          },
          {
            "Reference_area": "Belarus",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1273
          },
          {
            "Reference_area": "Belarus",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 1274
          },
          {
            "Reference_area": "Belarus",
            "Year": 2010,
            "Percentage": 3.61603925,
            "GL_ORDINAL": 1275
          },
          {
            "Reference_area": "Belarus",
            "Year": 2011,
            "Percentage": 0.005514712,
            "GL_ORDINAL": 1276
          },
          {
            "Reference_area": "Belarus",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 1277
          },
          {
            "Reference_area": "Belarus",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 1278
          },
          {
            "Reference_area": "Belarus",
            "Year": 2014,
            "Percentage": 8.353066036,
            "GL_ORDINAL": 1279
          },
          {
            "Reference_area": "Belarus",
            "Year": 2015,
            "Percentage": 20.48187067,
            "GL_ORDINAL": 1280
          },
          {
            "Reference_area": "Belarus",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1281
          },
          {
            "Reference_area": "Belarus",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 1282
          },
          {
            "Reference_area": "Belarus",
            "Year": 2018,
            "Percentage": 4.037258669,
            "GL_ORDINAL": 1283
          },
          {
            "Reference_area": "Belarus",
            "Year": 2019,
            "Percentage": 7.453357142,
            "GL_ORDINAL": 1284
          },
          {
            "Reference_area": "Belarus",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 1285
          },
          {
            "Reference_area": "Belarus",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 1286
          },
          {
            "Reference_area": "Belarus",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 1287
          },
          {
            "Reference_area": "Belize",
            "Year": 2000,
            "Percentage": 48.74164738,
            "GL_ORDINAL": 1288
          },
          {
            "Reference_area": "Belize",
            "Year": 2001,
            "Percentage": 41.90800534,
            "GL_ORDINAL": 1289
          },
          {
            "Reference_area": "Belize",
            "Year": 2002,
            "Percentage": 51.41290521,
            "GL_ORDINAL": 1290
          },
          {
            "Reference_area": "Belize",
            "Year": 2003,
            "Percentage": 56.77924833,
            "GL_ORDINAL": 1291
          },
          {
            "Reference_area": "Belize",
            "Year": 2004,
            "Percentage": 15.02680784,
            "GL_ORDINAL": 1292
          },
          {
            "Reference_area": "Belize",
            "Year": 2005,
            "Percentage": 48.97360575,
            "GL_ORDINAL": 1293
          },
          {
            "Reference_area": "Belize",
            "Year": 2006,
            "Percentage": 5.067616407,
            "GL_ORDINAL": 1294
          },
          {
            "Reference_area": "Belize",
            "Year": 2007,
            "Percentage": 1.467118358,
            "GL_ORDINAL": 1295
          },
          {
            "Reference_area": "Belize",
            "Year": 2008,
            "Percentage": 6.566913115,
            "GL_ORDINAL": 1296
          },
          {
            "Reference_area": "Belize",
            "Year": 2009,
            "Percentage": 49.70172352,
            "GL_ORDINAL": 1297
          },
          {
            "Reference_area": "Belize",
            "Year": 2010,
            "Percentage": 49.30015346,
            "GL_ORDINAL": 1298
          },
          {
            "Reference_area": "Belize",
            "Year": 2011,
            "Percentage": 52.43676825,
            "GL_ORDINAL": 1299
          },
          {
            "Reference_area": "Belize",
            "Year": 2012,
            "Percentage": 34.91712756,
            "GL_ORDINAL": 1300
          },
          {
            "Reference_area": "Belize",
            "Year": 2013,
            "Percentage": 45.86901438,
            "GL_ORDINAL": 1301
          },
          {
            "Reference_area": "Belize",
            "Year": 2014,
            "Percentage": 20.88944035,
            "GL_ORDINAL": 1302
          },
          {
            "Reference_area": "Belize",
            "Year": 2015,
            "Percentage": 16.39552062,
            "GL_ORDINAL": 1303
          },
          {
            "Reference_area": "Belize",
            "Year": 2016,
            "Percentage": 9.358152281,
            "GL_ORDINAL": 1304
          },
          {
            "Reference_area": "Belize",
            "Year": 2017,
            "Percentage": 36.04372634,
            "GL_ORDINAL": 1305
          },
          {
            "Reference_area": "Belize",
            "Year": 2018,
            "Percentage": 6.924953829,
            "GL_ORDINAL": 1306
          },
          {
            "Reference_area": "Belize",
            "Year": 2019,
            "Percentage": 35.75329626,
            "GL_ORDINAL": 1307
          },
          {
            "Reference_area": "Belize",
            "Year": 2020,
            "Percentage": 81.39274458,
            "GL_ORDINAL": 1308
          },
          {
            "Reference_area": "Belize",
            "Year": 2021,
            "Percentage": 24.53561518,
            "GL_ORDINAL": 1309
          },
          {
            "Reference_area": "Belize",
            "Year": 2022,
            "Percentage": 15.85625548,
            "GL_ORDINAL": 1310
          },
          {
            "Reference_area": "Benin",
            "Year": 2000,
            "Percentage": 90.60990508,
            "GL_ORDINAL": 1311
          },
          {
            "Reference_area": "Benin",
            "Year": 2001,
            "Percentage": 91.30785774,
            "GL_ORDINAL": 1312
          },
          {
            "Reference_area": "Benin",
            "Year": 2002,
            "Percentage": 90.72104132,
            "GL_ORDINAL": 1313
          },
          {
            "Reference_area": "Benin",
            "Year": 2003,
            "Percentage": 84.13373899,
            "GL_ORDINAL": 1314
          },
          {
            "Reference_area": "Benin",
            "Year": 2004,
            "Percentage": 90.74436508,
            "GL_ORDINAL": 1315
          },
          {
            "Reference_area": "Benin",
            "Year": 2005,
            "Percentage": 91.23333578,
            "GL_ORDINAL": 1316
          },
          {
            "Reference_area": "Benin",
            "Year": 2006,
            "Percentage": 90.15231444,
            "GL_ORDINAL": 1317
          },
          {
            "Reference_area": "Benin",
            "Year": 2007,
            "Percentage": 90.52217581,
            "GL_ORDINAL": 1318
          },
          {
            "Reference_area": "Benin",
            "Year": 2008,
            "Percentage": 90.53759096,
            "GL_ORDINAL": 1319
          },
          {
            "Reference_area": "Benin",
            "Year": 2009,
            "Percentage": 91.30138339,
            "GL_ORDINAL": 1320
          },
          {
            "Reference_area": "Benin",
            "Year": 2010,
            "Percentage": 90.45686608,
            "GL_ORDINAL": 1321
          },
          {
            "Reference_area": "Benin",
            "Year": 2011,
            "Percentage": 90.85880399,
            "GL_ORDINAL": 1322
          },
          {
            "Reference_area": "Benin",
            "Year": 2012,
            "Percentage": 92.16333115,
            "GL_ORDINAL": 1323
          },
          {
            "Reference_area": "Benin",
            "Year": 2013,
            "Percentage": 91.30234184,
            "GL_ORDINAL": 1324
          },
          {
            "Reference_area": "Benin",
            "Year": 2014,
            "Percentage": 90.38100595,
            "GL_ORDINAL": 1325
          },
          {
            "Reference_area": "Benin",
            "Year": 2015,
            "Percentage": 92.30883341,
            "GL_ORDINAL": 1326
          },
          {
            "Reference_area": "Benin",
            "Year": 2016,
            "Percentage": 57.07363012,
            "GL_ORDINAL": 1327
          },
          {
            "Reference_area": "Benin",
            "Year": 2017,
            "Percentage": 91.21708833,
            "GL_ORDINAL": 1328
          },
          {
            "Reference_area": "Benin",
            "Year": 2018,
            "Percentage": 90.98173406,
            "GL_ORDINAL": 1329
          },
          {
            "Reference_area": "Benin",
            "Year": 2019,
            "Percentage": 89.53729846,
            "GL_ORDINAL": 1330
          },
          {
            "Reference_area": "Benin",
            "Year": 2020,
            "Percentage": 91.74673542,
            "GL_ORDINAL": 1331
          },
          {
            "Reference_area": "Benin",
            "Year": 2021,
            "Percentage": 99.57190762,
            "GL_ORDINAL": 1332
          },
          {
            "Reference_area": "Benin",
            "Year": 2022,
            "Percentage": 99.82179407,
            "GL_ORDINAL": 1333
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 1334
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 1335
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 1336
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 1337
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 1338
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 1339
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1340
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 1341
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1342
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 1343
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 1344
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 1345
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 1346
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 1347
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 1348
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 1349
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1350
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 1351
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 1352
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 1353
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 1354
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 1355
          },
          {
            "Reference_area": "Bermuda",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 1356
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2000,
            "Percentage": 12.61470748,
            "GL_ORDINAL": 1357
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2001,
            "Percentage": 9.078291457,
            "GL_ORDINAL": 1358
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2002,
            "Percentage": 3.229267133,
            "GL_ORDINAL": 1359
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 1360
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2004,
            "Percentage": 0.201715104,
            "GL_ORDINAL": 1361
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 1362
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1363
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 1364
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1365
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2009,
            "Percentage": 1.392086482,
            "GL_ORDINAL": 1366
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2010,
            "Percentage": 13.53422393,
            "GL_ORDINAL": 1367
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2011,
            "Percentage": 0.270079481,
            "GL_ORDINAL": 1368
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2012,
            "Percentage": 3.733525105,
            "GL_ORDINAL": 1369
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2013,
            "Percentage": 2.639031623,
            "GL_ORDINAL": 1370
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2014,
            "Percentage": 4.488532212,
            "GL_ORDINAL": 1371
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2015,
            "Percentage": 0.066942281,
            "GL_ORDINAL": 1372
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1373
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 1374
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 1375
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 1376
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2020,
            "Percentage": 0.273972603,
            "GL_ORDINAL": 1377
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2021,
            "Percentage": 0.315042765,
            "GL_ORDINAL": 1378
          },
          {
            "Reference_area": "Bhutan",
            "Year": 2022,
            "Percentage": 0.024743403,
            "GL_ORDINAL": 1379
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2000,
            "Percentage": 25.4094632,
            "GL_ORDINAL": 1380
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2001,
            "Percentage": 33.99195129,
            "GL_ORDINAL": 1381
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2002,
            "Percentage": 29.94765839,
            "GL_ORDINAL": 1382
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2003,
            "Percentage": 32.99499959,
            "GL_ORDINAL": 1383
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2004,
            "Percentage": 38.73803141,
            "GL_ORDINAL": 1384
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2005,
            "Percentage": 54.11483862,
            "GL_ORDINAL": 1385
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2006,
            "Percentage": 36.02010685,
            "GL_ORDINAL": 1386
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2007,
            "Percentage": 33.65926969,
            "GL_ORDINAL": 1387
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2008,
            "Percentage": 23.98216045,
            "GL_ORDINAL": 1388
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2009,
            "Percentage": 30.06262301,
            "GL_ORDINAL": 1389
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2010,
            "Percentage": 80.84472223,
            "GL_ORDINAL": 1390
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2011,
            "Percentage": 53.25714408,
            "GL_ORDINAL": 1391
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2012,
            "Percentage": 60.15486303,
            "GL_ORDINAL": 1392
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2013,
            "Percentage": 29.50681604,
            "GL_ORDINAL": 1393
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2014,
            "Percentage": 30.01531785,
            "GL_ORDINAL": 1394
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2015,
            "Percentage": 38.1180638,
            "GL_ORDINAL": 1395
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2016,
            "Percentage": 42.33136246,
            "GL_ORDINAL": 1396
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2017,
            "Percentage": 44.03518419,
            "GL_ORDINAL": 1397
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2018,
            "Percentage": 28.23554764,
            "GL_ORDINAL": 1398
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2019,
            "Percentage": 53.98901973,
            "GL_ORDINAL": 1399
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2020,
            "Percentage": 69.66855946,
            "GL_ORDINAL": 1400
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2021,
            "Percentage": 83.74176245,
            "GL_ORDINAL": 1401
          },
          {
            "Reference_area": "Bolivia",
            "Year": 2022,
            "Percentage": 58.33792718,
            "GL_ORDINAL": 1402
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2000,
            "Percentage": 6.824570051,
            "GL_ORDINAL": 1403
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2001,
            "Percentage": 3.882817888,
            "GL_ORDINAL": 1404
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 1405
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2003,
            "Percentage": 8.862764871,
            "GL_ORDINAL": 1406
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2004,
            "Percentage": 3.77463845,
            "GL_ORDINAL": 1407
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2005,
            "Percentage": 2.017415775,
            "GL_ORDINAL": 1408
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1409
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2007,
            "Percentage": 10.87144887,
            "GL_ORDINAL": 1410
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1411
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 1412
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2010,
            "Percentage": 2.088626933,
            "GL_ORDINAL": 1413
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2011,
            "Percentage": 3.120069381,
            "GL_ORDINAL": 1414
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2012,
            "Percentage": 81.1735462,
            "GL_ORDINAL": 1415
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2013,
            "Percentage": 4.208927997,
            "GL_ORDINAL": 1416
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 1417
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2015,
            "Percentage": 6.60050003,
            "GL_ORDINAL": 1418
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1419
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2017,
            "Percentage": 10.54476722,
            "GL_ORDINAL": 1420
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 1421
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 1422
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 1423
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2021,
            "Percentage": 17.92231381,
            "GL_ORDINAL": 1424
          },
          {
            "Reference_area": "Bosnia and Herzegovina",
            "Year": 2022,
            "Percentage": 5.254600962,
            "GL_ORDINAL": 1425
          },
          {
            "Reference_area": "Botswana",
            "Year": 2000,
            "Percentage": 87.38266283,
            "GL_ORDINAL": 1426
          },
          {
            "Reference_area": "Botswana",
            "Year": 2001,
            "Percentage": 87.53506081,
            "GL_ORDINAL": 1427
          },
          {
            "Reference_area": "Botswana",
            "Year": 2002,
            "Percentage": 87.60753172,
            "GL_ORDINAL": 1428
          },
          {
            "Reference_area": "Botswana",
            "Year": 2003,
            "Percentage": 87.69523867,
            "GL_ORDINAL": 1429
          },
          {
            "Reference_area": "Botswana",
            "Year": 2004,
            "Percentage": 87.8671832,
            "GL_ORDINAL": 1430
          },
          {
            "Reference_area": "Botswana",
            "Year": 2005,
            "Percentage": 87.94116969,
            "GL_ORDINAL": 1431
          },
          {
            "Reference_area": "Botswana",
            "Year": 2006,
            "Percentage": 86.56223523,
            "GL_ORDINAL": 1432
          },
          {
            "Reference_area": "Botswana",
            "Year": 2007,
            "Percentage": 87.86910839,
            "GL_ORDINAL": 1433
          },
          {
            "Reference_area": "Botswana",
            "Year": 2008,
            "Percentage": 88.07937042,
            "GL_ORDINAL": 1434
          },
          {
            "Reference_area": "Botswana",
            "Year": 2009,
            "Percentage": 88.15810939,
            "GL_ORDINAL": 1435
          },
          {
            "Reference_area": "Botswana",
            "Year": 2010,
            "Percentage": 88.19090324,
            "GL_ORDINAL": 1436
          },
          {
            "Reference_area": "Botswana",
            "Year": 2011,
            "Percentage": 88.24148698,
            "GL_ORDINAL": 1437
          },
          {
            "Reference_area": "Botswana",
            "Year": 2012,
            "Percentage": 88.12336758,
            "GL_ORDINAL": 1438
          },
          {
            "Reference_area": "Botswana",
            "Year": 2013,
            "Percentage": 88.15973009,
            "GL_ORDINAL": 1439
          },
          {
            "Reference_area": "Botswana",
            "Year": 2014,
            "Percentage": 88.17774382,
            "GL_ORDINAL": 1440
          },
          {
            "Reference_area": "Botswana",
            "Year": 2015,
            "Percentage": 88.18398823,
            "GL_ORDINAL": 1441
          },
          {
            "Reference_area": "Botswana",
            "Year": 2016,
            "Percentage": 30.83207188,
            "GL_ORDINAL": 1442
          },
          {
            "Reference_area": "Botswana",
            "Year": 2017,
            "Percentage": 88.17952408,
            "GL_ORDINAL": 1443
          },
          {
            "Reference_area": "Botswana",
            "Year": 2018,
            "Percentage": 88.200547,
            "GL_ORDINAL": 1444
          },
          {
            "Reference_area": "Botswana",
            "Year": 2019,
            "Percentage": 88.28785433,
            "GL_ORDINAL": 1445
          },
          {
            "Reference_area": "Botswana",
            "Year": 2020,
            "Percentage": 88.30420167,
            "GL_ORDINAL": 1446
          },
          {
            "Reference_area": "Botswana",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 1447
          },
          {
            "Reference_area": "Botswana",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 1448
          },
          {
            "Reference_area": "Brazil",
            "Year": 2000,
            "Percentage": 19.72520943,
            "GL_ORDINAL": 1449
          },
          {
            "Reference_area": "Brazil",
            "Year": 2001,
            "Percentage": 34.31281951,
            "GL_ORDINAL": 1450
          },
          {
            "Reference_area": "Brazil",
            "Year": 2002,
            "Percentage": 33.78287535,
            "GL_ORDINAL": 1451
          },
          {
            "Reference_area": "Brazil",
            "Year": 2003,
            "Percentage": 32.40164436,
            "GL_ORDINAL": 1452
          },
          {
            "Reference_area": "Brazil",
            "Year": 2004,
            "Percentage": 35.27600729,
            "GL_ORDINAL": 1453
          },
          {
            "Reference_area": "Brazil",
            "Year": 2005,
            "Percentage": 44.56100976,
            "GL_ORDINAL": 1454
          },
          {
            "Reference_area": "Brazil",
            "Year": 2006,
            "Percentage": 30.76057478,
            "GL_ORDINAL": 1455
          },
          {
            "Reference_area": "Brazil",
            "Year": 2007,
            "Percentage": 30.99064305,
            "GL_ORDINAL": 1456
          },
          {
            "Reference_area": "Brazil",
            "Year": 2008,
            "Percentage": 31.35373621,
            "GL_ORDINAL": 1457
          },
          {
            "Reference_area": "Brazil",
            "Year": 2009,
            "Percentage": 41.49652364,
            "GL_ORDINAL": 1458
          },
          {
            "Reference_area": "Brazil",
            "Year": 2010,
            "Percentage": 46.00045392,
            "GL_ORDINAL": 1459
          },
          {
            "Reference_area": "Brazil",
            "Year": 2011,
            "Percentage": 42.06381833,
            "GL_ORDINAL": 1460
          },
          {
            "Reference_area": "Brazil",
            "Year": 2012,
            "Percentage": 48.60746815,
            "GL_ORDINAL": 1461
          },
          {
            "Reference_area": "Brazil",
            "Year": 2013,
            "Percentage": 31.73515428,
            "GL_ORDINAL": 1462
          },
          {
            "Reference_area": "Brazil",
            "Year": 2014,
            "Percentage": 42.95494747,
            "GL_ORDINAL": 1463
          },
          {
            "Reference_area": "Brazil",
            "Year": 2015,
            "Percentage": 54.47868758,
            "GL_ORDINAL": 1464
          },
          {
            "Reference_area": "Brazil",
            "Year": 2016,
            "Percentage": 34.33080965,
            "GL_ORDINAL": 1465
          },
          {
            "Reference_area": "Brazil",
            "Year": 2017,
            "Percentage": 49.40839438,
            "GL_ORDINAL": 1466
          },
          {
            "Reference_area": "Brazil",
            "Year": 2018,
            "Percentage": 36.34871404,
            "GL_ORDINAL": 1467
          },
          {
            "Reference_area": "Brazil",
            "Year": 2019,
            "Percentage": 45.74700178,
            "GL_ORDINAL": 1468
          },
          {
            "Reference_area": "Brazil",
            "Year": 2020,
            "Percentage": 47.98630071,
            "GL_ORDINAL": 1469
          },
          {
            "Reference_area": "Brazil",
            "Year": 2021,
            "Percentage": 44.44627915,
            "GL_ORDINAL": 1470
          },
          {
            "Reference_area": "Brazil",
            "Year": 2022,
            "Percentage": 36.80604673,
            "GL_ORDINAL": 1471
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 1472
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 1473
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 1474
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 1475
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 1476
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 1477
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1478
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 1479
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1480
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 1481
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 1482
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 1483
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 1484
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 1485
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 1486
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 1487
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1488
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 1489
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 1490
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 1491
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 1492
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 1493
          },
          {
            "Reference_area": "British Virgin Islands",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 1494
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 1495
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 1496
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 1497
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 1498
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 1499
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 1500
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1501
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 1502
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1503
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 1504
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 1505
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 1506
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 1507
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 1508
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 1509
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 1510
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1511
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 1512
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 1513
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 1514
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 1515
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 1516
          },
          {
            "Reference_area": "Brunei Darussalam",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 1517
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2000,
            "Percentage": 55.79674817,
            "GL_ORDINAL": 1518
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2001,
            "Percentage": 24.17032863,
            "GL_ORDINAL": 1519
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2002,
            "Percentage": 8.001518256,
            "GL_ORDINAL": 1520
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2003,
            "Percentage": 10.61138002,
            "GL_ORDINAL": 1521
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2004,
            "Percentage": 0.385576365,
            "GL_ORDINAL": 1522
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2005,
            "Percentage": 0.383697263,
            "GL_ORDINAL": 1523
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2006,
            "Percentage": 0.025546023,
            "GL_ORDINAL": 1524
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2007,
            "Percentage": 17.95103422,
            "GL_ORDINAL": 1525
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2008,
            "Percentage": 3.526987718,
            "GL_ORDINAL": 1526
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2009,
            "Percentage": 6.859886592,
            "GL_ORDINAL": 1527
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2010,
            "Percentage": 0.840969937,
            "GL_ORDINAL": 1528
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2011,
            "Percentage": 8.656552006,
            "GL_ORDINAL": 1529
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2012,
            "Percentage": 51.17706502,
            "GL_ORDINAL": 1530
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2013,
            "Percentage": 20.26679067,
            "GL_ORDINAL": 1531
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2014,
            "Percentage": 0.370266694,
            "GL_ORDINAL": 1532
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2015,
            "Percentage": 28.15757759,
            "GL_ORDINAL": 1533
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2016,
            "Percentage": 9.339456497,
            "GL_ORDINAL": 1534
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2017,
            "Percentage": 17.17959856,
            "GL_ORDINAL": 1535
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2018,
            "Percentage": 7.706901838,
            "GL_ORDINAL": 1536
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2019,
            "Percentage": 18.84534617,
            "GL_ORDINAL": 1537
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2020,
            "Percentage": 37.85815792,
            "GL_ORDINAL": 1538
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2021,
            "Percentage": 23.21771623,
            "GL_ORDINAL": 1539
          },
          {
            "Reference_area": "Bulgaria",
            "Year": 2022,
            "Percentage": 37.2936289,
            "GL_ORDINAL": 1540
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2000,
            "Percentage": 82.07847904,
            "GL_ORDINAL": 1541
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2001,
            "Percentage": 82.51471023,
            "GL_ORDINAL": 1542
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2002,
            "Percentage": 82.68701668,
            "GL_ORDINAL": 1543
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2003,
            "Percentage": 82.71938654,
            "GL_ORDINAL": 1544
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2004,
            "Percentage": 82.73777918,
            "GL_ORDINAL": 1545
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2005,
            "Percentage": 82.76831375,
            "GL_ORDINAL": 1546
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2006,
            "Percentage": 82.7737111,
            "GL_ORDINAL": 1547
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2007,
            "Percentage": 82.78850163,
            "GL_ORDINAL": 1548
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2008,
            "Percentage": 82.80689523,
            "GL_ORDINAL": 1549
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2009,
            "Percentage": 82.8674896,
            "GL_ORDINAL": 1550
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2010,
            "Percentage": 82.88139009,
            "GL_ORDINAL": 1551
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2011,
            "Percentage": 82.90557225,
            "GL_ORDINAL": 1552
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2012,
            "Percentage": 83.91243222,
            "GL_ORDINAL": 1553
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2013,
            "Percentage": 83.9406478,
            "GL_ORDINAL": 1554
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2014,
            "Percentage": 83.95632598,
            "GL_ORDINAL": 1555
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2015,
            "Percentage": 83.95707727,
            "GL_ORDINAL": 1556
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2016,
            "Percentage": 22.55946237,
            "GL_ORDINAL": 1557
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2017,
            "Percentage": 84.00370714,
            "GL_ORDINAL": 1558
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2018,
            "Percentage": 83.57597947,
            "GL_ORDINAL": 1559
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2019,
            "Percentage": 83.47162206,
            "GL_ORDINAL": 1560
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2020,
            "Percentage": 83.45769799,
            "GL_ORDINAL": 1561
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 1562
          },
          {
            "Reference_area": "Burkina Faso",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 1563
          },
          {
            "Reference_area": "Burundi",
            "Year": 2000,
            "Percentage": 77.50049083,
            "GL_ORDINAL": 1564
          },
          {
            "Reference_area": "Burundi",
            "Year": 2001,
            "Percentage": 70.66912482,
            "GL_ORDINAL": 1565
          },
          {
            "Reference_area": "Burundi",
            "Year": 2002,
            "Percentage": 78.62566033,
            "GL_ORDINAL": 1566
          },
          {
            "Reference_area": "Burundi",
            "Year": 2003,
            "Percentage": 78.67171311,
            "GL_ORDINAL": 1567
          },
          {
            "Reference_area": "Burundi",
            "Year": 2004,
            "Percentage": 76.12377647,
            "GL_ORDINAL": 1568
          },
          {
            "Reference_area": "Burundi",
            "Year": 2005,
            "Percentage": 76.96047874,
            "GL_ORDINAL": 1569
          },
          {
            "Reference_area": "Burundi",
            "Year": 2006,
            "Percentage": 45.24468305,
            "GL_ORDINAL": 1570
          },
          {
            "Reference_area": "Burundi",
            "Year": 2007,
            "Percentage": 10.09326298,
            "GL_ORDINAL": 1571
          },
          {
            "Reference_area": "Burundi",
            "Year": 2008,
            "Percentage": 46.26247869,
            "GL_ORDINAL": 1572
          },
          {
            "Reference_area": "Burundi",
            "Year": 2009,
            "Percentage": 80.38114787,
            "GL_ORDINAL": 1573
          },
          {
            "Reference_area": "Burundi",
            "Year": 2010,
            "Percentage": 80.84188787,
            "GL_ORDINAL": 1574
          },
          {
            "Reference_area": "Burundi",
            "Year": 2011,
            "Percentage": 55.50748482,
            "GL_ORDINAL": 1575
          },
          {
            "Reference_area": "Burundi",
            "Year": 2012,
            "Percentage": 60.00978653,
            "GL_ORDINAL": 1576
          },
          {
            "Reference_area": "Burundi",
            "Year": 2013,
            "Percentage": 80.75573329,
            "GL_ORDINAL": 1577
          },
          {
            "Reference_area": "Burundi",
            "Year": 2014,
            "Percentage": 72.3082293,
            "GL_ORDINAL": 1578
          },
          {
            "Reference_area": "Burundi",
            "Year": 2015,
            "Percentage": 81.26052491,
            "GL_ORDINAL": 1579
          },
          {
            "Reference_area": "Burundi",
            "Year": 2016,
            "Percentage": 14.25406204,
            "GL_ORDINAL": 1580
          },
          {
            "Reference_area": "Burundi",
            "Year": 2017,
            "Percentage": 78.62308132,
            "GL_ORDINAL": 1581
          },
          {
            "Reference_area": "Burundi",
            "Year": 2018,
            "Percentage": 77.38994076,
            "GL_ORDINAL": 1582
          },
          {
            "Reference_area": "Burundi",
            "Year": 2019,
            "Percentage": 78.76104517,
            "GL_ORDINAL": 1583
          },
          {
            "Reference_area": "Burundi",
            "Year": 2020,
            "Percentage": 78.16189667,
            "GL_ORDINAL": 1584
          },
          {
            "Reference_area": "Burundi",
            "Year": 2021,
            "Percentage": 98.48296302,
            "GL_ORDINAL": 1585
          },
          {
            "Reference_area": "Burundi",
            "Year": 2022,
            "Percentage": 63.97136108,
            "GL_ORDINAL": 1586
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2000,
            "Percentage": 79.24403183,
            "GL_ORDINAL": 1587
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2001,
            "Percentage": 79.24403183,
            "GL_ORDINAL": 1588
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2002,
            "Percentage": 79.31034483,
            "GL_ORDINAL": 1589
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2003,
            "Percentage": 79.31034483,
            "GL_ORDINAL": 1590
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2004,
            "Percentage": 79.31034483,
            "GL_ORDINAL": 1591
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2005,
            "Percentage": 31.16710875,
            "GL_ORDINAL": 1592
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2006,
            "Percentage": 75.066313,
            "GL_ORDINAL": 1593
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2007,
            "Percentage": 31.36604775,
            "GL_ORDINAL": 1594
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2008,
            "Percentage": 62.79840849,
            "GL_ORDINAL": 1595
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2009,
            "Percentage": 79.31034483,
            "GL_ORDINAL": 1596
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2010,
            "Percentage": 79.24403183,
            "GL_ORDINAL": 1597
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2011,
            "Percentage": 79.31034483,
            "GL_ORDINAL": 1598
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2012,
            "Percentage": 79.50928382,
            "GL_ORDINAL": 1599
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2013,
            "Percentage": 79.44297082,
            "GL_ORDINAL": 1600
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2014,
            "Percentage": 79.44297082,
            "GL_ORDINAL": 1601
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2015,
            "Percentage": 79.44297082,
            "GL_ORDINAL": 1602
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2016,
            "Percentage": 0.663129973,
            "GL_ORDINAL": 1603
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2017,
            "Percentage": 79.50928382,
            "GL_ORDINAL": 1604
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2018,
            "Percentage": 79.50928382,
            "GL_ORDINAL": 1605
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2019,
            "Percentage": 79.01538462,
            "GL_ORDINAL": 1606
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2020,
            "Percentage": 79.01538462,
            "GL_ORDINAL": 1607
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 1608
          },
          {
            "Reference_area": "Cabo Verde",
            "Year": 2022,
            "Percentage": 60.93894482,
            "GL_ORDINAL": 1609
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2000,
            "Percentage": 55.38892991,
            "GL_ORDINAL": 1610
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2001,
            "Percentage": 72.77931756,
            "GL_ORDINAL": 1611
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2002,
            "Percentage": 85.47772883,
            "GL_ORDINAL": 1612
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2003,
            "Percentage": 82.84461089,
            "GL_ORDINAL": 1613
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2004,
            "Percentage": 71.18434202,
            "GL_ORDINAL": 1614
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2005,
            "Percentage": 74.37450797,
            "GL_ORDINAL": 1615
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2006,
            "Percentage": 44.89256021,
            "GL_ORDINAL": 1616
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2007,
            "Percentage": 50.30861546,
            "GL_ORDINAL": 1617
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2008,
            "Percentage": 43.3938029,
            "GL_ORDINAL": 1618
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2009,
            "Percentage": 45.84085222,
            "GL_ORDINAL": 1619
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2010,
            "Percentage": 79.44529562,
            "GL_ORDINAL": 1620
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2011,
            "Percentage": 80.36108875,
            "GL_ORDINAL": 1621
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2012,
            "Percentage": 61.42591078,
            "GL_ORDINAL": 1622
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2013,
            "Percentage": 80.73069161,
            "GL_ORDINAL": 1623
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2014,
            "Percentage": 76.46716982,
            "GL_ORDINAL": 1624
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2015,
            "Percentage": 71.1236063,
            "GL_ORDINAL": 1625
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2016,
            "Percentage": 71.32054034,
            "GL_ORDINAL": 1626
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2017,
            "Percentage": 63.12919864,
            "GL_ORDINAL": 1627
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2018,
            "Percentage": 54.07383157,
            "GL_ORDINAL": 1628
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2019,
            "Percentage": 86.47969475,
            "GL_ORDINAL": 1629
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2020,
            "Percentage": 80.39192357,
            "GL_ORDINAL": 1630
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2021,
            "Percentage": 58.74425634,
            "GL_ORDINAL": 1631
          },
          {
            "Reference_area": "Cambodia",
            "Year": 2022,
            "Percentage": 21.7991164,
            "GL_ORDINAL": 1632
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2000,
            "Percentage": 61.13567584,
            "GL_ORDINAL": 1633
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2001,
            "Percentage": 60.40223633,
            "GL_ORDINAL": 1634
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2002,
            "Percentage": 56.75538746,
            "GL_ORDINAL": 1635
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2003,
            "Percentage": 46.41997327,
            "GL_ORDINAL": 1636
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2004,
            "Percentage": 62.51142267,
            "GL_ORDINAL": 1637
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2005,
            "Percentage": 67.23037159,
            "GL_ORDINAL": 1638
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2006,
            "Percentage": 38.554806,
            "GL_ORDINAL": 1639
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2007,
            "Percentage": 69.43217037,
            "GL_ORDINAL": 1640
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2008,
            "Percentage": 59.23032605,
            "GL_ORDINAL": 1641
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2009,
            "Percentage": 46.37769461,
            "GL_ORDINAL": 1642
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2010,
            "Percentage": 51.11054908,
            "GL_ORDINAL": 1643
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2011,
            "Percentage": 55.43543036,
            "GL_ORDINAL": 1644
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2012,
            "Percentage": 57.69488753,
            "GL_ORDINAL": 1645
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2013,
            "Percentage": 48.32456455,
            "GL_ORDINAL": 1646
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2014,
            "Percentage": 53.42050249,
            "GL_ORDINAL": 1647
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2015,
            "Percentage": 64.74091619,
            "GL_ORDINAL": 1648
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2016,
            "Percentage": 72.21395141,
            "GL_ORDINAL": 1649
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2017,
            "Percentage": 49.6829954,
            "GL_ORDINAL": 1650
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2018,
            "Percentage": 66.61716219,
            "GL_ORDINAL": 1651
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2019,
            "Percentage": 53.62169451,
            "GL_ORDINAL": 1652
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2020,
            "Percentage": 74.59213511,
            "GL_ORDINAL": 1653
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2021,
            "Percentage": 71.22657176,
            "GL_ORDINAL": 1654
          },
          {
            "Reference_area": "Cameroon",
            "Year": 2022,
            "Percentage": 69.72424735,
            "GL_ORDINAL": 1655
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 1656
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 1657
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 1658
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 1659
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2004,
            "Percentage": 88.25819768,
            "GL_ORDINAL": 1660
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 1661
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1662
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 1663
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1664
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2009,
            "Percentage": 14.77192487,
            "GL_ORDINAL": 1665
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 1666
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 1667
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 1668
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 1669
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 1670
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 1671
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1672
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 1673
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 1674
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 1675
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 1676
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 1677
          },
          {
            "Reference_area": "Cayman Islands",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 1678
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2000,
            "Percentage": 96.49044951,
            "GL_ORDINAL": 1679
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2001,
            "Percentage": 96.53839243,
            "GL_ORDINAL": 1680
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2002,
            "Percentage": 96.9105795,
            "GL_ORDINAL": 1681
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2003,
            "Percentage": 95.07530218,
            "GL_ORDINAL": 1682
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2004,
            "Percentage": 96.69029453,
            "GL_ORDINAL": 1683
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2005,
            "Percentage": 97.16891014,
            "GL_ORDINAL": 1684
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2006,
            "Percentage": 93.10192097,
            "GL_ORDINAL": 1685
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2007,
            "Percentage": 96.64827639,
            "GL_ORDINAL": 1686
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2008,
            "Percentage": 96.60446084,
            "GL_ORDINAL": 1687
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2009,
            "Percentage": 89.43465186,
            "GL_ORDINAL": 1688
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2010,
            "Percentage": 93.61057314,
            "GL_ORDINAL": 1689
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2011,
            "Percentage": 96.95520396,
            "GL_ORDINAL": 1690
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2012,
            "Percentage": 95.9357946,
            "GL_ORDINAL": 1691
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2013,
            "Percentage": 94.51608445,
            "GL_ORDINAL": 1692
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2014,
            "Percentage": 94.457683,
            "GL_ORDINAL": 1693
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2015,
            "Percentage": 96.50881083,
            "GL_ORDINAL": 1694
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2016,
            "Percentage": 87.49325082,
            "GL_ORDINAL": 1695
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2017,
            "Percentage": 92.37901038,
            "GL_ORDINAL": 1696
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2018,
            "Percentage": 96.89915945,
            "GL_ORDINAL": 1697
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2019,
            "Percentage": 95.85166982,
            "GL_ORDINAL": 1698
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2020,
            "Percentage": 97.12246565,
            "GL_ORDINAL": 1699
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 1700
          },
          {
            "Reference_area": "Central African Republic",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 1701
          },
          {
            "Reference_area": "Chad",
            "Year": 2000,
            "Percentage": 89.41607221,
            "GL_ORDINAL": 1702
          },
          {
            "Reference_area": "Chad",
            "Year": 2001,
            "Percentage": 89.91454795,
            "GL_ORDINAL": 1703
          },
          {
            "Reference_area": "Chad",
            "Year": 2002,
            "Percentage": 90.08761658,
            "GL_ORDINAL": 1704
          },
          {
            "Reference_area": "Chad",
            "Year": 2003,
            "Percentage": 90.17904292,
            "GL_ORDINAL": 1705
          },
          {
            "Reference_area": "Chad",
            "Year": 2004,
            "Percentage": 90.332491,
            "GL_ORDINAL": 1706
          },
          {
            "Reference_area": "Chad",
            "Year": 2005,
            "Percentage": 90.43113186,
            "GL_ORDINAL": 1707
          },
          {
            "Reference_area": "Chad",
            "Year": 2006,
            "Percentage": 90.52609567,
            "GL_ORDINAL": 1708
          },
          {
            "Reference_area": "Chad",
            "Year": 2007,
            "Percentage": 90.7120968,
            "GL_ORDINAL": 1709
          },
          {
            "Reference_area": "Chad",
            "Year": 2008,
            "Percentage": 90.81209503,
            "GL_ORDINAL": 1710
          },
          {
            "Reference_area": "Chad",
            "Year": 2009,
            "Percentage": 90.97585534,
            "GL_ORDINAL": 1711
          },
          {
            "Reference_area": "Chad",
            "Year": 2010,
            "Percentage": 91.06466705,
            "GL_ORDINAL": 1712
          },
          {
            "Reference_area": "Chad",
            "Year": 2011,
            "Percentage": 91.20483283,
            "GL_ORDINAL": 1713
          },
          {
            "Reference_area": "Chad",
            "Year": 2012,
            "Percentage": 90.90786288,
            "GL_ORDINAL": 1714
          },
          {
            "Reference_area": "Chad",
            "Year": 2013,
            "Percentage": 90.91341884,
            "GL_ORDINAL": 1715
          },
          {
            "Reference_area": "Chad",
            "Year": 2014,
            "Percentage": 90.90507086,
            "GL_ORDINAL": 1716
          },
          {
            "Reference_area": "Chad",
            "Year": 2015,
            "Percentage": 90.90507086,
            "GL_ORDINAL": 1717
          },
          {
            "Reference_area": "Chad",
            "Year": 2016,
            "Percentage": 54.192918,
            "GL_ORDINAL": 1718
          },
          {
            "Reference_area": "Chad",
            "Year": 2017,
            "Percentage": 90.90848251,
            "GL_ORDINAL": 1719
          },
          {
            "Reference_area": "Chad",
            "Year": 2018,
            "Percentage": 90.97695329,
            "GL_ORDINAL": 1720
          },
          {
            "Reference_area": "Chad",
            "Year": 2019,
            "Percentage": 90.88817675,
            "GL_ORDINAL": 1721
          },
          {
            "Reference_area": "Chad",
            "Year": 2020,
            "Percentage": 90.88954768,
            "GL_ORDINAL": 1722
          },
          {
            "Reference_area": "Chad",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 1723
          },
          {
            "Reference_area": "Chad",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 1724
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2000,
            "Percentage": 8.222065713,
            "GL_ORDINAL": 1725
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2001,
            "Percentage": 11.62363731,
            "GL_ORDINAL": 1726
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2002,
            "Percentage": 9.29347331,
            "GL_ORDINAL": 1727
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2003,
            "Percentage": 12.15337389,
            "GL_ORDINAL": 1728
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2004,
            "Percentage": 11.71568801,
            "GL_ORDINAL": 1729
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2005,
            "Percentage": 13.06585436,
            "GL_ORDINAL": 1730
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2006,
            "Percentage": 14.57150327,
            "GL_ORDINAL": 1731
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2007,
            "Percentage": 10.47845672,
            "GL_ORDINAL": 1732
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2008,
            "Percentage": 4.408500405,
            "GL_ORDINAL": 1733
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2009,
            "Percentage": 24.80651703,
            "GL_ORDINAL": 1734
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2010,
            "Percentage": 13.3390546,
            "GL_ORDINAL": 1735
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2011,
            "Percentage": 12.89549074,
            "GL_ORDINAL": 1736
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2012,
            "Percentage": 14.25265409,
            "GL_ORDINAL": 1737
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2013,
            "Percentage": 17.88969517,
            "GL_ORDINAL": 1738
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2014,
            "Percentage": 14.55184292,
            "GL_ORDINAL": 1739
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2015,
            "Percentage": 12.76758742,
            "GL_ORDINAL": 1740
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2016,
            "Percentage": 5.272838334,
            "GL_ORDINAL": 1741
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2017,
            "Percentage": 11.0906586,
            "GL_ORDINAL": 1742
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2018,
            "Percentage": 9.059015828,
            "GL_ORDINAL": 1743
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2019,
            "Percentage": 20.2727537,
            "GL_ORDINAL": 1744
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2020,
            "Percentage": 15.33166468,
            "GL_ORDINAL": 1745
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2021,
            "Percentage": 15.12121609,
            "GL_ORDINAL": 1746
          },
          {
            "Reference_area": "China (People’s Republic of)",
            "Year": 2022,
            "Percentage": 21.00323612,
            "GL_ORDINAL": 1747
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 1748
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 1749
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 1750
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 1751
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 1752
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 1753
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1754
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 1755
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1756
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 1757
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 1758
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 1759
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 1760
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 1761
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 1762
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 1763
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1764
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 1765
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 1766
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 1767
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 1768
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 1769
          },
          {
            "Reference_area": "Christmas Island",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 1770
          },
          {
            "Reference_area": "Comoros",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 1771
          },
          {
            "Reference_area": "Comoros",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 1772
          },
          {
            "Reference_area": "Comoros",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 1773
          },
          {
            "Reference_area": "Comoros",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 1774
          },
          {
            "Reference_area": "Comoros",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 1775
          },
          {
            "Reference_area": "Comoros",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 1776
          },
          {
            "Reference_area": "Comoros",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1777
          },
          {
            "Reference_area": "Comoros",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 1778
          },
          {
            "Reference_area": "Comoros",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1779
          },
          {
            "Reference_area": "Comoros",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 1780
          },
          {
            "Reference_area": "Comoros",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 1781
          },
          {
            "Reference_area": "Comoros",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 1782
          },
          {
            "Reference_area": "Comoros",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 1783
          },
          {
            "Reference_area": "Comoros",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 1784
          },
          {
            "Reference_area": "Comoros",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 1785
          },
          {
            "Reference_area": "Comoros",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 1786
          },
          {
            "Reference_area": "Comoros",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1787
          },
          {
            "Reference_area": "Comoros",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 1788
          },
          {
            "Reference_area": "Comoros",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 1789
          },
          {
            "Reference_area": "Comoros",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 1790
          },
          {
            "Reference_area": "Comoros",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 1791
          },
          {
            "Reference_area": "Comoros",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 1792
          },
          {
            "Reference_area": "Comoros",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 1793
          },
          {
            "Reference_area": "Congo",
            "Year": 2000,
            "Percentage": 5.044484297,
            "GL_ORDINAL": 1794
          },
          {
            "Reference_area": "Congo",
            "Year": 2001,
            "Percentage": 7.247518694,
            "GL_ORDINAL": 1795
          },
          {
            "Reference_area": "Congo",
            "Year": 2002,
            "Percentage": 7.998072477,
            "GL_ORDINAL": 1796
          },
          {
            "Reference_area": "Congo",
            "Year": 2003,
            "Percentage": 3.448582821,
            "GL_ORDINAL": 1797
          },
          {
            "Reference_area": "Congo",
            "Year": 2004,
            "Percentage": 5.903368683,
            "GL_ORDINAL": 1798
          },
          {
            "Reference_area": "Congo",
            "Year": 2005,
            "Percentage": 24.39926949,
            "GL_ORDINAL": 1799
          },
          {
            "Reference_area": "Congo",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1800
          },
          {
            "Reference_area": "Congo",
            "Year": 2007,
            "Percentage": 22.79714097,
            "GL_ORDINAL": 1801
          },
          {
            "Reference_area": "Congo",
            "Year": 2008,
            "Percentage": 5.434408731,
            "GL_ORDINAL": 1802
          },
          {
            "Reference_area": "Congo",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 1803
          },
          {
            "Reference_area": "Congo",
            "Year": 2010,
            "Percentage": 0.788295176,
            "GL_ORDINAL": 1804
          },
          {
            "Reference_area": "Congo",
            "Year": 2011,
            "Percentage": 5.678364394,
            "GL_ORDINAL": 1805
          },
          {
            "Reference_area": "Congo",
            "Year": 2012,
            "Percentage": 7.837024527,
            "GL_ORDINAL": 1806
          },
          {
            "Reference_area": "Congo",
            "Year": 2013,
            "Percentage": 3.878245673,
            "GL_ORDINAL": 1807
          },
          {
            "Reference_area": "Congo",
            "Year": 2014,
            "Percentage": 3.355710405,
            "GL_ORDINAL": 1808
          },
          {
            "Reference_area": "Congo",
            "Year": 2015,
            "Percentage": 16.8501177,
            "GL_ORDINAL": 1809
          },
          {
            "Reference_area": "Congo",
            "Year": 2016,
            "Percentage": 32.24664033,
            "GL_ORDINAL": 1810
          },
          {
            "Reference_area": "Congo",
            "Year": 2017,
            "Percentage": 0.473550448,
            "GL_ORDINAL": 1811
          },
          {
            "Reference_area": "Congo",
            "Year": 2018,
            "Percentage": 13.94102786,
            "GL_ORDINAL": 1812
          },
          {
            "Reference_area": "Congo",
            "Year": 2019,
            "Percentage": 2.289015516,
            "GL_ORDINAL": 1813
          },
          {
            "Reference_area": "Congo",
            "Year": 2020,
            "Percentage": 22.92852262,
            "GL_ORDINAL": 1814
          },
          {
            "Reference_area": "Congo",
            "Year": 2021,
            "Percentage": 7.86136009,
            "GL_ORDINAL": 1815
          },
          {
            "Reference_area": "Congo",
            "Year": 2022,
            "Percentage": 14.90744068,
            "GL_ORDINAL": 1816
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 1817
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 1818
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 1819
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 1820
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 1821
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 1822
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1823
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 1824
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1825
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 1826
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 1827
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 1828
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 1829
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 1830
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 1831
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 1832
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1833
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 1834
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 1835
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 1836
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 1837
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 1838
          },
          {
            "Reference_area": "Cook Islands",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 1839
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2000,
            "Percentage": 84.38779733,
            "GL_ORDINAL": 1840
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2001,
            "Percentage": 84.36184248,
            "GL_ORDINAL": 1841
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2002,
            "Percentage": 82.35950436,
            "GL_ORDINAL": 1842
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2003,
            "Percentage": 82.259323,
            "GL_ORDINAL": 1843
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2004,
            "Percentage": 83.46586421,
            "GL_ORDINAL": 1844
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2005,
            "Percentage": 83.61221213,
            "GL_ORDINAL": 1845
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2006,
            "Percentage": 77.89042281,
            "GL_ORDINAL": 1846
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2007,
            "Percentage": 86.67247834,
            "GL_ORDINAL": 1847
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2008,
            "Percentage": 87.39823535,
            "GL_ORDINAL": 1848
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2009,
            "Percentage": 88.82101343,
            "GL_ORDINAL": 1849
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2010,
            "Percentage": 80.70293403,
            "GL_ORDINAL": 1850
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2011,
            "Percentage": 84.026174,
            "GL_ORDINAL": 1851
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2012,
            "Percentage": 87.26194947,
            "GL_ORDINAL": 1852
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2013,
            "Percentage": 87.35729249,
            "GL_ORDINAL": 1853
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2014,
            "Percentage": 83.24818903,
            "GL_ORDINAL": 1854
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2015,
            "Percentage": 87.0030618,
            "GL_ORDINAL": 1855
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2016,
            "Percentage": 74.73497911,
            "GL_ORDINAL": 1856
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2017,
            "Percentage": 83.48948672,
            "GL_ORDINAL": 1857
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2018,
            "Percentage": 83.96420191,
            "GL_ORDINAL": 1858
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2019,
            "Percentage": 83.44383387,
            "GL_ORDINAL": 1859
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2020,
            "Percentage": 87.01194503,
            "GL_ORDINAL": 1860
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2021,
            "Percentage": 90.49954307,
            "GL_ORDINAL": 1861
          },
          {
            "Reference_area": "Côte d’Ivoire",
            "Year": 2022,
            "Percentage": 91.96194631,
            "GL_ORDINAL": 1862
          },
          {
            "Reference_area": "Croatia",
            "Year": 2000,
            "Percentage": 11.35508345,
            "GL_ORDINAL": 1863
          },
          {
            "Reference_area": "Croatia",
            "Year": 2001,
            "Percentage": 6.309054049,
            "GL_ORDINAL": 1864
          },
          {
            "Reference_area": "Croatia",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 1865
          },
          {
            "Reference_area": "Croatia",
            "Year": 2003,
            "Percentage": 11.06839825,
            "GL_ORDINAL": 1866
          },
          {
            "Reference_area": "Croatia",
            "Year": 2004,
            "Percentage": 5.234360422,
            "GL_ORDINAL": 1867
          },
          {
            "Reference_area": "Croatia",
            "Year": 2005,
            "Percentage": 4.202536972,
            "GL_ORDINAL": 1868
          },
          {
            "Reference_area": "Croatia",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1869
          },
          {
            "Reference_area": "Croatia",
            "Year": 2007,
            "Percentage": 8.125865905,
            "GL_ORDINAL": 1870
          },
          {
            "Reference_area": "Croatia",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1871
          },
          {
            "Reference_area": "Croatia",
            "Year": 2009,
            "Percentage": 1.684126183,
            "GL_ORDINAL": 1872
          },
          {
            "Reference_area": "Croatia",
            "Year": 2010,
            "Percentage": 0.857298915,
            "GL_ORDINAL": 1873
          },
          {
            "Reference_area": "Croatia",
            "Year": 2011,
            "Percentage": 9.936436273,
            "GL_ORDINAL": 1874
          },
          {
            "Reference_area": "Croatia",
            "Year": 2012,
            "Percentage": 71.26607261,
            "GL_ORDINAL": 1875
          },
          {
            "Reference_area": "Croatia",
            "Year": 2013,
            "Percentage": 6.299784914,
            "GL_ORDINAL": 1876
          },
          {
            "Reference_area": "Croatia",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 1877
          },
          {
            "Reference_area": "Croatia",
            "Year": 2015,
            "Percentage": 6.136768186,
            "GL_ORDINAL": 1878
          },
          {
            "Reference_area": "Croatia",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1879
          },
          {
            "Reference_area": "Croatia",
            "Year": 2017,
            "Percentage": 9.10662362,
            "GL_ORDINAL": 1880
          },
          {
            "Reference_area": "Croatia",
            "Year": 2018,
            "Percentage": 1.791804804,
            "GL_ORDINAL": 1881
          },
          {
            "Reference_area": "Croatia",
            "Year": 2019,
            "Percentage": 1.796998538,
            "GL_ORDINAL": 1882
          },
          {
            "Reference_area": "Croatia",
            "Year": 2020,
            "Percentage": 1.809757738,
            "GL_ORDINAL": 1883
          },
          {
            "Reference_area": "Croatia",
            "Year": 2021,
            "Percentage": 10.27816716,
            "GL_ORDINAL": 1884
          },
          {
            "Reference_area": "Croatia",
            "Year": 2022,
            "Percentage": 21.32356727,
            "GL_ORDINAL": 1885
          },
          {
            "Reference_area": "Cuba",
            "Year": 2000,
            "Percentage": 65.45340742,
            "GL_ORDINAL": 1886
          },
          {
            "Reference_area": "Cuba",
            "Year": 2001,
            "Percentage": 59.70422943,
            "GL_ORDINAL": 1887
          },
          {
            "Reference_area": "Cuba",
            "Year": 2002,
            "Percentage": 76.78991037,
            "GL_ORDINAL": 1888
          },
          {
            "Reference_area": "Cuba",
            "Year": 2003,
            "Percentage": 37.29287622,
            "GL_ORDINAL": 1889
          },
          {
            "Reference_area": "Cuba",
            "Year": 2004,
            "Percentage": 67.80553837,
            "GL_ORDINAL": 1890
          },
          {
            "Reference_area": "Cuba",
            "Year": 2005,
            "Percentage": 60.11349051,
            "GL_ORDINAL": 1891
          },
          {
            "Reference_area": "Cuba",
            "Year": 2006,
            "Percentage": 11.45228706,
            "GL_ORDINAL": 1892
          },
          {
            "Reference_area": "Cuba",
            "Year": 2007,
            "Percentage": 9.813026497,
            "GL_ORDINAL": 1893
          },
          {
            "Reference_area": "Cuba",
            "Year": 2008,
            "Percentage": 21.04864488,
            "GL_ORDINAL": 1894
          },
          {
            "Reference_area": "Cuba",
            "Year": 2009,
            "Percentage": 69.14754618,
            "GL_ORDINAL": 1895
          },
          {
            "Reference_area": "Cuba",
            "Year": 2010,
            "Percentage": 42.06418792,
            "GL_ORDINAL": 1896
          },
          {
            "Reference_area": "Cuba",
            "Year": 2011,
            "Percentage": 73.02339003,
            "GL_ORDINAL": 1897
          },
          {
            "Reference_area": "Cuba",
            "Year": 2012,
            "Percentage": 62.43223405,
            "GL_ORDINAL": 1898
          },
          {
            "Reference_area": "Cuba",
            "Year": 2013,
            "Percentage": 53.11295026,
            "GL_ORDINAL": 1899
          },
          {
            "Reference_area": "Cuba",
            "Year": 2014,
            "Percentage": 36.51743417,
            "GL_ORDINAL": 1900
          },
          {
            "Reference_area": "Cuba",
            "Year": 2015,
            "Percentage": 70.80380728,
            "GL_ORDINAL": 1901
          },
          {
            "Reference_area": "Cuba",
            "Year": 2016,
            "Percentage": 24.45863147,
            "GL_ORDINAL": 1902
          },
          {
            "Reference_area": "Cuba",
            "Year": 2017,
            "Percentage": 68.44572972,
            "GL_ORDINAL": 1903
          },
          {
            "Reference_area": "Cuba",
            "Year": 2018,
            "Percentage": 43.72562107,
            "GL_ORDINAL": 1904
          },
          {
            "Reference_area": "Cuba",
            "Year": 2019,
            "Percentage": 31.5632925,
            "GL_ORDINAL": 1905
          },
          {
            "Reference_area": "Cuba",
            "Year": 2020,
            "Percentage": 70.75291454,
            "GL_ORDINAL": 1906
          },
          {
            "Reference_area": "Cuba",
            "Year": 2021,
            "Percentage": 77.31145549,
            "GL_ORDINAL": 1907
          },
          {
            "Reference_area": "Cuba",
            "Year": 2022,
            "Percentage": 38.86505397,
            "GL_ORDINAL": 1908
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2000,
            "Percentage": 92.8401539,
            "GL_ORDINAL": 1909
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2001,
            "Percentage": 92.70123731,
            "GL_ORDINAL": 1910
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2002,
            "Percentage": 96.18410564,
            "GL_ORDINAL": 1911
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2003,
            "Percentage": 96.15637661,
            "GL_ORDINAL": 1912
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2004,
            "Percentage": 95.52208077,
            "GL_ORDINAL": 1913
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2005,
            "Percentage": 93.52690009,
            "GL_ORDINAL": 1914
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2006,
            "Percentage": 2.554421769,
            "GL_ORDINAL": 1915
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2007,
            "Percentage": 33.99911682,
            "GL_ORDINAL": 1916
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2008,
            "Percentage": 2.786994028,
            "GL_ORDINAL": 1917
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2009,
            "Percentage": 94.65481796,
            "GL_ORDINAL": 1918
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2010,
            "Percentage": 93.24113687,
            "GL_ORDINAL": 1919
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2011,
            "Percentage": 92.64856304,
            "GL_ORDINAL": 1920
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2012,
            "Percentage": 92.92889372,
            "GL_ORDINAL": 1921
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2013,
            "Percentage": 93.0394126,
            "GL_ORDINAL": 1922
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2014,
            "Percentage": 92.85009213,
            "GL_ORDINAL": 1923
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2015,
            "Percentage": 93.08699658,
            "GL_ORDINAL": 1924
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2016,
            "Percentage": 57.33133042,
            "GL_ORDINAL": 1925
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2017,
            "Percentage": 92.87157757,
            "GL_ORDINAL": 1926
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2018,
            "Percentage": 92.78317047,
            "GL_ORDINAL": 1927
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2019,
            "Percentage": 94.67079635,
            "GL_ORDINAL": 1928
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2020,
            "Percentage": 92.52541995,
            "GL_ORDINAL": 1929
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 1930
          },
          {
            "Reference_area": "Cyprus",
            "Year": 2022,
            "Percentage": 87.69016962,
            "GL_ORDINAL": 1931
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 1932
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2001,
            "Percentage": 4.083602589,
            "GL_ORDINAL": 1933
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 1934
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 1935
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 1936
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 1937
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 1938
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 1939
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 1940
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 1941
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 1942
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 1943
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 1944
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 1945
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 1946
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2015,
            "Percentage": 3.851902837,
            "GL_ORDINAL": 1947
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1948
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2017,
            "Percentage": 0.849835653,
            "GL_ORDINAL": 1949
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 1950
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2019,
            "Percentage": 1.531857858,
            "GL_ORDINAL": 1951
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 1952
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 1953
          },
          {
            "Reference_area": "Democratic People’s Republic of Korea",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 1954
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2000,
            "Percentage": 42.4406022,
            "GL_ORDINAL": 1955
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2001,
            "Percentage": 41.17246932,
            "GL_ORDINAL": 1956
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2002,
            "Percentage": 41.89129335,
            "GL_ORDINAL": 1957
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2003,
            "Percentage": 43.31761715,
            "GL_ORDINAL": 1958
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2004,
            "Percentage": 57.57396491,
            "GL_ORDINAL": 1959
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2005,
            "Percentage": 50.53159906,
            "GL_ORDINAL": 1960
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2006,
            "Percentage": 39.1289978,
            "GL_ORDINAL": 1961
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2007,
            "Percentage": 43.97695713,
            "GL_ORDINAL": 1962
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2008,
            "Percentage": 37.70763116,
            "GL_ORDINAL": 1963
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2009,
            "Percentage": 47.00774236,
            "GL_ORDINAL": 1964
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2010,
            "Percentage": 39.92567667,
            "GL_ORDINAL": 1965
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2011,
            "Percentage": 48.29254853,
            "GL_ORDINAL": 1966
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2012,
            "Percentage": 49.50677921,
            "GL_ORDINAL": 1967
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2013,
            "Percentage": 51.68505942,
            "GL_ORDINAL": 1968
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2014,
            "Percentage": 53.40039738,
            "GL_ORDINAL": 1969
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2015,
            "Percentage": 63.64821731,
            "GL_ORDINAL": 1970
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2016,
            "Percentage": 62.12185798,
            "GL_ORDINAL": 1971
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2017,
            "Percentage": 43.05775643,
            "GL_ORDINAL": 1972
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2018,
            "Percentage": 62.88957628,
            "GL_ORDINAL": 1973
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2019,
            "Percentage": 42.38104051,
            "GL_ORDINAL": 1974
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2020,
            "Percentage": 62.1827825,
            "GL_ORDINAL": 1975
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2021,
            "Percentage": 67.49529374,
            "GL_ORDINAL": 1976
          },
          {
            "Reference_area": "Democratic Republic of the Congo",
            "Year": 2022,
            "Percentage": 59.02122266,
            "GL_ORDINAL": 1977
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2000,
            "Percentage": 68.11594203,
            "GL_ORDINAL": 1978
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2001,
            "Percentage": 68.11594203,
            "GL_ORDINAL": 1979
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2002,
            "Percentage": 68.11594203,
            "GL_ORDINAL": 1980
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2003,
            "Percentage": 68.11594203,
            "GL_ORDINAL": 1981
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2004,
            "Percentage": 68.11594203,
            "GL_ORDINAL": 1982
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2005,
            "Percentage": 68.11594203,
            "GL_ORDINAL": 1983
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2006,
            "Percentage": 68.11594203,
            "GL_ORDINAL": 1984
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2007,
            "Percentage": 68.11594203,
            "GL_ORDINAL": 1985
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2008,
            "Percentage": 68.11594203,
            "GL_ORDINAL": 1986
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2009,
            "Percentage": 68.11594203,
            "GL_ORDINAL": 1987
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2010,
            "Percentage": 71.21212121,
            "GL_ORDINAL": 1988
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2011,
            "Percentage": 71.21212121,
            "GL_ORDINAL": 1989
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2012,
            "Percentage": 71.21212121,
            "GL_ORDINAL": 1990
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2013,
            "Percentage": 71.21212121,
            "GL_ORDINAL": 1991
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2014,
            "Percentage": 71.21212121,
            "GL_ORDINAL": 1992
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2015,
            "Percentage": 71.21212121,
            "GL_ORDINAL": 1993
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 1994
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2017,
            "Percentage": 71.21212121,
            "GL_ORDINAL": 1995
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2018,
            "Percentage": 71.21212121,
            "GL_ORDINAL": 1996
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2019,
            "Percentage": 71.21212121,
            "GL_ORDINAL": 1997
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2020,
            "Percentage": 71.21212121,
            "GL_ORDINAL": 1998
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2021,
            "Percentage": 80.71018713,
            "GL_ORDINAL": 1999
          },
          {
            "Reference_area": "Djibouti",
            "Year": 2022,
            "Percentage": 80.71018713,
            "GL_ORDINAL": 2000
          },
          {
            "Reference_area": "Dominica",
            "Year": 2000,
            "Percentage": 94.67045455,
            "GL_ORDINAL": 2001
          },
          {
            "Reference_area": "Dominica",
            "Year": 2001,
            "Percentage": 98.125,
            "GL_ORDINAL": 2002
          },
          {
            "Reference_area": "Dominica",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 2003
          },
          {
            "Reference_area": "Dominica",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 2004
          },
          {
            "Reference_area": "Dominica",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 2005
          },
          {
            "Reference_area": "Dominica",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 2006
          },
          {
            "Reference_area": "Dominica",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2007
          },
          {
            "Reference_area": "Dominica",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2008
          },
          {
            "Reference_area": "Dominica",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2009
          },
          {
            "Reference_area": "Dominica",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 2010
          },
          {
            "Reference_area": "Dominica",
            "Year": 2010,
            "Percentage": 94.69197545,
            "GL_ORDINAL": 2011
          },
          {
            "Reference_area": "Dominica",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 2012
          },
          {
            "Reference_area": "Dominica",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 2013
          },
          {
            "Reference_area": "Dominica",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 2014
          },
          {
            "Reference_area": "Dominica",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 2015
          },
          {
            "Reference_area": "Dominica",
            "Year": 2015,
            "Percentage": 98.12286689,
            "GL_ORDINAL": 2016
          },
          {
            "Reference_area": "Dominica",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2017
          },
          {
            "Reference_area": "Dominica",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 2018
          },
          {
            "Reference_area": "Dominica",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 2019
          },
          {
            "Reference_area": "Dominica",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 2020
          },
          {
            "Reference_area": "Dominica",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 2021
          },
          {
            "Reference_area": "Dominica",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 2022
          },
          {
            "Reference_area": "Dominica",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 2023
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2000,
            "Percentage": 37.98642593,
            "GL_ORDINAL": 2024
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2001,
            "Percentage": 33.57245655,
            "GL_ORDINAL": 2025
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2002,
            "Percentage": 39.1260614,
            "GL_ORDINAL": 2026
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2003,
            "Percentage": 40.79951439,
            "GL_ORDINAL": 2027
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2004,
            "Percentage": 35.21510078,
            "GL_ORDINAL": 2028
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2005,
            "Percentage": 45.76960047,
            "GL_ORDINAL": 2029
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2006,
            "Percentage": 0.237471311,
            "GL_ORDINAL": 2030
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2007,
            "Percentage": 0.509548025,
            "GL_ORDINAL": 2031
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2008,
            "Percentage": 0.508387892,
            "GL_ORDINAL": 2032
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2009,
            "Percentage": 31.82899775,
            "GL_ORDINAL": 2033
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2010,
            "Percentage": 10.2266516,
            "GL_ORDINAL": 2034
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2011,
            "Percentage": 31.38128003,
            "GL_ORDINAL": 2035
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2012,
            "Percentage": 26.97762561,
            "GL_ORDINAL": 2036
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2013,
            "Percentage": 25.38062534,
            "GL_ORDINAL": 2037
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2014,
            "Percentage": 32.13622124,
            "GL_ORDINAL": 2038
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2015,
            "Percentage": 60.14473693,
            "GL_ORDINAL": 2039
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2016,
            "Percentage": 20.91258467,
            "GL_ORDINAL": 2040
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2017,
            "Percentage": 23.69247654,
            "GL_ORDINAL": 2041
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2018,
            "Percentage": 33.50233328,
            "GL_ORDINAL": 2042
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2019,
            "Percentage": 35.35543013,
            "GL_ORDINAL": 2043
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2020,
            "Percentage": 27.63259991,
            "GL_ORDINAL": 2044
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2021,
            "Percentage": 23.92814095,
            "GL_ORDINAL": 2045
          },
          {
            "Reference_area": "Dominican Republic",
            "Year": 2022,
            "Percentage": 7.366221748,
            "GL_ORDINAL": 2046
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2000,
            "Percentage": 2.134325471,
            "GL_ORDINAL": 2047
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2001,
            "Percentage": 2.966156324,
            "GL_ORDINAL": 2048
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2002,
            "Percentage": 2.819000834,
            "GL_ORDINAL": 2049
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2003,
            "Percentage": 3.0530444,
            "GL_ORDINAL": 2050
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2004,
            "Percentage": 3.471877699,
            "GL_ORDINAL": 2051
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2005,
            "Percentage": 3.902416845,
            "GL_ORDINAL": 2052
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2053
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2054
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2055
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2009,
            "Percentage": 4.227417133,
            "GL_ORDINAL": 2056
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2010,
            "Percentage": 2.047212878,
            "GL_ORDINAL": 2057
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2011,
            "Percentage": 3.083857178,
            "GL_ORDINAL": 2058
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2012,
            "Percentage": 5.204550198,
            "GL_ORDINAL": 2059
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2013,
            "Percentage": 4.005330653,
            "GL_ORDINAL": 2060
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2014,
            "Percentage": 4.898747849,
            "GL_ORDINAL": 2061
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2015,
            "Percentage": 5.624407538,
            "GL_ORDINAL": 2062
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2016,
            "Percentage": 2.694356076,
            "GL_ORDINAL": 2063
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2017,
            "Percentage": 2.227210721,
            "GL_ORDINAL": 2064
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2018,
            "Percentage": 3.683856199,
            "GL_ORDINAL": 2065
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2019,
            "Percentage": 3.144508577,
            "GL_ORDINAL": 2066
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2020,
            "Percentage": 4.241293421,
            "GL_ORDINAL": 2067
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2021,
            "Percentage": 3.554851282,
            "GL_ORDINAL": 2068
          },
          {
            "Reference_area": "Ecuador",
            "Year": 2022,
            "Percentage": 0.202186436,
            "GL_ORDINAL": 2069
          },
          {
            "Reference_area": "Egypt",
            "Year": 2000,
            "Percentage": 5.633802817,
            "GL_ORDINAL": 2070
          },
          {
            "Reference_area": "Egypt",
            "Year": 2001,
            "Percentage": 5.882352941,
            "GL_ORDINAL": 2071
          },
          {
            "Reference_area": "Egypt",
            "Year": 2002,
            "Percentage": 19.35483871,
            "GL_ORDINAL": 2072
          },
          {
            "Reference_area": "Egypt",
            "Year": 2003,
            "Percentage": 22.64150943,
            "GL_ORDINAL": 2073
          },
          {
            "Reference_area": "Egypt",
            "Year": 2004,
            "Percentage": 22.64150943,
            "GL_ORDINAL": 2074
          },
          {
            "Reference_area": "Egypt",
            "Year": 2005,
            "Percentage": 66.66666667,
            "GL_ORDINAL": 2075
          },
          {
            "Reference_area": "Egypt",
            "Year": 2006,
            "Percentage": 66.66666667,
            "GL_ORDINAL": 2076
          },
          {
            "Reference_area": "Egypt",
            "Year": 2007,
            "Percentage": 66.66666667,
            "GL_ORDINAL": 2077
          },
          {
            "Reference_area": "Egypt",
            "Year": 2008,
            "Percentage": 66.66666667,
            "GL_ORDINAL": 2078
          },
          {
            "Reference_area": "Egypt",
            "Year": 2009,
            "Percentage": 80,
            "GL_ORDINAL": 2079
          },
          {
            "Reference_area": "Egypt",
            "Year": 2010,
            "Percentage": 80,
            "GL_ORDINAL": 2080
          },
          {
            "Reference_area": "Egypt",
            "Year": 2011,
            "Percentage": 80,
            "GL_ORDINAL": 2081
          },
          {
            "Reference_area": "Egypt",
            "Year": 2012,
            "Percentage": 66.66666667,
            "GL_ORDINAL": 2082
          },
          {
            "Reference_area": "Egypt",
            "Year": 2013,
            "Percentage": 66.66666667,
            "GL_ORDINAL": 2083
          },
          {
            "Reference_area": "Egypt",
            "Year": 2014,
            "Percentage": 76.92307692,
            "GL_ORDINAL": 2084
          },
          {
            "Reference_area": "Egypt",
            "Year": 2015,
            "Percentage": 76.92307692,
            "GL_ORDINAL": 2085
          },
          {
            "Reference_area": "Egypt",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2086
          },
          {
            "Reference_area": "Egypt",
            "Year": 2017,
            "Percentage": 76.92307692,
            "GL_ORDINAL": 2087
          },
          {
            "Reference_area": "Egypt",
            "Year": 2018,
            "Percentage": 76.92307692,
            "GL_ORDINAL": 2088
          },
          {
            "Reference_area": "Egypt",
            "Year": 2019,
            "Percentage": 76.92307692,
            "GL_ORDINAL": 2089
          },
          {
            "Reference_area": "Egypt",
            "Year": 2020,
            "Percentage": 76.92307692,
            "GL_ORDINAL": 2090
          },
          {
            "Reference_area": "Egypt",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 2091
          },
          {
            "Reference_area": "Egypt",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 2092
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2000,
            "Percentage": 96.86170153,
            "GL_ORDINAL": 2093
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2001,
            "Percentage": 96.89196435,
            "GL_ORDINAL": 2094
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2002,
            "Percentage": 96.95198515,
            "GL_ORDINAL": 2095
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2003,
            "Percentage": 97.06596231,
            "GL_ORDINAL": 2096
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2004,
            "Percentage": 97.14598572,
            "GL_ORDINAL": 2097
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2005,
            "Percentage": 97.36141344,
            "GL_ORDINAL": 2098
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2006,
            "Percentage": 70.93316485,
            "GL_ORDINAL": 2099
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2007,
            "Percentage": 78.29535155,
            "GL_ORDINAL": 2100
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2008,
            "Percentage": 70.55911395,
            "GL_ORDINAL": 2101
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2009,
            "Percentage": 97.44430198,
            "GL_ORDINAL": 2102
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2010,
            "Percentage": 97.45588377,
            "GL_ORDINAL": 2103
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2011,
            "Percentage": 96.86743244,
            "GL_ORDINAL": 2104
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2012,
            "Percentage": 97.0759451,
            "GL_ORDINAL": 2105
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2013,
            "Percentage": 97.15969042,
            "GL_ORDINAL": 2106
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2014,
            "Percentage": 97.20691947,
            "GL_ORDINAL": 2107
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2015,
            "Percentage": 97.22299644,
            "GL_ORDINAL": 2108
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2016,
            "Percentage": 74.73124333,
            "GL_ORDINAL": 2109
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2017,
            "Percentage": 97.30376507,
            "GL_ORDINAL": 2110
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2018,
            "Percentage": 97.26807638,
            "GL_ORDINAL": 2111
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2019,
            "Percentage": 97.30590542,
            "GL_ORDINAL": 2112
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2020,
            "Percentage": 97.35864875,
            "GL_ORDINAL": 2113
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 2114
          },
          {
            "Reference_area": "El Salvador",
            "Year": 2022,
            "Percentage": 93.54840518,
            "GL_ORDINAL": 2115
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 2116
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 2117
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 2118
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 2119
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 2120
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 2121
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2122
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2123
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2124
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 2125
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 2126
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 2127
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 2128
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 2129
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 2130
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 2131
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2132
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 2133
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 2134
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 2135
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 2136
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 2137
          },
          {
            "Reference_area": "Equatorial Guinea",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 2138
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2000,
            "Percentage": 77.42322183,
            "GL_ORDINAL": 2139
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2001,
            "Percentage": 77.56490907,
            "GL_ORDINAL": 2140
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2002,
            "Percentage": 77.60929274,
            "GL_ORDINAL": 2141
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2003,
            "Percentage": 77.60929274,
            "GL_ORDINAL": 2142
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2004,
            "Percentage": 77.63634807,
            "GL_ORDINAL": 2143
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2005,
            "Percentage": 77.65508189,
            "GL_ORDINAL": 2144
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2006,
            "Percentage": 76.92461337,
            "GL_ORDINAL": 2145
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2007,
            "Percentage": 77.69018414,
            "GL_ORDINAL": 2146
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2008,
            "Percentage": 77.13487853,
            "GL_ORDINAL": 2147
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2009,
            "Percentage": 77.85534767,
            "GL_ORDINAL": 2148
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2010,
            "Percentage": 77.87487088,
            "GL_ORDINAL": 2149
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2011,
            "Percentage": 77.88445437,
            "GL_ORDINAL": 2150
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2012,
            "Percentage": 79.07742079,
            "GL_ORDINAL": 2151
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2013,
            "Percentage": 79.10861964,
            "GL_ORDINAL": 2152
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2014,
            "Percentage": 79.27777628,
            "GL_ORDINAL": 2153
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2015,
            "Percentage": 79.30653889,
            "GL_ORDINAL": 2154
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2016,
            "Percentage": 8.886517796,
            "GL_ORDINAL": 2155
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2017,
            "Percentage": 79.56345229,
            "GL_ORDINAL": 2156
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2018,
            "Percentage": 79.90149131,
            "GL_ORDINAL": 2157
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2019,
            "Percentage": 80.02073819,
            "GL_ORDINAL": 2158
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2020,
            "Percentage": 80.02912557,
            "GL_ORDINAL": 2159
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2021,
            "Percentage": 99.90815127,
            "GL_ORDINAL": 2160
          },
          {
            "Reference_area": "Eritrea",
            "Year": 2022,
            "Percentage": 99.90815127,
            "GL_ORDINAL": 2161
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2000,
            "Percentage": 40.67333254,
            "GL_ORDINAL": 2162
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2001,
            "Percentage": 60.39373621,
            "GL_ORDINAL": 2163
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2002,
            "Percentage": 13.94244831,
            "GL_ORDINAL": 2164
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2003,
            "Percentage": 78.48305046,
            "GL_ORDINAL": 2165
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2004,
            "Percentage": 73.46727885,
            "GL_ORDINAL": 2166
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2005,
            "Percentage": 71.91169233,
            "GL_ORDINAL": 2167
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2168
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2007,
            "Percentage": 75.0471328,
            "GL_ORDINAL": 2169
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2008,
            "Percentage": 75.31422943,
            "GL_ORDINAL": 2170
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2009,
            "Percentage": 55.79394596,
            "GL_ORDINAL": 2171
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2010,
            "Percentage": 88.37863278,
            "GL_ORDINAL": 2172
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2011,
            "Percentage": 84.28059335,
            "GL_ORDINAL": 2173
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2012,
            "Percentage": 90.5238084,
            "GL_ORDINAL": 2174
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2013,
            "Percentage": 83.90796452,
            "GL_ORDINAL": 2175
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2014,
            "Percentage": 90.92900705,
            "GL_ORDINAL": 2176
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2015,
            "Percentage": 69.58905732,
            "GL_ORDINAL": 2177
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2016,
            "Percentage": 40.05862815,
            "GL_ORDINAL": 2178
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2017,
            "Percentage": 71.95365373,
            "GL_ORDINAL": 2179
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2018,
            "Percentage": 60.32081396,
            "GL_ORDINAL": 2180
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2019,
            "Percentage": 91.30932029,
            "GL_ORDINAL": 2181
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2020,
            "Percentage": 50.55831925,
            "GL_ORDINAL": 2182
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2021,
            "Percentage": 68.73416686,
            "GL_ORDINAL": 2183
          },
          {
            "Reference_area": "Eswatini",
            "Year": 2022,
            "Percentage": 48.08312785,
            "GL_ORDINAL": 2184
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2000,
            "Percentage": 90.85963719,
            "GL_ORDINAL": 2185
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2001,
            "Percentage": 86.24024601,
            "GL_ORDINAL": 2186
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2002,
            "Percentage": 86.68815517,
            "GL_ORDINAL": 2187
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2003,
            "Percentage": 85.64796698,
            "GL_ORDINAL": 2188
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2004,
            "Percentage": 87.93298199,
            "GL_ORDINAL": 2189
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2005,
            "Percentage": 90.63042593,
            "GL_ORDINAL": 2190
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2006,
            "Percentage": 63.26549353,
            "GL_ORDINAL": 2191
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2007,
            "Percentage": 63.49041751,
            "GL_ORDINAL": 2192
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2008,
            "Percentage": 73.22041823,
            "GL_ORDINAL": 2193
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2009,
            "Percentage": 87.6524637,
            "GL_ORDINAL": 2194
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2010,
            "Percentage": 83.61377125,
            "GL_ORDINAL": 2195
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2011,
            "Percentage": 89.48959843,
            "GL_ORDINAL": 2196
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2012,
            "Percentage": 92.04055504,
            "GL_ORDINAL": 2197
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2013,
            "Percentage": 90.5909699,
            "GL_ORDINAL": 2198
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2014,
            "Percentage": 84.93552823,
            "GL_ORDINAL": 2199
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2015,
            "Percentage": 91.24295023,
            "GL_ORDINAL": 2200
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2016,
            "Percentage": 53.68694015,
            "GL_ORDINAL": 2201
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2017,
            "Percentage": 91.27970706,
            "GL_ORDINAL": 2202
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2018,
            "Percentage": 91.00443057,
            "GL_ORDINAL": 2203
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2019,
            "Percentage": 87.49439922,
            "GL_ORDINAL": 2204
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2020,
            "Percentage": 74.20512923,
            "GL_ORDINAL": 2205
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2021,
            "Percentage": 97.52548548,
            "GL_ORDINAL": 2206
          },
          {
            "Reference_area": "Ethiopia",
            "Year": 2022,
            "Percentage": 84.78798804,
            "GL_ORDINAL": 2207
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 2208
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 2209
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 2210
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 2211
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 2212
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 2213
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2214
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2215
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2216
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 2217
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 2218
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 2219
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 2220
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 2221
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 2222
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 2223
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2224
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 2225
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 2226
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 2227
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 2228
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 2229
          },
          {
            "Reference_area": "Faroe Islands",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 2230
          },
          {
            "Reference_area": "Fiji",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 2231
          },
          {
            "Reference_area": "Fiji",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 2232
          },
          {
            "Reference_area": "Fiji",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 2233
          },
          {
            "Reference_area": "Fiji",
            "Year": 2003,
            "Percentage": 14.34822242,
            "GL_ORDINAL": 2234
          },
          {
            "Reference_area": "Fiji",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 2235
          },
          {
            "Reference_area": "Fiji",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 2236
          },
          {
            "Reference_area": "Fiji",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2237
          },
          {
            "Reference_area": "Fiji",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2238
          },
          {
            "Reference_area": "Fiji",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2239
          },
          {
            "Reference_area": "Fiji",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 2240
          },
          {
            "Reference_area": "Fiji",
            "Year": 2010,
            "Percentage": 14.51163457,
            "GL_ORDINAL": 2241
          },
          {
            "Reference_area": "Fiji",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 2242
          },
          {
            "Reference_area": "Fiji",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 2243
          },
          {
            "Reference_area": "Fiji",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 2244
          },
          {
            "Reference_area": "Fiji",
            "Year": 2014,
            "Percentage": 19.68220676,
            "GL_ORDINAL": 2245
          },
          {
            "Reference_area": "Fiji",
            "Year": 2015,
            "Percentage": 1.277013752,
            "GL_ORDINAL": 2246
          },
          {
            "Reference_area": "Fiji",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2247
          },
          {
            "Reference_area": "Fiji",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 2248
          },
          {
            "Reference_area": "Fiji",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 2249
          },
          {
            "Reference_area": "Fiji",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 2250
          },
          {
            "Reference_area": "Fiji",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 2251
          },
          {
            "Reference_area": "Fiji",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 2252
          },
          {
            "Reference_area": "Fiji",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 2253
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 2254
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2001,
            "Percentage": 31.43892917,
            "GL_ORDINAL": 2255
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2002,
            "Percentage": 34.24526208,
            "GL_ORDINAL": 2256
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2003,
            "Percentage": 7.397401577,
            "GL_ORDINAL": 2257
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2004,
            "Percentage": 41.1415362,
            "GL_ORDINAL": 2258
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2005,
            "Percentage": 46.50837698,
            "GL_ORDINAL": 2259
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2260
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2261
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2008,
            "Percentage": 27.10491798,
            "GL_ORDINAL": 2262
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2009,
            "Percentage": 60.07959118,
            "GL_ORDINAL": 2263
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 2264
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2011,
            "Percentage": 25.53953732,
            "GL_ORDINAL": 2265
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2012,
            "Percentage": 48.15916701,
            "GL_ORDINAL": 2266
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2013,
            "Percentage": 11.95473635,
            "GL_ORDINAL": 2267
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2014,
            "Percentage": 56.67435343,
            "GL_ORDINAL": 2268
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2015,
            "Percentage": 57.29204283,
            "GL_ORDINAL": 2269
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2016,
            "Percentage": 22.18632116,
            "GL_ORDINAL": 2270
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2017,
            "Percentage": 16.37268376,
            "GL_ORDINAL": 2271
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2018,
            "Percentage": 36.24221951,
            "GL_ORDINAL": 2272
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2019,
            "Percentage": 23.55235521,
            "GL_ORDINAL": 2273
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2020,
            "Percentage": 4.526898364,
            "GL_ORDINAL": 2274
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 2275
          },
          {
            "Reference_area": "French Guiana",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 2276
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 2277
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 2278
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 2279
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 2280
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 2281
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 2282
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2283
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2284
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2285
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 2286
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2010,
            "Percentage": 16.70612607,
            "GL_ORDINAL": 2287
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2011,
            "Percentage": 8.538029003,
            "GL_ORDINAL": 2288
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 2289
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2013,
            "Percentage": 2.545131696,
            "GL_ORDINAL": 2290
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2014,
            "Percentage": 20.24267535,
            "GL_ORDINAL": 2291
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 2292
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2293
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 2294
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 2295
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 2296
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 2297
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 2298
          },
          {
            "Reference_area": "French Polynesia",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 2299
          },
          {
            "Reference_area": "Gabon",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 2300
          },
          {
            "Reference_area": "Gabon",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 2301
          },
          {
            "Reference_area": "Gabon",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 2302
          },
          {
            "Reference_area": "Gabon",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 2303
          },
          {
            "Reference_area": "Gabon",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 2304
          },
          {
            "Reference_area": "Gabon",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 2305
          },
          {
            "Reference_area": "Gabon",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2306
          },
          {
            "Reference_area": "Gabon",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2307
          },
          {
            "Reference_area": "Gabon",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2308
          },
          {
            "Reference_area": "Gabon",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 2309
          },
          {
            "Reference_area": "Gabon",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 2310
          },
          {
            "Reference_area": "Gabon",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 2311
          },
          {
            "Reference_area": "Gabon",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 2312
          },
          {
            "Reference_area": "Gabon",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 2313
          },
          {
            "Reference_area": "Gabon",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 2314
          },
          {
            "Reference_area": "Gabon",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 2315
          },
          {
            "Reference_area": "Gabon",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2316
          },
          {
            "Reference_area": "Gabon",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 2317
          },
          {
            "Reference_area": "Gabon",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 2318
          },
          {
            "Reference_area": "Gabon",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 2319
          },
          {
            "Reference_area": "Gabon",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 2320
          },
          {
            "Reference_area": "Gabon",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 2321
          },
          {
            "Reference_area": "Gabon",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 2322
          },
          {
            "Reference_area": "Gambia",
            "Year": 2000,
            "Percentage": 80.47325895,
            "GL_ORDINAL": 2323
          },
          {
            "Reference_area": "Gambia",
            "Year": 2001,
            "Percentage": 81.16743184,
            "GL_ORDINAL": 2324
          },
          {
            "Reference_area": "Gambia",
            "Year": 2002,
            "Percentage": 81.6330379,
            "GL_ORDINAL": 2325
          },
          {
            "Reference_area": "Gambia",
            "Year": 2003,
            "Percentage": 81.76572946,
            "GL_ORDINAL": 2326
          },
          {
            "Reference_area": "Gambia",
            "Year": 2004,
            "Percentage": 81.76759939,
            "GL_ORDINAL": 2327
          },
          {
            "Reference_area": "Gambia",
            "Year": 2005,
            "Percentage": 81.88510162,
            "GL_ORDINAL": 2328
          },
          {
            "Reference_area": "Gambia",
            "Year": 2006,
            "Percentage": 81.80811516,
            "GL_ORDINAL": 2329
          },
          {
            "Reference_area": "Gambia",
            "Year": 2007,
            "Percentage": 82.2889572,
            "GL_ORDINAL": 2330
          },
          {
            "Reference_area": "Gambia",
            "Year": 2008,
            "Percentage": 82.99357064,
            "GL_ORDINAL": 2331
          },
          {
            "Reference_area": "Gambia",
            "Year": 2009,
            "Percentage": 83.26097069,
            "GL_ORDINAL": 2332
          },
          {
            "Reference_area": "Gambia",
            "Year": 2010,
            "Percentage": 81.91876209,
            "GL_ORDINAL": 2333
          },
          {
            "Reference_area": "Gambia",
            "Year": 2011,
            "Percentage": 83.96226415,
            "GL_ORDINAL": 2334
          },
          {
            "Reference_area": "Gambia",
            "Year": 2012,
            "Percentage": 83.61793372,
            "GL_ORDINAL": 2335
          },
          {
            "Reference_area": "Gambia",
            "Year": 2013,
            "Percentage": 82.20576773,
            "GL_ORDINAL": 2336
          },
          {
            "Reference_area": "Gambia",
            "Year": 2014,
            "Percentage": 83.68363693,
            "GL_ORDINAL": 2337
          },
          {
            "Reference_area": "Gambia",
            "Year": 2015,
            "Percentage": 83.68363693,
            "GL_ORDINAL": 2338
          },
          {
            "Reference_area": "Gambia",
            "Year": 2016,
            "Percentage": 16.05363985,
            "GL_ORDINAL": 2339
          },
          {
            "Reference_area": "Gambia",
            "Year": 2017,
            "Percentage": 83.88477115,
            "GL_ORDINAL": 2340
          },
          {
            "Reference_area": "Gambia",
            "Year": 2018,
            "Percentage": 82.55110035,
            "GL_ORDINAL": 2341
          },
          {
            "Reference_area": "Gambia",
            "Year": 2019,
            "Percentage": 83.83927361,
            "GL_ORDINAL": 2342
          },
          {
            "Reference_area": "Gambia",
            "Year": 2020,
            "Percentage": 83.85282559,
            "GL_ORDINAL": 2343
          },
          {
            "Reference_area": "Gambia",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 2344
          },
          {
            "Reference_area": "Gambia",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 2345
          },
          {
            "Reference_area": "Georgia",
            "Year": 2000,
            "Percentage": 17.41210464,
            "GL_ORDINAL": 2346
          },
          {
            "Reference_area": "Georgia",
            "Year": 2001,
            "Percentage": 22.7144232,
            "GL_ORDINAL": 2347
          },
          {
            "Reference_area": "Georgia",
            "Year": 2002,
            "Percentage": 0.692675048,
            "GL_ORDINAL": 2348
          },
          {
            "Reference_area": "Georgia",
            "Year": 2003,
            "Percentage": 2.190475307,
            "GL_ORDINAL": 2349
          },
          {
            "Reference_area": "Georgia",
            "Year": 2004,
            "Percentage": 9.631404478,
            "GL_ORDINAL": 2350
          },
          {
            "Reference_area": "Georgia",
            "Year": 2005,
            "Percentage": 2.589870821,
            "GL_ORDINAL": 2351
          },
          {
            "Reference_area": "Georgia",
            "Year": 2006,
            "Percentage": 4.395770288,
            "GL_ORDINAL": 2352
          },
          {
            "Reference_area": "Georgia",
            "Year": 2007,
            "Percentage": 0.112893711,
            "GL_ORDINAL": 2353
          },
          {
            "Reference_area": "Georgia",
            "Year": 2008,
            "Percentage": 0.278479552,
            "GL_ORDINAL": 2354
          },
          {
            "Reference_area": "Georgia",
            "Year": 2009,
            "Percentage": 7.17209094,
            "GL_ORDINAL": 2355
          },
          {
            "Reference_area": "Georgia",
            "Year": 2010,
            "Percentage": 32.01870637,
            "GL_ORDINAL": 2356
          },
          {
            "Reference_area": "Georgia",
            "Year": 2011,
            "Percentage": 3.577074824,
            "GL_ORDINAL": 2357
          },
          {
            "Reference_area": "Georgia",
            "Year": 2012,
            "Percentage": 14.45741225,
            "GL_ORDINAL": 2358
          },
          {
            "Reference_area": "Georgia",
            "Year": 2013,
            "Percentage": 0.488878478,
            "GL_ORDINAL": 2359
          },
          {
            "Reference_area": "Georgia",
            "Year": 2014,
            "Percentage": 12.89822901,
            "GL_ORDINAL": 2360
          },
          {
            "Reference_area": "Georgia",
            "Year": 2015,
            "Percentage": 25.65172321,
            "GL_ORDINAL": 2361
          },
          {
            "Reference_area": "Georgia",
            "Year": 2016,
            "Percentage": 0.615236811,
            "GL_ORDINAL": 2362
          },
          {
            "Reference_area": "Georgia",
            "Year": 2017,
            "Percentage": 24.89398939,
            "GL_ORDINAL": 2363
          },
          {
            "Reference_area": "Georgia",
            "Year": 2018,
            "Percentage": 19.87652188,
            "GL_ORDINAL": 2364
          },
          {
            "Reference_area": "Georgia",
            "Year": 2019,
            "Percentage": 24.24013419,
            "GL_ORDINAL": 2365
          },
          {
            "Reference_area": "Georgia",
            "Year": 2020,
            "Percentage": 8.836477333,
            "GL_ORDINAL": 2366
          },
          {
            "Reference_area": "Georgia",
            "Year": 2021,
            "Percentage": 15.49821698,
            "GL_ORDINAL": 2367
          },
          {
            "Reference_area": "Georgia",
            "Year": 2022,
            "Percentage": 37.75173446,
            "GL_ORDINAL": 2368
          },
          {
            "Reference_area": "Ghana",
            "Year": 2000,
            "Percentage": 82.90649178,
            "GL_ORDINAL": 2369
          },
          {
            "Reference_area": "Ghana",
            "Year": 2001,
            "Percentage": 87.54355582,
            "GL_ORDINAL": 2370
          },
          {
            "Reference_area": "Ghana",
            "Year": 2002,
            "Percentage": 82.8685477,
            "GL_ORDINAL": 2371
          },
          {
            "Reference_area": "Ghana",
            "Year": 2003,
            "Percentage": 76.18711709,
            "GL_ORDINAL": 2372
          },
          {
            "Reference_area": "Ghana",
            "Year": 2004,
            "Percentage": 77.41565184,
            "GL_ORDINAL": 2373
          },
          {
            "Reference_area": "Ghana",
            "Year": 2005,
            "Percentage": 83.02398401,
            "GL_ORDINAL": 2374
          },
          {
            "Reference_area": "Ghana",
            "Year": 2006,
            "Percentage": 74.66256627,
            "GL_ORDINAL": 2375
          },
          {
            "Reference_area": "Ghana",
            "Year": 2007,
            "Percentage": 83.68895347,
            "GL_ORDINAL": 2376
          },
          {
            "Reference_area": "Ghana",
            "Year": 2008,
            "Percentage": 85.63353008,
            "GL_ORDINAL": 2377
          },
          {
            "Reference_area": "Ghana",
            "Year": 2009,
            "Percentage": 86.80644022,
            "GL_ORDINAL": 2378
          },
          {
            "Reference_area": "Ghana",
            "Year": 2010,
            "Percentage": 78.55406769,
            "GL_ORDINAL": 2379
          },
          {
            "Reference_area": "Ghana",
            "Year": 2011,
            "Percentage": 82.11250049,
            "GL_ORDINAL": 2380
          },
          {
            "Reference_area": "Ghana",
            "Year": 2012,
            "Percentage": 87.34614164,
            "GL_ORDINAL": 2381
          },
          {
            "Reference_area": "Ghana",
            "Year": 2013,
            "Percentage": 86.80657883,
            "GL_ORDINAL": 2382
          },
          {
            "Reference_area": "Ghana",
            "Year": 2014,
            "Percentage": 80.09924654,
            "GL_ORDINAL": 2383
          },
          {
            "Reference_area": "Ghana",
            "Year": 2015,
            "Percentage": 88.06304203,
            "GL_ORDINAL": 2384
          },
          {
            "Reference_area": "Ghana",
            "Year": 2016,
            "Percentage": 62.45105335,
            "GL_ORDINAL": 2385
          },
          {
            "Reference_area": "Ghana",
            "Year": 2017,
            "Percentage": 80.95764189,
            "GL_ORDINAL": 2386
          },
          {
            "Reference_area": "Ghana",
            "Year": 2018,
            "Percentage": 80.88733662,
            "GL_ORDINAL": 2387
          },
          {
            "Reference_area": "Ghana",
            "Year": 2019,
            "Percentage": 79.74368186,
            "GL_ORDINAL": 2388
          },
          {
            "Reference_area": "Ghana",
            "Year": 2020,
            "Percentage": 85.59062617,
            "GL_ORDINAL": 2389
          },
          {
            "Reference_area": "Ghana",
            "Year": 2021,
            "Percentage": 89.86269829,
            "GL_ORDINAL": 2390
          },
          {
            "Reference_area": "Ghana",
            "Year": 2022,
            "Percentage": 92.52852901,
            "GL_ORDINAL": 2391
          },
          {
            "Reference_area": "Greenland",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 2392
          },
          {
            "Reference_area": "Greenland",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 2393
          },
          {
            "Reference_area": "Greenland",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 2394
          },
          {
            "Reference_area": "Greenland",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 2395
          },
          {
            "Reference_area": "Greenland",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 2396
          },
          {
            "Reference_area": "Greenland",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 2397
          },
          {
            "Reference_area": "Greenland",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2398
          },
          {
            "Reference_area": "Greenland",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2399
          },
          {
            "Reference_area": "Greenland",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2400
          },
          {
            "Reference_area": "Greenland",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 2401
          },
          {
            "Reference_area": "Greenland",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 2402
          },
          {
            "Reference_area": "Greenland",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 2403
          },
          {
            "Reference_area": "Greenland",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 2404
          },
          {
            "Reference_area": "Greenland",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 2405
          },
          {
            "Reference_area": "Greenland",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 2406
          },
          {
            "Reference_area": "Greenland",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 2407
          },
          {
            "Reference_area": "Greenland",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2408
          },
          {
            "Reference_area": "Greenland",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 2409
          },
          {
            "Reference_area": "Greenland",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 2410
          },
          {
            "Reference_area": "Greenland",
            "Year": 2019,
            "Percentage": 1.662669214,
            "GL_ORDINAL": 2411
          },
          {
            "Reference_area": "Greenland",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 2412
          },
          {
            "Reference_area": "Greenland",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 2413
          },
          {
            "Reference_area": "Greenland",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 2414
          },
          {
            "Reference_area": "Grenada",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 2415
          },
          {
            "Reference_area": "Grenada",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 2416
          },
          {
            "Reference_area": "Grenada",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 2417
          },
          {
            "Reference_area": "Grenada",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 2418
          },
          {
            "Reference_area": "Grenada",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 2419
          },
          {
            "Reference_area": "Grenada",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 2420
          },
          {
            "Reference_area": "Grenada",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2421
          },
          {
            "Reference_area": "Grenada",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2422
          },
          {
            "Reference_area": "Grenada",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2423
          },
          {
            "Reference_area": "Grenada",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 2424
          },
          {
            "Reference_area": "Grenada",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 2425
          },
          {
            "Reference_area": "Grenada",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 2426
          },
          {
            "Reference_area": "Grenada",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 2427
          },
          {
            "Reference_area": "Grenada",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 2428
          },
          {
            "Reference_area": "Grenada",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 2429
          },
          {
            "Reference_area": "Grenada",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 2430
          },
          {
            "Reference_area": "Grenada",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2431
          },
          {
            "Reference_area": "Grenada",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 2432
          },
          {
            "Reference_area": "Grenada",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 2433
          },
          {
            "Reference_area": "Grenada",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 2434
          },
          {
            "Reference_area": "Grenada",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 2435
          },
          {
            "Reference_area": "Grenada",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 2436
          },
          {
            "Reference_area": "Grenada",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 2437
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2000,
            "Percentage": 47.63515895,
            "GL_ORDINAL": 2438
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2001,
            "Percentage": 61.80408739,
            "GL_ORDINAL": 2439
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 2440
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2003,
            "Percentage": 47.60831279,
            "GL_ORDINAL": 2441
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 2442
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 2443
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2444
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2445
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2446
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 2447
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 2448
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 2449
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 2450
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2013,
            "Percentage": 48.1009911,
            "GL_ORDINAL": 2451
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 2452
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2015,
            "Percentage": 75.7217611,
            "GL_ORDINAL": 2453
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2454
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 2455
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 2456
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2019,
            "Percentage": 60.23954269,
            "GL_ORDINAL": 2457
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 2458
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 2459
          },
          {
            "Reference_area": "Guadeloupe",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 2460
          },
          {
            "Reference_area": "Guam",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 2461
          },
          {
            "Reference_area": "Guam",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 2462
          },
          {
            "Reference_area": "Guam",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 2463
          },
          {
            "Reference_area": "Guam",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 2464
          },
          {
            "Reference_area": "Guam",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 2465
          },
          {
            "Reference_area": "Guam",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 2466
          },
          {
            "Reference_area": "Guam",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2467
          },
          {
            "Reference_area": "Guam",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2468
          },
          {
            "Reference_area": "Guam",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2469
          },
          {
            "Reference_area": "Guam",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 2470
          },
          {
            "Reference_area": "Guam",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 2471
          },
          {
            "Reference_area": "Guam",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 2472
          },
          {
            "Reference_area": "Guam",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 2473
          },
          {
            "Reference_area": "Guam",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 2474
          },
          {
            "Reference_area": "Guam",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 2475
          },
          {
            "Reference_area": "Guam",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 2476
          },
          {
            "Reference_area": "Guam",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2477
          },
          {
            "Reference_area": "Guam",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 2478
          },
          {
            "Reference_area": "Guam",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 2479
          },
          {
            "Reference_area": "Guam",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 2480
          },
          {
            "Reference_area": "Guam",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 2481
          },
          {
            "Reference_area": "Guam",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 2482
          },
          {
            "Reference_area": "Guam",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 2483
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2000,
            "Percentage": 56.30279983,
            "GL_ORDINAL": 2484
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2001,
            "Percentage": 53.77633684,
            "GL_ORDINAL": 2485
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2002,
            "Percentage": 59.59509854,
            "GL_ORDINAL": 2486
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2003,
            "Percentage": 61.26126126,
            "GL_ORDINAL": 2487
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2004,
            "Percentage": 40.26660333,
            "GL_ORDINAL": 2488
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2005,
            "Percentage": 52.01262207,
            "GL_ORDINAL": 2489
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2006,
            "Percentage": 19.7764439,
            "GL_ORDINAL": 2490
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2007,
            "Percentage": 22.34986734,
            "GL_ORDINAL": 2491
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2008,
            "Percentage": 21.16984433,
            "GL_ORDINAL": 2492
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2009,
            "Percentage": 63.21935903,
            "GL_ORDINAL": 2493
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2010,
            "Percentage": 56.11226498,
            "GL_ORDINAL": 2494
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2011,
            "Percentage": 55.03077275,
            "GL_ORDINAL": 2495
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2012,
            "Percentage": 50.45232805,
            "GL_ORDINAL": 2496
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2013,
            "Percentage": 59.52689094,
            "GL_ORDINAL": 2497
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2014,
            "Percentage": 51.13165675,
            "GL_ORDINAL": 2498
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2015,
            "Percentage": 52.91367591,
            "GL_ORDINAL": 2499
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2016,
            "Percentage": 41.61367502,
            "GL_ORDINAL": 2500
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2017,
            "Percentage": 57.07347596,
            "GL_ORDINAL": 2501
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2018,
            "Percentage": 55.82085916,
            "GL_ORDINAL": 2502
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2019,
            "Percentage": 57.4386796,
            "GL_ORDINAL": 2503
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2020,
            "Percentage": 69.41868857,
            "GL_ORDINAL": 2504
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2021,
            "Percentage": 56.02161446,
            "GL_ORDINAL": 2505
          },
          {
            "Reference_area": "Guatemala",
            "Year": 2022,
            "Percentage": 42.85358112,
            "GL_ORDINAL": 2506
          },
          {
            "Reference_area": "Guinea",
            "Year": 2000,
            "Percentage": 93.50747961,
            "GL_ORDINAL": 2507
          },
          {
            "Reference_area": "Guinea",
            "Year": 2001,
            "Percentage": 94.35635498,
            "GL_ORDINAL": 2508
          },
          {
            "Reference_area": "Guinea",
            "Year": 2002,
            "Percentage": 94.21967839,
            "GL_ORDINAL": 2509
          },
          {
            "Reference_area": "Guinea",
            "Year": 2003,
            "Percentage": 94.29227548,
            "GL_ORDINAL": 2510
          },
          {
            "Reference_area": "Guinea",
            "Year": 2004,
            "Percentage": 94.27558879,
            "GL_ORDINAL": 2511
          },
          {
            "Reference_area": "Guinea",
            "Year": 2005,
            "Percentage": 93.39005323,
            "GL_ORDINAL": 2512
          },
          {
            "Reference_area": "Guinea",
            "Year": 2006,
            "Percentage": 86.93792732,
            "GL_ORDINAL": 2513
          },
          {
            "Reference_area": "Guinea",
            "Year": 2007,
            "Percentage": 93.82653792,
            "GL_ORDINAL": 2514
          },
          {
            "Reference_area": "Guinea",
            "Year": 2008,
            "Percentage": 93.90920963,
            "GL_ORDINAL": 2515
          },
          {
            "Reference_area": "Guinea",
            "Year": 2009,
            "Percentage": 94.87598273,
            "GL_ORDINAL": 2516
          },
          {
            "Reference_area": "Guinea",
            "Year": 2010,
            "Percentage": 94.28086003,
            "GL_ORDINAL": 2517
          },
          {
            "Reference_area": "Guinea",
            "Year": 2011,
            "Percentage": 94.37397125,
            "GL_ORDINAL": 2518
          },
          {
            "Reference_area": "Guinea",
            "Year": 2012,
            "Percentage": 94.42651039,
            "GL_ORDINAL": 2519
          },
          {
            "Reference_area": "Guinea",
            "Year": 2013,
            "Percentage": 94.4135916,
            "GL_ORDINAL": 2520
          },
          {
            "Reference_area": "Guinea",
            "Year": 2014,
            "Percentage": 93.19319542,
            "GL_ORDINAL": 2521
          },
          {
            "Reference_area": "Guinea",
            "Year": 2015,
            "Percentage": 94.28355615,
            "GL_ORDINAL": 2522
          },
          {
            "Reference_area": "Guinea",
            "Year": 2016,
            "Percentage": 75.38387754,
            "GL_ORDINAL": 2523
          },
          {
            "Reference_area": "Guinea",
            "Year": 2017,
            "Percentage": 93.49385708,
            "GL_ORDINAL": 2524
          },
          {
            "Reference_area": "Guinea",
            "Year": 2018,
            "Percentage": 94.0446408,
            "GL_ORDINAL": 2525
          },
          {
            "Reference_area": "Guinea",
            "Year": 2019,
            "Percentage": 94.10580379,
            "GL_ORDINAL": 2526
          },
          {
            "Reference_area": "Guinea",
            "Year": 2020,
            "Percentage": 94.83543351,
            "GL_ORDINAL": 2527
          },
          {
            "Reference_area": "Guinea",
            "Year": 2021,
            "Percentage": 98.84517645,
            "GL_ORDINAL": 2528
          },
          {
            "Reference_area": "Guinea",
            "Year": 2022,
            "Percentage": 99.96405776,
            "GL_ORDINAL": 2529
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2000,
            "Percentage": 92.35039334,
            "GL_ORDINAL": 2530
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2001,
            "Percentage": 92.50827451,
            "GL_ORDINAL": 2531
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2002,
            "Percentage": 92.54490314,
            "GL_ORDINAL": 2532
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2003,
            "Percentage": 92.68070298,
            "GL_ORDINAL": 2533
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2004,
            "Percentage": 92.47635819,
            "GL_ORDINAL": 2534
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2005,
            "Percentage": 92.92928891,
            "GL_ORDINAL": 2535
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2006,
            "Percentage": 92.96147151,
            "GL_ORDINAL": 2536
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2007,
            "Percentage": 93.36840255,
            "GL_ORDINAL": 2537
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2008,
            "Percentage": 93.71655287,
            "GL_ORDINAL": 2538
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2009,
            "Percentage": 94.22468641,
            "GL_ORDINAL": 2539
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2010,
            "Percentage": 94.49035031,
            "GL_ORDINAL": 2540
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2011,
            "Percentage": 95.89989482,
            "GL_ORDINAL": 2541
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2012,
            "Percentage": 94.46647158,
            "GL_ORDINAL": 2542
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2013,
            "Percentage": 94.26502009,
            "GL_ORDINAL": 2543
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2014,
            "Percentage": 94.60508281,
            "GL_ORDINAL": 2544
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2015,
            "Percentage": 94.60508281,
            "GL_ORDINAL": 2545
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2016,
            "Percentage": 72.52422238,
            "GL_ORDINAL": 2546
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2017,
            "Percentage": 94.93820968,
            "GL_ORDINAL": 2547
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2018,
            "Percentage": 95.20589788,
            "GL_ORDINAL": 2548
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2019,
            "Percentage": 95.61670446,
            "GL_ORDINAL": 2549
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2020,
            "Percentage": 95.62550013,
            "GL_ORDINAL": 2550
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 2551
          },
          {
            "Reference_area": "Guinea-Bissau",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 2552
          },
          {
            "Reference_area": "Guyana",
            "Year": 2000,
            "Percentage": 3.616680684,
            "GL_ORDINAL": 2553
          },
          {
            "Reference_area": "Guyana",
            "Year": 2001,
            "Percentage": 11.80435395,
            "GL_ORDINAL": 2554
          },
          {
            "Reference_area": "Guyana",
            "Year": 2002,
            "Percentage": 8.648614103,
            "GL_ORDINAL": 2555
          },
          {
            "Reference_area": "Guyana",
            "Year": 2003,
            "Percentage": 15.77816765,
            "GL_ORDINAL": 2556
          },
          {
            "Reference_area": "Guyana",
            "Year": 2004,
            "Percentage": 8.783449126,
            "GL_ORDINAL": 2557
          },
          {
            "Reference_area": "Guyana",
            "Year": 2005,
            "Percentage": 7.246149439,
            "GL_ORDINAL": 2558
          },
          {
            "Reference_area": "Guyana",
            "Year": 2006,
            "Percentage": 0.477909368,
            "GL_ORDINAL": 2559
          },
          {
            "Reference_area": "Guyana",
            "Year": 2007,
            "Percentage": 0.871949543,
            "GL_ORDINAL": 2560
          },
          {
            "Reference_area": "Guyana",
            "Year": 2008,
            "Percentage": 0.554522573,
            "GL_ORDINAL": 2561
          },
          {
            "Reference_area": "Guyana",
            "Year": 2009,
            "Percentage": 8.3138113,
            "GL_ORDINAL": 2562
          },
          {
            "Reference_area": "Guyana",
            "Year": 2010,
            "Percentage": 6.004352714,
            "GL_ORDINAL": 2563
          },
          {
            "Reference_area": "Guyana",
            "Year": 2011,
            "Percentage": 3.147406634,
            "GL_ORDINAL": 2564
          },
          {
            "Reference_area": "Guyana",
            "Year": 2012,
            "Percentage": 3.7095504,
            "GL_ORDINAL": 2565
          },
          {
            "Reference_area": "Guyana",
            "Year": 2013,
            "Percentage": 6.459726691,
            "GL_ORDINAL": 2566
          },
          {
            "Reference_area": "Guyana",
            "Year": 2014,
            "Percentage": 6.783822148,
            "GL_ORDINAL": 2567
          },
          {
            "Reference_area": "Guyana",
            "Year": 2015,
            "Percentage": 9.920999493,
            "GL_ORDINAL": 2568
          },
          {
            "Reference_area": "Guyana",
            "Year": 2016,
            "Percentage": 8.277035994,
            "GL_ORDINAL": 2569
          },
          {
            "Reference_area": "Guyana",
            "Year": 2017,
            "Percentage": 4.387722158,
            "GL_ORDINAL": 2570
          },
          {
            "Reference_area": "Guyana",
            "Year": 2018,
            "Percentage": 7.03450964,
            "GL_ORDINAL": 2571
          },
          {
            "Reference_area": "Guyana",
            "Year": 2019,
            "Percentage": 15.01420964,
            "GL_ORDINAL": 2572
          },
          {
            "Reference_area": "Guyana",
            "Year": 2020,
            "Percentage": 8.677142148,
            "GL_ORDINAL": 2573
          },
          {
            "Reference_area": "Guyana",
            "Year": 2021,
            "Percentage": 0.087653425,
            "GL_ORDINAL": 2574
          },
          {
            "Reference_area": "Guyana",
            "Year": 2022,
            "Percentage": 0.591647631,
            "GL_ORDINAL": 2575
          },
          {
            "Reference_area": "Haiti",
            "Year": 2000,
            "Percentage": 14.42512247,
            "GL_ORDINAL": 2576
          },
          {
            "Reference_area": "Haiti",
            "Year": 2001,
            "Percentage": 26.31884282,
            "GL_ORDINAL": 2577
          },
          {
            "Reference_area": "Haiti",
            "Year": 2002,
            "Percentage": 31.19841468,
            "GL_ORDINAL": 2578
          },
          {
            "Reference_area": "Haiti",
            "Year": 2003,
            "Percentage": 12.96655962,
            "GL_ORDINAL": 2579
          },
          {
            "Reference_area": "Haiti",
            "Year": 2004,
            "Percentage": 14.5746888,
            "GL_ORDINAL": 2580
          },
          {
            "Reference_area": "Haiti",
            "Year": 2005,
            "Percentage": 50.94984362,
            "GL_ORDINAL": 2581
          },
          {
            "Reference_area": "Haiti",
            "Year": 2006,
            "Percentage": 0.655000678,
            "GL_ORDINAL": 2582
          },
          {
            "Reference_area": "Haiti",
            "Year": 2007,
            "Percentage": 0.327982713,
            "GL_ORDINAL": 2583
          },
          {
            "Reference_area": "Haiti",
            "Year": 2008,
            "Percentage": 0.571494992,
            "GL_ORDINAL": 2584
          },
          {
            "Reference_area": "Haiti",
            "Year": 2009,
            "Percentage": 31.57343877,
            "GL_ORDINAL": 2585
          },
          {
            "Reference_area": "Haiti",
            "Year": 2010,
            "Percentage": 10.27825543,
            "GL_ORDINAL": 2586
          },
          {
            "Reference_area": "Haiti",
            "Year": 2011,
            "Percentage": 26.2627057,
            "GL_ORDINAL": 2587
          },
          {
            "Reference_area": "Haiti",
            "Year": 2012,
            "Percentage": 25.95350311,
            "GL_ORDINAL": 2588
          },
          {
            "Reference_area": "Haiti",
            "Year": 2013,
            "Percentage": 15.03745915,
            "GL_ORDINAL": 2589
          },
          {
            "Reference_area": "Haiti",
            "Year": 2014,
            "Percentage": 37.89458649,
            "GL_ORDINAL": 2590
          },
          {
            "Reference_area": "Haiti",
            "Year": 2015,
            "Percentage": 69.62671184,
            "GL_ORDINAL": 2591
          },
          {
            "Reference_area": "Haiti",
            "Year": 2016,
            "Percentage": 2.545075432,
            "GL_ORDINAL": 2592
          },
          {
            "Reference_area": "Haiti",
            "Year": 2017,
            "Percentage": 15.46374851,
            "GL_ORDINAL": 2593
          },
          {
            "Reference_area": "Haiti",
            "Year": 2018,
            "Percentage": 24.60473903,
            "GL_ORDINAL": 2594
          },
          {
            "Reference_area": "Haiti",
            "Year": 2019,
            "Percentage": 20.75834424,
            "GL_ORDINAL": 2595
          },
          {
            "Reference_area": "Haiti",
            "Year": 2020,
            "Percentage": 25.29493692,
            "GL_ORDINAL": 2596
          },
          {
            "Reference_area": "Haiti",
            "Year": 2021,
            "Percentage": 21.19181371,
            "GL_ORDINAL": 2597
          },
          {
            "Reference_area": "Haiti",
            "Year": 2022,
            "Percentage": 4.90751941,
            "GL_ORDINAL": 2598
          },
          {
            "Reference_area": "Holy See",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 2599
          },
          {
            "Reference_area": "Holy See",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 2600
          },
          {
            "Reference_area": "Holy See",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 2601
          },
          {
            "Reference_area": "Holy See",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 2602
          },
          {
            "Reference_area": "Holy See",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 2603
          },
          {
            "Reference_area": "Holy See",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 2604
          },
          {
            "Reference_area": "Holy See",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2605
          },
          {
            "Reference_area": "Holy See",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2606
          },
          {
            "Reference_area": "Holy See",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2607
          },
          {
            "Reference_area": "Holy See",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 2608
          },
          {
            "Reference_area": "Holy See",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 2609
          },
          {
            "Reference_area": "Holy See",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 2610
          },
          {
            "Reference_area": "Holy See",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 2611
          },
          {
            "Reference_area": "Holy See",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 2612
          },
          {
            "Reference_area": "Holy See",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 2613
          },
          {
            "Reference_area": "Holy See",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 2614
          },
          {
            "Reference_area": "Holy See",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2615
          },
          {
            "Reference_area": "Holy See",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 2616
          },
          {
            "Reference_area": "Holy See",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 2617
          },
          {
            "Reference_area": "Holy See",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 2618
          },
          {
            "Reference_area": "Holy See",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 2619
          },
          {
            "Reference_area": "Holy See",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 2620
          },
          {
            "Reference_area": "Holy See",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 2621
          },
          {
            "Reference_area": "Honduras",
            "Year": 2000,
            "Percentage": 50.73837483,
            "GL_ORDINAL": 2622
          },
          {
            "Reference_area": "Honduras",
            "Year": 2001,
            "Percentage": 47.52097893,
            "GL_ORDINAL": 2623
          },
          {
            "Reference_area": "Honduras",
            "Year": 2002,
            "Percentage": 56.82854976,
            "GL_ORDINAL": 2624
          },
          {
            "Reference_area": "Honduras",
            "Year": 2003,
            "Percentage": 60.80922024,
            "GL_ORDINAL": 2625
          },
          {
            "Reference_area": "Honduras",
            "Year": 2004,
            "Percentage": 38.69093596,
            "GL_ORDINAL": 2626
          },
          {
            "Reference_area": "Honduras",
            "Year": 2005,
            "Percentage": 59.86726824,
            "GL_ORDINAL": 2627
          },
          {
            "Reference_area": "Honduras",
            "Year": 2006,
            "Percentage": 23.15309925,
            "GL_ORDINAL": 2628
          },
          {
            "Reference_area": "Honduras",
            "Year": 2007,
            "Percentage": 19.99139795,
            "GL_ORDINAL": 2629
          },
          {
            "Reference_area": "Honduras",
            "Year": 2008,
            "Percentage": 24.15729729,
            "GL_ORDINAL": 2630
          },
          {
            "Reference_area": "Honduras",
            "Year": 2009,
            "Percentage": 50.37227567,
            "GL_ORDINAL": 2631
          },
          {
            "Reference_area": "Honduras",
            "Year": 2010,
            "Percentage": 33.34721471,
            "GL_ORDINAL": 2632
          },
          {
            "Reference_area": "Honduras",
            "Year": 2011,
            "Percentage": 51.3598858,
            "GL_ORDINAL": 2633
          },
          {
            "Reference_area": "Honduras",
            "Year": 2012,
            "Percentage": 31.28677386,
            "GL_ORDINAL": 2634
          },
          {
            "Reference_area": "Honduras",
            "Year": 2013,
            "Percentage": 44.03206943,
            "GL_ORDINAL": 2635
          },
          {
            "Reference_area": "Honduras",
            "Year": 2014,
            "Percentage": 50.53447438,
            "GL_ORDINAL": 2636
          },
          {
            "Reference_area": "Honduras",
            "Year": 2015,
            "Percentage": 46.35535319,
            "GL_ORDINAL": 2637
          },
          {
            "Reference_area": "Honduras",
            "Year": 2016,
            "Percentage": 26.72662842,
            "GL_ORDINAL": 2638
          },
          {
            "Reference_area": "Honduras",
            "Year": 2017,
            "Percentage": 42.1017438,
            "GL_ORDINAL": 2639
          },
          {
            "Reference_area": "Honduras",
            "Year": 2018,
            "Percentage": 39.93921768,
            "GL_ORDINAL": 2640
          },
          {
            "Reference_area": "Honduras",
            "Year": 2019,
            "Percentage": 54.9418905,
            "GL_ORDINAL": 2641
          },
          {
            "Reference_area": "Honduras",
            "Year": 2020,
            "Percentage": 67.00134049,
            "GL_ORDINAL": 2642
          },
          {
            "Reference_area": "Honduras",
            "Year": 2021,
            "Percentage": 36.8449222,
            "GL_ORDINAL": 2643
          },
          {
            "Reference_area": "Honduras",
            "Year": 2022,
            "Percentage": 36.58718247,
            "GL_ORDINAL": 2644
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 2645
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 2646
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 2647
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 2648
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 2649
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 2650
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2651
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2652
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2653
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 2654
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 2655
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 2656
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 2657
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 2658
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 2659
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 2660
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2661
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 2662
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 2663
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2019,
            "Percentage": 72.15423303,
            "GL_ORDINAL": 2664
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 2665
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 2666
          },
          {
            "Reference_area": "Hong Kong (China)",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 2667
          },
          {
            "Reference_area": "India",
            "Year": 2000,
            "Percentage": 63.15319861,
            "GL_ORDINAL": 2668
          },
          {
            "Reference_area": "India",
            "Year": 2001,
            "Percentage": 66.02630965,
            "GL_ORDINAL": 2669
          },
          {
            "Reference_area": "India",
            "Year": 2002,
            "Percentage": 68.52358414,
            "GL_ORDINAL": 2670
          },
          {
            "Reference_area": "India",
            "Year": 2003,
            "Percentage": 62.4327912,
            "GL_ORDINAL": 2671
          },
          {
            "Reference_area": "India",
            "Year": 2004,
            "Percentage": 67.02722638,
            "GL_ORDINAL": 2672
          },
          {
            "Reference_area": "India",
            "Year": 2005,
            "Percentage": 68.36833226,
            "GL_ORDINAL": 2673
          },
          {
            "Reference_area": "India",
            "Year": 2006,
            "Percentage": 60.5726918,
            "GL_ORDINAL": 2674
          },
          {
            "Reference_area": "India",
            "Year": 2007,
            "Percentage": 54.37090004,
            "GL_ORDINAL": 2675
          },
          {
            "Reference_area": "India",
            "Year": 2008,
            "Percentage": 54.54567761,
            "GL_ORDINAL": 2676
          },
          {
            "Reference_area": "India",
            "Year": 2009,
            "Percentage": 72.31858727,
            "GL_ORDINAL": 2677
          },
          {
            "Reference_area": "India",
            "Year": 2010,
            "Percentage": 70.87687034,
            "GL_ORDINAL": 2678
          },
          {
            "Reference_area": "India",
            "Year": 2011,
            "Percentage": 65.54144486,
            "GL_ORDINAL": 2679
          },
          {
            "Reference_area": "India",
            "Year": 2012,
            "Percentage": 69.72188838,
            "GL_ORDINAL": 2680
          },
          {
            "Reference_area": "India",
            "Year": 2013,
            "Percentage": 69.27034192,
            "GL_ORDINAL": 2681
          },
          {
            "Reference_area": "India",
            "Year": 2014,
            "Percentage": 70.61411389,
            "GL_ORDINAL": 2682
          },
          {
            "Reference_area": "India",
            "Year": 2015,
            "Percentage": 66.65799707,
            "GL_ORDINAL": 2683
          },
          {
            "Reference_area": "India",
            "Year": 2016,
            "Percentage": 33.68208145,
            "GL_ORDINAL": 2684
          },
          {
            "Reference_area": "India",
            "Year": 2017,
            "Percentage": 61.65907041,
            "GL_ORDINAL": 2685
          },
          {
            "Reference_area": "India",
            "Year": 2018,
            "Percentage": 63.79898456,
            "GL_ORDINAL": 2686
          },
          {
            "Reference_area": "India",
            "Year": 2019,
            "Percentage": 62.15181012,
            "GL_ORDINAL": 2687
          },
          {
            "Reference_area": "India",
            "Year": 2020,
            "Percentage": 62.91339366,
            "GL_ORDINAL": 2688
          },
          {
            "Reference_area": "India",
            "Year": 2021,
            "Percentage": 76.36515693,
            "GL_ORDINAL": 2689
          },
          {
            "Reference_area": "India",
            "Year": 2022,
            "Percentage": 68.64277409,
            "GL_ORDINAL": 2690
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2000,
            "Percentage": 1.309378589,
            "GL_ORDINAL": 2691
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2001,
            "Percentage": 1.764902029,
            "GL_ORDINAL": 2692
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2002,
            "Percentage": 8.658768156,
            "GL_ORDINAL": 2693
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2003,
            "Percentage": 1.992986104,
            "GL_ORDINAL": 2694
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2004,
            "Percentage": 5.252464378,
            "GL_ORDINAL": 2695
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2005,
            "Percentage": 1.776975805,
            "GL_ORDINAL": 2696
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2006,
            "Percentage": 0.999868975,
            "GL_ORDINAL": 2697
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2007,
            "Percentage": 0.056137432,
            "GL_ORDINAL": 2698
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2008,
            "Percentage": 0.098155167,
            "GL_ORDINAL": 2699
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2009,
            "Percentage": 3.045547159,
            "GL_ORDINAL": 2700
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2010,
            "Percentage": 0.079713462,
            "GL_ORDINAL": 2701
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2011,
            "Percentage": 3.294525612,
            "GL_ORDINAL": 2702
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2012,
            "Percentage": 2.367364887,
            "GL_ORDINAL": 2703
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2013,
            "Percentage": 2.387365849,
            "GL_ORDINAL": 2704
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2014,
            "Percentage": 6.975346737,
            "GL_ORDINAL": 2705
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2015,
            "Percentage": 15.31089484,
            "GL_ORDINAL": 2706
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2016,
            "Percentage": 0.229116389,
            "GL_ORDINAL": 2707
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2017,
            "Percentage": 1.789888674,
            "GL_ORDINAL": 2708
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2018,
            "Percentage": 4.502069871,
            "GL_ORDINAL": 2709
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2019,
            "Percentage": 7.878186235,
            "GL_ORDINAL": 2710
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2020,
            "Percentage": 1.57341182,
            "GL_ORDINAL": 2711
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2021,
            "Percentage": 0.795576383,
            "GL_ORDINAL": 2712
          },
          {
            "Reference_area": "Indonesia",
            "Year": 2022,
            "Percentage": 0.06796929,
            "GL_ORDINAL": 2713
          },
          {
            "Reference_area": "Iran",
            "Year": 2000,
            "Percentage": 48.04952123,
            "GL_ORDINAL": 2714
          },
          {
            "Reference_area": "Iran",
            "Year": 2001,
            "Percentage": 36.74493246,
            "GL_ORDINAL": 2715
          },
          {
            "Reference_area": "Iran",
            "Year": 2002,
            "Percentage": 38.70379949,
            "GL_ORDINAL": 2716
          },
          {
            "Reference_area": "Iran",
            "Year": 2003,
            "Percentage": 42.06371626,
            "GL_ORDINAL": 2717
          },
          {
            "Reference_area": "Iran",
            "Year": 2004,
            "Percentage": 33.40226528,
            "GL_ORDINAL": 2718
          },
          {
            "Reference_area": "Iran",
            "Year": 2005,
            "Percentage": 33.70911583,
            "GL_ORDINAL": 2719
          },
          {
            "Reference_area": "Iran",
            "Year": 2006,
            "Percentage": 23.33816262,
            "GL_ORDINAL": 2720
          },
          {
            "Reference_area": "Iran",
            "Year": 2007,
            "Percentage": 12.62206062,
            "GL_ORDINAL": 2721
          },
          {
            "Reference_area": "Iran",
            "Year": 2008,
            "Percentage": 15.6136295,
            "GL_ORDINAL": 2722
          },
          {
            "Reference_area": "Iran",
            "Year": 2009,
            "Percentage": 36.5750689,
            "GL_ORDINAL": 2723
          },
          {
            "Reference_area": "Iran",
            "Year": 2010,
            "Percentage": 58.16574612,
            "GL_ORDINAL": 2724
          },
          {
            "Reference_area": "Iran",
            "Year": 2011,
            "Percentage": 46.2517227,
            "GL_ORDINAL": 2725
          },
          {
            "Reference_area": "Iran",
            "Year": 2012,
            "Percentage": 37.71935453,
            "GL_ORDINAL": 2726
          },
          {
            "Reference_area": "Iran",
            "Year": 2013,
            "Percentage": 36.42883199,
            "GL_ORDINAL": 2727
          },
          {
            "Reference_area": "Iran",
            "Year": 2014,
            "Percentage": 46.96845687,
            "GL_ORDINAL": 2728
          },
          {
            "Reference_area": "Iran",
            "Year": 2015,
            "Percentage": 44.39331081,
            "GL_ORDINAL": 2729
          },
          {
            "Reference_area": "Iran",
            "Year": 2016,
            "Percentage": 12.35812265,
            "GL_ORDINAL": 2730
          },
          {
            "Reference_area": "Iran",
            "Year": 2017,
            "Percentage": 59.26283158,
            "GL_ORDINAL": 2731
          },
          {
            "Reference_area": "Iran",
            "Year": 2018,
            "Percentage": 47.04227922,
            "GL_ORDINAL": 2732
          },
          {
            "Reference_area": "Iran",
            "Year": 2019,
            "Percentage": 42.23346189,
            "GL_ORDINAL": 2733
          },
          {
            "Reference_area": "Iran",
            "Year": 2020,
            "Percentage": 38.77880668,
            "GL_ORDINAL": 2734
          },
          {
            "Reference_area": "Iran",
            "Year": 2021,
            "Percentage": 62.83730766,
            "GL_ORDINAL": 2735
          },
          {
            "Reference_area": "Iran",
            "Year": 2022,
            "Percentage": 43.48726304,
            "GL_ORDINAL": 2736
          },
          {
            "Reference_area": "Iraq",
            "Year": 2000,
            "Percentage": 72.95243456,
            "GL_ORDINAL": 2737
          },
          {
            "Reference_area": "Iraq",
            "Year": 2001,
            "Percentage": 72.91901012,
            "GL_ORDINAL": 2738
          },
          {
            "Reference_area": "Iraq",
            "Year": 2002,
            "Percentage": 72.98737728,
            "GL_ORDINAL": 2739
          },
          {
            "Reference_area": "Iraq",
            "Year": 2003,
            "Percentage": 73.12517424,
            "GL_ORDINAL": 2740
          },
          {
            "Reference_area": "Iraq",
            "Year": 2004,
            "Percentage": 74.25980261,
            "GL_ORDINAL": 2741
          },
          {
            "Reference_area": "Iraq",
            "Year": 2005,
            "Percentage": 74.40127728,
            "GL_ORDINAL": 2742
          },
          {
            "Reference_area": "Iraq",
            "Year": 2006,
            "Percentage": 74.42108065,
            "GL_ORDINAL": 2743
          },
          {
            "Reference_area": "Iraq",
            "Year": 2007,
            "Percentage": 74.73993065,
            "GL_ORDINAL": 2744
          },
          {
            "Reference_area": "Iraq",
            "Year": 2008,
            "Percentage": 74.68758309,
            "GL_ORDINAL": 2745
          },
          {
            "Reference_area": "Iraq",
            "Year": 2009,
            "Percentage": 76.84905142,
            "GL_ORDINAL": 2746
          },
          {
            "Reference_area": "Iraq",
            "Year": 2010,
            "Percentage": 76.95484581,
            "GL_ORDINAL": 2747
          },
          {
            "Reference_area": "Iraq",
            "Year": 2011,
            "Percentage": 77.03073546,
            "GL_ORDINAL": 2748
          },
          {
            "Reference_area": "Iraq",
            "Year": 2012,
            "Percentage": 76.2349067,
            "GL_ORDINAL": 2749
          },
          {
            "Reference_area": "Iraq",
            "Year": 2013,
            "Percentage": 76.22017354,
            "GL_ORDINAL": 2750
          },
          {
            "Reference_area": "Iraq",
            "Year": 2014,
            "Percentage": 76.55246253,
            "GL_ORDINAL": 2751
          },
          {
            "Reference_area": "Iraq",
            "Year": 2015,
            "Percentage": 76.55246253,
            "GL_ORDINAL": 2752
          },
          {
            "Reference_area": "Iraq",
            "Year": 2016,
            "Percentage": 5.251141553,
            "GL_ORDINAL": 2753
          },
          {
            "Reference_area": "Iraq",
            "Year": 2017,
            "Percentage": 76.99026703,
            "GL_ORDINAL": 2754
          },
          {
            "Reference_area": "Iraq",
            "Year": 2018,
            "Percentage": 76.99004975,
            "GL_ORDINAL": 2755
          },
          {
            "Reference_area": "Iraq",
            "Year": 2019,
            "Percentage": 77.0755886,
            "GL_ORDINAL": 2756
          },
          {
            "Reference_area": "Iraq",
            "Year": 2020,
            "Percentage": 77.63157895,
            "GL_ORDINAL": 2757
          },
          {
            "Reference_area": "Iraq",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 2758
          },
          {
            "Reference_area": "Iraq",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 2759
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 2760
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 2761
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 2762
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 2763
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 2764
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 2765
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2766
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2767
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2768
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 2769
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 2770
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 2771
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 2772
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 2773
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 2774
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 2775
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2776
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 2777
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 2778
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 2779
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 2780
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 2781
          },
          {
            "Reference_area": "Isle of Man",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 2782
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2000,
            "Percentage": 50.65066026,
            "GL_ORDINAL": 2783
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2001,
            "Percentage": 50.19364531,
            "GL_ORDINAL": 2784
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2002,
            "Percentage": 46.99242247,
            "GL_ORDINAL": 2785
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2003,
            "Percentage": 50.37909559,
            "GL_ORDINAL": 2786
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2004,
            "Percentage": 50.54175437,
            "GL_ORDINAL": 2787
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2005,
            "Percentage": 67.29512024,
            "GL_ORDINAL": 2788
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2006,
            "Percentage": 5.38618876,
            "GL_ORDINAL": 2789
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2007,
            "Percentage": 6.159702481,
            "GL_ORDINAL": 2790
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2791
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2009,
            "Percentage": 52.98956367,
            "GL_ORDINAL": 2792
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2010,
            "Percentage": 44.2958231,
            "GL_ORDINAL": 2793
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2011,
            "Percentage": 44.34157188,
            "GL_ORDINAL": 2794
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2012,
            "Percentage": 42.54829079,
            "GL_ORDINAL": 2795
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2013,
            "Percentage": 49.64912281,
            "GL_ORDINAL": 2796
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2014,
            "Percentage": 66.86870917,
            "GL_ORDINAL": 2797
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2015,
            "Percentage": 84.93035205,
            "GL_ORDINAL": 2798
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2016,
            "Percentage": 33.12989533,
            "GL_ORDINAL": 2799
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2017,
            "Percentage": 3.475564326,
            "GL_ORDINAL": 2800
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2018,
            "Percentage": 59.35593973,
            "GL_ORDINAL": 2801
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2019,
            "Percentage": 74.51949367,
            "GL_ORDINAL": 2802
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2020,
            "Percentage": 74.83783591,
            "GL_ORDINAL": 2803
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2021,
            "Percentage": 53.19646623,
            "GL_ORDINAL": 2804
          },
          {
            "Reference_area": "Jamaica",
            "Year": 2022,
            "Percentage": 45.44522395,
            "GL_ORDINAL": 2805
          },
          {
            "Reference_area": "Jersey",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 2806
          },
          {
            "Reference_area": "Jersey",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 2807
          },
          {
            "Reference_area": "Jersey",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 2808
          },
          {
            "Reference_area": "Jersey",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 2809
          },
          {
            "Reference_area": "Jersey",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 2810
          },
          {
            "Reference_area": "Jersey",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 2811
          },
          {
            "Reference_area": "Jersey",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2812
          },
          {
            "Reference_area": "Jersey",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2813
          },
          {
            "Reference_area": "Jersey",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2814
          },
          {
            "Reference_area": "Jersey",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 2815
          },
          {
            "Reference_area": "Jersey",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 2816
          },
          {
            "Reference_area": "Jersey",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 2817
          },
          {
            "Reference_area": "Jersey",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 2818
          },
          {
            "Reference_area": "Jersey",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 2819
          },
          {
            "Reference_area": "Jersey",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 2820
          },
          {
            "Reference_area": "Jersey",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 2821
          },
          {
            "Reference_area": "Jersey",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2822
          },
          {
            "Reference_area": "Jersey",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 2823
          },
          {
            "Reference_area": "Jersey",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 2824
          },
          {
            "Reference_area": "Jersey",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 2825
          },
          {
            "Reference_area": "Jersey",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 2826
          },
          {
            "Reference_area": "Jersey",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 2827
          },
          {
            "Reference_area": "Jersey",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 2828
          },
          {
            "Reference_area": "Jordan",
            "Year": 2000,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2829
          },
          {
            "Reference_area": "Jordan",
            "Year": 2001,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2830
          },
          {
            "Reference_area": "Jordan",
            "Year": 2002,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2831
          },
          {
            "Reference_area": "Jordan",
            "Year": 2003,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2832
          },
          {
            "Reference_area": "Jordan",
            "Year": 2004,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2833
          },
          {
            "Reference_area": "Jordan",
            "Year": 2005,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2834
          },
          {
            "Reference_area": "Jordan",
            "Year": 2006,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2835
          },
          {
            "Reference_area": "Jordan",
            "Year": 2007,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2836
          },
          {
            "Reference_area": "Jordan",
            "Year": 2008,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2837
          },
          {
            "Reference_area": "Jordan",
            "Year": 2009,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2838
          },
          {
            "Reference_area": "Jordan",
            "Year": 2010,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2839
          },
          {
            "Reference_area": "Jordan",
            "Year": 2011,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2840
          },
          {
            "Reference_area": "Jordan",
            "Year": 2012,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2841
          },
          {
            "Reference_area": "Jordan",
            "Year": 2013,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2842
          },
          {
            "Reference_area": "Jordan",
            "Year": 2014,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2843
          },
          {
            "Reference_area": "Jordan",
            "Year": 2015,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2844
          },
          {
            "Reference_area": "Jordan",
            "Year": 2016,
            "Percentage": 2.341920375,
            "GL_ORDINAL": 2845
          },
          {
            "Reference_area": "Jordan",
            "Year": 2017,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2846
          },
          {
            "Reference_area": "Jordan",
            "Year": 2018,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2847
          },
          {
            "Reference_area": "Jordan",
            "Year": 2019,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2848
          },
          {
            "Reference_area": "Jordan",
            "Year": 2020,
            "Percentage": 72.13114754,
            "GL_ORDINAL": 2849
          },
          {
            "Reference_area": "Jordan",
            "Year": 2021,
            "Percentage": 98.80642352,
            "GL_ORDINAL": 2850
          },
          {
            "Reference_area": "Jordan",
            "Year": 2022,
            "Percentage": 98.80642352,
            "GL_ORDINAL": 2851
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2000,
            "Percentage": 20.18782797,
            "GL_ORDINAL": 2852
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2001,
            "Percentage": 19.88801792,
            "GL_ORDINAL": 2853
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2002,
            "Percentage": 19.31576968,
            "GL_ORDINAL": 2854
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2003,
            "Percentage": 34.78381362,
            "GL_ORDINAL": 2855
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2004,
            "Percentage": 34.85842721,
            "GL_ORDINAL": 2856
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2005,
            "Percentage": 22.54296623,
            "GL_ORDINAL": 2857
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2006,
            "Percentage": 21.49684523,
            "GL_ORDINAL": 2858
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2007,
            "Percentage": 16.06583304,
            "GL_ORDINAL": 2859
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2008,
            "Percentage": 22.62992559,
            "GL_ORDINAL": 2860
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2009,
            "Percentage": 23.64498685,
            "GL_ORDINAL": 2861
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2010,
            "Percentage": 36.27712034,
            "GL_ORDINAL": 2862
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2011,
            "Percentage": 34.0877446,
            "GL_ORDINAL": 2863
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2012,
            "Percentage": 35.06426138,
            "GL_ORDINAL": 2864
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2013,
            "Percentage": 32.83552045,
            "GL_ORDINAL": 2865
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2014,
            "Percentage": 28.93738779,
            "GL_ORDINAL": 2866
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2015,
            "Percentage": 27.89171248,
            "GL_ORDINAL": 2867
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2016,
            "Percentage": 7.998836364,
            "GL_ORDINAL": 2868
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2017,
            "Percentage": 33.9512105,
            "GL_ORDINAL": 2869
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2018,
            "Percentage": 19.68857525,
            "GL_ORDINAL": 2870
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2019,
            "Percentage": 30.31659683,
            "GL_ORDINAL": 2871
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2020,
            "Percentage": 35.25967315,
            "GL_ORDINAL": 2872
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2021,
            "Percentage": 44.61180559,
            "GL_ORDINAL": 2873
          },
          {
            "Reference_area": "Kazakhstan",
            "Year": 2022,
            "Percentage": 39.71282998,
            "GL_ORDINAL": 2874
          },
          {
            "Reference_area": "Kenya",
            "Year": 2000,
            "Percentage": 82.55175531,
            "GL_ORDINAL": 2875
          },
          {
            "Reference_area": "Kenya",
            "Year": 2001,
            "Percentage": 79.34824526,
            "GL_ORDINAL": 2876
          },
          {
            "Reference_area": "Kenya",
            "Year": 2002,
            "Percentage": 80.86324958,
            "GL_ORDINAL": 2877
          },
          {
            "Reference_area": "Kenya",
            "Year": 2003,
            "Percentage": 83.67608246,
            "GL_ORDINAL": 2878
          },
          {
            "Reference_area": "Kenya",
            "Year": 2004,
            "Percentage": 79.21886942,
            "GL_ORDINAL": 2879
          },
          {
            "Reference_area": "Kenya",
            "Year": 2005,
            "Percentage": 83.99583307,
            "GL_ORDINAL": 2880
          },
          {
            "Reference_area": "Kenya",
            "Year": 2006,
            "Percentage": 68.67820176,
            "GL_ORDINAL": 2881
          },
          {
            "Reference_area": "Kenya",
            "Year": 2007,
            "Percentage": 56.9713356,
            "GL_ORDINAL": 2882
          },
          {
            "Reference_area": "Kenya",
            "Year": 2008,
            "Percentage": 65.92337796,
            "GL_ORDINAL": 2883
          },
          {
            "Reference_area": "Kenya",
            "Year": 2009,
            "Percentage": 84.71163536,
            "GL_ORDINAL": 2884
          },
          {
            "Reference_area": "Kenya",
            "Year": 2010,
            "Percentage": 79.00430153,
            "GL_ORDINAL": 2885
          },
          {
            "Reference_area": "Kenya",
            "Year": 2011,
            "Percentage": 85.25959846,
            "GL_ORDINAL": 2886
          },
          {
            "Reference_area": "Kenya",
            "Year": 2012,
            "Percentage": 86.96034512,
            "GL_ORDINAL": 2887
          },
          {
            "Reference_area": "Kenya",
            "Year": 2013,
            "Percentage": 80.84740516,
            "GL_ORDINAL": 2888
          },
          {
            "Reference_area": "Kenya",
            "Year": 2014,
            "Percentage": 79.47417741,
            "GL_ORDINAL": 2889
          },
          {
            "Reference_area": "Kenya",
            "Year": 2015,
            "Percentage": 87.79548298,
            "GL_ORDINAL": 2890
          },
          {
            "Reference_area": "Kenya",
            "Year": 2016,
            "Percentage": 33.28664547,
            "GL_ORDINAL": 2891
          },
          {
            "Reference_area": "Kenya",
            "Year": 2017,
            "Percentage": 87.62734093,
            "GL_ORDINAL": 2892
          },
          {
            "Reference_area": "Kenya",
            "Year": 2018,
            "Percentage": 85.10279491,
            "GL_ORDINAL": 2893
          },
          {
            "Reference_area": "Kenya",
            "Year": 2019,
            "Percentage": 85.60422346,
            "GL_ORDINAL": 2894
          },
          {
            "Reference_area": "Kenya",
            "Year": 2020,
            "Percentage": 73.73271418,
            "GL_ORDINAL": 2895
          },
          {
            "Reference_area": "Kenya",
            "Year": 2021,
            "Percentage": 92.6839289,
            "GL_ORDINAL": 2896
          },
          {
            "Reference_area": "Kenya",
            "Year": 2022,
            "Percentage": 87.1204584,
            "GL_ORDINAL": 2897
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 2898
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 2899
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 2900
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 2901
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 2902
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 2903
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2904
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2905
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2906
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 2907
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 2908
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 2909
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 2910
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 2911
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 2912
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 2913
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2914
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 2915
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 2916
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 2917
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 2918
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 2919
          },
          {
            "Reference_area": "Kiribati",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 2920
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2000,
            "Percentage": 34.43240218,
            "GL_ORDINAL": 2921
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 2922
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 2923
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2003,
            "Percentage": 0.059063755,
            "GL_ORDINAL": 2924
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2004,
            "Percentage": 11.36023916,
            "GL_ORDINAL": 2925
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2005,
            "Percentage": 0.087054057,
            "GL_ORDINAL": 2926
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2927
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2007,
            "Percentage": 12.5654537,
            "GL_ORDINAL": 2928
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2929
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2009,
            "Percentage": 16.46388267,
            "GL_ORDINAL": 2930
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2010,
            "Percentage": 32.61583722,
            "GL_ORDINAL": 2931
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2011,
            "Percentage": 42.83355944,
            "GL_ORDINAL": 2932
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2012,
            "Percentage": 86.78384565,
            "GL_ORDINAL": 2933
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2013,
            "Percentage": 1.680108626,
            "GL_ORDINAL": 2934
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2014,
            "Percentage": 11.34284968,
            "GL_ORDINAL": 2935
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2015,
            "Percentage": 1.677391958,
            "GL_ORDINAL": 2936
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2937
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2017,
            "Percentage": 48.53002603,
            "GL_ORDINAL": 2938
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 2939
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2019,
            "Percentage": 1.633327508,
            "GL_ORDINAL": 2940
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 2941
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2021,
            "Percentage": 1.906575176,
            "GL_ORDINAL": 2942
          },
          {
            "Reference_area": "Kosovo",
            "Year": 2022,
            "Percentage": 37.83448268,
            "GL_ORDINAL": 2943
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 2944
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 2945
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 2946
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 2947
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 2948
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 2949
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 2950
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 2951
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 2952
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 2953
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 2954
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 2955
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 2956
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 2957
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 2958
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 2959
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 2960
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 2961
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 2962
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 2963
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 2964
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 2965
          },
          {
            "Reference_area": "Kuwait",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 2966
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2000,
            "Percentage": 6.705930088,
            "GL_ORDINAL": 2967
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2001,
            "Percentage": 10.569342,
            "GL_ORDINAL": 2968
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2002,
            "Percentage": 9.620464506,
            "GL_ORDINAL": 2969
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2003,
            "Percentage": 5.197087772,
            "GL_ORDINAL": 2970
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2004,
            "Percentage": 10.00298509,
            "GL_ORDINAL": 2971
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2005,
            "Percentage": 17.62383915,
            "GL_ORDINAL": 2972
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2006,
            "Percentage": 0.467902258,
            "GL_ORDINAL": 2973
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2007,
            "Percentage": 0.463864594,
            "GL_ORDINAL": 2974
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2008,
            "Percentage": 1.546364267,
            "GL_ORDINAL": 2975
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2009,
            "Percentage": 15.72002635,
            "GL_ORDINAL": 2976
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2010,
            "Percentage": 4.641825948,
            "GL_ORDINAL": 2977
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2011,
            "Percentage": 31.71789046,
            "GL_ORDINAL": 2978
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2012,
            "Percentage": 19.98598483,
            "GL_ORDINAL": 2979
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2013,
            "Percentage": 20.92833534,
            "GL_ORDINAL": 2980
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2014,
            "Percentage": 25.28042759,
            "GL_ORDINAL": 2981
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2015,
            "Percentage": 20.87310861,
            "GL_ORDINAL": 2982
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2016,
            "Percentage": 3.756508227,
            "GL_ORDINAL": 2983
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2017,
            "Percentage": 21.17411975,
            "GL_ORDINAL": 2984
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2018,
            "Percentage": 19.56946499,
            "GL_ORDINAL": 2985
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2019,
            "Percentage": 20.70626003,
            "GL_ORDINAL": 2986
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2020,
            "Percentage": 8.043702262,
            "GL_ORDINAL": 2987
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2021,
            "Percentage": 33.74794008,
            "GL_ORDINAL": 2988
          },
          {
            "Reference_area": "Kyrgyzstan",
            "Year": 2022,
            "Percentage": 17.71011377,
            "GL_ORDINAL": 2989
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2000,
            "Percentage": 21.17158696,
            "GL_ORDINAL": 2990
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2001,
            "Percentage": 34.00127174,
            "GL_ORDINAL": 2991
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2002,
            "Percentage": 55.45329109,
            "GL_ORDINAL": 2992
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2003,
            "Percentage": 34.01685003,
            "GL_ORDINAL": 2993
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2004,
            "Percentage": 49.29518417,
            "GL_ORDINAL": 2994
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2005,
            "Percentage": 70.02372786,
            "GL_ORDINAL": 2995
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2006,
            "Percentage": 12.34481309,
            "GL_ORDINAL": 2996
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2007,
            "Percentage": 30.03378209,
            "GL_ORDINAL": 2997
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2008,
            "Percentage": 1.86148835,
            "GL_ORDINAL": 2998
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2009,
            "Percentage": 46.26038024,
            "GL_ORDINAL": 2999
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2010,
            "Percentage": 59.10748458,
            "GL_ORDINAL": 3000
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2011,
            "Percentage": 21.36839372,
            "GL_ORDINAL": 3001
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2012,
            "Percentage": 38.48621444,
            "GL_ORDINAL": 3002
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2013,
            "Percentage": 61.70376292,
            "GL_ORDINAL": 3003
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2014,
            "Percentage": 39.80460751,
            "GL_ORDINAL": 3004
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2015,
            "Percentage": 51.56729708,
            "GL_ORDINAL": 3005
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2016,
            "Percentage": 46.03804365,
            "GL_ORDINAL": 3006
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2017,
            "Percentage": 26.78614199,
            "GL_ORDINAL": 3007
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2018,
            "Percentage": 9.443330509,
            "GL_ORDINAL": 3008
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2019,
            "Percentage": 77.87045617,
            "GL_ORDINAL": 3009
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2020,
            "Percentage": 61.85974217,
            "GL_ORDINAL": 3010
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2021,
            "Percentage": 43.63641055,
            "GL_ORDINAL": 3011
          },
          {
            "Reference_area": "Lao People’s Democratic Republic",
            "Year": 2022,
            "Percentage": 0.52078286,
            "GL_ORDINAL": 3012
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2000,
            "Percentage": 74.43502825,
            "GL_ORDINAL": 3013
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2001,
            "Percentage": 63.96654719,
            "GL_ORDINAL": 3014
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2002,
            "Percentage": 74.75845411,
            "GL_ORDINAL": 3015
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2003,
            "Percentage": 65.33300805,
            "GL_ORDINAL": 3016
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2004,
            "Percentage": 66.2620758,
            "GL_ORDINAL": 3017
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2005,
            "Percentage": 63.50328117,
            "GL_ORDINAL": 3018
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2006,
            "Percentage": 23.36168084,
            "GL_ORDINAL": 3019
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2007,
            "Percentage": 18.35252879,
            "GL_ORDINAL": 3020
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2008,
            "Percentage": 18.27644638,
            "GL_ORDINAL": 3021
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2009,
            "Percentage": 78.01401305,
            "GL_ORDINAL": 3022
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2010,
            "Percentage": 72.08293153,
            "GL_ORDINAL": 3023
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2011,
            "Percentage": 64.21509525,
            "GL_ORDINAL": 3024
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2012,
            "Percentage": 68.25856247,
            "GL_ORDINAL": 3025
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2013,
            "Percentage": 69.97344919,
            "GL_ORDINAL": 3026
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2014,
            "Percentage": 68.6802523,
            "GL_ORDINAL": 3027
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2015,
            "Percentage": 68.63173217,
            "GL_ORDINAL": 3028
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2016,
            "Percentage": 5.148986889,
            "GL_ORDINAL": 3029
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2017,
            "Percentage": 68.33214371,
            "GL_ORDINAL": 3030
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2018,
            "Percentage": 67.87139169,
            "GL_ORDINAL": 3031
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2019,
            "Percentage": 72.84661446,
            "GL_ORDINAL": 3032
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2020,
            "Percentage": 79.80117488,
            "GL_ORDINAL": 3033
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2021,
            "Percentage": 92.86366966,
            "GL_ORDINAL": 3034
          },
          {
            "Reference_area": "Lebanon",
            "Year": 2022,
            "Percentage": 71.35745159,
            "GL_ORDINAL": 3035
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2000,
            "Percentage": 60.28750759,
            "GL_ORDINAL": 3036
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2001,
            "Percentage": 26.43855031,
            "GL_ORDINAL": 3037
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2002,
            "Percentage": 27.18010007,
            "GL_ORDINAL": 3038
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2003,
            "Percentage": 64.70576262,
            "GL_ORDINAL": 3039
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2004,
            "Percentage": 23.54300438,
            "GL_ORDINAL": 3040
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2005,
            "Percentage": 71.02901402,
            "GL_ORDINAL": 3041
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2006,
            "Percentage": 0.742411813,
            "GL_ORDINAL": 3042
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2007,
            "Percentage": 72.12387563,
            "GL_ORDINAL": 3043
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2008,
            "Percentage": 46.35477344,
            "GL_ORDINAL": 3044
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2009,
            "Percentage": 73.91872042,
            "GL_ORDINAL": 3045
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2010,
            "Percentage": 79.19305414,
            "GL_ORDINAL": 3046
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2011,
            "Percentage": 74.80584414,
            "GL_ORDINAL": 3047
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2012,
            "Percentage": 57.15398651,
            "GL_ORDINAL": 3048
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2013,
            "Percentage": 79.53907035,
            "GL_ORDINAL": 3049
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2014,
            "Percentage": 79.90508556,
            "GL_ORDINAL": 3050
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2015,
            "Percentage": 79.62266428,
            "GL_ORDINAL": 3051
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2016,
            "Percentage": 21.8711498,
            "GL_ORDINAL": 3052
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2017,
            "Percentage": 79.79850065,
            "GL_ORDINAL": 3053
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2018,
            "Percentage": 79.90407864,
            "GL_ORDINAL": 3054
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2019,
            "Percentage": 80.0071142,
            "GL_ORDINAL": 3055
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2020,
            "Percentage": 80.11461768,
            "GL_ORDINAL": 3056
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2021,
            "Percentage": 68.79690692,
            "GL_ORDINAL": 3057
          },
          {
            "Reference_area": "Lesotho",
            "Year": 2022,
            "Percentage": 91.94801957,
            "GL_ORDINAL": 3058
          },
          {
            "Reference_area": "Liberia",
            "Year": 2000,
            "Percentage": 1.485869973,
            "GL_ORDINAL": 3059
          },
          {
            "Reference_area": "Liberia",
            "Year": 2001,
            "Percentage": 19.73624986,
            "GL_ORDINAL": 3060
          },
          {
            "Reference_area": "Liberia",
            "Year": 2002,
            "Percentage": 1.206356728,
            "GL_ORDINAL": 3061
          },
          {
            "Reference_area": "Liberia",
            "Year": 2003,
            "Percentage": 6.013608114,
            "GL_ORDINAL": 3062
          },
          {
            "Reference_area": "Liberia",
            "Year": 2004,
            "Percentage": 7.657200545,
            "GL_ORDINAL": 3063
          },
          {
            "Reference_area": "Liberia",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 3064
          },
          {
            "Reference_area": "Liberia",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3065
          },
          {
            "Reference_area": "Liberia",
            "Year": 2007,
            "Percentage": 34.3452572,
            "GL_ORDINAL": 3066
          },
          {
            "Reference_area": "Liberia",
            "Year": 2008,
            "Percentage": 26.42966512,
            "GL_ORDINAL": 3067
          },
          {
            "Reference_area": "Liberia",
            "Year": 2009,
            "Percentage": 25.5375113,
            "GL_ORDINAL": 3068
          },
          {
            "Reference_area": "Liberia",
            "Year": 2010,
            "Percentage": 3.774833269,
            "GL_ORDINAL": 3069
          },
          {
            "Reference_area": "Liberia",
            "Year": 2011,
            "Percentage": 1.035791527,
            "GL_ORDINAL": 3070
          },
          {
            "Reference_area": "Liberia",
            "Year": 2012,
            "Percentage": 20.97166679,
            "GL_ORDINAL": 3071
          },
          {
            "Reference_area": "Liberia",
            "Year": 2013,
            "Percentage": 17.41166484,
            "GL_ORDINAL": 3072
          },
          {
            "Reference_area": "Liberia",
            "Year": 2014,
            "Percentage": 1.75267442,
            "GL_ORDINAL": 3073
          },
          {
            "Reference_area": "Liberia",
            "Year": 2015,
            "Percentage": 7.173658154,
            "GL_ORDINAL": 3074
          },
          {
            "Reference_area": "Liberia",
            "Year": 2016,
            "Percentage": 23.95732952,
            "GL_ORDINAL": 3075
          },
          {
            "Reference_area": "Liberia",
            "Year": 2017,
            "Percentage": 0.674267978,
            "GL_ORDINAL": 3076
          },
          {
            "Reference_area": "Liberia",
            "Year": 2018,
            "Percentage": 1.817976354,
            "GL_ORDINAL": 3077
          },
          {
            "Reference_area": "Liberia",
            "Year": 2019,
            "Percentage": 18.46620111,
            "GL_ORDINAL": 3078
          },
          {
            "Reference_area": "Liberia",
            "Year": 2020,
            "Percentage": 21.70955045,
            "GL_ORDINAL": 3079
          },
          {
            "Reference_area": "Liberia",
            "Year": 2021,
            "Percentage": 1.149417422,
            "GL_ORDINAL": 3080
          },
          {
            "Reference_area": "Liberia",
            "Year": 2022,
            "Percentage": 14.4501673,
            "GL_ORDINAL": 3081
          },
          {
            "Reference_area": "Libya",
            "Year": 2000,
            "Percentage": 88.34213807,
            "GL_ORDINAL": 3082
          },
          {
            "Reference_area": "Libya",
            "Year": 2001,
            "Percentage": 89.33277929,
            "GL_ORDINAL": 3083
          },
          {
            "Reference_area": "Libya",
            "Year": 2002,
            "Percentage": 89.33277929,
            "GL_ORDINAL": 3084
          },
          {
            "Reference_area": "Libya",
            "Year": 2003,
            "Percentage": 89.33277929,
            "GL_ORDINAL": 3085
          },
          {
            "Reference_area": "Libya",
            "Year": 2004,
            "Percentage": 89.33277929,
            "GL_ORDINAL": 3086
          },
          {
            "Reference_area": "Libya",
            "Year": 2005,
            "Percentage": 90.4270267,
            "GL_ORDINAL": 3087
          },
          {
            "Reference_area": "Libya",
            "Year": 2006,
            "Percentage": 37.155599,
            "GL_ORDINAL": 3088
          },
          {
            "Reference_area": "Libya",
            "Year": 2007,
            "Percentage": 43.2329907,
            "GL_ORDINAL": 3089
          },
          {
            "Reference_area": "Libya",
            "Year": 2008,
            "Percentage": 37.2246696,
            "GL_ORDINAL": 3090
          },
          {
            "Reference_area": "Libya",
            "Year": 2009,
            "Percentage": 90.53475281,
            "GL_ORDINAL": 3091
          },
          {
            "Reference_area": "Libya",
            "Year": 2010,
            "Percentage": 91.55041605,
            "GL_ORDINAL": 3092
          },
          {
            "Reference_area": "Libya",
            "Year": 2011,
            "Percentage": 91.55041605,
            "GL_ORDINAL": 3093
          },
          {
            "Reference_area": "Libya",
            "Year": 2012,
            "Percentage": 91.69114048,
            "GL_ORDINAL": 3094
          },
          {
            "Reference_area": "Libya",
            "Year": 2013,
            "Percentage": 91.69114048,
            "GL_ORDINAL": 3095
          },
          {
            "Reference_area": "Libya",
            "Year": 2014,
            "Percentage": 91.69114048,
            "GL_ORDINAL": 3096
          },
          {
            "Reference_area": "Libya",
            "Year": 2015,
            "Percentage": 91.69114048,
            "GL_ORDINAL": 3097
          },
          {
            "Reference_area": "Libya",
            "Year": 2016,
            "Percentage": 42.81693588,
            "GL_ORDINAL": 3098
          },
          {
            "Reference_area": "Libya",
            "Year": 2017,
            "Percentage": 91.69114048,
            "GL_ORDINAL": 3099
          },
          {
            "Reference_area": "Libya",
            "Year": 2018,
            "Percentage": 91.65449233,
            "GL_ORDINAL": 3100
          },
          {
            "Reference_area": "Libya",
            "Year": 2019,
            "Percentage": 91.63676175,
            "GL_ORDINAL": 3101
          },
          {
            "Reference_area": "Libya",
            "Year": 2020,
            "Percentage": 91.63676175,
            "GL_ORDINAL": 3102
          },
          {
            "Reference_area": "Libya",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 3103
          },
          {
            "Reference_area": "Libya",
            "Year": 2022,
            "Percentage": 89.88913119,
            "GL_ORDINAL": 3104
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 3105
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 3106
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 3107
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 3108
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 3109
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 3110
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3111
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 3112
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 3113
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 3114
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 3115
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 3116
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 3117
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 3118
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 3119
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 3120
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 3121
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 3122
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 3123
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 3124
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 3125
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 3126
          },
          {
            "Reference_area": "Liechtenstein",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 3127
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2000,
            "Percentage": 62.76668616,
            "GL_ORDINAL": 3128
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2001,
            "Percentage": 66.13810615,
            "GL_ORDINAL": 3129
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2002,
            "Percentage": 57.87504491,
            "GL_ORDINAL": 3130
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2003,
            "Percentage": 64.3882199,
            "GL_ORDINAL": 3131
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2004,
            "Percentage": 56.52895427,
            "GL_ORDINAL": 3132
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2005,
            "Percentage": 67.12902806,
            "GL_ORDINAL": 3133
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2006,
            "Percentage": 45.00834573,
            "GL_ORDINAL": 3134
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2007,
            "Percentage": 43.20524425,
            "GL_ORDINAL": 3135
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2008,
            "Percentage": 45.08193967,
            "GL_ORDINAL": 3136
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2009,
            "Percentage": 62.26618296,
            "GL_ORDINAL": 3137
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2010,
            "Percentage": 69.65261831,
            "GL_ORDINAL": 3138
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2011,
            "Percentage": 65.15929651,
            "GL_ORDINAL": 3139
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2012,
            "Percentage": 67.35668689,
            "GL_ORDINAL": 3140
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2013,
            "Percentage": 66.78137724,
            "GL_ORDINAL": 3141
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2014,
            "Percentage": 65.49572091,
            "GL_ORDINAL": 3142
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2015,
            "Percentage": 67.03226784,
            "GL_ORDINAL": 3143
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2016,
            "Percentage": 41.35055854,
            "GL_ORDINAL": 3144
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2017,
            "Percentage": 66.25958963,
            "GL_ORDINAL": 3145
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2018,
            "Percentage": 67.37059191,
            "GL_ORDINAL": 3146
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2019,
            "Percentage": 63.61556386,
            "GL_ORDINAL": 3147
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2020,
            "Percentage": 64.92681568,
            "GL_ORDINAL": 3148
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2021,
            "Percentage": 69.28982278,
            "GL_ORDINAL": 3149
          },
          {
            "Reference_area": "Madagascar",
            "Year": 2022,
            "Percentage": 64.88775411,
            "GL_ORDINAL": 3150
          },
          {
            "Reference_area": "Malawi",
            "Year": 2000,
            "Percentage": 83.96905868,
            "GL_ORDINAL": 3151
          },
          {
            "Reference_area": "Malawi",
            "Year": 2001,
            "Percentage": 78.13854924,
            "GL_ORDINAL": 3152
          },
          {
            "Reference_area": "Malawi",
            "Year": 2002,
            "Percentage": 76.55608562,
            "GL_ORDINAL": 3153
          },
          {
            "Reference_area": "Malawi",
            "Year": 2003,
            "Percentage": 81.1018779,
            "GL_ORDINAL": 3154
          },
          {
            "Reference_area": "Malawi",
            "Year": 2004,
            "Percentage": 79.70773511,
            "GL_ORDINAL": 3155
          },
          {
            "Reference_area": "Malawi",
            "Year": 2005,
            "Percentage": 83.59357587,
            "GL_ORDINAL": 3156
          },
          {
            "Reference_area": "Malawi",
            "Year": 2006,
            "Percentage": 48.38444366,
            "GL_ORDINAL": 3157
          },
          {
            "Reference_area": "Malawi",
            "Year": 2007,
            "Percentage": 51.87404691,
            "GL_ORDINAL": 3158
          },
          {
            "Reference_area": "Malawi",
            "Year": 2008,
            "Percentage": 73.23080688,
            "GL_ORDINAL": 3159
          },
          {
            "Reference_area": "Malawi",
            "Year": 2009,
            "Percentage": 85.13418421,
            "GL_ORDINAL": 3160
          },
          {
            "Reference_area": "Malawi",
            "Year": 2010,
            "Percentage": 91.3460333,
            "GL_ORDINAL": 3161
          },
          {
            "Reference_area": "Malawi",
            "Year": 2011,
            "Percentage": 90.3444714,
            "GL_ORDINAL": 3162
          },
          {
            "Reference_area": "Malawi",
            "Year": 2012,
            "Percentage": 91.00056685,
            "GL_ORDINAL": 3163
          },
          {
            "Reference_area": "Malawi",
            "Year": 2013,
            "Percentage": 89.64953951,
            "GL_ORDINAL": 3164
          },
          {
            "Reference_area": "Malawi",
            "Year": 2014,
            "Percentage": 82.10630356,
            "GL_ORDINAL": 3165
          },
          {
            "Reference_area": "Malawi",
            "Year": 2015,
            "Percentage": 91.24286407,
            "GL_ORDINAL": 3166
          },
          {
            "Reference_area": "Malawi",
            "Year": 2016,
            "Percentage": 46.76602601,
            "GL_ORDINAL": 3167
          },
          {
            "Reference_area": "Malawi",
            "Year": 2017,
            "Percentage": 88.59022545,
            "GL_ORDINAL": 3168
          },
          {
            "Reference_area": "Malawi",
            "Year": 2018,
            "Percentage": 88.42805617,
            "GL_ORDINAL": 3169
          },
          {
            "Reference_area": "Malawi",
            "Year": 2019,
            "Percentage": 80.54076125,
            "GL_ORDINAL": 3170
          },
          {
            "Reference_area": "Malawi",
            "Year": 2020,
            "Percentage": 89.78234889,
            "GL_ORDINAL": 3171
          },
          {
            "Reference_area": "Malawi",
            "Year": 2021,
            "Percentage": 98.67498443,
            "GL_ORDINAL": 3172
          },
          {
            "Reference_area": "Malawi",
            "Year": 2022,
            "Percentage": 93.90925335,
            "GL_ORDINAL": 3173
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 3174
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2001,
            "Percentage": 0.818276878,
            "GL_ORDINAL": 3175
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2002,
            "Percentage": 7.246956113,
            "GL_ORDINAL": 3176
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2003,
            "Percentage": 4.091308396,
            "GL_ORDINAL": 3177
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2004,
            "Percentage": 8.410502229,
            "GL_ORDINAL": 3178
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2005,
            "Percentage": 8.889098405,
            "GL_ORDINAL": 3179
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3180
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 3181
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2008,
            "Percentage": 0.011801075,
            "GL_ORDINAL": 3182
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2009,
            "Percentage": 0.71951852,
            "GL_ORDINAL": 3183
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2010,
            "Percentage": 1.758398575,
            "GL_ORDINAL": 3184
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 3185
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 3186
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 3187
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2014,
            "Percentage": 4.700009895,
            "GL_ORDINAL": 3188
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2015,
            "Percentage": 2.701494175,
            "GL_ORDINAL": 3189
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2016,
            "Percentage": 5.80463003,
            "GL_ORDINAL": 3190
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 3191
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2018,
            "Percentage": 0.671446395,
            "GL_ORDINAL": 3192
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2019,
            "Percentage": 6.331166729,
            "GL_ORDINAL": 3193
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2020,
            "Percentage": 2.436872157,
            "GL_ORDINAL": 3194
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2021,
            "Percentage": 2.834199971,
            "GL_ORDINAL": 3195
          },
          {
            "Reference_area": "Malaysia",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 3196
          },
          {
            "Reference_area": "Maldives",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 3197
          },
          {
            "Reference_area": "Maldives",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 3198
          },
          {
            "Reference_area": "Maldives",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 3199
          },
          {
            "Reference_area": "Maldives",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 3200
          },
          {
            "Reference_area": "Maldives",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 3201
          },
          {
            "Reference_area": "Maldives",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 3202
          },
          {
            "Reference_area": "Maldives",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3203
          },
          {
            "Reference_area": "Maldives",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 3204
          },
          {
            "Reference_area": "Maldives",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 3205
          },
          {
            "Reference_area": "Maldives",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 3206
          },
          {
            "Reference_area": "Maldives",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 3207
          },
          {
            "Reference_area": "Maldives",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 3208
          },
          {
            "Reference_area": "Maldives",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 3209
          },
          {
            "Reference_area": "Maldives",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 3210
          },
          {
            "Reference_area": "Maldives",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 3211
          },
          {
            "Reference_area": "Maldives",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 3212
          },
          {
            "Reference_area": "Maldives",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 3213
          },
          {
            "Reference_area": "Maldives",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 3214
          },
          {
            "Reference_area": "Maldives",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 3215
          },
          {
            "Reference_area": "Maldives",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 3216
          },
          {
            "Reference_area": "Maldives",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 3217
          },
          {
            "Reference_area": "Maldives",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 3218
          },
          {
            "Reference_area": "Maldives",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 3219
          },
          {
            "Reference_area": "Mali",
            "Year": 2000,
            "Percentage": 86.06998158,
            "GL_ORDINAL": 3220
          },
          {
            "Reference_area": "Mali",
            "Year": 2001,
            "Percentage": 86.35516233,
            "GL_ORDINAL": 3221
          },
          {
            "Reference_area": "Mali",
            "Year": 2002,
            "Percentage": 86.42399695,
            "GL_ORDINAL": 3222
          },
          {
            "Reference_area": "Mali",
            "Year": 2003,
            "Percentage": 86.46879363,
            "GL_ORDINAL": 3223
          },
          {
            "Reference_area": "Mali",
            "Year": 2004,
            "Percentage": 86.50886925,
            "GL_ORDINAL": 3224
          },
          {
            "Reference_area": "Mali",
            "Year": 2005,
            "Percentage": 86.52731292,
            "GL_ORDINAL": 3225
          },
          {
            "Reference_area": "Mali",
            "Year": 2006,
            "Percentage": 86.53231567,
            "GL_ORDINAL": 3226
          },
          {
            "Reference_area": "Mali",
            "Year": 2007,
            "Percentage": 86.54677462,
            "GL_ORDINAL": 3227
          },
          {
            "Reference_area": "Mali",
            "Year": 2008,
            "Percentage": 86.55848486,
            "GL_ORDINAL": 3228
          },
          {
            "Reference_area": "Mali",
            "Year": 2009,
            "Percentage": 86.55961636,
            "GL_ORDINAL": 3229
          },
          {
            "Reference_area": "Mali",
            "Year": 2010,
            "Percentage": 86.5627504,
            "GL_ORDINAL": 3230
          },
          {
            "Reference_area": "Mali",
            "Year": 2011,
            "Percentage": 86.57684173,
            "GL_ORDINAL": 3231
          },
          {
            "Reference_area": "Mali",
            "Year": 2012,
            "Percentage": 87.24768214,
            "GL_ORDINAL": 3232
          },
          {
            "Reference_area": "Mali",
            "Year": 2013,
            "Percentage": 87.24775994,
            "GL_ORDINAL": 3233
          },
          {
            "Reference_area": "Mali",
            "Year": 2014,
            "Percentage": 87.24105859,
            "GL_ORDINAL": 3234
          },
          {
            "Reference_area": "Mali",
            "Year": 2015,
            "Percentage": 87.24105859,
            "GL_ORDINAL": 3235
          },
          {
            "Reference_area": "Mali",
            "Year": 2016,
            "Percentage": 43.78723562,
            "GL_ORDINAL": 3236
          },
          {
            "Reference_area": "Mali",
            "Year": 2017,
            "Percentage": 87.24521039,
            "GL_ORDINAL": 3237
          },
          {
            "Reference_area": "Mali",
            "Year": 2018,
            "Percentage": 86.87284021,
            "GL_ORDINAL": 3238
          },
          {
            "Reference_area": "Mali",
            "Year": 2019,
            "Percentage": 86.67731562,
            "GL_ORDINAL": 3239
          },
          {
            "Reference_area": "Mali",
            "Year": 2020,
            "Percentage": 86.65430395,
            "GL_ORDINAL": 3240
          },
          {
            "Reference_area": "Mali",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 3241
          },
          {
            "Reference_area": "Mali",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 3242
          },
          {
            "Reference_area": "Malta",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 3243
          },
          {
            "Reference_area": "Malta",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 3244
          },
          {
            "Reference_area": "Malta",
            "Year": 2002,
            "Percentage": 79.74683544,
            "GL_ORDINAL": 3245
          },
          {
            "Reference_area": "Malta",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 3246
          },
          {
            "Reference_area": "Malta",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 3247
          },
          {
            "Reference_area": "Malta",
            "Year": 2005,
            "Percentage": 79.74683544,
            "GL_ORDINAL": 3248
          },
          {
            "Reference_area": "Malta",
            "Year": 2006,
            "Percentage": 43.03797468,
            "GL_ORDINAL": 3249
          },
          {
            "Reference_area": "Malta",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 3250
          },
          {
            "Reference_area": "Malta",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 3251
          },
          {
            "Reference_area": "Malta",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 3252
          },
          {
            "Reference_area": "Malta",
            "Year": 2010,
            "Percentage": 79.74683544,
            "GL_ORDINAL": 3253
          },
          {
            "Reference_area": "Malta",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 3254
          },
          {
            "Reference_area": "Malta",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 3255
          },
          {
            "Reference_area": "Malta",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 3256
          },
          {
            "Reference_area": "Malta",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 3257
          },
          {
            "Reference_area": "Malta",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 3258
          },
          {
            "Reference_area": "Malta",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 3259
          },
          {
            "Reference_area": "Malta",
            "Year": 2017,
            "Percentage": 79.74683544,
            "GL_ORDINAL": 3260
          },
          {
            "Reference_area": "Malta",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 3261
          },
          {
            "Reference_area": "Malta",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 3262
          },
          {
            "Reference_area": "Malta",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 3263
          },
          {
            "Reference_area": "Malta",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 3264
          },
          {
            "Reference_area": "Malta",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 3265
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 3266
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 3267
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 3268
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 3269
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 3270
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 3271
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3272
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 3273
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 3274
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 3275
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 3276
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 3277
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 3278
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 3279
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 3280
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 3281
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 3282
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 3283
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 3284
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 3285
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 3286
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 3287
          },
          {
            "Reference_area": "Marshall Islands",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 3288
          },
          {
            "Reference_area": "Martinique",
            "Year": 2000,
            "Percentage": 62.01626335,
            "GL_ORDINAL": 3289
          },
          {
            "Reference_area": "Martinique",
            "Year": 2001,
            "Percentage": 87.2538454,
            "GL_ORDINAL": 3290
          },
          {
            "Reference_area": "Martinique",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 3291
          },
          {
            "Reference_area": "Martinique",
            "Year": 2003,
            "Percentage": 59.0788829,
            "GL_ORDINAL": 3292
          },
          {
            "Reference_area": "Martinique",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 3293
          },
          {
            "Reference_area": "Martinique",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 3294
          },
          {
            "Reference_area": "Martinique",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3295
          },
          {
            "Reference_area": "Martinique",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 3296
          },
          {
            "Reference_area": "Martinique",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 3297
          },
          {
            "Reference_area": "Martinique",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 3298
          },
          {
            "Reference_area": "Martinique",
            "Year": 2010,
            "Percentage": 87.36873098,
            "GL_ORDINAL": 3299
          },
          {
            "Reference_area": "Martinique",
            "Year": 2011,
            "Percentage": 59.1538235,
            "GL_ORDINAL": 3300
          },
          {
            "Reference_area": "Martinique",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 3301
          },
          {
            "Reference_area": "Martinique",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 3302
          },
          {
            "Reference_area": "Martinique",
            "Year": 2014,
            "Percentage": 61.57097916,
            "GL_ORDINAL": 3303
          },
          {
            "Reference_area": "Martinique",
            "Year": 2015,
            "Percentage": 61.57703274,
            "GL_ORDINAL": 3304
          },
          {
            "Reference_area": "Martinique",
            "Year": 2016,
            "Percentage": 14.10908366,
            "GL_ORDINAL": 3305
          },
          {
            "Reference_area": "Martinique",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 3306
          },
          {
            "Reference_area": "Martinique",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 3307
          },
          {
            "Reference_area": "Martinique",
            "Year": 2019,
            "Percentage": 60.21059026,
            "GL_ORDINAL": 3308
          },
          {
            "Reference_area": "Martinique",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 3309
          },
          {
            "Reference_area": "Martinique",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 3310
          },
          {
            "Reference_area": "Martinique",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 3311
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2000,
            "Percentage": 74.5890142,
            "GL_ORDINAL": 3312
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2001,
            "Percentage": 75.01410676,
            "GL_ORDINAL": 3313
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2002,
            "Percentage": 75.10310152,
            "GL_ORDINAL": 3314
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2003,
            "Percentage": 75.10310152,
            "GL_ORDINAL": 3315
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2004,
            "Percentage": 75.10310152,
            "GL_ORDINAL": 3316
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2005,
            "Percentage": 75.10310152,
            "GL_ORDINAL": 3317
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2006,
            "Percentage": 75.10448436,
            "GL_ORDINAL": 3318
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2007,
            "Percentage": 75.10448436,
            "GL_ORDINAL": 3319
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2008,
            "Percentage": 75.29431741,
            "GL_ORDINAL": 3320
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2009,
            "Percentage": 75.29431741,
            "GL_ORDINAL": 3321
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2010,
            "Percentage": 75.29431741,
            "GL_ORDINAL": 3322
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2011,
            "Percentage": 75.29431741,
            "GL_ORDINAL": 3323
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2012,
            "Percentage": 75.49380271,
            "GL_ORDINAL": 3324
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2013,
            "Percentage": 75.48237424,
            "GL_ORDINAL": 3325
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2014,
            "Percentage": 75.49822852,
            "GL_ORDINAL": 3326
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2015,
            "Percentage": 75.49822852,
            "GL_ORDINAL": 3327
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2016,
            "Percentage": 2.27774101,
            "GL_ORDINAL": 3328
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2017,
            "Percentage": 75.6907284,
            "GL_ORDINAL": 3329
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2018,
            "Percentage": 75.75475118,
            "GL_ORDINAL": 3330
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2019,
            "Percentage": 76.50707591,
            "GL_ORDINAL": 3331
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2020,
            "Percentage": 76.50865036,
            "GL_ORDINAL": 3332
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2021,
            "Percentage": 99.95261168,
            "GL_ORDINAL": 3333
          },
          {
            "Reference_area": "Mauritania",
            "Year": 2022,
            "Percentage": 99.95261168,
            "GL_ORDINAL": 3334
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2000,
            "Percentage": 83.68185664,
            "GL_ORDINAL": 3335
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2001,
            "Percentage": 85.39353565,
            "GL_ORDINAL": 3336
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2002,
            "Percentage": 86.45640074,
            "GL_ORDINAL": 3337
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2003,
            "Percentage": 86.90075956,
            "GL_ORDINAL": 3338
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2004,
            "Percentage": 88.33354107,
            "GL_ORDINAL": 3339
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2005,
            "Percentage": 87.29411765,
            "GL_ORDINAL": 3340
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2006,
            "Percentage": 40.61760677,
            "GL_ORDINAL": 3341
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2007,
            "Percentage": 40.54961452,
            "GL_ORDINAL": 3342
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2008,
            "Percentage": 39.96809424,
            "GL_ORDINAL": 3343
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2009,
            "Percentage": 88.84226117,
            "GL_ORDINAL": 3344
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2010,
            "Percentage": 89.50840075,
            "GL_ORDINAL": 3345
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2011,
            "Percentage": 90.49300214,
            "GL_ORDINAL": 3346
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2012,
            "Percentage": 72.57164595,
            "GL_ORDINAL": 3347
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2013,
            "Percentage": 72.85477496,
            "GL_ORDINAL": 3348
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2014,
            "Percentage": 84.82211025,
            "GL_ORDINAL": 3349
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2015,
            "Percentage": 84.88691932,
            "GL_ORDINAL": 3350
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2016,
            "Percentage": 23.6675421,
            "GL_ORDINAL": 3351
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2017,
            "Percentage": 85.71428571,
            "GL_ORDINAL": 3352
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2018,
            "Percentage": 85.82251082,
            "GL_ORDINAL": 3353
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2019,
            "Percentage": 86.60406886,
            "GL_ORDINAL": 3354
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2020,
            "Percentage": 86.91486019,
            "GL_ORDINAL": 3355
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2021,
            "Percentage": 98.49908505,
            "GL_ORDINAL": 3356
          },
          {
            "Reference_area": "Mauritius",
            "Year": 2022,
            "Percentage": 79.64771994,
            "GL_ORDINAL": 3357
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 3358
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 3359
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 3360
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 3361
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 3362
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 3363
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3364
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 3365
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 3366
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 3367
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 3368
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 3369
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 3370
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 3371
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 3372
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 3373
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 3374
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 3375
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 3376
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 3377
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 3378
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 3379
          },
          {
            "Reference_area": "Micronesia",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 3380
          },
          {
            "Reference_area": "Moldova",
            "Year": 2000,
            "Percentage": 1.375358166,
            "GL_ORDINAL": 3381
          },
          {
            "Reference_area": "Moldova",
            "Year": 2001,
            "Percentage": 2.176272004,
            "GL_ORDINAL": 3382
          },
          {
            "Reference_area": "Moldova",
            "Year": 2002,
            "Percentage": 5.490833559,
            "GL_ORDINAL": 3383
          },
          {
            "Reference_area": "Moldova",
            "Year": 2003,
            "Percentage": 11.08269138,
            "GL_ORDINAL": 3384
          },
          {
            "Reference_area": "Moldova",
            "Year": 2004,
            "Percentage": 5.003909304,
            "GL_ORDINAL": 3385
          },
          {
            "Reference_area": "Moldova",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 3386
          },
          {
            "Reference_area": "Moldova",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3387
          },
          {
            "Reference_area": "Moldova",
            "Year": 2007,
            "Percentage": 74.45079747,
            "GL_ORDINAL": 3388
          },
          {
            "Reference_area": "Moldova",
            "Year": 2008,
            "Percentage": 4.135676583,
            "GL_ORDINAL": 3389
          },
          {
            "Reference_area": "Moldova",
            "Year": 2009,
            "Percentage": 6.923030776,
            "GL_ORDINAL": 3390
          },
          {
            "Reference_area": "Moldova",
            "Year": 2010,
            "Percentage": 3.866079717,
            "GL_ORDINAL": 3391
          },
          {
            "Reference_area": "Moldova",
            "Year": 2011,
            "Percentage": 3.379328923,
            "GL_ORDINAL": 3392
          },
          {
            "Reference_area": "Moldova",
            "Year": 2012,
            "Percentage": 67.31505865,
            "GL_ORDINAL": 3393
          },
          {
            "Reference_area": "Moldova",
            "Year": 2013,
            "Percentage": 8.970139429,
            "GL_ORDINAL": 3394
          },
          {
            "Reference_area": "Moldova",
            "Year": 2014,
            "Percentage": 18.78284759,
            "GL_ORDINAL": 3395
          },
          {
            "Reference_area": "Moldova",
            "Year": 2015,
            "Percentage": 41.19509063,
            "GL_ORDINAL": 3396
          },
          {
            "Reference_area": "Moldova",
            "Year": 2016,
            "Percentage": 0.074256691,
            "GL_ORDINAL": 3397
          },
          {
            "Reference_area": "Moldova",
            "Year": 2017,
            "Percentage": 11.56758356,
            "GL_ORDINAL": 3398
          },
          {
            "Reference_area": "Moldova",
            "Year": 2018,
            "Percentage": 10.35500339,
            "GL_ORDINAL": 3399
          },
          {
            "Reference_area": "Moldova",
            "Year": 2019,
            "Percentage": 32.64680751,
            "GL_ORDINAL": 3400
          },
          {
            "Reference_area": "Moldova",
            "Year": 2020,
            "Percentage": 73.23445286,
            "GL_ORDINAL": 3401
          },
          {
            "Reference_area": "Moldova",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 3402
          },
          {
            "Reference_area": "Moldova",
            "Year": 2022,
            "Percentage": 63.51884278,
            "GL_ORDINAL": 3403
          },
          {
            "Reference_area": "Monaco",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 3404
          },
          {
            "Reference_area": "Monaco",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 3405
          },
          {
            "Reference_area": "Monaco",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 3406
          },
          {
            "Reference_area": "Monaco",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 3407
          },
          {
            "Reference_area": "Monaco",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 3408
          },
          {
            "Reference_area": "Monaco",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 3409
          },
          {
            "Reference_area": "Monaco",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3410
          },
          {
            "Reference_area": "Monaco",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 3411
          },
          {
            "Reference_area": "Monaco",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 3412
          },
          {
            "Reference_area": "Monaco",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 3413
          },
          {
            "Reference_area": "Monaco",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 3414
          },
          {
            "Reference_area": "Monaco",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 3415
          },
          {
            "Reference_area": "Monaco",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 3416
          },
          {
            "Reference_area": "Monaco",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 3417
          },
          {
            "Reference_area": "Monaco",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 3418
          },
          {
            "Reference_area": "Monaco",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 3419
          },
          {
            "Reference_area": "Monaco",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 3420
          },
          {
            "Reference_area": "Monaco",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 3421
          },
          {
            "Reference_area": "Monaco",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 3422
          },
          {
            "Reference_area": "Monaco",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 3423
          },
          {
            "Reference_area": "Monaco",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 3424
          },
          {
            "Reference_area": "Monaco",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 3425
          },
          {
            "Reference_area": "Monaco",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 3426
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2000,
            "Percentage": 9.27435686,
            "GL_ORDINAL": 3427
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2001,
            "Percentage": 10.37259071,
            "GL_ORDINAL": 3428
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2002,
            "Percentage": 11.85772874,
            "GL_ORDINAL": 3429
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2003,
            "Percentage": 4.063427273,
            "GL_ORDINAL": 3430
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2004,
            "Percentage": 9.080809453,
            "GL_ORDINAL": 3431
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2005,
            "Percentage": 5.259567991,
            "GL_ORDINAL": 3432
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2006,
            "Percentage": 0.416848419,
            "GL_ORDINAL": 3433
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2007,
            "Percentage": 1.412750461,
            "GL_ORDINAL": 3434
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2008,
            "Percentage": 1.755473374,
            "GL_ORDINAL": 3435
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2009,
            "Percentage": 45.51493689,
            "GL_ORDINAL": 3436
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2010,
            "Percentage": 21.9516055,
            "GL_ORDINAL": 3437
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2011,
            "Percentage": 7.401383198,
            "GL_ORDINAL": 3438
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2012,
            "Percentage": 14.13167963,
            "GL_ORDINAL": 3439
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2013,
            "Percentage": 4.23980451,
            "GL_ORDINAL": 3440
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2014,
            "Percentage": 6.762195564,
            "GL_ORDINAL": 3441
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2015,
            "Percentage": 29.67717146,
            "GL_ORDINAL": 3442
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2016,
            "Percentage": 3.561378635,
            "GL_ORDINAL": 3443
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2017,
            "Percentage": 37.63596777,
            "GL_ORDINAL": 3444
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2018,
            "Percentage": 29.93279039,
            "GL_ORDINAL": 3445
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2019,
            "Percentage": 17.59212116,
            "GL_ORDINAL": 3446
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2020,
            "Percentage": 24.94776966,
            "GL_ORDINAL": 3447
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2021,
            "Percentage": 4.489295611,
            "GL_ORDINAL": 3448
          },
          {
            "Reference_area": "Mongolia",
            "Year": 2022,
            "Percentage": 15.83023351,
            "GL_ORDINAL": 3449
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 3450
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 3451
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 3452
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2003,
            "Percentage": 0.232509717,
            "GL_ORDINAL": 3453
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 3454
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 3455
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3456
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 3457
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 3458
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 3459
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 3460
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 3461
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2012,
            "Percentage": 82.62925387,
            "GL_ORDINAL": 3462
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 3463
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 3464
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 3465
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 3466
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2017,
            "Percentage": 0.248680983,
            "GL_ORDINAL": 3467
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 3468
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 3469
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 3470
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2021,
            "Percentage": 0.325645933,
            "GL_ORDINAL": 3471
          },
          {
            "Reference_area": "Montenegro",
            "Year": 2022,
            "Percentage": 0.016998002,
            "GL_ORDINAL": 3472
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 3473
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2001,
            "Percentage": 95.50411964,
            "GL_ORDINAL": 3474
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 3475
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 3476
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 3477
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 3478
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3479
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 3480
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 3481
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 3482
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 3483
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 3484
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 3485
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 3486
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 3487
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2015,
            "Percentage": 55.59841882,
            "GL_ORDINAL": 3488
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 3489
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 3490
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 3491
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 3492
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 3493
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 3494
          },
          {
            "Reference_area": "Montserrat",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 3495
          },
          {
            "Reference_area": "Morocco",
            "Year": 2000,
            "Percentage": 88.9755808,
            "GL_ORDINAL": 3496
          },
          {
            "Reference_area": "Morocco",
            "Year": 2001,
            "Percentage": 89.93620421,
            "GL_ORDINAL": 3497
          },
          {
            "Reference_area": "Morocco",
            "Year": 2002,
            "Percentage": 78.83216399,
            "GL_ORDINAL": 3498
          },
          {
            "Reference_area": "Morocco",
            "Year": 2003,
            "Percentage": 90.14058364,
            "GL_ORDINAL": 3499
          },
          {
            "Reference_area": "Morocco",
            "Year": 2004,
            "Percentage": 89.69831198,
            "GL_ORDINAL": 3500
          },
          {
            "Reference_area": "Morocco",
            "Year": 2005,
            "Percentage": 90.98395926,
            "GL_ORDINAL": 3501
          },
          {
            "Reference_area": "Morocco",
            "Year": 2006,
            "Percentage": 73.698677,
            "GL_ORDINAL": 3502
          },
          {
            "Reference_area": "Morocco",
            "Year": 2007,
            "Percentage": 70.48428072,
            "GL_ORDINAL": 3503
          },
          {
            "Reference_area": "Morocco",
            "Year": 2008,
            "Percentage": 67.13791125,
            "GL_ORDINAL": 3504
          },
          {
            "Reference_area": "Morocco",
            "Year": 2009,
            "Percentage": 90.95413676,
            "GL_ORDINAL": 3505
          },
          {
            "Reference_area": "Morocco",
            "Year": 2010,
            "Percentage": 87.30509401,
            "GL_ORDINAL": 3506
          },
          {
            "Reference_area": "Morocco",
            "Year": 2011,
            "Percentage": 90.7155042,
            "GL_ORDINAL": 3507
          },
          {
            "Reference_area": "Morocco",
            "Year": 2012,
            "Percentage": 91.17434309,
            "GL_ORDINAL": 3508
          },
          {
            "Reference_area": "Morocco",
            "Year": 2013,
            "Percentage": 90.15424323,
            "GL_ORDINAL": 3509
          },
          {
            "Reference_area": "Morocco",
            "Year": 2014,
            "Percentage": 91.19094791,
            "GL_ORDINAL": 3510
          },
          {
            "Reference_area": "Morocco",
            "Year": 2015,
            "Percentage": 91.2018461,
            "GL_ORDINAL": 3511
          },
          {
            "Reference_area": "Morocco",
            "Year": 2016,
            "Percentage": 30.94409339,
            "GL_ORDINAL": 3512
          },
          {
            "Reference_area": "Morocco",
            "Year": 2017,
            "Percentage": 91.40983055,
            "GL_ORDINAL": 3513
          },
          {
            "Reference_area": "Morocco",
            "Year": 2018,
            "Percentage": 90.60838996,
            "GL_ORDINAL": 3514
          },
          {
            "Reference_area": "Morocco",
            "Year": 2019,
            "Percentage": 91.07727316,
            "GL_ORDINAL": 3515
          },
          {
            "Reference_area": "Morocco",
            "Year": 2020,
            "Percentage": 85.50232284,
            "GL_ORDINAL": 3516
          },
          {
            "Reference_area": "Morocco",
            "Year": 2021,
            "Percentage": 98.63041192,
            "GL_ORDINAL": 3517
          },
          {
            "Reference_area": "Morocco",
            "Year": 2022,
            "Percentage": 97.40984583,
            "GL_ORDINAL": 3518
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2000,
            "Percentage": 91.02918446,
            "GL_ORDINAL": 3519
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2001,
            "Percentage": 93.46628296,
            "GL_ORDINAL": 3520
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2002,
            "Percentage": 78.56311799,
            "GL_ORDINAL": 3521
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2003,
            "Percentage": 93.34399049,
            "GL_ORDINAL": 3522
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2004,
            "Percentage": 93.91984669,
            "GL_ORDINAL": 3523
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2005,
            "Percentage": 94.84603253,
            "GL_ORDINAL": 3524
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2006,
            "Percentage": 83.44569243,
            "GL_ORDINAL": 3525
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2007,
            "Percentage": 85.6722083,
            "GL_ORDINAL": 3526
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2008,
            "Percentage": 88.47476537,
            "GL_ORDINAL": 3527
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2009,
            "Percentage": 94.06771946,
            "GL_ORDINAL": 3528
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2010,
            "Percentage": 95.21069446,
            "GL_ORDINAL": 3529
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2011,
            "Percentage": 95.43458568,
            "GL_ORDINAL": 3530
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2012,
            "Percentage": 94.51723402,
            "GL_ORDINAL": 3531
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2013,
            "Percentage": 95.0507982,
            "GL_ORDINAL": 3532
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2014,
            "Percentage": 94.33348418,
            "GL_ORDINAL": 3533
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2015,
            "Percentage": 95.20895304,
            "GL_ORDINAL": 3534
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2016,
            "Percentage": 75.02224443,
            "GL_ORDINAL": 3535
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2017,
            "Percentage": 93.13482577,
            "GL_ORDINAL": 3536
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2018,
            "Percentage": 94.80426641,
            "GL_ORDINAL": 3537
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2019,
            "Percentage": 95.27347249,
            "GL_ORDINAL": 3538
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2020,
            "Percentage": 94.20800219,
            "GL_ORDINAL": 3539
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2021,
            "Percentage": 97.59535245,
            "GL_ORDINAL": 3540
          },
          {
            "Reference_area": "Mozambique",
            "Year": 2022,
            "Percentage": 98.21553837,
            "GL_ORDINAL": 3541
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2000,
            "Percentage": 60.12999576,
            "GL_ORDINAL": 3542
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2001,
            "Percentage": 70.69655971,
            "GL_ORDINAL": 3543
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2002,
            "Percentage": 72.19735815,
            "GL_ORDINAL": 3544
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2003,
            "Percentage": 68.32582787,
            "GL_ORDINAL": 3545
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2004,
            "Percentage": 75.4186137,
            "GL_ORDINAL": 3546
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2005,
            "Percentage": 76.11175299,
            "GL_ORDINAL": 3547
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2006,
            "Percentage": 54.07989705,
            "GL_ORDINAL": 3548
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2007,
            "Percentage": 56.65515555,
            "GL_ORDINAL": 3549
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2008,
            "Percentage": 39.79777944,
            "GL_ORDINAL": 3550
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2009,
            "Percentage": 78.31533101,
            "GL_ORDINAL": 3551
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2010,
            "Percentage": 74.4995232,
            "GL_ORDINAL": 3552
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2011,
            "Percentage": 62.73455334,
            "GL_ORDINAL": 3553
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2012,
            "Percentage": 70.98962978,
            "GL_ORDINAL": 3554
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2013,
            "Percentage": 74.24884574,
            "GL_ORDINAL": 3555
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2014,
            "Percentage": 78.77034716,
            "GL_ORDINAL": 3556
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2015,
            "Percentage": 74.76664006,
            "GL_ORDINAL": 3557
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2016,
            "Percentage": 48.16547602,
            "GL_ORDINAL": 3558
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2017,
            "Percentage": 58.40216894,
            "GL_ORDINAL": 3559
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2018,
            "Percentage": 51.76595169,
            "GL_ORDINAL": 3560
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2019,
            "Percentage": 73.15980083,
            "GL_ORDINAL": 3561
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2020,
            "Percentage": 75.98065857,
            "GL_ORDINAL": 3562
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2021,
            "Percentage": 80.22502268,
            "GL_ORDINAL": 3563
          },
          {
            "Reference_area": "Myanmar",
            "Year": 2022,
            "Percentage": 54.32547922,
            "GL_ORDINAL": 3564
          },
          {
            "Reference_area": "Namibia",
            "Year": 2000,
            "Percentage": 89.3256547,
            "GL_ORDINAL": 3565
          },
          {
            "Reference_area": "Namibia",
            "Year": 2001,
            "Percentage": 89.45647424,
            "GL_ORDINAL": 3566
          },
          {
            "Reference_area": "Namibia",
            "Year": 2002,
            "Percentage": 89.48941163,
            "GL_ORDINAL": 3567
          },
          {
            "Reference_area": "Namibia",
            "Year": 2003,
            "Percentage": 89.51096031,
            "GL_ORDINAL": 3568
          },
          {
            "Reference_area": "Namibia",
            "Year": 2004,
            "Percentage": 89.54332079,
            "GL_ORDINAL": 3569
          },
          {
            "Reference_area": "Namibia",
            "Year": 2005,
            "Percentage": 89.54545455,
            "GL_ORDINAL": 3570
          },
          {
            "Reference_area": "Namibia",
            "Year": 2006,
            "Percentage": 89.54950007,
            "GL_ORDINAL": 3571
          },
          {
            "Reference_area": "Namibia",
            "Year": 2007,
            "Percentage": 89.55539823,
            "GL_ORDINAL": 3572
          },
          {
            "Reference_area": "Namibia",
            "Year": 2008,
            "Percentage": 89.54446065,
            "GL_ORDINAL": 3573
          },
          {
            "Reference_area": "Namibia",
            "Year": 2009,
            "Percentage": 89.55542427,
            "GL_ORDINAL": 3574
          },
          {
            "Reference_area": "Namibia",
            "Year": 2010,
            "Percentage": 89.56670376,
            "GL_ORDINAL": 3575
          },
          {
            "Reference_area": "Namibia",
            "Year": 2011,
            "Percentage": 89.57282395,
            "GL_ORDINAL": 3576
          },
          {
            "Reference_area": "Namibia",
            "Year": 2012,
            "Percentage": 89.6293412,
            "GL_ORDINAL": 3577
          },
          {
            "Reference_area": "Namibia",
            "Year": 2013,
            "Percentage": 89.63964953,
            "GL_ORDINAL": 3578
          },
          {
            "Reference_area": "Namibia",
            "Year": 2014,
            "Percentage": 89.64815667,
            "GL_ORDINAL": 3579
          },
          {
            "Reference_area": "Namibia",
            "Year": 2015,
            "Percentage": 89.64904381,
            "GL_ORDINAL": 3580
          },
          {
            "Reference_area": "Namibia",
            "Year": 2016,
            "Percentage": 42.92581296,
            "GL_ORDINAL": 3581
          },
          {
            "Reference_area": "Namibia",
            "Year": 2017,
            "Percentage": 89.63679529,
            "GL_ORDINAL": 3582
          },
          {
            "Reference_area": "Namibia",
            "Year": 2018,
            "Percentage": 89.63760433,
            "GL_ORDINAL": 3583
          },
          {
            "Reference_area": "Namibia",
            "Year": 2019,
            "Percentage": 89.65647633,
            "GL_ORDINAL": 3584
          },
          {
            "Reference_area": "Namibia",
            "Year": 2020,
            "Percentage": 89.65580083,
            "GL_ORDINAL": 3585
          },
          {
            "Reference_area": "Namibia",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 3586
          },
          {
            "Reference_area": "Namibia",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 3587
          },
          {
            "Reference_area": "Nauru",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 3588
          },
          {
            "Reference_area": "Nauru",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 3589
          },
          {
            "Reference_area": "Nauru",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 3590
          },
          {
            "Reference_area": "Nauru",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 3591
          },
          {
            "Reference_area": "Nauru",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 3592
          },
          {
            "Reference_area": "Nauru",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 3593
          },
          {
            "Reference_area": "Nauru",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3594
          },
          {
            "Reference_area": "Nauru",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 3595
          },
          {
            "Reference_area": "Nauru",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 3596
          },
          {
            "Reference_area": "Nauru",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 3597
          },
          {
            "Reference_area": "Nauru",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 3598
          },
          {
            "Reference_area": "Nauru",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 3599
          },
          {
            "Reference_area": "Nauru",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 3600
          },
          {
            "Reference_area": "Nauru",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 3601
          },
          {
            "Reference_area": "Nauru",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 3602
          },
          {
            "Reference_area": "Nauru",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 3603
          },
          {
            "Reference_area": "Nauru",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 3604
          },
          {
            "Reference_area": "Nauru",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 3605
          },
          {
            "Reference_area": "Nauru",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 3606
          },
          {
            "Reference_area": "Nauru",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 3607
          },
          {
            "Reference_area": "Nauru",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 3608
          },
          {
            "Reference_area": "Nauru",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 3609
          },
          {
            "Reference_area": "Nauru",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 3610
          },
          {
            "Reference_area": "Nepal",
            "Year": 2000,
            "Percentage": 44.25009812,
            "GL_ORDINAL": 3611
          },
          {
            "Reference_area": "Nepal",
            "Year": 2001,
            "Percentage": 46.24560386,
            "GL_ORDINAL": 3612
          },
          {
            "Reference_area": "Nepal",
            "Year": 2002,
            "Percentage": 34.77672453,
            "GL_ORDINAL": 3613
          },
          {
            "Reference_area": "Nepal",
            "Year": 2003,
            "Percentage": 39.48105659,
            "GL_ORDINAL": 3614
          },
          {
            "Reference_area": "Nepal",
            "Year": 2004,
            "Percentage": 49.31005309,
            "GL_ORDINAL": 3615
          },
          {
            "Reference_area": "Nepal",
            "Year": 2005,
            "Percentage": 49.78024693,
            "GL_ORDINAL": 3616
          },
          {
            "Reference_area": "Nepal",
            "Year": 2006,
            "Percentage": 20.10086064,
            "GL_ORDINAL": 3617
          },
          {
            "Reference_area": "Nepal",
            "Year": 2007,
            "Percentage": 8.51268153,
            "GL_ORDINAL": 3618
          },
          {
            "Reference_area": "Nepal",
            "Year": 2008,
            "Percentage": 18.32043369,
            "GL_ORDINAL": 3619
          },
          {
            "Reference_area": "Nepal",
            "Year": 2009,
            "Percentage": 56.28941777,
            "GL_ORDINAL": 3620
          },
          {
            "Reference_area": "Nepal",
            "Year": 2010,
            "Percentage": 60.43043602,
            "GL_ORDINAL": 3621
          },
          {
            "Reference_area": "Nepal",
            "Year": 2011,
            "Percentage": 43.52029546,
            "GL_ORDINAL": 3622
          },
          {
            "Reference_area": "Nepal",
            "Year": 2012,
            "Percentage": 51.57387455,
            "GL_ORDINAL": 3623
          },
          {
            "Reference_area": "Nepal",
            "Year": 2013,
            "Percentage": 47.92523411,
            "GL_ORDINAL": 3624
          },
          {
            "Reference_area": "Nepal",
            "Year": 2014,
            "Percentage": 53.99482461,
            "GL_ORDINAL": 3625
          },
          {
            "Reference_area": "Nepal",
            "Year": 2015,
            "Percentage": 31.31800966,
            "GL_ORDINAL": 3626
          },
          {
            "Reference_area": "Nepal",
            "Year": 2016,
            "Percentage": 35.43901783,
            "GL_ORDINAL": 3627
          },
          {
            "Reference_area": "Nepal",
            "Year": 2017,
            "Percentage": 30.96079293,
            "GL_ORDINAL": 3628
          },
          {
            "Reference_area": "Nepal",
            "Year": 2018,
            "Percentage": 34.9977069,
            "GL_ORDINAL": 3629
          },
          {
            "Reference_area": "Nepal",
            "Year": 2019,
            "Percentage": 36.47426307,
            "GL_ORDINAL": 3630
          },
          {
            "Reference_area": "Nepal",
            "Year": 2020,
            "Percentage": 28.44998373,
            "GL_ORDINAL": 3631
          },
          {
            "Reference_area": "Nepal",
            "Year": 2021,
            "Percentage": 57.13632875,
            "GL_ORDINAL": 3632
          },
          {
            "Reference_area": "Nepal",
            "Year": 2022,
            "Percentage": 33.68375141,
            "GL_ORDINAL": 3633
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 3634
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 3635
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2002,
            "Percentage": 22.85500291,
            "GL_ORDINAL": 3636
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 3637
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2004,
            "Percentage": 0.22625053,
            "GL_ORDINAL": 3638
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2005,
            "Percentage": 2.624003693,
            "GL_ORDINAL": 3639
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3640
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 3641
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 3642
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 3643
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2010,
            "Percentage": 0.961607604,
            "GL_ORDINAL": 3644
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2011,
            "Percentage": 0.253061918,
            "GL_ORDINAL": 3645
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 3646
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 3647
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 3648
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2015,
            "Percentage": 14.92662446,
            "GL_ORDINAL": 3649
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 3650
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2017,
            "Percentage": 35.71745567,
            "GL_ORDINAL": 3651
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 3652
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2019,
            "Percentage": 55.51879099,
            "GL_ORDINAL": 3653
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 3654
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2021,
            "Percentage": 5.882904433,
            "GL_ORDINAL": 3655
          },
          {
            "Reference_area": "New Caledonia",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 3656
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2000,
            "Percentage": 42.77442432,
            "GL_ORDINAL": 3657
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2001,
            "Percentage": 43.66871976,
            "GL_ORDINAL": 3658
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2002,
            "Percentage": 30.95377261,
            "GL_ORDINAL": 3659
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2003,
            "Percentage": 44.51850348,
            "GL_ORDINAL": 3660
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2004,
            "Percentage": 36.32630594,
            "GL_ORDINAL": 3661
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2005,
            "Percentage": 57.79107389,
            "GL_ORDINAL": 3662
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2006,
            "Percentage": 21.52968032,
            "GL_ORDINAL": 3663
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2007,
            "Percentage": 19.81853578,
            "GL_ORDINAL": 3664
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2008,
            "Percentage": 20.75503799,
            "GL_ORDINAL": 3665
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2009,
            "Percentage": 35.07424125,
            "GL_ORDINAL": 3666
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2010,
            "Percentage": 28.10207668,
            "GL_ORDINAL": 3667
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2011,
            "Percentage": 28.54423241,
            "GL_ORDINAL": 3668
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2012,
            "Percentage": 26.06244388,
            "GL_ORDINAL": 3669
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2013,
            "Percentage": 28.21800809,
            "GL_ORDINAL": 3670
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2014,
            "Percentage": 34.33234094,
            "GL_ORDINAL": 3671
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2015,
            "Percentage": 26.5095513,
            "GL_ORDINAL": 3672
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2016,
            "Percentage": 18.41506164,
            "GL_ORDINAL": 3673
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2017,
            "Percentage": 26.43343956,
            "GL_ORDINAL": 3674
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2018,
            "Percentage": 27.06078536,
            "GL_ORDINAL": 3675
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2019,
            "Percentage": 29.4854709,
            "GL_ORDINAL": 3676
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2020,
            "Percentage": 40.04210965,
            "GL_ORDINAL": 3677
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2021,
            "Percentage": 26.07672864,
            "GL_ORDINAL": 3678
          },
          {
            "Reference_area": "Nicaragua",
            "Year": 2022,
            "Percentage": 24.92408832,
            "GL_ORDINAL": 3679
          },
          {
            "Reference_area": "Niger",
            "Year": 2000,
            "Percentage": 72.63041642,
            "GL_ORDINAL": 3680
          },
          {
            "Reference_area": "Niger",
            "Year": 2001,
            "Percentage": 73.02893723,
            "GL_ORDINAL": 3681
          },
          {
            "Reference_area": "Niger",
            "Year": 2002,
            "Percentage": 73.02893723,
            "GL_ORDINAL": 3682
          },
          {
            "Reference_area": "Niger",
            "Year": 2003,
            "Percentage": 73.0294521,
            "GL_ORDINAL": 3683
          },
          {
            "Reference_area": "Niger",
            "Year": 2004,
            "Percentage": 73.0294521,
            "GL_ORDINAL": 3684
          },
          {
            "Reference_area": "Niger",
            "Year": 2005,
            "Percentage": 73.0294521,
            "GL_ORDINAL": 3685
          },
          {
            "Reference_area": "Niger",
            "Year": 2006,
            "Percentage": 73.0294521,
            "GL_ORDINAL": 3686
          },
          {
            "Reference_area": "Niger",
            "Year": 2007,
            "Percentage": 73.0294521,
            "GL_ORDINAL": 3687
          },
          {
            "Reference_area": "Niger",
            "Year": 2008,
            "Percentage": 73.03297421,
            "GL_ORDINAL": 3688
          },
          {
            "Reference_area": "Niger",
            "Year": 2009,
            "Percentage": 73.03297421,
            "GL_ORDINAL": 3689
          },
          {
            "Reference_area": "Niger",
            "Year": 2010,
            "Percentage": 73.03297421,
            "GL_ORDINAL": 3690
          },
          {
            "Reference_area": "Niger",
            "Year": 2011,
            "Percentage": 73.03297421,
            "GL_ORDINAL": 3691
          },
          {
            "Reference_area": "Niger",
            "Year": 2012,
            "Percentage": 73.59451518,
            "GL_ORDINAL": 3692
          },
          {
            "Reference_area": "Niger",
            "Year": 2013,
            "Percentage": 73.59623923,
            "GL_ORDINAL": 3693
          },
          {
            "Reference_area": "Niger",
            "Year": 2014,
            "Percentage": 73.6135549,
            "GL_ORDINAL": 3694
          },
          {
            "Reference_area": "Niger",
            "Year": 2015,
            "Percentage": 73.6135549,
            "GL_ORDINAL": 3695
          },
          {
            "Reference_area": "Niger",
            "Year": 2016,
            "Percentage": 2.35843027,
            "GL_ORDINAL": 3696
          },
          {
            "Reference_area": "Niger",
            "Year": 2017,
            "Percentage": 74.03159082,
            "GL_ORDINAL": 3697
          },
          {
            "Reference_area": "Niger",
            "Year": 2018,
            "Percentage": 74.50025483,
            "GL_ORDINAL": 3698
          },
          {
            "Reference_area": "Niger",
            "Year": 2019,
            "Percentage": 74.87967622,
            "GL_ORDINAL": 3699
          },
          {
            "Reference_area": "Niger",
            "Year": 2020,
            "Percentage": 74.9100229,
            "GL_ORDINAL": 3700
          },
          {
            "Reference_area": "Niger",
            "Year": 2021,
            "Percentage": 99.96652695,
            "GL_ORDINAL": 3701
          },
          {
            "Reference_area": "Niger",
            "Year": 2022,
            "Percentage": 99.96652695,
            "GL_ORDINAL": 3702
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2000,
            "Percentage": 81.14534197,
            "GL_ORDINAL": 3703
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2001,
            "Percentage": 83.9229951,
            "GL_ORDINAL": 3704
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2002,
            "Percentage": 83.47694664,
            "GL_ORDINAL": 3705
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2003,
            "Percentage": 74.28677045,
            "GL_ORDINAL": 3706
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2004,
            "Percentage": 80.54946481,
            "GL_ORDINAL": 3707
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2005,
            "Percentage": 81.66219413,
            "GL_ORDINAL": 3708
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2006,
            "Percentage": 76.67941571,
            "GL_ORDINAL": 3709
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2007,
            "Percentage": 84.41878322,
            "GL_ORDINAL": 3710
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2008,
            "Percentage": 81.35852732,
            "GL_ORDINAL": 3711
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2009,
            "Percentage": 70.40465459,
            "GL_ORDINAL": 3712
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2010,
            "Percentage": 79.82472329,
            "GL_ORDINAL": 3713
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2011,
            "Percentage": 84.49069893,
            "GL_ORDINAL": 3714
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2012,
            "Percentage": 84.0794102,
            "GL_ORDINAL": 3715
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2013,
            "Percentage": 78.33029097,
            "GL_ORDINAL": 3716
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2014,
            "Percentage": 72.93939926,
            "GL_ORDINAL": 3717
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2015,
            "Percentage": 89.14436841,
            "GL_ORDINAL": 3718
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2016,
            "Percentage": 61.19533681,
            "GL_ORDINAL": 3719
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2017,
            "Percentage": 81.11130879,
            "GL_ORDINAL": 3720
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2018,
            "Percentage": 82.78808186,
            "GL_ORDINAL": 3721
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2019,
            "Percentage": 80.13254416,
            "GL_ORDINAL": 3722
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2020,
            "Percentage": 89.17558764,
            "GL_ORDINAL": 3723
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2021,
            "Percentage": 91.67048589,
            "GL_ORDINAL": 3724
          },
          {
            "Reference_area": "Nigeria",
            "Year": 2022,
            "Percentage": 91.1240893,
            "GL_ORDINAL": 3725
          },
          {
            "Reference_area": "Niue",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 3726
          },
          {
            "Reference_area": "Niue",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 3727
          },
          {
            "Reference_area": "Niue",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 3728
          },
          {
            "Reference_area": "Niue",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 3729
          },
          {
            "Reference_area": "Niue",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 3730
          },
          {
            "Reference_area": "Niue",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 3731
          },
          {
            "Reference_area": "Niue",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3732
          },
          {
            "Reference_area": "Niue",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 3733
          },
          {
            "Reference_area": "Niue",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 3734
          },
          {
            "Reference_area": "Niue",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 3735
          },
          {
            "Reference_area": "Niue",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 3736
          },
          {
            "Reference_area": "Niue",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 3737
          },
          {
            "Reference_area": "Niue",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 3738
          },
          {
            "Reference_area": "Niue",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 3739
          },
          {
            "Reference_area": "Niue",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 3740
          },
          {
            "Reference_area": "Niue",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 3741
          },
          {
            "Reference_area": "Niue",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 3742
          },
          {
            "Reference_area": "Niue",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 3743
          },
          {
            "Reference_area": "Niue",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 3744
          },
          {
            "Reference_area": "Niue",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 3745
          },
          {
            "Reference_area": "Niue",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 3746
          },
          {
            "Reference_area": "Niue",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 3747
          },
          {
            "Reference_area": "Niue",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 3748
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2000,
            "Percentage": 62.81309364,
            "GL_ORDINAL": 3749
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2001,
            "Percentage": 3.45789466,
            "GL_ORDINAL": 3750
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2002,
            "Percentage": 7.34237303,
            "GL_ORDINAL": 3751
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2003,
            "Percentage": 20.60663004,
            "GL_ORDINAL": 3752
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2004,
            "Percentage": 12.99932007,
            "GL_ORDINAL": 3753
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2005,
            "Percentage": 3.715246511,
            "GL_ORDINAL": 3754
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3755
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2007,
            "Percentage": 53.55807577,
            "GL_ORDINAL": 3756
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2008,
            "Percentage": 1.540918656,
            "GL_ORDINAL": 3757
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 3758
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2010,
            "Percentage": 8.186090098,
            "GL_ORDINAL": 3759
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2011,
            "Percentage": 21.20506941,
            "GL_ORDINAL": 3760
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2012,
            "Percentage": 77.45284299,
            "GL_ORDINAL": 3761
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2013,
            "Percentage": 42.21851385,
            "GL_ORDINAL": 3762
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2014,
            "Percentage": 2.179655644,
            "GL_ORDINAL": 3763
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2015,
            "Percentage": 21.61299936,
            "GL_ORDINAL": 3764
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2016,
            "Percentage": 8.03701867,
            "GL_ORDINAL": 3765
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2017,
            "Percentage": 57.9960949,
            "GL_ORDINAL": 3766
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 3767
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2019,
            "Percentage": 38.71400756,
            "GL_ORDINAL": 3768
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2020,
            "Percentage": 11.28604058,
            "GL_ORDINAL": 3769
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2021,
            "Percentage": 77.92356772,
            "GL_ORDINAL": 3770
          },
          {
            "Reference_area": "North Macedonia",
            "Year": 2022,
            "Percentage": 33.22195541,
            "GL_ORDINAL": 3771
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 3772
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 3773
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 3774
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 3775
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 3776
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 3777
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3778
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 3779
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 3780
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 3781
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 3782
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 3783
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 3784
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 3785
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 3786
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 3787
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 3788
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 3789
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 3790
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 3791
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 3792
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 3793
          },
          {
            "Reference_area": "Northern Mariana Islands",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 3794
          },
          {
            "Reference_area": "Oman",
            "Year": 2000,
            "Percentage": 90.56010069,
            "GL_ORDINAL": 3795
          },
          {
            "Reference_area": "Oman",
            "Year": 2001,
            "Percentage": 90.86508104,
            "GL_ORDINAL": 3796
          },
          {
            "Reference_area": "Oman",
            "Year": 2002,
            "Percentage": 90.92436975,
            "GL_ORDINAL": 3797
          },
          {
            "Reference_area": "Oman",
            "Year": 2003,
            "Percentage": 91.08453954,
            "GL_ORDINAL": 3798
          },
          {
            "Reference_area": "Oman",
            "Year": 2004,
            "Percentage": 91.16732324,
            "GL_ORDINAL": 3799
          },
          {
            "Reference_area": "Oman",
            "Year": 2005,
            "Percentage": 91.58508644,
            "GL_ORDINAL": 3800
          },
          {
            "Reference_area": "Oman",
            "Year": 2006,
            "Percentage": 92.22689076,
            "GL_ORDINAL": 3801
          },
          {
            "Reference_area": "Oman",
            "Year": 2007,
            "Percentage": 92.27548671,
            "GL_ORDINAL": 3802
          },
          {
            "Reference_area": "Oman",
            "Year": 2008,
            "Percentage": 92.74142647,
            "GL_ORDINAL": 3803
          },
          {
            "Reference_area": "Oman",
            "Year": 2009,
            "Percentage": 92.88421053,
            "GL_ORDINAL": 3804
          },
          {
            "Reference_area": "Oman",
            "Year": 2010,
            "Percentage": 93.02129454,
            "GL_ORDINAL": 3805
          },
          {
            "Reference_area": "Oman",
            "Year": 2011,
            "Percentage": 93.04091101,
            "GL_ORDINAL": 3806
          },
          {
            "Reference_area": "Oman",
            "Year": 2012,
            "Percentage": 92.09194433,
            "GL_ORDINAL": 3807
          },
          {
            "Reference_area": "Oman",
            "Year": 2013,
            "Percentage": 92.13412062,
            "GL_ORDINAL": 3808
          },
          {
            "Reference_area": "Oman",
            "Year": 2014,
            "Percentage": 92.15686275,
            "GL_ORDINAL": 3809
          },
          {
            "Reference_area": "Oman",
            "Year": 2015,
            "Percentage": 92.15686275,
            "GL_ORDINAL": 3810
          },
          {
            "Reference_area": "Oman",
            "Year": 2016,
            "Percentage": 19.31674399,
            "GL_ORDINAL": 3811
          },
          {
            "Reference_area": "Oman",
            "Year": 2017,
            "Percentage": 92.21518987,
            "GL_ORDINAL": 3812
          },
          {
            "Reference_area": "Oman",
            "Year": 2018,
            "Percentage": 92.94994675,
            "GL_ORDINAL": 3813
          },
          {
            "Reference_area": "Oman",
            "Year": 2019,
            "Percentage": 93.04755811,
            "GL_ORDINAL": 3814
          },
          {
            "Reference_area": "Oman",
            "Year": 2020,
            "Percentage": 93.04755811,
            "GL_ORDINAL": 3815
          },
          {
            "Reference_area": "Oman",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 3816
          },
          {
            "Reference_area": "Oman",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 3817
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2000,
            "Percentage": 57.25224109,
            "GL_ORDINAL": 3818
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2001,
            "Percentage": 48.56268769,
            "GL_ORDINAL": 3819
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2002,
            "Percentage": 58.01625572,
            "GL_ORDINAL": 3820
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2003,
            "Percentage": 53.09585998,
            "GL_ORDINAL": 3821
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2004,
            "Percentage": 50.28702456,
            "GL_ORDINAL": 3822
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2005,
            "Percentage": 44.05365667,
            "GL_ORDINAL": 3823
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2006,
            "Percentage": 29.26332812,
            "GL_ORDINAL": 3824
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2007,
            "Percentage": 33.24575675,
            "GL_ORDINAL": 3825
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2008,
            "Percentage": 23.4504654,
            "GL_ORDINAL": 3826
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2009,
            "Percentage": 59.80488822,
            "GL_ORDINAL": 3827
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2010,
            "Percentage": 47.52257935,
            "GL_ORDINAL": 3828
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2011,
            "Percentage": 53.92240862,
            "GL_ORDINAL": 3829
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2012,
            "Percentage": 57.76507663,
            "GL_ORDINAL": 3830
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2013,
            "Percentage": 52.93393894,
            "GL_ORDINAL": 3831
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2014,
            "Percentage": 47.04260471,
            "GL_ORDINAL": 3832
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2015,
            "Percentage": 36.29722872,
            "GL_ORDINAL": 3833
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2016,
            "Percentage": 9.10395345,
            "GL_ORDINAL": 3834
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2017,
            "Percentage": 47.76747238,
            "GL_ORDINAL": 3835
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2018,
            "Percentage": 41.66163988,
            "GL_ORDINAL": 3836
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2019,
            "Percentage": 45.83341398,
            "GL_ORDINAL": 3837
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2020,
            "Percentage": 38.78663599,
            "GL_ORDINAL": 3838
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2021,
            "Percentage": 55.11417684,
            "GL_ORDINAL": 3839
          },
          {
            "Reference_area": "Pakistan",
            "Year": 2022,
            "Percentage": 66.90711128,
            "GL_ORDINAL": 3840
          },
          {
            "Reference_area": "Palau",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 3841
          },
          {
            "Reference_area": "Palau",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 3842
          },
          {
            "Reference_area": "Palau",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 3843
          },
          {
            "Reference_area": "Palau",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 3844
          },
          {
            "Reference_area": "Palau",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 3845
          },
          {
            "Reference_area": "Palau",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 3846
          },
          {
            "Reference_area": "Palau",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3847
          },
          {
            "Reference_area": "Palau",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 3848
          },
          {
            "Reference_area": "Palau",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 3849
          },
          {
            "Reference_area": "Palau",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 3850
          },
          {
            "Reference_area": "Palau",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 3851
          },
          {
            "Reference_area": "Palau",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 3852
          },
          {
            "Reference_area": "Palau",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 3853
          },
          {
            "Reference_area": "Palau",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 3854
          },
          {
            "Reference_area": "Palau",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 3855
          },
          {
            "Reference_area": "Palau",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 3856
          },
          {
            "Reference_area": "Palau",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 3857
          },
          {
            "Reference_area": "Palau",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 3858
          },
          {
            "Reference_area": "Palau",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 3859
          },
          {
            "Reference_area": "Palau",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 3860
          },
          {
            "Reference_area": "Palau",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 3861
          },
          {
            "Reference_area": "Palau",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 3862
          },
          {
            "Reference_area": "Palau",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 3863
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2000,
            "Percentage": 81.14639505,
            "GL_ORDINAL": 3864
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2001,
            "Percentage": 81.34134134,
            "GL_ORDINAL": 3865
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2002,
            "Percentage": 81.34134134,
            "GL_ORDINAL": 3866
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2003,
            "Percentage": 81.34134134,
            "GL_ORDINAL": 3867
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2004,
            "Percentage": 81.34134134,
            "GL_ORDINAL": 3868
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2005,
            "Percentage": 81.34134134,
            "GL_ORDINAL": 3869
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2006,
            "Percentage": 79.63963964,
            "GL_ORDINAL": 3870
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2007,
            "Percentage": 81.3013013,
            "GL_ORDINAL": 3871
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2008,
            "Percentage": 79.63963964,
            "GL_ORDINAL": 3872
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2009,
            "Percentage": 81.34134134,
            "GL_ORDINAL": 3873
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2010,
            "Percentage": 81.34134134,
            "GL_ORDINAL": 3874
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2011,
            "Percentage": 81.34134134,
            "GL_ORDINAL": 3875
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2012,
            "Percentage": 81.53784541,
            "GL_ORDINAL": 3876
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2013,
            "Percentage": 81.53784541,
            "GL_ORDINAL": 3877
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2014,
            "Percentage": 81.53784541,
            "GL_ORDINAL": 3878
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2015,
            "Percentage": 81.53784541,
            "GL_ORDINAL": 3879
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2016,
            "Percentage": 14.80151606,
            "GL_ORDINAL": 3880
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2017,
            "Percentage": 81.62086818,
            "GL_ORDINAL": 3881
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2018,
            "Percentage": 81.58156169,
            "GL_ORDINAL": 3882
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2019,
            "Percentage": 81.64594435,
            "GL_ORDINAL": 3883
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2020,
            "Percentage": 81.70229457,
            "GL_ORDINAL": 3884
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 3885
          },
          {
            "Reference_area": "Palestinian Territories",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 3886
          },
          {
            "Reference_area": "Panama",
            "Year": 2000,
            "Percentage": 13.75672158,
            "GL_ORDINAL": 3887
          },
          {
            "Reference_area": "Panama",
            "Year": 2001,
            "Percentage": 19.94932013,
            "GL_ORDINAL": 3888
          },
          {
            "Reference_area": "Panama",
            "Year": 2002,
            "Percentage": 20.36135714,
            "GL_ORDINAL": 3889
          },
          {
            "Reference_area": "Panama",
            "Year": 2003,
            "Percentage": 28.09858981,
            "GL_ORDINAL": 3890
          },
          {
            "Reference_area": "Panama",
            "Year": 2004,
            "Percentage": 26.61932273,
            "GL_ORDINAL": 3891
          },
          {
            "Reference_area": "Panama",
            "Year": 2005,
            "Percentage": 9.971661558,
            "GL_ORDINAL": 3892
          },
          {
            "Reference_area": "Panama",
            "Year": 2006,
            "Percentage": 2.528665029,
            "GL_ORDINAL": 3893
          },
          {
            "Reference_area": "Panama",
            "Year": 2007,
            "Percentage": 3.327471643,
            "GL_ORDINAL": 3894
          },
          {
            "Reference_area": "Panama",
            "Year": 2008,
            "Percentage": 0.255187134,
            "GL_ORDINAL": 3895
          },
          {
            "Reference_area": "Panama",
            "Year": 2009,
            "Percentage": 22.79146561,
            "GL_ORDINAL": 3896
          },
          {
            "Reference_area": "Panama",
            "Year": 2010,
            "Percentage": 13.06677092,
            "GL_ORDINAL": 3897
          },
          {
            "Reference_area": "Panama",
            "Year": 2011,
            "Percentage": 10.28061195,
            "GL_ORDINAL": 3898
          },
          {
            "Reference_area": "Panama",
            "Year": 2012,
            "Percentage": 22.85344773,
            "GL_ORDINAL": 3899
          },
          {
            "Reference_area": "Panama",
            "Year": 2013,
            "Percentage": 14.12456279,
            "GL_ORDINAL": 3900
          },
          {
            "Reference_area": "Panama",
            "Year": 2014,
            "Percentage": 14.26947931,
            "GL_ORDINAL": 3901
          },
          {
            "Reference_area": "Panama",
            "Year": 2015,
            "Percentage": 24.20849214,
            "GL_ORDINAL": 3902
          },
          {
            "Reference_area": "Panama",
            "Year": 2016,
            "Percentage": 15.46347424,
            "GL_ORDINAL": 3903
          },
          {
            "Reference_area": "Panama",
            "Year": 2017,
            "Percentage": 14.31231054,
            "GL_ORDINAL": 3904
          },
          {
            "Reference_area": "Panama",
            "Year": 2018,
            "Percentage": 9.676444005,
            "GL_ORDINAL": 3905
          },
          {
            "Reference_area": "Panama",
            "Year": 2019,
            "Percentage": 29.49531684,
            "GL_ORDINAL": 3906
          },
          {
            "Reference_area": "Panama",
            "Year": 2020,
            "Percentage": 25.61804808,
            "GL_ORDINAL": 3907
          },
          {
            "Reference_area": "Panama",
            "Year": 2021,
            "Percentage": 6.395079866,
            "GL_ORDINAL": 3908
          },
          {
            "Reference_area": "Panama",
            "Year": 2022,
            "Percentage": 6.189349904,
            "GL_ORDINAL": 3909
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2000,
            "Percentage": 0.12191629,
            "GL_ORDINAL": 3910
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2001,
            "Percentage": 1.225002675,
            "GL_ORDINAL": 3911
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2002,
            "Percentage": 4.543227289,
            "GL_ORDINAL": 3912
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2003,
            "Percentage": 0.507278021,
            "GL_ORDINAL": 3913
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2004,
            "Percentage": 2.099598434,
            "GL_ORDINAL": 3914
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2005,
            "Percentage": 0.208520494,
            "GL_ORDINAL": 3915
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2006,
            "Percentage": 0.02053255,
            "GL_ORDINAL": 3916
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 3917
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 3918
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2009,
            "Percentage": 0.606753891,
            "GL_ORDINAL": 3919
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2010,
            "Percentage": 0.112969388,
            "GL_ORDINAL": 3920
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2011,
            "Percentage": 0.230842965,
            "GL_ORDINAL": 3921
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2012,
            "Percentage": 0.103644072,
            "GL_ORDINAL": 3922
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2013,
            "Percentage": 1.483812806,
            "GL_ORDINAL": 3923
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2014,
            "Percentage": 0.649630831,
            "GL_ORDINAL": 3924
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2015,
            "Percentage": 5.751459284,
            "GL_ORDINAL": 3925
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2016,
            "Percentage": 0.031931514,
            "GL_ORDINAL": 3926
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2017,
            "Percentage": 0.131891453,
            "GL_ORDINAL": 3927
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2018,
            "Percentage": 1.699418772,
            "GL_ORDINAL": 3928
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2019,
            "Percentage": 1.256112968,
            "GL_ORDINAL": 3929
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2020,
            "Percentage": 0.105197072,
            "GL_ORDINAL": 3930
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2021,
            "Percentage": 0.152675248,
            "GL_ORDINAL": 3931
          },
          {
            "Reference_area": "Papua New Guinea",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 3932
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2000,
            "Percentage": 34.75728558,
            "GL_ORDINAL": 3933
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2001,
            "Percentage": 59.15872474,
            "GL_ORDINAL": 3934
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2002,
            "Percentage": 61.4713302,
            "GL_ORDINAL": 3935
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2003,
            "Percentage": 62.10401355,
            "GL_ORDINAL": 3936
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2004,
            "Percentage": 63.5542412,
            "GL_ORDINAL": 3937
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2005,
            "Percentage": 69.83003928,
            "GL_ORDINAL": 3938
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2006,
            "Percentage": 67.82251239,
            "GL_ORDINAL": 3939
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2007,
            "Percentage": 70.98831227,
            "GL_ORDINAL": 3940
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2008,
            "Percentage": 37.52135337,
            "GL_ORDINAL": 3941
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2009,
            "Percentage": 52.56768087,
            "GL_ORDINAL": 3942
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2010,
            "Percentage": 76.28043,
            "GL_ORDINAL": 3943
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2011,
            "Percentage": 62.84911816,
            "GL_ORDINAL": 3944
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2012,
            "Percentage": 75.07306792,
            "GL_ORDINAL": 3945
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2013,
            "Percentage": 55.74429057,
            "GL_ORDINAL": 3946
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2014,
            "Percentage": 68.20886201,
            "GL_ORDINAL": 3947
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2015,
            "Percentage": 53.06656905,
            "GL_ORDINAL": 3948
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2016,
            "Percentage": 26.3939563,
            "GL_ORDINAL": 3949
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2017,
            "Percentage": 74.9673864,
            "GL_ORDINAL": 3950
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2018,
            "Percentage": 36.70279298,
            "GL_ORDINAL": 3951
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2019,
            "Percentage": 74.53411006,
            "GL_ORDINAL": 3952
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2020,
            "Percentage": 86.11666568,
            "GL_ORDINAL": 3953
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2021,
            "Percentage": 92.55114544,
            "GL_ORDINAL": 3954
          },
          {
            "Reference_area": "Paraguay",
            "Year": 2022,
            "Percentage": 91.08829348,
            "GL_ORDINAL": 3955
          },
          {
            "Reference_area": "Peru",
            "Year": 2000,
            "Percentage": 2.198941175,
            "GL_ORDINAL": 3956
          },
          {
            "Reference_area": "Peru",
            "Year": 2001,
            "Percentage": 0.74408246,
            "GL_ORDINAL": 3957
          },
          {
            "Reference_area": "Peru",
            "Year": 2002,
            "Percentage": 1.418686482,
            "GL_ORDINAL": 3958
          },
          {
            "Reference_area": "Peru",
            "Year": 2003,
            "Percentage": 1.913822996,
            "GL_ORDINAL": 3959
          },
          {
            "Reference_area": "Peru",
            "Year": 2004,
            "Percentage": 1.085733848,
            "GL_ORDINAL": 3960
          },
          {
            "Reference_area": "Peru",
            "Year": 2005,
            "Percentage": 3.063911507,
            "GL_ORDINAL": 3961
          },
          {
            "Reference_area": "Peru",
            "Year": 2006,
            "Percentage": 0.038182927,
            "GL_ORDINAL": 3962
          },
          {
            "Reference_area": "Peru",
            "Year": 2007,
            "Percentage": 0.029109974,
            "GL_ORDINAL": 3963
          },
          {
            "Reference_area": "Peru",
            "Year": 2008,
            "Percentage": 0.033611059,
            "GL_ORDINAL": 3964
          },
          {
            "Reference_area": "Peru",
            "Year": 2009,
            "Percentage": 1.444682126,
            "GL_ORDINAL": 3965
          },
          {
            "Reference_area": "Peru",
            "Year": 2010,
            "Percentage": 3.591136999,
            "GL_ORDINAL": 3966
          },
          {
            "Reference_area": "Peru",
            "Year": 2011,
            "Percentage": 2.016129901,
            "GL_ORDINAL": 3967
          },
          {
            "Reference_area": "Peru",
            "Year": 2012,
            "Percentage": 2.051311198,
            "GL_ORDINAL": 3968
          },
          {
            "Reference_area": "Peru",
            "Year": 2013,
            "Percentage": 0.910314564,
            "GL_ORDINAL": 3969
          },
          {
            "Reference_area": "Peru",
            "Year": 2014,
            "Percentage": 1.632679849,
            "GL_ORDINAL": 3970
          },
          {
            "Reference_area": "Peru",
            "Year": 2015,
            "Percentage": 1.596725208,
            "GL_ORDINAL": 3971
          },
          {
            "Reference_area": "Peru",
            "Year": 2016,
            "Percentage": 1.207512137,
            "GL_ORDINAL": 3972
          },
          {
            "Reference_area": "Peru",
            "Year": 2017,
            "Percentage": 0.654682317,
            "GL_ORDINAL": 3973
          },
          {
            "Reference_area": "Peru",
            "Year": 2018,
            "Percentage": 1.355999244,
            "GL_ORDINAL": 3974
          },
          {
            "Reference_area": "Peru",
            "Year": 2019,
            "Percentage": 2.359606406,
            "GL_ORDINAL": 3975
          },
          {
            "Reference_area": "Peru",
            "Year": 2020,
            "Percentage": 3.591110327,
            "GL_ORDINAL": 3976
          },
          {
            "Reference_area": "Peru",
            "Year": 2021,
            "Percentage": 7.729597324,
            "GL_ORDINAL": 3977
          },
          {
            "Reference_area": "Peru",
            "Year": 2022,
            "Percentage": 0.50600682,
            "GL_ORDINAL": 3978
          },
          {
            "Reference_area": "Philippines",
            "Year": 2000,
            "Percentage": 3.202266075,
            "GL_ORDINAL": 3979
          },
          {
            "Reference_area": "Philippines",
            "Year": 2001,
            "Percentage": 2.406125039,
            "GL_ORDINAL": 3980
          },
          {
            "Reference_area": "Philippines",
            "Year": 2002,
            "Percentage": 8.937128999,
            "GL_ORDINAL": 3981
          },
          {
            "Reference_area": "Philippines",
            "Year": 2003,
            "Percentage": 11.0675212,
            "GL_ORDINAL": 3982
          },
          {
            "Reference_area": "Philippines",
            "Year": 2004,
            "Percentage": 6.330327183,
            "GL_ORDINAL": 3983
          },
          {
            "Reference_area": "Philippines",
            "Year": 2005,
            "Percentage": 11.24699663,
            "GL_ORDINAL": 3984
          },
          {
            "Reference_area": "Philippines",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 3985
          },
          {
            "Reference_area": "Philippines",
            "Year": 2007,
            "Percentage": 0.032241382,
            "GL_ORDINAL": 3986
          },
          {
            "Reference_area": "Philippines",
            "Year": 2008,
            "Percentage": 0.01873397,
            "GL_ORDINAL": 3987
          },
          {
            "Reference_area": "Philippines",
            "Year": 2009,
            "Percentage": 1.534049159,
            "GL_ORDINAL": 3988
          },
          {
            "Reference_area": "Philippines",
            "Year": 2010,
            "Percentage": 12.04291708,
            "GL_ORDINAL": 3989
          },
          {
            "Reference_area": "Philippines",
            "Year": 2011,
            "Percentage": 4.350244691,
            "GL_ORDINAL": 3990
          },
          {
            "Reference_area": "Philippines",
            "Year": 2012,
            "Percentage": 1.277800928,
            "GL_ORDINAL": 3991
          },
          {
            "Reference_area": "Philippines",
            "Year": 2013,
            "Percentage": 2.446171813,
            "GL_ORDINAL": 3992
          },
          {
            "Reference_area": "Philippines",
            "Year": 2014,
            "Percentage": 4.195765759,
            "GL_ORDINAL": 3993
          },
          {
            "Reference_area": "Philippines",
            "Year": 2015,
            "Percentage": 7.096375378,
            "GL_ORDINAL": 3994
          },
          {
            "Reference_area": "Philippines",
            "Year": 2016,
            "Percentage": 3.220924998,
            "GL_ORDINAL": 3995
          },
          {
            "Reference_area": "Philippines",
            "Year": 2017,
            "Percentage": 2.738232018,
            "GL_ORDINAL": 3996
          },
          {
            "Reference_area": "Philippines",
            "Year": 2018,
            "Percentage": 4.029194953,
            "GL_ORDINAL": 3997
          },
          {
            "Reference_area": "Philippines",
            "Year": 2019,
            "Percentage": 11.33373227,
            "GL_ORDINAL": 3998
          },
          {
            "Reference_area": "Philippines",
            "Year": 2020,
            "Percentage": 8.764214973,
            "GL_ORDINAL": 3999
          },
          {
            "Reference_area": "Philippines",
            "Year": 2021,
            "Percentage": 3.589578086,
            "GL_ORDINAL": 4000
          },
          {
            "Reference_area": "Philippines",
            "Year": 2022,
            "Percentage": 0.255063933,
            "GL_ORDINAL": 4001
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2000,
            "Percentage": 51.83110601,
            "GL_ORDINAL": 4002
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2001,
            "Percentage": 50.91584549,
            "GL_ORDINAL": 4003
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2002,
            "Percentage": 30.34847692,
            "GL_ORDINAL": 4004
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2003,
            "Percentage": 55.95856346,
            "GL_ORDINAL": 4005
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2004,
            "Percentage": 1.208467456,
            "GL_ORDINAL": 4006
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2005,
            "Percentage": 50.78888768,
            "GL_ORDINAL": 4007
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2006,
            "Percentage": 10.36517044,
            "GL_ORDINAL": 4008
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2007,
            "Percentage": 10.29595162,
            "GL_ORDINAL": 4009
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4010
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2009,
            "Percentage": 29.72764509,
            "GL_ORDINAL": 4011
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4012
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2011,
            "Percentage": 0.896389137,
            "GL_ORDINAL": 4013
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 4014
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2013,
            "Percentage": 29.46432149,
            "GL_ORDINAL": 4015
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2014,
            "Percentage": 55.27493261,
            "GL_ORDINAL": 4016
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2015,
            "Percentage": 55.39928937,
            "GL_ORDINAL": 4017
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4018
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2017,
            "Percentage": 29.80957923,
            "GL_ORDINAL": 4019
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2018,
            "Percentage": 29.82838722,
            "GL_ORDINAL": 4020
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2019,
            "Percentage": 8.944975914,
            "GL_ORDINAL": 4021
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2020,
            "Percentage": 55.62726742,
            "GL_ORDINAL": 4022
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2021,
            "Percentage": 7.146061143,
            "GL_ORDINAL": 4023
          },
          {
            "Reference_area": "Puerto Rico",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4024
          },
          {
            "Reference_area": "Qatar",
            "Year": 2000,
            "Percentage": 77.31629393,
            "GL_ORDINAL": 4025
          },
          {
            "Reference_area": "Qatar",
            "Year": 2001,
            "Percentage": 77.31629393,
            "GL_ORDINAL": 4026
          },
          {
            "Reference_area": "Qatar",
            "Year": 2002,
            "Percentage": 77.56410256,
            "GL_ORDINAL": 4027
          },
          {
            "Reference_area": "Qatar",
            "Year": 2003,
            "Percentage": 77.56410256,
            "GL_ORDINAL": 4028
          },
          {
            "Reference_area": "Qatar",
            "Year": 2004,
            "Percentage": 77.56410256,
            "GL_ORDINAL": 4029
          },
          {
            "Reference_area": "Qatar",
            "Year": 2005,
            "Percentage": 77.56410256,
            "GL_ORDINAL": 4030
          },
          {
            "Reference_area": "Qatar",
            "Year": 2006,
            "Percentage": 77.56410256,
            "GL_ORDINAL": 4031
          },
          {
            "Reference_area": "Qatar",
            "Year": 2007,
            "Percentage": 77.5,
            "GL_ORDINAL": 4032
          },
          {
            "Reference_area": "Qatar",
            "Year": 2008,
            "Percentage": 77.5,
            "GL_ORDINAL": 4033
          },
          {
            "Reference_area": "Qatar",
            "Year": 2009,
            "Percentage": 77.5,
            "GL_ORDINAL": 4034
          },
          {
            "Reference_area": "Qatar",
            "Year": 2010,
            "Percentage": 77.5,
            "GL_ORDINAL": 4035
          },
          {
            "Reference_area": "Qatar",
            "Year": 2011,
            "Percentage": 77.5,
            "GL_ORDINAL": 4036
          },
          {
            "Reference_area": "Qatar",
            "Year": 2012,
            "Percentage": 77.5,
            "GL_ORDINAL": 4037
          },
          {
            "Reference_area": "Qatar",
            "Year": 2013,
            "Percentage": 77.5,
            "GL_ORDINAL": 4038
          },
          {
            "Reference_area": "Qatar",
            "Year": 2014,
            "Percentage": 76.45259939,
            "GL_ORDINAL": 4039
          },
          {
            "Reference_area": "Qatar",
            "Year": 2015,
            "Percentage": 76.45259939,
            "GL_ORDINAL": 4040
          },
          {
            "Reference_area": "Qatar",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4041
          },
          {
            "Reference_area": "Qatar",
            "Year": 2017,
            "Percentage": 76.45259939,
            "GL_ORDINAL": 4042
          },
          {
            "Reference_area": "Qatar",
            "Year": 2018,
            "Percentage": 76.45259939,
            "GL_ORDINAL": 4043
          },
          {
            "Reference_area": "Qatar",
            "Year": 2019,
            "Percentage": 76.45259939,
            "GL_ORDINAL": 4044
          },
          {
            "Reference_area": "Qatar",
            "Year": 2020,
            "Percentage": 76.92307692,
            "GL_ORDINAL": 4045
          },
          {
            "Reference_area": "Qatar",
            "Year": 2021,
            "Percentage": 98.15382956,
            "GL_ORDINAL": 4046
          },
          {
            "Reference_area": "Qatar",
            "Year": 2022,
            "Percentage": 98.15382956,
            "GL_ORDINAL": 4047
          },
          {
            "Reference_area": "Réunion",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 4048
          },
          {
            "Reference_area": "Réunion",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 4049
          },
          {
            "Reference_area": "Réunion",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4050
          },
          {
            "Reference_area": "Réunion",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 4051
          },
          {
            "Reference_area": "Réunion",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4052
          },
          {
            "Reference_area": "Réunion",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 4053
          },
          {
            "Reference_area": "Réunion",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4054
          },
          {
            "Reference_area": "Réunion",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4055
          },
          {
            "Reference_area": "Réunion",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4056
          },
          {
            "Reference_area": "Réunion",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 4057
          },
          {
            "Reference_area": "Réunion",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4058
          },
          {
            "Reference_area": "Réunion",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4059
          },
          {
            "Reference_area": "Réunion",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 4060
          },
          {
            "Reference_area": "Réunion",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 4061
          },
          {
            "Reference_area": "Réunion",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 4062
          },
          {
            "Reference_area": "Réunion",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 4063
          },
          {
            "Reference_area": "Réunion",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4064
          },
          {
            "Reference_area": "Réunion",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 4065
          },
          {
            "Reference_area": "Réunion",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 4066
          },
          {
            "Reference_area": "Réunion",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 4067
          },
          {
            "Reference_area": "Réunion",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 4068
          },
          {
            "Reference_area": "Réunion",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 4069
          },
          {
            "Reference_area": "Réunion",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4070
          },
          {
            "Reference_area": "Romania",
            "Year": 2000,
            "Percentage": 11.68412429,
            "GL_ORDINAL": 4071
          },
          {
            "Reference_area": "Romania",
            "Year": 2001,
            "Percentage": 3.127841014,
            "GL_ORDINAL": 4072
          },
          {
            "Reference_area": "Romania",
            "Year": 2002,
            "Percentage": 3.416601368,
            "GL_ORDINAL": 4073
          },
          {
            "Reference_area": "Romania",
            "Year": 2003,
            "Percentage": 2.887200515,
            "GL_ORDINAL": 4074
          },
          {
            "Reference_area": "Romania",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4075
          },
          {
            "Reference_area": "Romania",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 4076
          },
          {
            "Reference_area": "Romania",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4077
          },
          {
            "Reference_area": "Romania",
            "Year": 2007,
            "Percentage": 5.822324231,
            "GL_ORDINAL": 4078
          },
          {
            "Reference_area": "Romania",
            "Year": 2008,
            "Percentage": 1.726306654,
            "GL_ORDINAL": 4079
          },
          {
            "Reference_area": "Romania",
            "Year": 2009,
            "Percentage": 1.475940335,
            "GL_ORDINAL": 4080
          },
          {
            "Reference_area": "Romania",
            "Year": 2010,
            "Percentage": 1.23226892,
            "GL_ORDINAL": 4081
          },
          {
            "Reference_area": "Romania",
            "Year": 2011,
            "Percentage": 2.266830207,
            "GL_ORDINAL": 4082
          },
          {
            "Reference_area": "Romania",
            "Year": 2012,
            "Percentage": 20.72533381,
            "GL_ORDINAL": 4083
          },
          {
            "Reference_area": "Romania",
            "Year": 2013,
            "Percentage": 2.416762554,
            "GL_ORDINAL": 4084
          },
          {
            "Reference_area": "Romania",
            "Year": 2014,
            "Percentage": 2.128171396,
            "GL_ORDINAL": 4085
          },
          {
            "Reference_area": "Romania",
            "Year": 2015,
            "Percentage": 14.59499549,
            "GL_ORDINAL": 4086
          },
          {
            "Reference_area": "Romania",
            "Year": 2016,
            "Percentage": 0.097697766,
            "GL_ORDINAL": 4087
          },
          {
            "Reference_area": "Romania",
            "Year": 2017,
            "Percentage": 1.021060624,
            "GL_ORDINAL": 4088
          },
          {
            "Reference_area": "Romania",
            "Year": 2018,
            "Percentage": 1.058154954,
            "GL_ORDINAL": 4089
          },
          {
            "Reference_area": "Romania",
            "Year": 2019,
            "Percentage": 3.928332069,
            "GL_ORDINAL": 4090
          },
          {
            "Reference_area": "Romania",
            "Year": 2020,
            "Percentage": 7.459238665,
            "GL_ORDINAL": 4091
          },
          {
            "Reference_area": "Romania",
            "Year": 2021,
            "Percentage": 1.332692342,
            "GL_ORDINAL": 4092
          },
          {
            "Reference_area": "Romania",
            "Year": 2022,
            "Percentage": 13.03995518,
            "GL_ORDINAL": 4093
          },
          {
            "Reference_area": "Russia",
            "Year": 2000,
            "Percentage": 0.543212015,
            "GL_ORDINAL": 4094
          },
          {
            "Reference_area": "Russia",
            "Year": 2001,
            "Percentage": 1.543708817,
            "GL_ORDINAL": 4095
          },
          {
            "Reference_area": "Russia",
            "Year": 2002,
            "Percentage": 1.376294037,
            "GL_ORDINAL": 4096
          },
          {
            "Reference_area": "Russia",
            "Year": 2003,
            "Percentage": 1.340937214,
            "GL_ORDINAL": 4097
          },
          {
            "Reference_area": "Russia",
            "Year": 2004,
            "Percentage": 1.532046123,
            "GL_ORDINAL": 4098
          },
          {
            "Reference_area": "Russia",
            "Year": 2005,
            "Percentage": 1.252978902,
            "GL_ORDINAL": 4099
          },
          {
            "Reference_area": "Russia",
            "Year": 2006,
            "Percentage": 1.855436137,
            "GL_ORDINAL": 4100
          },
          {
            "Reference_area": "Russia",
            "Year": 2007,
            "Percentage": 0.260135309,
            "GL_ORDINAL": 4101
          },
          {
            "Reference_area": "Russia",
            "Year": 2008,
            "Percentage": 0.791733404,
            "GL_ORDINAL": 4102
          },
          {
            "Reference_area": "Russia",
            "Year": 2009,
            "Percentage": 2.241225792,
            "GL_ORDINAL": 4103
          },
          {
            "Reference_area": "Russia",
            "Year": 2010,
            "Percentage": 4.037832804,
            "GL_ORDINAL": 4104
          },
          {
            "Reference_area": "Russia",
            "Year": 2011,
            "Percentage": 3.270122486,
            "GL_ORDINAL": 4105
          },
          {
            "Reference_area": "Russia",
            "Year": 2012,
            "Percentage": 2.325220438,
            "GL_ORDINAL": 4106
          },
          {
            "Reference_area": "Russia",
            "Year": 2013,
            "Percentage": 8.474406002,
            "GL_ORDINAL": 4107
          },
          {
            "Reference_area": "Russia",
            "Year": 2014,
            "Percentage": 4.395691254,
            "GL_ORDINAL": 4108
          },
          {
            "Reference_area": "Russia",
            "Year": 2015,
            "Percentage": 2.573171573,
            "GL_ORDINAL": 4109
          },
          {
            "Reference_area": "Russia",
            "Year": 2016,
            "Percentage": 3.23909471,
            "GL_ORDINAL": 4110
          },
          {
            "Reference_area": "Russia",
            "Year": 2017,
            "Percentage": 5.391712156,
            "GL_ORDINAL": 4111
          },
          {
            "Reference_area": "Russia",
            "Year": 2018,
            "Percentage": 3.513391085,
            "GL_ORDINAL": 4112
          },
          {
            "Reference_area": "Russia",
            "Year": 2019,
            "Percentage": 6.59368915,
            "GL_ORDINAL": 4113
          },
          {
            "Reference_area": "Russia",
            "Year": 2020,
            "Percentage": 3.265970789,
            "GL_ORDINAL": 4114
          },
          {
            "Reference_area": "Russia",
            "Year": 2021,
            "Percentage": 10.15549473,
            "GL_ORDINAL": 4115
          },
          {
            "Reference_area": "Russia",
            "Year": 2022,
            "Percentage": 3.751977416,
            "GL_ORDINAL": 4116
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2000,
            "Percentage": 83.3294967,
            "GL_ORDINAL": 4117
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2001,
            "Percentage": 29.47798742,
            "GL_ORDINAL": 4118
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2002,
            "Percentage": 68.91804912,
            "GL_ORDINAL": 4119
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2003,
            "Percentage": 65.56756085,
            "GL_ORDINAL": 4120
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2004,
            "Percentage": 42.85832284,
            "GL_ORDINAL": 4121
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2005,
            "Percentage": 38.66183256,
            "GL_ORDINAL": 4122
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2006,
            "Percentage": 5.171171542,
            "GL_ORDINAL": 4123
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2007,
            "Percentage": 0.448595082,
            "GL_ORDINAL": 4124
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2008,
            "Percentage": 4.257264784,
            "GL_ORDINAL": 4125
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2009,
            "Percentage": 48.21742735,
            "GL_ORDINAL": 4126
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2010,
            "Percentage": 76.84960337,
            "GL_ORDINAL": 4127
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2011,
            "Percentage": 21.36816122,
            "GL_ORDINAL": 4128
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2012,
            "Percentage": 25.74708455,
            "GL_ORDINAL": 4129
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2013,
            "Percentage": 49.49933109,
            "GL_ORDINAL": 4130
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2014,
            "Percentage": 31.75051283,
            "GL_ORDINAL": 4131
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2015,
            "Percentage": 66.68562607,
            "GL_ORDINAL": 4132
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2016,
            "Percentage": 28.28772834,
            "GL_ORDINAL": 4133
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2017,
            "Percentage": 32.49259273,
            "GL_ORDINAL": 4134
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2018,
            "Percentage": 19.61618104,
            "GL_ORDINAL": 4135
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2019,
            "Percentage": 32.51013706,
            "GL_ORDINAL": 4136
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2020,
            "Percentage": 40.55873505,
            "GL_ORDINAL": 4137
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2021,
            "Percentage": 35.89906221,
            "GL_ORDINAL": 4138
          },
          {
            "Reference_area": "Rwanda",
            "Year": 2022,
            "Percentage": 10.65336562,
            "GL_ORDINAL": 4139
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 4140
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2001,
            "Percentage": 3.323108384,
            "GL_ORDINAL": 4141
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4142
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 4143
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2004,
            "Percentage": 3.323108384,
            "GL_ORDINAL": 4144
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2005,
            "Percentage": 3.323108384,
            "GL_ORDINAL": 4145
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4146
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4147
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4148
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2009,
            "Percentage": 3.323108384,
            "GL_ORDINAL": 4149
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2010,
            "Percentage": 3.323108384,
            "GL_ORDINAL": 4150
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4151
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2012,
            "Percentage": 3.323108384,
            "GL_ORDINAL": 4152
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2013,
            "Percentage": 3.323108384,
            "GL_ORDINAL": 4153
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2014,
            "Percentage": 3.323108384,
            "GL_ORDINAL": 4154
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2015,
            "Percentage": 3.323108384,
            "GL_ORDINAL": 4155
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4156
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 4157
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2018,
            "Percentage": 3.323108384,
            "GL_ORDINAL": 4158
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2019,
            "Percentage": 3.323108384,
            "GL_ORDINAL": 4159
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2020,
            "Percentage": 3.323108384,
            "GL_ORDINAL": 4160
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2021,
            "Percentage": 5.147049449,
            "GL_ORDINAL": 4161
          },
          {
            "Reference_area": "Saint Helena",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4162
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 4163
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 4164
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4165
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 4166
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4167
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 4168
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4169
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4170
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4171
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 4172
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4173
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4174
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 4175
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 4176
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 4177
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 4178
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4179
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 4180
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 4181
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 4182
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 4183
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 4184
          },
          {
            "Reference_area": "Saint Kitts and Nevis",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4185
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2000,
            "Percentage": 97.21921528,
            "GL_ORDINAL": 4186
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2001,
            "Percentage": 97.21921528,
            "GL_ORDINAL": 4187
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2002,
            "Percentage": 97.21921528,
            "GL_ORDINAL": 4188
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2003,
            "Percentage": 97.21921528,
            "GL_ORDINAL": 4189
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4190
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2005,
            "Percentage": 97.21921528,
            "GL_ORDINAL": 4191
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4192
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4193
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4194
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2009,
            "Percentage": 97.26004699,
            "GL_ORDINAL": 4195
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2010,
            "Percentage": 97.27443832,
            "GL_ORDINAL": 4196
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4197
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 4198
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2013,
            "Percentage": 96.2014898,
            "GL_ORDINAL": 4199
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2014,
            "Percentage": 96.29120309,
            "GL_ORDINAL": 4200
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2015,
            "Percentage": 96.30547421,
            "GL_ORDINAL": 4201
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2016,
            "Percentage": 18.92747665,
            "GL_ORDINAL": 4202
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2017,
            "Percentage": 96.44512036,
            "GL_ORDINAL": 4203
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2018,
            "Percentage": 96.44512036,
            "GL_ORDINAL": 4204
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2019,
            "Percentage": 28.12047201,
            "GL_ORDINAL": 4205
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2020,
            "Percentage": 97.12225472,
            "GL_ORDINAL": 4206
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 4207
          },
          {
            "Reference_area": "Saint Lucia",
            "Year": 2022,
            "Percentage": 62.27949524,
            "GL_ORDINAL": 4208
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 4209
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 4210
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4211
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 4212
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4213
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 4214
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4215
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4216
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4217
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 4218
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4219
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4220
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 4221
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 4222
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 4223
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 4224
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4225
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 4226
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 4227
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 4228
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 4229
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 4230
          },
          {
            "Reference_area": "Saint Pierre and Miquelon",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4231
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 4232
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 4233
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4234
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 4235
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4236
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 4237
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4238
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4239
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4240
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 4241
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4242
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4243
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 4244
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 4245
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 4246
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 4247
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4248
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 4249
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 4250
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 4251
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 4252
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 4253
          },
          {
            "Reference_area": "Saint Vincent and the Grenadines",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4254
          },
          {
            "Reference_area": "Samoa",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 4255
          },
          {
            "Reference_area": "Samoa",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 4256
          },
          {
            "Reference_area": "Samoa",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4257
          },
          {
            "Reference_area": "Samoa",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 4258
          },
          {
            "Reference_area": "Samoa",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4259
          },
          {
            "Reference_area": "Samoa",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 4260
          },
          {
            "Reference_area": "Samoa",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4261
          },
          {
            "Reference_area": "Samoa",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4262
          },
          {
            "Reference_area": "Samoa",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4263
          },
          {
            "Reference_area": "Samoa",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 4264
          },
          {
            "Reference_area": "Samoa",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4265
          },
          {
            "Reference_area": "Samoa",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4266
          },
          {
            "Reference_area": "Samoa",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 4267
          },
          {
            "Reference_area": "Samoa",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 4268
          },
          {
            "Reference_area": "Samoa",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 4269
          },
          {
            "Reference_area": "Samoa",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 4270
          },
          {
            "Reference_area": "Samoa",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4271
          },
          {
            "Reference_area": "Samoa",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 4272
          },
          {
            "Reference_area": "Samoa",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 4273
          },
          {
            "Reference_area": "Samoa",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 4274
          },
          {
            "Reference_area": "Samoa",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 4275
          },
          {
            "Reference_area": "Samoa",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 4276
          },
          {
            "Reference_area": "Samoa",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4277
          },
          {
            "Reference_area": "San Marino",
            "Year": 2000,
            "Percentage": 77.06323687,
            "GL_ORDINAL": 4278
          },
          {
            "Reference_area": "San Marino",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 4279
          },
          {
            "Reference_area": "San Marino",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4280
          },
          {
            "Reference_area": "San Marino",
            "Year": 2003,
            "Percentage": 77.06323687,
            "GL_ORDINAL": 4281
          },
          {
            "Reference_area": "San Marino",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4282
          },
          {
            "Reference_area": "San Marino",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 4283
          },
          {
            "Reference_area": "San Marino",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4284
          },
          {
            "Reference_area": "San Marino",
            "Year": 2007,
            "Percentage": 77.06323687,
            "GL_ORDINAL": 4285
          },
          {
            "Reference_area": "San Marino",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4286
          },
          {
            "Reference_area": "San Marino",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 4287
          },
          {
            "Reference_area": "San Marino",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4288
          },
          {
            "Reference_area": "San Marino",
            "Year": 2011,
            "Percentage": 77.06323687,
            "GL_ORDINAL": 4289
          },
          {
            "Reference_area": "San Marino",
            "Year": 2012,
            "Percentage": 77.06323687,
            "GL_ORDINAL": 4290
          },
          {
            "Reference_area": "San Marino",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 4291
          },
          {
            "Reference_area": "San Marino",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 4292
          },
          {
            "Reference_area": "San Marino",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 4293
          },
          {
            "Reference_area": "San Marino",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4294
          },
          {
            "Reference_area": "San Marino",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 4295
          },
          {
            "Reference_area": "San Marino",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 4296
          },
          {
            "Reference_area": "San Marino",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 4297
          },
          {
            "Reference_area": "San Marino",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 4298
          },
          {
            "Reference_area": "San Marino",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 4299
          },
          {
            "Reference_area": "San Marino",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4300
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 4301
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 4302
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4303
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 4304
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4305
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 4306
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4307
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4308
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4309
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 4310
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4311
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4312
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 4313
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 4314
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 4315
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 4316
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4317
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 4318
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 4319
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 4320
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 4321
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 4322
          },
          {
            "Reference_area": "Sao Tome and Principe",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4323
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2000,
            "Percentage": 65.68718425,
            "GL_ORDINAL": 4324
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2001,
            "Percentage": 69.60227273,
            "GL_ORDINAL": 4325
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2002,
            "Percentage": 71.97920199,
            "GL_ORDINAL": 4326
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2003,
            "Percentage": 75.04416441,
            "GL_ORDINAL": 4327
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2004,
            "Percentage": 75.24123323,
            "GL_ORDINAL": 4328
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2005,
            "Percentage": 77.06123433,
            "GL_ORDINAL": 4329
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2006,
            "Percentage": 71.21490744,
            "GL_ORDINAL": 4330
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2007,
            "Percentage": 77.14424951,
            "GL_ORDINAL": 4331
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2008,
            "Percentage": 77.52032027,
            "GL_ORDINAL": 4332
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2009,
            "Percentage": 80.29604465,
            "GL_ORDINAL": 4333
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2010,
            "Percentage": 80.48869438,
            "GL_ORDINAL": 4334
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2011,
            "Percentage": 80.62750821,
            "GL_ORDINAL": 4335
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2012,
            "Percentage": 79.63030524,
            "GL_ORDINAL": 4336
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2013,
            "Percentage": 79.90109502,
            "GL_ORDINAL": 4337
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2014,
            "Percentage": 79.95234854,
            "GL_ORDINAL": 4338
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2015,
            "Percentage": 79.97957099,
            "GL_ORDINAL": 4339
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2016,
            "Percentage": 4.908391767,
            "GL_ORDINAL": 4340
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2017,
            "Percentage": 79.94413408,
            "GL_ORDINAL": 4341
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2018,
            "Percentage": 79.82067744,
            "GL_ORDINAL": 4342
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2019,
            "Percentage": 80.31418214,
            "GL_ORDINAL": 4343
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2020,
            "Percentage": 80.83600575,
            "GL_ORDINAL": 4344
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 4345
          },
          {
            "Reference_area": "Saudi Arabia",
            "Year": 2022,
            "Percentage": 99.98033641,
            "GL_ORDINAL": 4346
          },
          {
            "Reference_area": "Senegal",
            "Year": 2000,
            "Percentage": 92.24991465,
            "GL_ORDINAL": 4347
          },
          {
            "Reference_area": "Senegal",
            "Year": 2001,
            "Percentage": 92.32368344,
            "GL_ORDINAL": 4348
          },
          {
            "Reference_area": "Senegal",
            "Year": 2002,
            "Percentage": 92.34163358,
            "GL_ORDINAL": 4349
          },
          {
            "Reference_area": "Senegal",
            "Year": 2003,
            "Percentage": 92.39055327,
            "GL_ORDINAL": 4350
          },
          {
            "Reference_area": "Senegal",
            "Year": 2004,
            "Percentage": 92.39385555,
            "GL_ORDINAL": 4351
          },
          {
            "Reference_area": "Senegal",
            "Year": 2005,
            "Percentage": 92.42020447,
            "GL_ORDINAL": 4352
          },
          {
            "Reference_area": "Senegal",
            "Year": 2006,
            "Percentage": 92.33277255,
            "GL_ORDINAL": 4353
          },
          {
            "Reference_area": "Senegal",
            "Year": 2007,
            "Percentage": 92.43540658,
            "GL_ORDINAL": 4354
          },
          {
            "Reference_area": "Senegal",
            "Year": 2008,
            "Percentage": 92.30399544,
            "GL_ORDINAL": 4355
          },
          {
            "Reference_area": "Senegal",
            "Year": 2009,
            "Percentage": 92.53122831,
            "GL_ORDINAL": 4356
          },
          {
            "Reference_area": "Senegal",
            "Year": 2010,
            "Percentage": 92.55535537,
            "GL_ORDINAL": 4357
          },
          {
            "Reference_area": "Senegal",
            "Year": 2011,
            "Percentage": 92.63214186,
            "GL_ORDINAL": 4358
          },
          {
            "Reference_area": "Senegal",
            "Year": 2012,
            "Percentage": 93.00814874,
            "GL_ORDINAL": 4359
          },
          {
            "Reference_area": "Senegal",
            "Year": 2013,
            "Percentage": 93.0291638,
            "GL_ORDINAL": 4360
          },
          {
            "Reference_area": "Senegal",
            "Year": 2014,
            "Percentage": 93.06271295,
            "GL_ORDINAL": 4361
          },
          {
            "Reference_area": "Senegal",
            "Year": 2015,
            "Percentage": 93.06371958,
            "GL_ORDINAL": 4362
          },
          {
            "Reference_area": "Senegal",
            "Year": 2016,
            "Percentage": 57.93859561,
            "GL_ORDINAL": 4363
          },
          {
            "Reference_area": "Senegal",
            "Year": 2017,
            "Percentage": 93.09645971,
            "GL_ORDINAL": 4364
          },
          {
            "Reference_area": "Senegal",
            "Year": 2018,
            "Percentage": 92.9947596,
            "GL_ORDINAL": 4365
          },
          {
            "Reference_area": "Senegal",
            "Year": 2019,
            "Percentage": 92.90850097,
            "GL_ORDINAL": 4366
          },
          {
            "Reference_area": "Senegal",
            "Year": 2020,
            "Percentage": 92.90945808,
            "GL_ORDINAL": 4367
          },
          {
            "Reference_area": "Senegal",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 4368
          },
          {
            "Reference_area": "Senegal",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 4369
          },
          {
            "Reference_area": "Serbia",
            "Year": 2000,
            "Percentage": 44.40727577,
            "GL_ORDINAL": 4370
          },
          {
            "Reference_area": "Serbia",
            "Year": 2001,
            "Percentage": 0.327448461,
            "GL_ORDINAL": 4371
          },
          {
            "Reference_area": "Serbia",
            "Year": 2002,
            "Percentage": 0.578593472,
            "GL_ORDINAL": 4372
          },
          {
            "Reference_area": "Serbia",
            "Year": 2003,
            "Percentage": 3.187307534,
            "GL_ORDINAL": 4373
          },
          {
            "Reference_area": "Serbia",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4374
          },
          {
            "Reference_area": "Serbia",
            "Year": 2005,
            "Percentage": 0.011011723,
            "GL_ORDINAL": 4375
          },
          {
            "Reference_area": "Serbia",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4376
          },
          {
            "Reference_area": "Serbia",
            "Year": 2007,
            "Percentage": 8.657172179,
            "GL_ORDINAL": 4377
          },
          {
            "Reference_area": "Serbia",
            "Year": 2008,
            "Percentage": 0.123998051,
            "GL_ORDINAL": 4378
          },
          {
            "Reference_area": "Serbia",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 4379
          },
          {
            "Reference_area": "Serbia",
            "Year": 2010,
            "Percentage": 0.923164362,
            "GL_ORDINAL": 4380
          },
          {
            "Reference_area": "Serbia",
            "Year": 2011,
            "Percentage": 24.49450786,
            "GL_ORDINAL": 4381
          },
          {
            "Reference_area": "Serbia",
            "Year": 2012,
            "Percentage": 70.10112943,
            "GL_ORDINAL": 4382
          },
          {
            "Reference_area": "Serbia",
            "Year": 2013,
            "Percentage": 24.68333991,
            "GL_ORDINAL": 4383
          },
          {
            "Reference_area": "Serbia",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 4384
          },
          {
            "Reference_area": "Serbia",
            "Year": 2015,
            "Percentage": 24.76387542,
            "GL_ORDINAL": 4385
          },
          {
            "Reference_area": "Serbia",
            "Year": 2016,
            "Percentage": 0.035280466,
            "GL_ORDINAL": 4386
          },
          {
            "Reference_area": "Serbia",
            "Year": 2017,
            "Percentage": 14.49125504,
            "GL_ORDINAL": 4387
          },
          {
            "Reference_area": "Serbia",
            "Year": 2018,
            "Percentage": 1.976867451,
            "GL_ORDINAL": 4388
          },
          {
            "Reference_area": "Serbia",
            "Year": 2019,
            "Percentage": 3.025863966,
            "GL_ORDINAL": 4389
          },
          {
            "Reference_area": "Serbia",
            "Year": 2020,
            "Percentage": 1.545906144,
            "GL_ORDINAL": 4390
          },
          {
            "Reference_area": "Serbia",
            "Year": 2021,
            "Percentage": 0.798299659,
            "GL_ORDINAL": 4391
          },
          {
            "Reference_area": "Serbia",
            "Year": 2022,
            "Percentage": 9.338389556,
            "GL_ORDINAL": 4392
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 4393
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 4394
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4395
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 4396
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4397
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 4398
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4399
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4400
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4401
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 4402
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4403
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4404
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 4405
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 4406
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 4407
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 4408
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4409
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 4410
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 4411
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 4412
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 4413
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 4414
          },
          {
            "Reference_area": "Seychelles",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4415
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2000,
            "Percentage": 69.09867191,
            "GL_ORDINAL": 4416
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2001,
            "Percentage": 83.66160686,
            "GL_ORDINAL": 4417
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2002,
            "Percentage": 69.4186939,
            "GL_ORDINAL": 4418
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2003,
            "Percentage": 74.1298973,
            "GL_ORDINAL": 4419
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2004,
            "Percentage": 76.64007338,
            "GL_ORDINAL": 4420
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2005,
            "Percentage": 57.60258078,
            "GL_ORDINAL": 4421
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2006,
            "Percentage": 26.84274942,
            "GL_ORDINAL": 4422
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2007,
            "Percentage": 81.13542049,
            "GL_ORDINAL": 4423
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2008,
            "Percentage": 75.30231216,
            "GL_ORDINAL": 4424
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2009,
            "Percentage": 80.59785897,
            "GL_ORDINAL": 4425
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2010,
            "Percentage": 61.59405327,
            "GL_ORDINAL": 4426
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2011,
            "Percentage": 74.27676381,
            "GL_ORDINAL": 4427
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2012,
            "Percentage": 78.2700338,
            "GL_ORDINAL": 4428
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2013,
            "Percentage": 78.3111793,
            "GL_ORDINAL": 4429
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2014,
            "Percentage": 78.31816356,
            "GL_ORDINAL": 4430
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2015,
            "Percentage": 72.47686722,
            "GL_ORDINAL": 4431
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2016,
            "Percentage": 45.68079672,
            "GL_ORDINAL": 4432
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2017,
            "Percentage": 74.32403502,
            "GL_ORDINAL": 4433
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2018,
            "Percentage": 78.36507734,
            "GL_ORDINAL": 4434
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2019,
            "Percentage": 84.351329,
            "GL_ORDINAL": 4435
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2020,
            "Percentage": 78.70884275,
            "GL_ORDINAL": 4436
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2021,
            "Percentage": 80.57215982,
            "GL_ORDINAL": 4437
          },
          {
            "Reference_area": "Sierra Leone",
            "Year": 2022,
            "Percentage": 86.32503447,
            "GL_ORDINAL": 4438
          },
          {
            "Reference_area": "Singapore",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 4439
          },
          {
            "Reference_area": "Singapore",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 4440
          },
          {
            "Reference_area": "Singapore",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4441
          },
          {
            "Reference_area": "Singapore",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 4442
          },
          {
            "Reference_area": "Singapore",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4443
          },
          {
            "Reference_area": "Singapore",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 4444
          },
          {
            "Reference_area": "Singapore",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4445
          },
          {
            "Reference_area": "Singapore",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4446
          },
          {
            "Reference_area": "Singapore",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4447
          },
          {
            "Reference_area": "Singapore",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 4448
          },
          {
            "Reference_area": "Singapore",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4449
          },
          {
            "Reference_area": "Singapore",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4450
          },
          {
            "Reference_area": "Singapore",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 4451
          },
          {
            "Reference_area": "Singapore",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 4452
          },
          {
            "Reference_area": "Singapore",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 4453
          },
          {
            "Reference_area": "Singapore",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 4454
          },
          {
            "Reference_area": "Singapore",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4455
          },
          {
            "Reference_area": "Singapore",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 4456
          },
          {
            "Reference_area": "Singapore",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 4457
          },
          {
            "Reference_area": "Singapore",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 4458
          },
          {
            "Reference_area": "Singapore",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 4459
          },
          {
            "Reference_area": "Singapore",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 4460
          },
          {
            "Reference_area": "Singapore",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4461
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 4462
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 4463
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4464
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 4465
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4466
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 4467
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4468
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4469
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4470
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 4471
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4472
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4473
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 4474
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 4475
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 4476
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 4477
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4478
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 4479
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 4480
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 4481
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 4482
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 4483
          },
          {
            "Reference_area": "Solomon Islands",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4484
          },
          {
            "Reference_area": "Somalia",
            "Year": 2000,
            "Percentage": 81.02188609,
            "GL_ORDINAL": 4485
          },
          {
            "Reference_area": "Somalia",
            "Year": 2001,
            "Percentage": 81.09858917,
            "GL_ORDINAL": 4486
          },
          {
            "Reference_area": "Somalia",
            "Year": 2002,
            "Percentage": 81.13841577,
            "GL_ORDINAL": 4487
          },
          {
            "Reference_area": "Somalia",
            "Year": 2003,
            "Percentage": 81.15064,
            "GL_ORDINAL": 4488
          },
          {
            "Reference_area": "Somalia",
            "Year": 2004,
            "Percentage": 81.40581886,
            "GL_ORDINAL": 4489
          },
          {
            "Reference_area": "Somalia",
            "Year": 2005,
            "Percentage": 81.44061981,
            "GL_ORDINAL": 4490
          },
          {
            "Reference_area": "Somalia",
            "Year": 2006,
            "Percentage": 79.70526492,
            "GL_ORDINAL": 4491
          },
          {
            "Reference_area": "Somalia",
            "Year": 2007,
            "Percentage": 78.52216468,
            "GL_ORDINAL": 4492
          },
          {
            "Reference_area": "Somalia",
            "Year": 2008,
            "Percentage": 80.68920351,
            "GL_ORDINAL": 4493
          },
          {
            "Reference_area": "Somalia",
            "Year": 2009,
            "Percentage": 81.79263795,
            "GL_ORDINAL": 4494
          },
          {
            "Reference_area": "Somalia",
            "Year": 2010,
            "Percentage": 81.81267386,
            "GL_ORDINAL": 4495
          },
          {
            "Reference_area": "Somalia",
            "Year": 2011,
            "Percentage": 81.80729686,
            "GL_ORDINAL": 4496
          },
          {
            "Reference_area": "Somalia",
            "Year": 2012,
            "Percentage": 83.28368628,
            "GL_ORDINAL": 4497
          },
          {
            "Reference_area": "Somalia",
            "Year": 2013,
            "Percentage": 83.30060851,
            "GL_ORDINAL": 4498
          },
          {
            "Reference_area": "Somalia",
            "Year": 2014,
            "Percentage": 83.299909,
            "GL_ORDINAL": 4499
          },
          {
            "Reference_area": "Somalia",
            "Year": 2015,
            "Percentage": 83.299909,
            "GL_ORDINAL": 4500
          },
          {
            "Reference_area": "Somalia",
            "Year": 2016,
            "Percentage": 22.530177,
            "GL_ORDINAL": 4501
          },
          {
            "Reference_area": "Somalia",
            "Year": 2017,
            "Percentage": 83.36522693,
            "GL_ORDINAL": 4502
          },
          {
            "Reference_area": "Somalia",
            "Year": 2018,
            "Percentage": 83.32343742,
            "GL_ORDINAL": 4503
          },
          {
            "Reference_area": "Somalia",
            "Year": 2019,
            "Percentage": 83.38868916,
            "GL_ORDINAL": 4504
          },
          {
            "Reference_area": "Somalia",
            "Year": 2020,
            "Percentage": 83.37483664,
            "GL_ORDINAL": 4505
          },
          {
            "Reference_area": "Somalia",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 4506
          },
          {
            "Reference_area": "Somalia",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 4507
          },
          {
            "Reference_area": "South Africa",
            "Year": 2000,
            "Percentage": 60.62413715,
            "GL_ORDINAL": 4508
          },
          {
            "Reference_area": "South Africa",
            "Year": 2001,
            "Percentage": 60.29936628,
            "GL_ORDINAL": 4509
          },
          {
            "Reference_area": "South Africa",
            "Year": 2002,
            "Percentage": 51.87895323,
            "GL_ORDINAL": 4510
          },
          {
            "Reference_area": "South Africa",
            "Year": 2003,
            "Percentage": 64.33872006,
            "GL_ORDINAL": 4511
          },
          {
            "Reference_area": "South Africa",
            "Year": 2004,
            "Percentage": 67.32800763,
            "GL_ORDINAL": 4512
          },
          {
            "Reference_area": "South Africa",
            "Year": 2005,
            "Percentage": 68.85317528,
            "GL_ORDINAL": 4513
          },
          {
            "Reference_area": "South Africa",
            "Year": 2006,
            "Percentage": 31.89041785,
            "GL_ORDINAL": 4514
          },
          {
            "Reference_area": "South Africa",
            "Year": 2007,
            "Percentage": 53.8280877,
            "GL_ORDINAL": 4515
          },
          {
            "Reference_area": "South Africa",
            "Year": 2008,
            "Percentage": 59.18872149,
            "GL_ORDINAL": 4516
          },
          {
            "Reference_area": "South Africa",
            "Year": 2009,
            "Percentage": 71.41508488,
            "GL_ORDINAL": 4517
          },
          {
            "Reference_area": "South Africa",
            "Year": 2010,
            "Percentage": 76.07373372,
            "GL_ORDINAL": 4518
          },
          {
            "Reference_area": "South Africa",
            "Year": 2011,
            "Percentage": 55.34675237,
            "GL_ORDINAL": 4519
          },
          {
            "Reference_area": "South Africa",
            "Year": 2012,
            "Percentage": 61.56380643,
            "GL_ORDINAL": 4520
          },
          {
            "Reference_area": "South Africa",
            "Year": 2013,
            "Percentage": 71.88546649,
            "GL_ORDINAL": 4521
          },
          {
            "Reference_area": "South Africa",
            "Year": 2014,
            "Percentage": 78.25072203,
            "GL_ORDINAL": 4522
          },
          {
            "Reference_area": "South Africa",
            "Year": 2015,
            "Percentage": 65.41056233,
            "GL_ORDINAL": 4523
          },
          {
            "Reference_area": "South Africa",
            "Year": 2016,
            "Percentage": 21.66599201,
            "GL_ORDINAL": 4524
          },
          {
            "Reference_area": "South Africa",
            "Year": 2017,
            "Percentage": 74.25069446,
            "GL_ORDINAL": 4525
          },
          {
            "Reference_area": "South Africa",
            "Year": 2018,
            "Percentage": 66.51144895,
            "GL_ORDINAL": 4526
          },
          {
            "Reference_area": "South Africa",
            "Year": 2019,
            "Percentage": 77.10833379,
            "GL_ORDINAL": 4527
          },
          {
            "Reference_area": "South Africa",
            "Year": 2020,
            "Percentage": 71.81130022,
            "GL_ORDINAL": 4528
          },
          {
            "Reference_area": "South Africa",
            "Year": 2021,
            "Percentage": 77.87676539,
            "GL_ORDINAL": 4529
          },
          {
            "Reference_area": "South Africa",
            "Year": 2022,
            "Percentage": 63.11413402,
            "GL_ORDINAL": 4530
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2000,
            "Percentage": 95.84811538,
            "GL_ORDINAL": 4531
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2001,
            "Percentage": 96.00512021,
            "GL_ORDINAL": 4532
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2002,
            "Percentage": 96.14792848,
            "GL_ORDINAL": 4533
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2003,
            "Percentage": 95.97171302,
            "GL_ORDINAL": 4534
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2004,
            "Percentage": 96.28217292,
            "GL_ORDINAL": 4535
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2005,
            "Percentage": 96.35534651,
            "GL_ORDINAL": 4536
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2006,
            "Percentage": 96.3534024,
            "GL_ORDINAL": 4537
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2007,
            "Percentage": 95.65340159,
            "GL_ORDINAL": 4538
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2008,
            "Percentage": 95.74774432,
            "GL_ORDINAL": 4539
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2009,
            "Percentage": 96.47747292,
            "GL_ORDINAL": 4540
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2010,
            "Percentage": 96.09193739,
            "GL_ORDINAL": 4541
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2011,
            "Percentage": 96.60378078,
            "GL_ORDINAL": 4542
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2012,
            "Percentage": 95.18701633,
            "GL_ORDINAL": 4543
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2013,
            "Percentage": 95.19707771,
            "GL_ORDINAL": 4544
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2014,
            "Percentage": 95.23750503,
            "GL_ORDINAL": 4545
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2015,
            "Percentage": 95.23750503,
            "GL_ORDINAL": 4546
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2016,
            "Percentage": 83.75772871,
            "GL_ORDINAL": 4547
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2017,
            "Percentage": 95.23987208,
            "GL_ORDINAL": 4548
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2018,
            "Percentage": 95.62581008,
            "GL_ORDINAL": 4549
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2019,
            "Percentage": 96.09369294,
            "GL_ORDINAL": 4550
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2020,
            "Percentage": 95.69203704,
            "GL_ORDINAL": 4551
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 4552
          },
          {
            "Reference_area": "South Sudan",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 4553
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2000,
            "Percentage": 50.99426494,
            "GL_ORDINAL": 4554
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2001,
            "Percentage": 56.72972422,
            "GL_ORDINAL": 4555
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2002,
            "Percentage": 61.02088721,
            "GL_ORDINAL": 4556
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2003,
            "Percentage": 58.61735862,
            "GL_ORDINAL": 4557
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2004,
            "Percentage": 64.66432905,
            "GL_ORDINAL": 4558
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2005,
            "Percentage": 55.01425629,
            "GL_ORDINAL": 4559
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2006,
            "Percentage": 26.14549107,
            "GL_ORDINAL": 4560
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2007,
            "Percentage": 10.24681821,
            "GL_ORDINAL": 4561
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2008,
            "Percentage": 15.59218469,
            "GL_ORDINAL": 4562
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2009,
            "Percentage": 58.89206137,
            "GL_ORDINAL": 4563
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2010,
            "Percentage": 51.97250892,
            "GL_ORDINAL": 4564
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2011,
            "Percentage": 55.14550331,
            "GL_ORDINAL": 4565
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2012,
            "Percentage": 62.96388719,
            "GL_ORDINAL": 4566
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2013,
            "Percentage": 50.69312194,
            "GL_ORDINAL": 4567
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2014,
            "Percentage": 71.45081406,
            "GL_ORDINAL": 4568
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2015,
            "Percentage": 44.51041265,
            "GL_ORDINAL": 4569
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2016,
            "Percentage": 32.5134044,
            "GL_ORDINAL": 4570
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2017,
            "Percentage": 55.9905402,
            "GL_ORDINAL": 4571
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2018,
            "Percentage": 53.72192091,
            "GL_ORDINAL": 4572
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2019,
            "Percentage": 61.27391404,
            "GL_ORDINAL": 4573
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2020,
            "Percentage": 57.10198898,
            "GL_ORDINAL": 4574
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2021,
            "Percentage": 44.03053356,
            "GL_ORDINAL": 4575
          },
          {
            "Reference_area": "Sri Lanka",
            "Year": 2022,
            "Percentage": 21.03790361,
            "GL_ORDINAL": 4576
          },
          {
            "Reference_area": "Sudan",
            "Year": 2000,
            "Percentage": 87.82130027,
            "GL_ORDINAL": 4577
          },
          {
            "Reference_area": "Sudan",
            "Year": 2001,
            "Percentage": 88.09067941,
            "GL_ORDINAL": 4578
          },
          {
            "Reference_area": "Sudan",
            "Year": 2002,
            "Percentage": 88.18574144,
            "GL_ORDINAL": 4579
          },
          {
            "Reference_area": "Sudan",
            "Year": 2003,
            "Percentage": 88.23055257,
            "GL_ORDINAL": 4580
          },
          {
            "Reference_area": "Sudan",
            "Year": 2004,
            "Percentage": 88.24027122,
            "GL_ORDINAL": 4581
          },
          {
            "Reference_area": "Sudan",
            "Year": 2005,
            "Percentage": 88.2760282,
            "GL_ORDINAL": 4582
          },
          {
            "Reference_area": "Sudan",
            "Year": 2006,
            "Percentage": 88.29073624,
            "GL_ORDINAL": 4583
          },
          {
            "Reference_area": "Sudan",
            "Year": 2007,
            "Percentage": 88.31979991,
            "GL_ORDINAL": 4584
          },
          {
            "Reference_area": "Sudan",
            "Year": 2008,
            "Percentage": 88.34135027,
            "GL_ORDINAL": 4585
          },
          {
            "Reference_area": "Sudan",
            "Year": 2009,
            "Percentage": 88.36592827,
            "GL_ORDINAL": 4586
          },
          {
            "Reference_area": "Sudan",
            "Year": 2010,
            "Percentage": 88.38518586,
            "GL_ORDINAL": 4587
          },
          {
            "Reference_area": "Sudan",
            "Year": 2011,
            "Percentage": 88.39229056,
            "GL_ORDINAL": 4588
          },
          {
            "Reference_area": "Sudan",
            "Year": 2012,
            "Percentage": 88.32234674,
            "GL_ORDINAL": 4589
          },
          {
            "Reference_area": "Sudan",
            "Year": 2013,
            "Percentage": 88.33144507,
            "GL_ORDINAL": 4590
          },
          {
            "Reference_area": "Sudan",
            "Year": 2014,
            "Percentage": 88.35059076,
            "GL_ORDINAL": 4591
          },
          {
            "Reference_area": "Sudan",
            "Year": 2015,
            "Percentage": 88.35097536,
            "GL_ORDINAL": 4592
          },
          {
            "Reference_area": "Sudan",
            "Year": 2016,
            "Percentage": 45.55301731,
            "GL_ORDINAL": 4593
          },
          {
            "Reference_area": "Sudan",
            "Year": 2017,
            "Percentage": 88.39002369,
            "GL_ORDINAL": 4594
          },
          {
            "Reference_area": "Sudan",
            "Year": 2018,
            "Percentage": 88.37771575,
            "GL_ORDINAL": 4595
          },
          {
            "Reference_area": "Sudan",
            "Year": 2019,
            "Percentage": 88.4351891,
            "GL_ORDINAL": 4596
          },
          {
            "Reference_area": "Sudan",
            "Year": 2020,
            "Percentage": 88.43923272,
            "GL_ORDINAL": 4597
          },
          {
            "Reference_area": "Sudan",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 4598
          },
          {
            "Reference_area": "Sudan",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 4599
          },
          {
            "Reference_area": "Suriname",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 4600
          },
          {
            "Reference_area": "Suriname",
            "Year": 2001,
            "Percentage": 0.70220231,
            "GL_ORDINAL": 4601
          },
          {
            "Reference_area": "Suriname",
            "Year": 2002,
            "Percentage": 27.19488,
            "GL_ORDINAL": 4602
          },
          {
            "Reference_area": "Suriname",
            "Year": 2003,
            "Percentage": 5.234157823,
            "GL_ORDINAL": 4603
          },
          {
            "Reference_area": "Suriname",
            "Year": 2004,
            "Percentage": 26.81239317,
            "GL_ORDINAL": 4604
          },
          {
            "Reference_area": "Suriname",
            "Year": 2005,
            "Percentage": 2.386671106,
            "GL_ORDINAL": 4605
          },
          {
            "Reference_area": "Suriname",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4606
          },
          {
            "Reference_area": "Suriname",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4607
          },
          {
            "Reference_area": "Suriname",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4608
          },
          {
            "Reference_area": "Suriname",
            "Year": 2009,
            "Percentage": 26.37935385,
            "GL_ORDINAL": 4609
          },
          {
            "Reference_area": "Suriname",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4610
          },
          {
            "Reference_area": "Suriname",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4611
          },
          {
            "Reference_area": "Suriname",
            "Year": 2012,
            "Percentage": 35.81051912,
            "GL_ORDINAL": 4612
          },
          {
            "Reference_area": "Suriname",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 4613
          },
          {
            "Reference_area": "Suriname",
            "Year": 2014,
            "Percentage": 24.33271747,
            "GL_ORDINAL": 4614
          },
          {
            "Reference_area": "Suriname",
            "Year": 2015,
            "Percentage": 49.11465733,
            "GL_ORDINAL": 4615
          },
          {
            "Reference_area": "Suriname",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4616
          },
          {
            "Reference_area": "Suriname",
            "Year": 2017,
            "Percentage": 4.328244153,
            "GL_ORDINAL": 4617
          },
          {
            "Reference_area": "Suriname",
            "Year": 2018,
            "Percentage": 13.95503592,
            "GL_ORDINAL": 4618
          },
          {
            "Reference_area": "Suriname",
            "Year": 2019,
            "Percentage": 5.658726327,
            "GL_ORDINAL": 4619
          },
          {
            "Reference_area": "Suriname",
            "Year": 2020,
            "Percentage": 6.08692599,
            "GL_ORDINAL": 4620
          },
          {
            "Reference_area": "Suriname",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 4621
          },
          {
            "Reference_area": "Suriname",
            "Year": 2022,
            "Percentage": 0.504081946,
            "GL_ORDINAL": 4622
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 4623
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 4624
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4625
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 4626
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4627
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 4628
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4629
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4630
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4631
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 4632
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4633
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4634
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 4635
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 4636
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 4637
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 4638
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4639
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 4640
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 4641
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 4642
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 4643
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 4644
          },
          {
            "Reference_area": "Svalbard and Jan Mayen",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4645
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2000,
            "Percentage": 71.06801081,
            "GL_ORDINAL": 4646
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2001,
            "Percentage": 80.93913553,
            "GL_ORDINAL": 4647
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2002,
            "Percentage": 83.78388305,
            "GL_ORDINAL": 4648
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2003,
            "Percentage": 74.8924909,
            "GL_ORDINAL": 4649
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2004,
            "Percentage": 84.07643312,
            "GL_ORDINAL": 4650
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2005,
            "Percentage": 81.82846303,
            "GL_ORDINAL": 4651
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2006,
            "Percentage": 53.77478625,
            "GL_ORDINAL": 4652
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2007,
            "Percentage": 73.69850119,
            "GL_ORDINAL": 4653
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2008,
            "Percentage": 55.00161285,
            "GL_ORDINAL": 4654
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2009,
            "Percentage": 82.10409824,
            "GL_ORDINAL": 4655
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2010,
            "Percentage": 84.68214286,
            "GL_ORDINAL": 4656
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2011,
            "Percentage": 72.62453957,
            "GL_ORDINAL": 4657
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2012,
            "Percentage": 84.11682694,
            "GL_ORDINAL": 4658
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2013,
            "Percentage": 84.15030927,
            "GL_ORDINAL": 4659
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2014,
            "Percentage": 84.22123104,
            "GL_ORDINAL": 4660
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2015,
            "Percentage": 84.53082057,
            "GL_ORDINAL": 4661
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2016,
            "Percentage": 17.77580387,
            "GL_ORDINAL": 4662
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2017,
            "Percentage": 84.61921354,
            "GL_ORDINAL": 4663
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2018,
            "Percentage": 74.19309521,
            "GL_ORDINAL": 4664
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2019,
            "Percentage": 84.68105952,
            "GL_ORDINAL": 4665
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2020,
            "Percentage": 84.54759922,
            "GL_ORDINAL": 4666
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 4667
          },
          {
            "Reference_area": "Syrian Arab Republic",
            "Year": 2022,
            "Percentage": 98.04437398,
            "GL_ORDINAL": 4668
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2000,
            "Percentage": 1.056619307,
            "GL_ORDINAL": 4669
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 4670
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4671
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2003,
            "Percentage": 1.308712988,
            "GL_ORDINAL": 4672
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2004,
            "Percentage": 4.696009878,
            "GL_ORDINAL": 4673
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2005,
            "Percentage": 1.364699129,
            "GL_ORDINAL": 4674
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2006,
            "Percentage": 0.044519071,
            "GL_ORDINAL": 4675
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4676
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4677
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2009,
            "Percentage": 0.049643343,
            "GL_ORDINAL": 4678
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4679
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4680
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2012,
            "Percentage": 3.311910898,
            "GL_ORDINAL": 4681
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2013,
            "Percentage": 0.000354989,
            "GL_ORDINAL": 4682
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2014,
            "Percentage": 1.240911883,
            "GL_ORDINAL": 4683
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 4684
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4685
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2017,
            "Percentage": 0.050426119,
            "GL_ORDINAL": 4686
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2018,
            "Percentage": 5.980243678,
            "GL_ORDINAL": 4687
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2019,
            "Percentage": 3.900225615,
            "GL_ORDINAL": 4688
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2020,
            "Percentage": 2.280281447,
            "GL_ORDINAL": 4689
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2021,
            "Percentage": 2.271646522,
            "GL_ORDINAL": 4690
          },
          {
            "Reference_area": "Taiwan",
            "Year": 2022,
            "Percentage": 1.161535163,
            "GL_ORDINAL": 4691
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2000,
            "Percentage": 9.444537393,
            "GL_ORDINAL": 4692
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2001,
            "Percentage": 9.643395279,
            "GL_ORDINAL": 4693
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2002,
            "Percentage": 9.452819189,
            "GL_ORDINAL": 4694
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2003,
            "Percentage": 8.755798542,
            "GL_ORDINAL": 4695
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2004,
            "Percentage": 5.829744949,
            "GL_ORDINAL": 4696
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2005,
            "Percentage": 8.490174944,
            "GL_ORDINAL": 4697
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2006,
            "Percentage": 8.436333472,
            "GL_ORDINAL": 4698
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2007,
            "Percentage": 5.286933244,
            "GL_ORDINAL": 4699
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2008,
            "Percentage": 7.254623044,
            "GL_ORDINAL": 4700
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2009,
            "Percentage": 9.567311685,
            "GL_ORDINAL": 4701
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2010,
            "Percentage": 9.51588754,
            "GL_ORDINAL": 4702
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2011,
            "Percentage": 32.15206722,
            "GL_ORDINAL": 4703
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2012,
            "Percentage": 11.69619832,
            "GL_ORDINAL": 4704
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2013,
            "Percentage": 12.21215396,
            "GL_ORDINAL": 4705
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2014,
            "Percentage": 16.7885611,
            "GL_ORDINAL": 4706
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2015,
            "Percentage": 25.15408004,
            "GL_ORDINAL": 4707
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2016,
            "Percentage": 0.472642794,
            "GL_ORDINAL": 4708
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2017,
            "Percentage": 14.79624323,
            "GL_ORDINAL": 4709
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2018,
            "Percentage": 16.89041524,
            "GL_ORDINAL": 4710
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2019,
            "Percentage": 33.05733803,
            "GL_ORDINAL": 4711
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2020,
            "Percentage": 15.77975376,
            "GL_ORDINAL": 4712
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2021,
            "Percentage": 48.06265311,
            "GL_ORDINAL": 4713
          },
          {
            "Reference_area": "Tajikistan",
            "Year": 2022,
            "Percentage": 25.08879569,
            "GL_ORDINAL": 4714
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2000,
            "Percentage": 91.04577693,
            "GL_ORDINAL": 4715
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2001,
            "Percentage": 88.24459882,
            "GL_ORDINAL": 4716
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2002,
            "Percentage": 80.08002593,
            "GL_ORDINAL": 4717
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2003,
            "Percentage": 90.56825615,
            "GL_ORDINAL": 4718
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2004,
            "Percentage": 84.36440092,
            "GL_ORDINAL": 4719
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2005,
            "Percentage": 90.62710056,
            "GL_ORDINAL": 4720
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2006,
            "Percentage": 64.45617506,
            "GL_ORDINAL": 4721
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2007,
            "Percentage": 65.00113354,
            "GL_ORDINAL": 4722
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2008,
            "Percentage": 70.40758847,
            "GL_ORDINAL": 4723
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2009,
            "Percentage": 93.23556592,
            "GL_ORDINAL": 4724
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2010,
            "Percentage": 93.98047528,
            "GL_ORDINAL": 4725
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2011,
            "Percentage": 90.74766104,
            "GL_ORDINAL": 4726
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2012,
            "Percentage": 88.25132492,
            "GL_ORDINAL": 4727
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2013,
            "Percentage": 90.53746924,
            "GL_ORDINAL": 4728
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2014,
            "Percentage": 87.00131188,
            "GL_ORDINAL": 4729
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2015,
            "Percentage": 89.9868464,
            "GL_ORDINAL": 4730
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2016,
            "Percentage": 65.57851489,
            "GL_ORDINAL": 4731
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2017,
            "Percentage": 88.07211782,
            "GL_ORDINAL": 4732
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2018,
            "Percentage": 89.13007816,
            "GL_ORDINAL": 4733
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2019,
            "Percentage": 86.1003737,
            "GL_ORDINAL": 4734
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2020,
            "Percentage": 88.05888646,
            "GL_ORDINAL": 4735
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2021,
            "Percentage": 99.08493834,
            "GL_ORDINAL": 4736
          },
          {
            "Reference_area": "Tanzania",
            "Year": 2022,
            "Percentage": 91.51899588,
            "GL_ORDINAL": 4737
          },
          {
            "Reference_area": "Thailand",
            "Year": 2000,
            "Percentage": 50.10724889,
            "GL_ORDINAL": 4738
          },
          {
            "Reference_area": "Thailand",
            "Year": 2001,
            "Percentage": 61.81770947,
            "GL_ORDINAL": 4739
          },
          {
            "Reference_area": "Thailand",
            "Year": 2002,
            "Percentage": 80.90924368,
            "GL_ORDINAL": 4740
          },
          {
            "Reference_area": "Thailand",
            "Year": 2003,
            "Percentage": 69.36216943,
            "GL_ORDINAL": 4741
          },
          {
            "Reference_area": "Thailand",
            "Year": 2004,
            "Percentage": 78.16684949,
            "GL_ORDINAL": 4742
          },
          {
            "Reference_area": "Thailand",
            "Year": 2005,
            "Percentage": 86.70276372,
            "GL_ORDINAL": 4743
          },
          {
            "Reference_area": "Thailand",
            "Year": 2006,
            "Percentage": 40.66362706,
            "GL_ORDINAL": 4744
          },
          {
            "Reference_area": "Thailand",
            "Year": 2007,
            "Percentage": 60.69251642,
            "GL_ORDINAL": 4745
          },
          {
            "Reference_area": "Thailand",
            "Year": 2008,
            "Percentage": 18.9574248,
            "GL_ORDINAL": 4746
          },
          {
            "Reference_area": "Thailand",
            "Year": 2009,
            "Percentage": 67.62003173,
            "GL_ORDINAL": 4747
          },
          {
            "Reference_area": "Thailand",
            "Year": 2010,
            "Percentage": 78.56941701,
            "GL_ORDINAL": 4748
          },
          {
            "Reference_area": "Thailand",
            "Year": 2011,
            "Percentage": 37.49923027,
            "GL_ORDINAL": 4749
          },
          {
            "Reference_area": "Thailand",
            "Year": 2012,
            "Percentage": 55.77658379,
            "GL_ORDINAL": 4750
          },
          {
            "Reference_area": "Thailand",
            "Year": 2013,
            "Percentage": 73.26361281,
            "GL_ORDINAL": 4751
          },
          {
            "Reference_area": "Thailand",
            "Year": 2014,
            "Percentage": 77.47217089,
            "GL_ORDINAL": 4752
          },
          {
            "Reference_area": "Thailand",
            "Year": 2015,
            "Percentage": 78.58660116,
            "GL_ORDINAL": 4753
          },
          {
            "Reference_area": "Thailand",
            "Year": 2016,
            "Percentage": 55.08924832,
            "GL_ORDINAL": 4754
          },
          {
            "Reference_area": "Thailand",
            "Year": 2017,
            "Percentage": 62.70090829,
            "GL_ORDINAL": 4755
          },
          {
            "Reference_area": "Thailand",
            "Year": 2018,
            "Percentage": 36.1556761,
            "GL_ORDINAL": 4756
          },
          {
            "Reference_area": "Thailand",
            "Year": 2019,
            "Percentage": 83.75293577,
            "GL_ORDINAL": 4757
          },
          {
            "Reference_area": "Thailand",
            "Year": 2020,
            "Percentage": 84.92641629,
            "GL_ORDINAL": 4758
          },
          {
            "Reference_area": "Thailand",
            "Year": 2021,
            "Percentage": 82.29064071,
            "GL_ORDINAL": 4759
          },
          {
            "Reference_area": "Thailand",
            "Year": 2022,
            "Percentage": 7.932434938,
            "GL_ORDINAL": 4760
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2000,
            "Percentage": 60.84635767,
            "GL_ORDINAL": 4761
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2001,
            "Percentage": 72.70337264,
            "GL_ORDINAL": 4762
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2002,
            "Percentage": 81.2935883,
            "GL_ORDINAL": 4763
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2003,
            "Percentage": 40.42576741,
            "GL_ORDINAL": 4764
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2004,
            "Percentage": 81.32596685,
            "GL_ORDINAL": 4765
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2005,
            "Percentage": 77.90740604,
            "GL_ORDINAL": 4766
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2006,
            "Percentage": 17.23208682,
            "GL_ORDINAL": 4767
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2007,
            "Percentage": 8.385574157,
            "GL_ORDINAL": 4768
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2008,
            "Percentage": 13.02377004,
            "GL_ORDINAL": 4769
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2009,
            "Percentage": 79.19618279,
            "GL_ORDINAL": 4770
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2010,
            "Percentage": 11.18650284,
            "GL_ORDINAL": 4771
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2011,
            "Percentage": 61.65521297,
            "GL_ORDINAL": 4772
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2012,
            "Percentage": 75.31946235,
            "GL_ORDINAL": 4773
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2013,
            "Percentage": 81.50616829,
            "GL_ORDINAL": 4774
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2014,
            "Percentage": 81.53812381,
            "GL_ORDINAL": 4775
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2015,
            "Percentage": 81.66983755,
            "GL_ORDINAL": 4776
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2016,
            "Percentage": 2.535025789,
            "GL_ORDINAL": 4777
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2017,
            "Percentage": 63.38167075,
            "GL_ORDINAL": 4778
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2018,
            "Percentage": 81.73297903,
            "GL_ORDINAL": 4779
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2019,
            "Percentage": 81.79992109,
            "GL_ORDINAL": 4780
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2020,
            "Percentage": 66.8902439,
            "GL_ORDINAL": 4781
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2021,
            "Percentage": 74.00861438,
            "GL_ORDINAL": 4782
          },
          {
            "Reference_area": "Timor-Leste",
            "Year": 2022,
            "Percentage": 5.136001767,
            "GL_ORDINAL": 4783
          },
          {
            "Reference_area": "Togo",
            "Year": 2000,
            "Percentage": 92.95356523,
            "GL_ORDINAL": 4784
          },
          {
            "Reference_area": "Togo",
            "Year": 2001,
            "Percentage": 93.18995029,
            "GL_ORDINAL": 4785
          },
          {
            "Reference_area": "Togo",
            "Year": 2002,
            "Percentage": 93.27119851,
            "GL_ORDINAL": 4786
          },
          {
            "Reference_area": "Togo",
            "Year": 2003,
            "Percentage": 90.48573047,
            "GL_ORDINAL": 4787
          },
          {
            "Reference_area": "Togo",
            "Year": 2004,
            "Percentage": 91.6096446,
            "GL_ORDINAL": 4788
          },
          {
            "Reference_area": "Togo",
            "Year": 2005,
            "Percentage": 93.34677049,
            "GL_ORDINAL": 4789
          },
          {
            "Reference_area": "Togo",
            "Year": 2006,
            "Percentage": 91.99121943,
            "GL_ORDINAL": 4790
          },
          {
            "Reference_area": "Togo",
            "Year": 2007,
            "Percentage": 93.33379846,
            "GL_ORDINAL": 4791
          },
          {
            "Reference_area": "Togo",
            "Year": 2008,
            "Percentage": 93.34637391,
            "GL_ORDINAL": 4792
          },
          {
            "Reference_area": "Togo",
            "Year": 2009,
            "Percentage": 92.1363884,
            "GL_ORDINAL": 4793
          },
          {
            "Reference_area": "Togo",
            "Year": 2010,
            "Percentage": 91.57507552,
            "GL_ORDINAL": 4794
          },
          {
            "Reference_area": "Togo",
            "Year": 2011,
            "Percentage": 93.35178645,
            "GL_ORDINAL": 4795
          },
          {
            "Reference_area": "Togo",
            "Year": 2012,
            "Percentage": 94.11672795,
            "GL_ORDINAL": 4796
          },
          {
            "Reference_area": "Togo",
            "Year": 2013,
            "Percentage": 94.06880104,
            "GL_ORDINAL": 4797
          },
          {
            "Reference_area": "Togo",
            "Year": 2014,
            "Percentage": 90.43864932,
            "GL_ORDINAL": 4798
          },
          {
            "Reference_area": "Togo",
            "Year": 2015,
            "Percentage": 94.11461339,
            "GL_ORDINAL": 4799
          },
          {
            "Reference_area": "Togo",
            "Year": 2016,
            "Percentage": 65.25969032,
            "GL_ORDINAL": 4800
          },
          {
            "Reference_area": "Togo",
            "Year": 2017,
            "Percentage": 91.98911086,
            "GL_ORDINAL": 4801
          },
          {
            "Reference_area": "Togo",
            "Year": 2018,
            "Percentage": 91.77355519,
            "GL_ORDINAL": 4802
          },
          {
            "Reference_area": "Togo",
            "Year": 2019,
            "Percentage": 92.4296184,
            "GL_ORDINAL": 4803
          },
          {
            "Reference_area": "Togo",
            "Year": 2020,
            "Percentage": 93.46894031,
            "GL_ORDINAL": 4804
          },
          {
            "Reference_area": "Togo",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 4805
          },
          {
            "Reference_area": "Togo",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 4806
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 4807
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 4808
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4809
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 4810
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4811
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 4812
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4813
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4814
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4815
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 4816
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4817
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4818
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 4819
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 4820
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 4821
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 4822
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4823
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 4824
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 4825
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 4826
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 4827
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 4828
          },
          {
            "Reference_area": "Tokelau",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4829
          },
          {
            "Reference_area": "Tonga",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 4830
          },
          {
            "Reference_area": "Tonga",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 4831
          },
          {
            "Reference_area": "Tonga",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4832
          },
          {
            "Reference_area": "Tonga",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 4833
          },
          {
            "Reference_area": "Tonga",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4834
          },
          {
            "Reference_area": "Tonga",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 4835
          },
          {
            "Reference_area": "Tonga",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4836
          },
          {
            "Reference_area": "Tonga",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4837
          },
          {
            "Reference_area": "Tonga",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4838
          },
          {
            "Reference_area": "Tonga",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 4839
          },
          {
            "Reference_area": "Tonga",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4840
          },
          {
            "Reference_area": "Tonga",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4841
          },
          {
            "Reference_area": "Tonga",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 4842
          },
          {
            "Reference_area": "Tonga",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 4843
          },
          {
            "Reference_area": "Tonga",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 4844
          },
          {
            "Reference_area": "Tonga",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 4845
          },
          {
            "Reference_area": "Tonga",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4846
          },
          {
            "Reference_area": "Tonga",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 4847
          },
          {
            "Reference_area": "Tonga",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 4848
          },
          {
            "Reference_area": "Tonga",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 4849
          },
          {
            "Reference_area": "Tonga",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 4850
          },
          {
            "Reference_area": "Tonga",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 4851
          },
          {
            "Reference_area": "Tonga",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4852
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 4853
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2001,
            "Percentage": 67.38034997,
            "GL_ORDINAL": 4854
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4855
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2003,
            "Percentage": 67.71435174,
            "GL_ORDINAL": 4856
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4857
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 4858
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4859
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4860
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4861
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 4862
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2010,
            "Percentage": 68.71042634,
            "GL_ORDINAL": 4863
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4864
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 4865
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2013,
            "Percentage": 49.20201507,
            "GL_ORDINAL": 4866
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2014,
            "Percentage": 49.4023057,
            "GL_ORDINAL": 4867
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2015,
            "Percentage": 67.10559905,
            "GL_ORDINAL": 4868
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2016,
            "Percentage": 40.73915372,
            "GL_ORDINAL": 4869
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2017,
            "Percentage": 49.72845336,
            "GL_ORDINAL": 4870
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 4871
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2019,
            "Percentage": 67.79445379,
            "GL_ORDINAL": 4872
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2020,
            "Percentage": 50.53522962,
            "GL_ORDINAL": 4873
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 4874
          },
          {
            "Reference_area": "Trinidad and Tobago",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4875
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2000,
            "Percentage": 90.90685232,
            "GL_ORDINAL": 4876
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2001,
            "Percentage": 90.20174201,
            "GL_ORDINAL": 4877
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2002,
            "Percentage": 89.290004,
            "GL_ORDINAL": 4878
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2003,
            "Percentage": 92.00257195,
            "GL_ORDINAL": 4879
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2004,
            "Percentage": 90.87681383,
            "GL_ORDINAL": 4880
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2005,
            "Percentage": 90.87664412,
            "GL_ORDINAL": 4881
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2006,
            "Percentage": 54.10851361,
            "GL_ORDINAL": 4882
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2007,
            "Percentage": 59.75860799,
            "GL_ORDINAL": 4883
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2008,
            "Percentage": 58.6478342,
            "GL_ORDINAL": 4884
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2009,
            "Percentage": 92.6544037,
            "GL_ORDINAL": 4885
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2010,
            "Percentage": 92.65619291,
            "GL_ORDINAL": 4886
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2011,
            "Percentage": 90.61467015,
            "GL_ORDINAL": 4887
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2012,
            "Percentage": 91.14688945,
            "GL_ORDINAL": 4888
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2013,
            "Percentage": 92.42227717,
            "GL_ORDINAL": 4889
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2014,
            "Percentage": 90.84272049,
            "GL_ORDINAL": 4890
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2015,
            "Percentage": 87.37436043,
            "GL_ORDINAL": 4891
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2016,
            "Percentage": 24.68291896,
            "GL_ORDINAL": 4892
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2017,
            "Percentage": 92.38056843,
            "GL_ORDINAL": 4893
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2018,
            "Percentage": 88.23930664,
            "GL_ORDINAL": 4894
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2019,
            "Percentage": 90.5414599,
            "GL_ORDINAL": 4895
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2020,
            "Percentage": 92.07481566,
            "GL_ORDINAL": 4896
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2021,
            "Percentage": 99.5374773,
            "GL_ORDINAL": 4897
          },
          {
            "Reference_area": "Tunisia",
            "Year": 2022,
            "Percentage": 96.25547513,
            "GL_ORDINAL": 4898
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2000,
            "Percentage": 72.45963913,
            "GL_ORDINAL": 4899
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2001,
            "Percentage": 72.45963913,
            "GL_ORDINAL": 4900
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2002,
            "Percentage": 72.45963913,
            "GL_ORDINAL": 4901
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2003,
            "Percentage": 72.44655582,
            "GL_ORDINAL": 4902
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2004,
            "Percentage": 73.29817833,
            "GL_ORDINAL": 4903
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2005,
            "Percentage": 73.7222758,
            "GL_ORDINAL": 4904
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2006,
            "Percentage": 68.67760618,
            "GL_ORDINAL": 4905
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2007,
            "Percentage": 53.49061146,
            "GL_ORDINAL": 4906
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2008,
            "Percentage": 69.0328728,
            "GL_ORDINAL": 4907
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2009,
            "Percentage": 74.14611006,
            "GL_ORDINAL": 4908
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2010,
            "Percentage": 74.53505007,
            "GL_ORDINAL": 4909
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2011,
            "Percentage": 74.58273724,
            "GL_ORDINAL": 4910
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2012,
            "Percentage": 74.37977099,
            "GL_ORDINAL": 4911
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2013,
            "Percentage": 74.37977099,
            "GL_ORDINAL": 4912
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2014,
            "Percentage": 74.36874702,
            "GL_ORDINAL": 4913
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2015,
            "Percentage": 74.36874702,
            "GL_ORDINAL": 4914
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2016,
            "Percentage": 0.602130616,
            "GL_ORDINAL": 4915
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2017,
            "Percentage": 74.88436633,
            "GL_ORDINAL": 4916
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2018,
            "Percentage": 74.85057471,
            "GL_ORDINAL": 4917
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2019,
            "Percentage": 74.72527473,
            "GL_ORDINAL": 4918
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2020,
            "Percentage": 74.72527473,
            "GL_ORDINAL": 4919
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 4920
          },
          {
            "Reference_area": "Turkmenistan",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 4921
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 4922
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 4923
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4924
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 4925
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2004,
            "Percentage": 90.73643263,
            "GL_ORDINAL": 4926
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 4927
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4928
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4929
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4930
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 4931
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4932
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4933
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 4934
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 4935
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 4936
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 4937
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4938
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 4939
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 4940
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 4941
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 4942
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 4943
          },
          {
            "Reference_area": "Turks and Caicos Islands",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4944
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 4945
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 4946
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 4947
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 4948
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 4949
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 4950
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 4951
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 4952
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 4953
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 4954
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 4955
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 4956
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 4957
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 4958
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 4959
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 4960
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 4961
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 4962
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 4963
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 4964
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 4965
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 4966
          },
          {
            "Reference_area": "Tuvalu",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 4967
          },
          {
            "Reference_area": "Uganda",
            "Year": 2000,
            "Percentage": 82.81757087,
            "GL_ORDINAL": 4968
          },
          {
            "Reference_area": "Uganda",
            "Year": 2001,
            "Percentage": 82.2318284,
            "GL_ORDINAL": 4969
          },
          {
            "Reference_area": "Uganda",
            "Year": 2002,
            "Percentage": 83.79803205,
            "GL_ORDINAL": 4970
          },
          {
            "Reference_area": "Uganda",
            "Year": 2003,
            "Percentage": 86.98830095,
            "GL_ORDINAL": 4971
          },
          {
            "Reference_area": "Uganda",
            "Year": 2004,
            "Percentage": 87.69836346,
            "GL_ORDINAL": 4972
          },
          {
            "Reference_area": "Uganda",
            "Year": 2005,
            "Percentage": 89.14574531,
            "GL_ORDINAL": 4973
          },
          {
            "Reference_area": "Uganda",
            "Year": 2006,
            "Percentage": 71.15035514,
            "GL_ORDINAL": 4974
          },
          {
            "Reference_area": "Uganda",
            "Year": 2007,
            "Percentage": 57.34936231,
            "GL_ORDINAL": 4975
          },
          {
            "Reference_area": "Uganda",
            "Year": 2008,
            "Percentage": 61.74436086,
            "GL_ORDINAL": 4976
          },
          {
            "Reference_area": "Uganda",
            "Year": 2009,
            "Percentage": 88.48693364,
            "GL_ORDINAL": 4977
          },
          {
            "Reference_area": "Uganda",
            "Year": 2010,
            "Percentage": 83.24202136,
            "GL_ORDINAL": 4978
          },
          {
            "Reference_area": "Uganda",
            "Year": 2011,
            "Percentage": 86.86394632,
            "GL_ORDINAL": 4979
          },
          {
            "Reference_area": "Uganda",
            "Year": 2012,
            "Percentage": 89.905299,
            "GL_ORDINAL": 4980
          },
          {
            "Reference_area": "Uganda",
            "Year": 2013,
            "Percentage": 86.89604544,
            "GL_ORDINAL": 4981
          },
          {
            "Reference_area": "Uganda",
            "Year": 2014,
            "Percentage": 88.83462891,
            "GL_ORDINAL": 4982
          },
          {
            "Reference_area": "Uganda",
            "Year": 2015,
            "Percentage": 90.33561278,
            "GL_ORDINAL": 4983
          },
          {
            "Reference_area": "Uganda",
            "Year": 2016,
            "Percentage": 54.26104619,
            "GL_ORDINAL": 4984
          },
          {
            "Reference_area": "Uganda",
            "Year": 2017,
            "Percentage": 88.96010984,
            "GL_ORDINAL": 4985
          },
          {
            "Reference_area": "Uganda",
            "Year": 2018,
            "Percentage": 90.05360971,
            "GL_ORDINAL": 4986
          },
          {
            "Reference_area": "Uganda",
            "Year": 2019,
            "Percentage": 87.22732281,
            "GL_ORDINAL": 4987
          },
          {
            "Reference_area": "Uganda",
            "Year": 2020,
            "Percentage": 74.69283132,
            "GL_ORDINAL": 4988
          },
          {
            "Reference_area": "Uganda",
            "Year": 2021,
            "Percentage": 93.66276269,
            "GL_ORDINAL": 4989
          },
          {
            "Reference_area": "Uganda",
            "Year": 2022,
            "Percentage": 87.78330253,
            "GL_ORDINAL": 4990
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2000,
            "Percentage": 3.048022101,
            "GL_ORDINAL": 4991
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2001,
            "Percentage": 8.731379968,
            "GL_ORDINAL": 4992
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2002,
            "Percentage": 11.73198057,
            "GL_ORDINAL": 4993
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2003,
            "Percentage": 14.71368614,
            "GL_ORDINAL": 4994
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2004,
            "Percentage": 1.40362787,
            "GL_ORDINAL": 4995
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2005,
            "Percentage": 8.359394501,
            "GL_ORDINAL": 4996
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2006,
            "Percentage": 1.051138387,
            "GL_ORDINAL": 4997
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2007,
            "Percentage": 11.7309929,
            "GL_ORDINAL": 4998
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2008,
            "Percentage": 6.37775108,
            "GL_ORDINAL": 4999
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2009,
            "Percentage": 10.31289251,
            "GL_ORDINAL": 5000
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2010,
            "Percentage": 28.16850977,
            "GL_ORDINAL": 5001
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2011,
            "Percentage": 18.4945948,
            "GL_ORDINAL": 5002
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2012,
            "Percentage": 12.4087821,
            "GL_ORDINAL": 5003
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2013,
            "Percentage": 9.308840425,
            "GL_ORDINAL": 5004
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2014,
            "Percentage": 19.07445926,
            "GL_ORDINAL": 5005
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2015,
            "Percentage": 26.60399446,
            "GL_ORDINAL": 5006
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2016,
            "Percentage": 2.408386177,
            "GL_ORDINAL": 5007
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2017,
            "Percentage": 16.05866707,
            "GL_ORDINAL": 5008
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2018,
            "Percentage": 27.75941886,
            "GL_ORDINAL": 5009
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2019,
            "Percentage": 23.54986736,
            "GL_ORDINAL": 5010
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2020,
            "Percentage": 15.63964313,
            "GL_ORDINAL": 5011
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2021,
            "Percentage": 1.756663484,
            "GL_ORDINAL": 5012
          },
          {
            "Reference_area": "Ukraine",
            "Year": 2022,
            "Percentage": 12.97814499,
            "GL_ORDINAL": 5013
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2000,
            "Percentage": 75.84597433,
            "GL_ORDINAL": 5014
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2001,
            "Percentage": 75.93457944,
            "GL_ORDINAL": 5015
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2002,
            "Percentage": 76.02339181,
            "GL_ORDINAL": 5016
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2003,
            "Percentage": 76.14155251,
            "GL_ORDINAL": 5017
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2004,
            "Percentage": 76.08938547,
            "GL_ORDINAL": 5018
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2005,
            "Percentage": 76.03121516,
            "GL_ORDINAL": 5019
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2006,
            "Percentage": 66.62946429,
            "GL_ORDINAL": 5020
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2007,
            "Percentage": 66.77777778,
            "GL_ORDINAL": 5021
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2008,
            "Percentage": 66.66666667,
            "GL_ORDINAL": 5022
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2009,
            "Percentage": 76.22682661,
            "GL_ORDINAL": 5023
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2010,
            "Percentage": 76.22682661,
            "GL_ORDINAL": 5024
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2011,
            "Percentage": 76.22682661,
            "GL_ORDINAL": 5025
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2012,
            "Percentage": 73.93675027,
            "GL_ORDINAL": 5026
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2013,
            "Percentage": 73.93675027,
            "GL_ORDINAL": 5027
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2014,
            "Percentage": 73.93675027,
            "GL_ORDINAL": 5028
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2015,
            "Percentage": 73.93675027,
            "GL_ORDINAL": 5029
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2016,
            "Percentage": 4.281009879,
            "GL_ORDINAL": 5030
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2017,
            "Percentage": 74.97231451,
            "GL_ORDINAL": 5031
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2018,
            "Percentage": 74.94456763,
            "GL_ORDINAL": 5032
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2019,
            "Percentage": 75.1393534,
            "GL_ORDINAL": 5033
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2020,
            "Percentage": 75.93220339,
            "GL_ORDINAL": 5034
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2021,
            "Percentage": 97.64470115,
            "GL_ORDINAL": 5035
          },
          {
            "Reference_area": "United Arab Emirates",
            "Year": 2022,
            "Percentage": 97.04748586,
            "GL_ORDINAL": 5036
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 5037
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 5038
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 5039
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 5040
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 5041
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 5042
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 5043
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 5044
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 5045
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 5046
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 5047
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 5048
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 5049
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 5050
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 5051
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 5052
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 5053
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 5054
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 5055
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 5056
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 5057
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 5058
          },
          {
            "Reference_area": "United States Virgin Islands",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 5059
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2000,
            "Percentage": 24.01343747,
            "GL_ORDINAL": 5060
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 5061
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 5062
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2003,
            "Percentage": 1.479279819,
            "GL_ORDINAL": 5063
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 5064
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2005,
            "Percentage": 79.56715673,
            "GL_ORDINAL": 5065
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2006,
            "Percentage": 8.719924925,
            "GL_ORDINAL": 5066
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 5067
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2008,
            "Percentage": 19.9186726,
            "GL_ORDINAL": 5068
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2009,
            "Percentage": 68.72971605,
            "GL_ORDINAL": 5069
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2010,
            "Percentage": 46.44699364,
            "GL_ORDINAL": 5070
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2011,
            "Percentage": 0.163240719,
            "GL_ORDINAL": 5071
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2012,
            "Percentage": 42.41076165,
            "GL_ORDINAL": 5072
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2013,
            "Percentage": 3.271638878,
            "GL_ORDINAL": 5073
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2014,
            "Percentage": 10.44654598,
            "GL_ORDINAL": 5074
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 5075
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2016,
            "Percentage": 2.897063801,
            "GL_ORDINAL": 5076
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2017,
            "Percentage": 23.41991738,
            "GL_ORDINAL": 5077
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2018,
            "Percentage": 14.38187224,
            "GL_ORDINAL": 5078
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2019,
            "Percentage": 8.932801636,
            "GL_ORDINAL": 5079
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2020,
            "Percentage": 12.68938804,
            "GL_ORDINAL": 5080
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2021,
            "Percentage": 34.53963142,
            "GL_ORDINAL": 5081
          },
          {
            "Reference_area": "Uruguay",
            "Year": 2022,
            "Percentage": 55.9111845,
            "GL_ORDINAL": 5082
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2000,
            "Percentage": 19.49427275,
            "GL_ORDINAL": 5083
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2001,
            "Percentage": 29.30489731,
            "GL_ORDINAL": 5084
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2002,
            "Percentage": 18.04654285,
            "GL_ORDINAL": 5085
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2003,
            "Percentage": 20.16040431,
            "GL_ORDINAL": 5086
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2004,
            "Percentage": 23.92876417,
            "GL_ORDINAL": 5087
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2005,
            "Percentage": 24.85322896,
            "GL_ORDINAL": 5088
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2006,
            "Percentage": 18.86070413,
            "GL_ORDINAL": 5089
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2007,
            "Percentage": 12.13239405,
            "GL_ORDINAL": 5090
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2008,
            "Percentage": 19.76316395,
            "GL_ORDINAL": 5091
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2009,
            "Percentage": 28.08705613,
            "GL_ORDINAL": 5092
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2010,
            "Percentage": 25.96491228,
            "GL_ORDINAL": 5093
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2011,
            "Percentage": 67.11844431,
            "GL_ORDINAL": 5094
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2012,
            "Percentage": 27.54561507,
            "GL_ORDINAL": 5095
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2013,
            "Percentage": 36.09669811,
            "GL_ORDINAL": 5096
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2014,
            "Percentage": 37.27294455,
            "GL_ORDINAL": 5097
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2015,
            "Percentage": 58.8790631,
            "GL_ORDINAL": 5098
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2016,
            "Percentage": 0.837138508,
            "GL_ORDINAL": 5099
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2017,
            "Percentage": 40.48651507,
            "GL_ORDINAL": 5100
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2018,
            "Percentage": 41.00075386,
            "GL_ORDINAL": 5101
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2019,
            "Percentage": 57.81237396,
            "GL_ORDINAL": 5102
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2020,
            "Percentage": 32.65076688,
            "GL_ORDINAL": 5103
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2021,
            "Percentage": 83.88810282,
            "GL_ORDINAL": 5104
          },
          {
            "Reference_area": "Uzbekistan",
            "Year": 2022,
            "Percentage": 69.51771442,
            "GL_ORDINAL": 5105
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 5106
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 5107
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 5108
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 5109
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 5110
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 5111
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 5112
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 5113
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 5114
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2009,
            "Percentage": 5.984850753,
            "GL_ORDINAL": 5115
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 5116
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 5117
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 5118
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 5119
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 5120
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2015,
            "Percentage": 13.05475675,
            "GL_ORDINAL": 5121
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 5122
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2017,
            "Percentage": 7.618856986,
            "GL_ORDINAL": 5123
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 5124
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 5125
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 5126
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 5127
          },
          {
            "Reference_area": "Vanuatu",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 5128
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2000,
            "Percentage": 17.45788913,
            "GL_ORDINAL": 5129
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2001,
            "Percentage": 35.21156712,
            "GL_ORDINAL": 5130
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2002,
            "Percentage": 18.49616711,
            "GL_ORDINAL": 5131
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2003,
            "Percentage": 32.17509486,
            "GL_ORDINAL": 5132
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2004,
            "Percentage": 19.42953947,
            "GL_ORDINAL": 5133
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2005,
            "Percentage": 26.11449869,
            "GL_ORDINAL": 5134
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2006,
            "Percentage": 5.776453942,
            "GL_ORDINAL": 5135
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2007,
            "Percentage": 11.51938059,
            "GL_ORDINAL": 5136
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2008,
            "Percentage": 5.783826795,
            "GL_ORDINAL": 5137
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2009,
            "Percentage": 18.64677986,
            "GL_ORDINAL": 5138
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2010,
            "Percentage": 49.34368447,
            "GL_ORDINAL": 5139
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2011,
            "Percentage": 10.40451492,
            "GL_ORDINAL": 5140
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2012,
            "Percentage": 10.44056843,
            "GL_ORDINAL": 5141
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2013,
            "Percentage": 32.62785732,
            "GL_ORDINAL": 5142
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2014,
            "Percentage": 32.42995341,
            "GL_ORDINAL": 5143
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2015,
            "Percentage": 33.58389043,
            "GL_ORDINAL": 5144
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2016,
            "Percentage": 35.84482699,
            "GL_ORDINAL": 5145
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2017,
            "Percentage": 18.70161138,
            "GL_ORDINAL": 5146
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2018,
            "Percentage": 23.71697311,
            "GL_ORDINAL": 5147
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2019,
            "Percentage": 44.88592321,
            "GL_ORDINAL": 5148
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2020,
            "Percentage": 36.62728817,
            "GL_ORDINAL": 5149
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2021,
            "Percentage": 15.13487867,
            "GL_ORDINAL": 5150
          },
          {
            "Reference_area": "Venezuela",
            "Year": 2022,
            "Percentage": 10.44006972,
            "GL_ORDINAL": 5151
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2000,
            "Percentage": 10.42143511,
            "GL_ORDINAL": 5152
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2001,
            "Percentage": 17.70488545,
            "GL_ORDINAL": 5153
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2002,
            "Percentage": 35.64077888,
            "GL_ORDINAL": 5154
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2003,
            "Percentage": 22.3460345,
            "GL_ORDINAL": 5155
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2004,
            "Percentage": 22.56573006,
            "GL_ORDINAL": 5156
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2005,
            "Percentage": 30.66822895,
            "GL_ORDINAL": 5157
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2006,
            "Percentage": 2.440976147,
            "GL_ORDINAL": 5158
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2007,
            "Percentage": 10.13553477,
            "GL_ORDINAL": 5159
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2008,
            "Percentage": 6.446034037,
            "GL_ORDINAL": 5160
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2009,
            "Percentage": 10.23862744,
            "GL_ORDINAL": 5161
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2010,
            "Percentage": 29.76063124,
            "GL_ORDINAL": 5162
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2011,
            "Percentage": 16.2064475,
            "GL_ORDINAL": 5163
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2012,
            "Percentage": 16.88435521,
            "GL_ORDINAL": 5164
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2013,
            "Percentage": 25.62167538,
            "GL_ORDINAL": 5165
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2014,
            "Percentage": 22.61838543,
            "GL_ORDINAL": 5166
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2015,
            "Percentage": 27.97367697,
            "GL_ORDINAL": 5167
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2016,
            "Percentage": 22.47428633,
            "GL_ORDINAL": 5168
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2017,
            "Percentage": 5.175149831,
            "GL_ORDINAL": 5169
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2018,
            "Percentage": 18.28589232,
            "GL_ORDINAL": 5170
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2019,
            "Percentage": 45.43899377,
            "GL_ORDINAL": 5171
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2020,
            "Percentage": 35.70895712,
            "GL_ORDINAL": 5172
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2021,
            "Percentage": 27.31380125,
            "GL_ORDINAL": 5173
          },
          {
            "Reference_area": "Viet Nam",
            "Year": 2022,
            "Percentage": 6.448254843,
            "GL_ORDINAL": 5174
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 5175
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 5176
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 5177
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 5178
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 5179
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 5180
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 5181
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 5182
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 5183
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 5184
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 5185
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 5186
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 5187
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 5188
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 5189
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 5190
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 5191
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 5192
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 5193
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 5194
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 5195
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 5196
          },
          {
            "Reference_area": "Wallis and Futuna",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 5197
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2000,
            "Percentage": 0,
            "GL_ORDINAL": 5198
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2001,
            "Percentage": 0,
            "GL_ORDINAL": 5199
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2002,
            "Percentage": 0,
            "GL_ORDINAL": 5200
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2003,
            "Percentage": 0,
            "GL_ORDINAL": 5201
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2004,
            "Percentage": 0,
            "GL_ORDINAL": 5202
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2005,
            "Percentage": 0,
            "GL_ORDINAL": 5203
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2006,
            "Percentage": 0,
            "GL_ORDINAL": 5204
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2007,
            "Percentage": 0,
            "GL_ORDINAL": 5205
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2008,
            "Percentage": 0,
            "GL_ORDINAL": 5206
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2009,
            "Percentage": 0,
            "GL_ORDINAL": 5207
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2010,
            "Percentage": 0,
            "GL_ORDINAL": 5208
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2011,
            "Percentage": 0,
            "GL_ORDINAL": 5209
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2012,
            "Percentage": 0,
            "GL_ORDINAL": 5210
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2013,
            "Percentage": 0,
            "GL_ORDINAL": 5211
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2014,
            "Percentage": 0,
            "GL_ORDINAL": 5212
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2015,
            "Percentage": 0,
            "GL_ORDINAL": 5213
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2016,
            "Percentage": 0,
            "GL_ORDINAL": 5214
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2017,
            "Percentage": 0,
            "GL_ORDINAL": 5215
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2018,
            "Percentage": 0,
            "GL_ORDINAL": 5216
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2019,
            "Percentage": 0,
            "GL_ORDINAL": 5217
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2020,
            "Percentage": 0,
            "GL_ORDINAL": 5218
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2021,
            "Percentage": 0,
            "GL_ORDINAL": 5219
          },
          {
            "Reference_area": "Western Sahara",
            "Year": 2022,
            "Percentage": 0,
            "GL_ORDINAL": 5220
          },
          {
            "Reference_area": "Yemen",
            "Year": 2000,
            "Percentage": 88.13085537,
            "GL_ORDINAL": 5221
          },
          {
            "Reference_area": "Yemen",
            "Year": 2001,
            "Percentage": 88.12890552,
            "GL_ORDINAL": 5222
          },
          {
            "Reference_area": "Yemen",
            "Year": 2002,
            "Percentage": 88.16088061,
            "GL_ORDINAL": 5223
          },
          {
            "Reference_area": "Yemen",
            "Year": 2003,
            "Percentage": 88.1962438,
            "GL_ORDINAL": 5224
          },
          {
            "Reference_area": "Yemen",
            "Year": 2004,
            "Percentage": 88.14549249,
            "GL_ORDINAL": 5225
          },
          {
            "Reference_area": "Yemen",
            "Year": 2005,
            "Percentage": 89.11507889,
            "GL_ORDINAL": 5226
          },
          {
            "Reference_area": "Yemen",
            "Year": 2006,
            "Percentage": 59.56640671,
            "GL_ORDINAL": 5227
          },
          {
            "Reference_area": "Yemen",
            "Year": 2007,
            "Percentage": 58.87009472,
            "GL_ORDINAL": 5228
          },
          {
            "Reference_area": "Yemen",
            "Year": 2008,
            "Percentage": 89.44447256,
            "GL_ORDINAL": 5229
          },
          {
            "Reference_area": "Yemen",
            "Year": 2009,
            "Percentage": 90.18183047,
            "GL_ORDINAL": 5230
          },
          {
            "Reference_area": "Yemen",
            "Year": 2010,
            "Percentage": 90.2064817,
            "GL_ORDINAL": 5231
          },
          {
            "Reference_area": "Yemen",
            "Year": 2011,
            "Percentage": 90.17388811,
            "GL_ORDINAL": 5232
          },
          {
            "Reference_area": "Yemen",
            "Year": 2012,
            "Percentage": 90.24332704,
            "GL_ORDINAL": 5233
          },
          {
            "Reference_area": "Yemen",
            "Year": 2013,
            "Percentage": 90.23342765,
            "GL_ORDINAL": 5234
          },
          {
            "Reference_area": "Yemen",
            "Year": 2014,
            "Percentage": 90.22308275,
            "GL_ORDINAL": 5235
          },
          {
            "Reference_area": "Yemen",
            "Year": 2015,
            "Percentage": 90.23823554,
            "GL_ORDINAL": 5236
          },
          {
            "Reference_area": "Yemen",
            "Year": 2016,
            "Percentage": 28.3841622,
            "GL_ORDINAL": 5237
          },
          {
            "Reference_area": "Yemen",
            "Year": 2017,
            "Percentage": 90.19374518,
            "GL_ORDINAL": 5238
          },
          {
            "Reference_area": "Yemen",
            "Year": 2018,
            "Percentage": 90.1096886,
            "GL_ORDINAL": 5239
          },
          {
            "Reference_area": "Yemen",
            "Year": 2019,
            "Percentage": 90.09652188,
            "GL_ORDINAL": 5240
          },
          {
            "Reference_area": "Yemen",
            "Year": 2020,
            "Percentage": 90.09182859,
            "GL_ORDINAL": 5241
          },
          {
            "Reference_area": "Yemen",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 5242
          },
          {
            "Reference_area": "Yemen",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 5243
          },
          {
            "Reference_area": "Zambia",
            "Year": 2000,
            "Percentage": 95.02517612,
            "GL_ORDINAL": 5244
          },
          {
            "Reference_area": "Zambia",
            "Year": 2001,
            "Percentage": 95.18337645,
            "GL_ORDINAL": 5245
          },
          {
            "Reference_area": "Zambia",
            "Year": 2002,
            "Percentage": 95.23216345,
            "GL_ORDINAL": 5246
          },
          {
            "Reference_area": "Zambia",
            "Year": 2003,
            "Percentage": 95.27589507,
            "GL_ORDINAL": 5247
          },
          {
            "Reference_area": "Zambia",
            "Year": 2004,
            "Percentage": 95.52038233,
            "GL_ORDINAL": 5248
          },
          {
            "Reference_area": "Zambia",
            "Year": 2005,
            "Percentage": 95.54774502,
            "GL_ORDINAL": 5249
          },
          {
            "Reference_area": "Zambia",
            "Year": 2006,
            "Percentage": 94.83376306,
            "GL_ORDINAL": 5250
          },
          {
            "Reference_area": "Zambia",
            "Year": 2007,
            "Percentage": 95.07870487,
            "GL_ORDINAL": 5251
          },
          {
            "Reference_area": "Zambia",
            "Year": 2008,
            "Percentage": 95.30207202,
            "GL_ORDINAL": 5252
          },
          {
            "Reference_area": "Zambia",
            "Year": 2009,
            "Percentage": 95.66007354,
            "GL_ORDINAL": 5253
          },
          {
            "Reference_area": "Zambia",
            "Year": 2010,
            "Percentage": 95.68867529,
            "GL_ORDINAL": 5254
          },
          {
            "Reference_area": "Zambia",
            "Year": 2011,
            "Percentage": 95.71474859,
            "GL_ORDINAL": 5255
          },
          {
            "Reference_area": "Zambia",
            "Year": 2012,
            "Percentage": 95.16064724,
            "GL_ORDINAL": 5256
          },
          {
            "Reference_area": "Zambia",
            "Year": 2013,
            "Percentage": 95.17069233,
            "GL_ORDINAL": 5257
          },
          {
            "Reference_area": "Zambia",
            "Year": 2014,
            "Percentage": 95.17713614,
            "GL_ORDINAL": 5258
          },
          {
            "Reference_area": "Zambia",
            "Year": 2015,
            "Percentage": 95.17791181,
            "GL_ORDINAL": 5259
          },
          {
            "Reference_area": "Zambia",
            "Year": 2016,
            "Percentage": 75.32256683,
            "GL_ORDINAL": 5260
          },
          {
            "Reference_area": "Zambia",
            "Year": 2017,
            "Percentage": 95.16275871,
            "GL_ORDINAL": 5261
          },
          {
            "Reference_area": "Zambia",
            "Year": 2018,
            "Percentage": 95.2766706,
            "GL_ORDINAL": 5262
          },
          {
            "Reference_area": "Zambia",
            "Year": 2019,
            "Percentage": 95.51164437,
            "GL_ORDINAL": 5263
          },
          {
            "Reference_area": "Zambia",
            "Year": 2020,
            "Percentage": 95.60775019,
            "GL_ORDINAL": 5264
          },
          {
            "Reference_area": "Zambia",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 5265
          },
          {
            "Reference_area": "Zambia",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 5266
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2000,
            "Percentage": 88.03187909,
            "GL_ORDINAL": 5267
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2001,
            "Percentage": 87.97754543,
            "GL_ORDINAL": 5268
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2002,
            "Percentage": 87.25041224,
            "GL_ORDINAL": 5269
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2003,
            "Percentage": 88.38710292,
            "GL_ORDINAL": 5270
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2004,
            "Percentage": 88.99033047,
            "GL_ORDINAL": 5271
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2005,
            "Percentage": 89.70339879,
            "GL_ORDINAL": 5272
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2006,
            "Percentage": 87.45217328,
            "GL_ORDINAL": 5273
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2007,
            "Percentage": 90.0992093,
            "GL_ORDINAL": 5274
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2008,
            "Percentage": 89.36410988,
            "GL_ORDINAL": 5275
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2009,
            "Percentage": 90.86958894,
            "GL_ORDINAL": 5276
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2010,
            "Percentage": 90.90877651,
            "GL_ORDINAL": 5277
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2011,
            "Percentage": 91.01013264,
            "GL_ORDINAL": 5278
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2012,
            "Percentage": 90.55571427,
            "GL_ORDINAL": 5279
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2013,
            "Percentage": 90.66720885,
            "GL_ORDINAL": 5280
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2014,
            "Percentage": 90.67478835,
            "GL_ORDINAL": 5281
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2015,
            "Percentage": 90.67805324,
            "GL_ORDINAL": 5282
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2016,
            "Percentage": 44.54733899,
            "GL_ORDINAL": 5283
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2017,
            "Percentage": 90.3771913,
            "GL_ORDINAL": 5284
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2018,
            "Percentage": 90.49210935,
            "GL_ORDINAL": 5285
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2019,
            "Percentage": 90.63747317,
            "GL_ORDINAL": 5286
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2020,
            "Percentage": 90.73878074,
            "GL_ORDINAL": 5287
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2021,
            "Percentage": 100,
            "GL_ORDINAL": 5288
          },
          {
            "Reference_area": "Zimbabwe",
            "Year": 2022,
            "Percentage": 100,
            "GL_ORDINAL": 5289
          }
        ]
      },

      {
        "name": "data_source",
        "source": "input",
        "transform": [
          {
            "type": "extent",
            "field": "Year",
            "signal": "band_0_bin_Year_bin_extent"
          },
          {
            "type": "bin",
            "field": "Year",
            "as": [
              "band_0_bin_Year",
              "band_0_bin_Year_end"
            ],
            "signal": "band_0_bin_Year_bins",
            "extent": {
              "signal": "[band_0_bin_Year_bin_extent[0], band_0_bin_Year_bin_extent[1] + 1e-11]"
            },
            "minstep": 0,
            "maxbins": {
              "signal": "RoleX_BinsSignal"
            }
          },
          {
            "type": "joinaggregate",
            "groupby": [
              "band_0_bin_Year",
              "band_0_bin_Year_end"
            ],
            "ops": [
              "count"
            ],
            "as": [
              "agg_1_aggregate_value"
            ]
          },
          {
            "type": "extent",
            "field": "agg_1_aggregate_value",
            "signal": "agg_1_count_extent"
          },
          {
            "type": "stack",
            "groupby": [
              "band_0_bin_Year",
              "band_0_bin_Year_end"
            ],
            "as": [
              "square_2_stack0",
              "square_2_stack1"
            ],
            "sort": {
              "field": "Percentage",
              "order": "ascending"
            }
          }
        ]
      },
      {
        "name": "band_0_bin_Year_sequence",
        "transform": [
          {
            "type": "sequence",
            "start": {
              "signal": "band_0_bin_Year_bins.start"
            },
            "stop": {
              "signal": "band_0_bin_Year_bins.stop"
            },
            "step": {
              "signal": "band_0_bin_Year_bins.step"
            }
          },
          {
            "type": "formula",
            "expr": "datum.data",
            "as": "band_0_bin_Year"
          },
          {
            "type": "formula",
            "expr": "datum.data + band_0_bin_Year_bins.step",
            "as": "band_0_bin_Year_end"
          },
          {
            "type": "window",
            "ops": [
              "row_number"
            ],
            "as": [
              "__SandDance__Ordinal"
            ]
          },
          {
            "type": "formula",
            "expr": "datum.data === band_0_bin_Year_bins.start",
            "as": "__SandDance__First"
          },
          {
            "type": "formula",
            "expr": "datum.data === band_0_bin_Year_bins.stop - band_0_bin_Year_bins.step",
            "as": "__SandDance__Last"
          },
          {
            "type": "filter",
            "expr": "band_0_bin_Year_bin_extent_span === 0 ? datum[\"__SandDance__First\"] : true"
          }
        ]
      },
      {
        "name": "band_0_accumulative",
        "source": "band_0_bin_Year_sequence",
        "transform": [
          {
            "type": "aggregate",
            "groupby": [
              "band_0_bin_Year",
              "band_0_bin_Year_end"
            ],
            "ops": [
              "count"
            ]
          }
        ]
      }
    ],
    "marks": [
      {
        "type": "text",
        "interactive": false,
        "encode": {
          "enter": {
            "x": { "signal": "width", "offset": -5 },
            "y": { "value": 0 },
            "fill": { "value": "black" },
            "fontSize": { "value": 18 },
            "align": { "value": "right" }
          },
          "update": {
            "text": { "signal": "title" }
          }
        }
      },
      {
        "type": "group",
        "encode": {
          "update": {
            "x": {
              "signal": "PlotOffsetLeft - RoleFacet_AxesAdjustSignalX"
            },
            "y": {
              "signal": "PlotOffsetTop"
            },
            "height": {
              "signal": "PlotHeightOut - RoleFacet_AxesAdjustSignalY"
            },
            "width": {
              "signal": "PlotWidthOut + RoleFacet_AxesAdjustSignalX"
            }
          }
        },
        "marks": [
          {
            "name": "square_2",
            "type": "rect",
            "from": {
              "data": "output"
            },
            "encode": {
              "enter": {
                "stroke": { "value": "#000000" },
                "strokeOpacity": { "value": 0 }
              },
              "update": {
                "strokeOpacity": { "value": 0 },
                "height": [
                  {
                    "test": "datum.__SandDance__Collapsed",
                    "value": 0
                  },
                  {
                    "test": "datum.__SandDance__Collapsed",
                    "value": 0
                  },
                  {
                    "signal": "(((aggMaxExtentScaled) / ceil(aggMaxExtent / ceil(sqrt(aggMaxExtent * ((band_0_bandwidth) / (aggMaxExtentScaled)))))) - min(0.1 * ((band_0_bandwidth) / (ceil(sqrt(aggMaxExtent * ((band_0_bandwidth) / (aggMaxExtentScaled)))) - 1)), 1))"
                  }
                ],
                "width": {
                  "signal": "(((band_0_bandwidth) / ceil(sqrt(aggMaxExtent * ((band_0_bandwidth) / (aggMaxExtentScaled))))) - min(0.1 * ((band_0_bandwidth) / (ceil(sqrt(aggMaxExtent * ((band_0_bandwidth) / (aggMaxExtentScaled)))) - 1)), 1))"
                },
                "x": {
                  "field": "__SandDance__X"
                },
                "y": [
                  {
                    "test": "datum.__SandDance__Collapsed",
                    "signal": "0 + PlotHeightIn"
                  },
                  {
                    "test": "datum.__SandDance__Collapsed",
                    "signal": "0 + PlotHeightIn"
                  },
                  {
                    "field": "__SandDance__Y"
                  }
                ],
                "fill": {
                  "scale": "scale_color",
                  "field": "Percentage"
                },
                "opacity": {
                  "signal": "Mark_OpacitySignal"
                }
              },
              "hover": {
                "stokeWidth": { "value": 1 }, "strokeOpacity": { "value": 1 }, "stoke": { "value": "#652c90" }
              }
            }
          }
        ],
        "axes": [
          {
            "scale": "scale_band_0_x",
            "orient": "bottom",
            "domain": true,
            "ticks": true,
            "domainColor": "rgb(0, 0, 0)",
            "tickColor": "rgb(0, 0, 0)",
            "tickSize": 10,
            "title": "Year",
            "titleAlign": "left",
            "titleAngle": {
              "value": 0
            },
            "titleColor": "rgb(0, 0, 0)",
            "titleFontSize": {
              "signal": "Text_TitleSizeSignal"
            },
            "titleLimit": 100,
            "titlePadding": 30,
            "labels": true,
            "labelAlign": "left",
            "labelBaseline": "top",
            "labelAngle": {
              "signal": "Text_AngleXSignal"
            },
            "labelColor": "rgb(0, 0, 0)",
            "labelFontSize": {
              "signal": "Text_SizeSignal"
            },
            "labelLimit": 100,
            "format": "~r"
          }




        ],
        "data": [
          {
            "name": "output",
            "source": "data_source",
            "transform": [
              {
                "type": "formula",
                "expr": "0 + scale(\"scale_band_0_x\", datum[\"band_0_bin_Year\"]) + (band_0_bandwidth) / ceil(sqrt(aggMaxExtent * ((band_0_bandwidth) / (aggMaxExtentScaled)))) * ((datum[\"square_2_stack0\"]) % ceil(sqrt(aggMaxExtent * ((band_0_bandwidth) / (aggMaxExtentScaled)))))",
                "as": "__SandDance__X"
              },
              {
                "type": "formula",
                "expr": "0 + scale(\"scale_agg_1\", datum[\"agg_1_aggregate_value\"]) + PlotHeightIn - scale(\"scale_agg_1\", datum[\"agg_1_aggregate_value\"]) - (((aggMaxExtentScaled) / ceil(aggMaxExtent / ceil(sqrt(aggMaxExtent * ((band_0_bandwidth) / (aggMaxExtentScaled)))))) - min(0.1 * ((band_0_bandwidth) / (ceil(sqrt(aggMaxExtent * ((band_0_bandwidth) / (aggMaxExtentScaled)))) - 1)), 1)) - floor((datum[\"square_2_stack0\"]) / ceil(sqrt(aggMaxExtent * ((band_0_bandwidth) / (aggMaxExtentScaled))))) * ((((aggMaxExtentScaled) / ceil(aggMaxExtent / ceil(sqrt(aggMaxExtent * ((band_0_bandwidth) / (aggMaxExtentScaled)))))) - min(0.1 * ((band_0_bandwidth) / (ceil(sqrt(aggMaxExtent * ((band_0_bandwidth) / (aggMaxExtentScaled)))) - 1)), 1)) + min(0.1 * ((band_0_bandwidth) / (ceil(sqrt(aggMaxExtent * ((band_0_bandwidth) / (aggMaxExtentScaled)))) - 1)), 1))",
                "as": "__SandDance__Y"
              }
            ]
          }
        ]
      }
    ],
    "signals": [
      {
        "name": "hover",
        "value": null,
        "on": [
          { "events": "rect:mouseover", "update": "datum" },
          { "events": "rect:mouseout", "update": "null" }
        ]
      },
      {
        "name": "title",
        "value": "Percentage",
        "update": "hover ? hover.Reference_area + ': ' +  format(hover.Percentage, '.2f') + '%' : ''"
      },
      {
        "name": "highlight",
        "update": "hover ? 1 : 0"
      },
      {
        "name": "RoleZ_ProportionSignal",
        "value": 0.6
      },
      {
        "name": "RoleZ_HeightSignal",
        "update": "ViewportHeight * RoleZ_ProportionSignal"
      },

      {
        "name": "Text_SizeSignal",
        "value": 12
      },
      {
        "name": "Text_TitleSizeSignal",
        "value": 18
      },
      {
        "name": "Text_AngleXSignal",
        "value": 30
      },
      {
        "name": "Text_AngleYSignal",
        "value": 0
      },
      {
        "name": "Mark_OpacitySignal",
        "value": 1
      },
      {
        "name": "MinCellWidth",
        "update": "max((140), (length(data(\"band_0_accumulative\")) * 15))"
      },
      {
        "name": "MinCellHeight",
        "update": "180"
      },
      {
        "name": "ViewportHeight",
        "update": "max(MinCellHeight, 721)"
      },
      {
        "name": "ViewportWidth",
        "update": "max(MinCellWidth, 805)"
      },
      {
        "name": "PlotOffsetLeft",
        "update": "120"
      },
      {
        "name": "PlotOffsetTop",
        "update": "0"
      },
      {
        "name": "PlotOffsetBottom",
        "update": "120"
      },
      {
        "name": "PlotOffsetRight",
        "update": "0"
      },
      {
        "name": "RoleFacet_AxesAdjustSignalX",
        "update": "0"
      },
      {
        "name": "RoleFacet_AxesAdjustSignalY",
        "update": "0"
      },
      {
        "name": "PlotHeightIn",
        "update": "ViewportHeight - PlotOffsetBottom + RoleFacet_AxesAdjustSignalY"
      },
      {
        "name": "PlotWidthIn",
        "update": "ViewportWidth - PlotOffsetLeft - PlotOffsetRight"
      },
      {
        "name": "PlotHeightOut",
        "update": "PlotHeightIn"
      },
      {
        "name": "PlotWidthOut",
        "update": "PlotWidthIn"
      },
      {
        "name": "height",
        "update": "PlotOffsetTop + PlotHeightOut + PlotOffsetBottom - RoleFacet_AxesAdjustSignalY"
      },
      {
        "name": "width",
        "update": "PlotWidthOut + PlotOffsetLeft + PlotOffsetRight"
      },
      {
        "name": "RoleColor_BinCountSignal",
        "value": 10
      },
      {
        "name": "RoleColor_ReverseSignal",
        "value": false,

      },
      {
        "name": "RoleX_BinsSignal",
        "value": 29
      },
      {
        "name": "band_0_bin_Year_bin_extent_span",
        "update": "band_0_bin_Year_bin_extent[1] - band_0_bin_Year_bin_extent[0]"
      },
      {
        "name": "band_0_bandwidth",
        "update": "bandwidth(\"scale_band_0_x\")"
      },
      {
        "name": "aggMaxExtent",
        "update": "agg_1_count_extent[1]"
      },
      {
        "name": "aggMaxExtentScaled",
        "update": "PlotHeightIn - scale(\"scale_agg_1\", aggMaxExtent)"
      }
    ],
    "legends": [
      {
        "orient": "none",
        "title": "Percentage",
        "fill": "scale_color",
        "encode": {
          "symbols": {
            "update": {
              "shape": {
                "value": "square"
              }
            }
          }
        },
        "type": "symbol",
        "format": "~r"
      }
    ],
    "scales": [
      {
        "name": "scale_color",
        "type": "quantize",
        "domain": {
          "data": "data_source",
          "field": "Percentage"
        },
        "range": {
          "scheme": "reds",
          "count": {
            "signal": "RoleColor_BinCountSignal"
          }
        },
        "reverse": {
          "signal": "RoleColor_ReverseSignal"
        }
      },
      {
        "type": "band",
        "name": "scale_band_0_x",
        "range": [
          0,
          {
            "signal": "PlotWidthIn"
          }
        ],
        "padding": 0.1,
        "domain": {
          "data": "band_0_bin_Year_sequence",
          "field": "band_0_bin_Year",
          "sort": true
        }
      },
      {
        "type": "linear",
        "name": "scale_agg_1",
        "domain": [
          0,
          {
            "signal": "aggMaxExtent"
          }
        ],
        "range": [
          {
            "signal": "PlotHeightIn"
          },
          0
        ],
        "nice": true,
        "zero": true,
        "reverse": false
      }
    ]
  }

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
      <VegaVisualization spec={forstWildfiresSpec} />
    </div>
    
  );
}

export default App;