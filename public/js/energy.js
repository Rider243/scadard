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
            customTicks: [0, 3000,6000,9000,12000],
      
            line: {
              width: 5,
              /*Defining the option will enable it.*/
              breaks: {},   
              /*Palette is defined at series level with an ID referenced here.*/
              color: 'smartPalette:pal1'
            },
            scale_range: [0, 12000]
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
  
                { value:  [0, 12000], color: '#21D683' }
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
  
                    { value:  [0, 12000], color: '#21D683' }
                  ]
              },
              points: [['x', [0, value_gauge]]]
            },
          ]
          }); 
        }, 500);  
  
  }


  function chart_power(id,data1,data2,data3,data4,name1,name2,name3,name4)
{
    var dataPoints1 = [];
    var dataPoints2 = [];
    var dataPoints3 = [];
    var dataPoints4 = [];
    var data1;
    var data2;
    var data3;
    var data4;
    var yValue1 ; 
    var yValue2  ;
    var yValue3  ;
    var yValue4  ;

    
    var chart = new CanvasJS.Chart(id,
    {
        zoomEnabled: true,

        toolTip: {
            shared: true
        },
        legend: {
            cursor:"pointer",
            verticalAlign: "top",
            fontSize: 22,
            fontColor: "dimGrey",
            itemclick : toggleDataSeries
        },
        data: [
            { 
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00",
            xValueFormatString: "hh:mm:ss TT",
            showInLegend: true,
            name: name1,
            dataPoints: dataPoints1,
            interpolationType: "smooth" // Loại hiệu ứng mượt
            },
            {				
                type: "line",
                xValueType: "dateTime",
                yValueFormatString: "####.00",
                showInLegend: true,
                name: name2 ,
                dataPoints: dataPoints2,
                interpolationType: "smooth" // Loại hiệu ứng mượt
            },
            {				
                type: "line",
                xValueType: "dateTime",
                yValueFormatString: "####.00",
                showInLegend: true,
                name: name3 ,
                dataPoints: dataPoints3,
                interpolationType: "smooth" // Loại hiệu ứng mượt
            },
            {				
                type: "line",
                xValueType: "dateTime",
                yValueFormatString: "####.00",
                showInLegend: true,
                name: name4 ,
                dataPoints: dataPoints4,
                interpolationType: "smooth" // Loại hiệu ứng mượt
            }
            
        ]
    });

     
    
    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }
    
    var updateInterval = 1000
    // initial value
 


  

 
    function updateChart( ) {

      
    socket.on(data1, function (data)
    { 

      yValue1=data;  
 
     

    });

    socket.on(data2, function (data)
    { 

      yValue2=data;  
 
     

    });

    socket.on(data3, function (data)
    { 

      yValue3=data;  
 
     
     
    });

    socket.on(data4, function (data)
    { 

      yValue4=data;  
 
     
     
    });

    console.log(yValue1);
    console.log(data1);
    

        var time = new Date;
        // starting at 9.30 am
        
        time.getHours();
        time.getMinutes();
        time.getSeconds();
        time.getMilliseconds();
         
        time.setTime(time.getTime());
     
    
        // adding random value and rounding it to two digits. 
   
    
        // pushing the new values
        dataPoints1.push({
            x: time.getTime(),
            y: yValue1
        });
        dataPoints2.push({
            x: time.getTime(),
            y: yValue2
        });
        
        dataPoints3.push({
            x: time.getTime(),
            y: yValue3
        });
        dataPoints4.push({
            x: time.getTime(),
            y: yValue4
        });
        
        
        
         if (dataPoints1.length >= 200) 
            {
                for (var i = 0; i < 1; i++) 
                {                    
                    dataPoints1.shift();
                    dataPoints2.shift();
                    dataPoints3.shift();
                    dataPoints4.shift();
                }
            }
         
         
       
    
        // updating legend text with  updated with y Value 
        chart.options.data[0].legendText = name1 ;
        chart.options.data[1].legendText =name2 ; 
        chart.options.data[2].legendText = name3  ;
        chart.options.data[3].legendText = name4  ; 
        chart.render();
    }
    // generates first set of dataPoints 
    updateChart(100);	
    setInterval(function(){updateChart()}, updateInterval);
    
}