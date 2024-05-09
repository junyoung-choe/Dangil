import React from 'react';
import { WebView } from 'react-native-webview';
import { EmotionData } from '../../contexts/EmotionData';
import { AnalysisData } from '../../types/datatype';

type RadarChartProps = {
  analysisData: AnalysisData;
};

const Graph = ({ analysisData }: RadarChartProps) => {
  const labels = EmotionData.map(ed => ed.name);
  const data = EmotionData.map(ed => Math.round(analysisData[ed.feel as keyof AnalysisData] * 100));

  const chartHtml = `
    <html>
      <head>
      <style>
        body { margin: 0; overflow: hidden; }
        #chart { width: 100%; height: 100%; }
      </style>
        <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
      </head>
      <body>
        <div id="chart"></div>
        <script>
          var data = [{
            type: 'scatterpolar',
            r: [${data.join(',')}],
            theta: [${labels.map(label => `"${label}"`).join(',')}],
            fill: 'toself',
            fillcolor: 'rgba(254, 139, 139, 0.65)',
            line: {
              color: '#FE8B8B',
            }
          }];
          
          var layout = {
            height: 800,
            // margin: {
            //   t: 150,
            //   l: 50,
            //   r: 50,
            //   b: 50,
            // },
            polar: {
              // 방사축
              radialaxis: {
                visible: true,
                range: [0, 90],
                showticklabels: false,
                showline: false,
                ticklen: 0,
              },
              // 각축
              angularaxis: { 
                color: '#FE8B8B',   // 선 색깔
                ticklen: 0,
                tickfont: {         // 폰트
                  color: '#FE8B8B',
                  size: 30,
                },
              },
              gridshape: 'linear',
            },
            showlegend: false,
            paper_bgcolor: 'rgba(0, 0, 0, 0)',
          };      

          var config = { 
            displayModeBar: false,
            staticPlot: true,
            doubleClick: 'reset'
           };

          Plotly.newPlot('chart', data, layout, config);
        </script>
      </body>
    </html>
  `;

  return (
    <WebView originWhitelist={['*']} source={{ html: chartHtml }} style={{ flex: 1, backgroundColor: 'transparent' }} />
  );
};

export default Graph;
