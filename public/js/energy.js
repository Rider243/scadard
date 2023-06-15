function gauge_power(idg,data_pre) {
    var  value_gauge=0;
       socket.on(data_pre, function (data)
        { 
   
          value_gauge=data;  
        
         var a =value_gauge.toFixed(3);
         value_gauge=parseFloat(a);
         
  
        });
    var chart = JSC.chart(idg, 
  
      {
        debug: true,
   
        legend_visible: false,
        defaultTooltip_enabled: false,
        xAxis_spacingPercentage: 0.4,
        yAxis: [
          {
            id: 'ax1',
            defaultTick: { padding: 10, enabled: false },
            customTicks: [4000, 8000, 12000, 16000],
      
            line: {
              width: 5,
              /*Defining the option will enable it.*/
              breaks: {},   
              /*Palette is defined at series level with an ID referenced here.*/
              color: 'smartPalette:pal1'
            },
            scale_range: [4000, 16000]
          },
        ],
        
        defaultSeries: {
          type: 'gauge column roundcaps',
          shape: {
           
            label: {
              text: '%max',
              align: 'center',
              verticalAlign: 'middle',
              style_fontSize: 15,
              color:"white"
            }
          }
        },
    
        series: [
          {
            type: 'column roundcaps',
            name: 'Temperatures',
            yAxis: 'ax1',
            
            palette: {
              
              id: 'pal1',
              pointValue: '%yValue',
              ranges: [
  
                { value: [4000, 16000], color: '#21D683' }
              ]
            },
          },
        ]
      });
  
      
      
      var  INTERVAL_ID = setInterval(function() { 
        chart.options({ 
       
          series: [
            {
              
              palette: {
         
                pointValue: '%yValue',
                ranges: [
  
                    { value: [4000, 16000], color: '#21D683' }
                  ]
              },
              points: [['x', [4000, value_gauge]]]
            },
          ]
          }); 
        }, 500);  
  
  }

  function gauge_power_total(idg,data_pre) {
    var  value_gauge=0;
       socket.on(data_pre, function (data)
        { 
   
          value_gauge=data;  
        
         var a =value_gauge.toFixed(3);
         value_gauge=parseFloat(a);
         
  
        });
    var chart = JSC.chart(idg, 
  
      {
        debug: true,
   
        legend_visible: false,
        defaultTooltip_enabled: false,
        xAxis_spacingPercentage: 0.4,
        yAxis: [
          {
            id: 'ax1',
            defaultTick: { padding: 10, enabled: false },
            customTicks: [20000, 25000, 30000, 35000],
      
            line: {
              width: 5,
              /*Defining the option will enable it.*/
              breaks: {},   
              /*Palette is defined at series level with an ID referenced here.*/
              color: 'smartPalette:pal1'
            },
            scale_range: [20000, 35000]
          },
        ],
        
        defaultSeries: {
          type: 'gauge column roundcaps',
          shape: {
           
            label: {
              text: '%max',
              align: 'center',
              verticalAlign: 'middle',
              style_fontSize: 15,
              color:"white"
            }
          }
        },
    
        series: [
          {
            type: 'column roundcaps',
            name: 'Temperatures',
            yAxis: 'ax1',
            
            palette: {
              
              id: 'pal1',
              pointValue: '%yValue',
              ranges: [
  
                { value: [20000, 35000], color: '#21D683' }
              ]
            },
          },
        ]
      });
  
      
      
      var  INTERVAL_ID = setInterval(function() { 
        chart.options({ 
       
          series: [
            {
              
              palette: {
         
                pointValue: '%yValue',
                ranges: [
  
                    { value: [20000, 35000], color: '#21D683' }
                  ]
              },
              points: [['x', [20000, value_gauge]]]
            },
          ]
          }); 
        }, 500);  
  
  }

  function gauge_energy_total(idg,data_pre) {
    var  value_gauge=0;
       socket.on(data_pre, function (data)
        { 
   
          value_gauge=data;  
        
         var a =value_gauge.toFixed(0);
         value_gauge=parseFloat(a);
         
  
        });
    var chart = JSC.chart(idg, 
  
      {
        debug: true,
   
        legend_visible: false,
        defaultTooltip_enabled: false,
        xAxis_spacingPercentage: 0.4,
        yAxis: [
          {
            id: 'ax1',
            defaultTick: { padding: 10, enabled: false },
            customTicks: [1000000, 1500000, 2000000, 2500000],
      
            line: {
              width: 5,
              /*Defining the option will enable it.*/
              breaks: {},   
              /*Palette is defined at series level with an ID referenced here.*/
              color: 'smartPalette:pal1'
            },
            scale_range: [1000000, 2500000]
          },
        ],
        
        defaultSeries: {
          type: 'gauge column roundcaps',
          shape: {
           
            label: {
              text: '%max',
              align: 'center',
              verticalAlign: 'middle',
              style_fontSize: 15,
              color:"white"
            }
          }
        },
    
        series: [
          {
            type: 'column roundcaps',
            name: 'Temperatures',
            yAxis: 'ax1',
            
            palette: {
              
              id: 'pal1',
              pointValue: '%yValue',
              ranges: [
  
                { value: [1000000, 2500000], color: '#21D683' }
              ]
            },
          },
        ]
      });
  
      
      
      var  INTERVAL_ID = setInterval(function() { 
        chart.options({ 
       
          series: [
            {
              
              palette: {
         
                pointValue: '%yValue',
                ranges: [
  
                    { value: [1000000, 2500000], color: '#21D683' }
                  ]
              },
              points: [['x', [1000000, value_gauge]]]
            },
          ]
          }); 
        }, 500);  
  
  }