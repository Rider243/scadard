  /*
Animated gauge and bar charts that demonstrate automatic text animations with live data updates.
Learn how to:

  - Use circular and bar charts with dynamic data.
*/
      // JS
      var INTERVAL_ID,
        animationDuration = 420,
        updateInterval = 1500;
        var palette = ['#1565C0', '#ECEFF1'];
        var textColor = '#B0BEC5';

      function gauges() 
      {
       
  
        var gaugeData = [{ name: 'Load', unit: '%' }];
        var barsData = [
          { name: 'Temperature', unit: '°С' },
          { name: 'Clock', unit: 'MHz' },
          { name: 'Fan', unit: 'RPM' }
        ];
  
        var gaugeChart1 = JSC.chart(
          'gaugeDiv1',
          JSC.merge(gaugeConfig(gaugeSeries(6)), {
            title_label_text: 'CPU',
            toolbar_items: {
              Stop: {
                type: 'option',
                icon_name: 'system/default/pause',
                position: 'top left',
                margin: 10,
                boxVisible: true,
                label_text: 'Pause',
                events_change: playPause,
                states_select: {
                  icon_name: 'system/default/play',
                  label_text: 'Play'
                }
              }
            }
          })
        );
        var gaugeChart2 = JSC.chart('gaugeDiv2', JSC.merge(gaugeConfig(gaugeSeries(8)), { title_label_text: 'GPU' }));
  
        var barChart1 = JSC.chart('columnsDiv1', barsConfig(barSeries([45, 4500, 1000])));
        var barChart2 = JSC.chart('columnsDiv2', barsConfig(barSeries([45, 1000, 900])), function() {
          playPause();
        });
      }

 
      /*
       * Gauge Chart Functions
       * */

      function gaugeSeries(value) {
        var name = gaugeData[0].name;
        return [
          {
            name: name,
            attributes_unit: gaugeData[0].unit,
            points: [{ x: name, id: name, y: value }]
          }
        ];
      }
      function gaugeConfig(series) {
        return {
          debug: true,
          title_label_style_fontSize: 20,
          palette: [palette[0]],
          legend_visible: false,
          animation_duration: animationDuration,
          xAxis: {
            spacingPercentage: 0.6,
            defaultTick_gridLine_color: palette[1]
          },
          yAxis: { visible: false, scale_range: [0, 100] },
          defaultSeries: {
            type: 'gauge column solid',
            opacity: 1,
            mouseTracking_enabled: false,
            angle: { start: -90, sweep: 360 },
            shape: {
              padding: 0,
              label: {
                text: '%value%unit<br/><span style="fontSize: 20px;color:' + textColor + '">%name</span>',
                style: { fontSize: 28, color: palette[0] },
                align: 'center',
                verticalAlign: 'middle'
              }
            }
          },
          defaultPoint_outline_width: 0,
          series: series
        };
      }

      function playPause(val) {
        if (val) {
          clearInterval(INTERVAL_ID);
        } else {
          INTERVAL_ID = setInterval(function() {
            gaugeChart1.options({ series: gaugeSeries(randomNumber(4, 20)) });
            gaugeChart2.options({ series: gaugeSeries(randomNumber(4, 20)) });
            barChart1.options({
              series: barSeries([randomNumber(40, 50), randomNumber(4500, 4800), randomNumber(1000, 1200)])
            });
            barChart2.options({
              series: barSeries([randomNumber(40, 50), randomNumber(1000, 1300), randomNumber(900, 1200)])
            });
          }, updateInterval);
        }
      }

      function randomNumber(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }