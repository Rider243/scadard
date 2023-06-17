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
            customTicks: [20000, 30000, 40000, 50000],
      
            line: {
              width: 5,
              /*Defining the option will enable it.*/
              breaks: {},   
              /*Palette is defined at series level with an ID referenced here.*/
              color: 'smartPalette:pal1'
            },
            scale_range: [20000, 50000]
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
  
                { value:  [20000, 50000], color: '#21D683' }
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
  
                    { value:  [20000, 50000], color: '#21D683' }
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

//chart line
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

  //   var axisY2 = {
  //   titleFontColor: "white",
  //   lineColor: "white",
  //   tickColor: "white",
  //   labelFontColor: "white",
  //   titleFontSize: 16,
  //   margin: 20,
  //   // reversed: true // Đảo ngược trục y
  // };

 
    
    var chart = new CanvasJS.Chart(id,
    {
        zoomEnabled: true,
        backgroundColor: "#163853",     
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
            axisYType: "secondary",
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
                axisYType: "secondary",
                yValueFormatString: "####.00",
                showInLegend: true,
                name: name2 ,
                dataPoints: dataPoints2,
                interpolationType: "smooth" // Loại hiệu ứng mượt
            },
            {				
                type: "line",
                xValueType: "dateTime",
                axisYType: "secondary",
                yValueFormatString: "####.00",
                showInLegend: true,
                name: name3 ,
                dataPoints: dataPoints3,
                interpolationType: "smooth" // Loại hiệu ứng mượt
            },
            {				
                type: "line",
                xValueType: "dateTime",
                axisYType: "secondary",
                yValueFormatString: "####.00",
                showInLegend: true,
                name: name4 ,
                dataPoints: dataPoints4,
                interpolationType: "smooth" // Loại hiệu ứng mượt
            }
            
        ],
        axisY2: axisY2 = {
          titleFontColor: "white",
          lineColor: "white",
          tickColor: "white",
          labelFontColor: "white",
          titleFontSize: 16,
          margin: 20,
          // reversed: true // Đảo ngược trục y
        },
        axisX: axisX = {
          titleFontColor: "white",
          lineColor: "white",
          tickColor: "white",
          labelFontColor: "white",
          titleFontSize: 16,
          margin: 20,
          // reversed: true // Đảo ngược trục y
        }
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

// ///chart bar
// function chart_sql()
// {
//   console.log('123');
//   var chart = JSC.chart('energy_container-chart', {
//     debug: true,
//     type: 'Area Spline',
//     legend_visible: false,
//     defaultSeries: {
//       shape_opacity: 0.7,
//       color: '#00EE00',
//       defaultPoint_marker: {
//         size: 10,
//         outline: { color: 'white', width: 2 }
//       }
//     },
     
//     xAxis: { scale_type: 'time' },
//     series: [
//       {
//         name: 'Purchases',
//         points: [
//           ['1/1/2020', 29.9],
//           ['1/2/2020', 71.5],
//           ['1/3/2020', 106.4],
//           ['1/4/2020', 129.2],
//           ['1/5/2020', 144.0],
//           ['1/6/2020', 176.0],
//           ['1/7/2020', 106.4],
//           ['1/8/2020', 129.2],
//           ['1/9/2020', 144.0],
//           ['1/10/2020', 176.0],
//           ['1/11/2020', 144.0],
//           ['1/12/2020', 176.0]
//         ]
//       }
//     ]
//   });
// }


function fn_SQL_By_Time_energy()
{   
    console.log('1');
    socket.emit('msg_SQL_ByTime_energy', true);  
    console.log('2');
    socket.on('SQL_ByTime_energy', function(data){
      fn_table_energy(data); // Show sdata
      // console.log(data);
  });
  console.log('3');
}

 

function fn_table_energy(data){


  info_l1_line.length=0;
  date_time_detail.length=0;
 
   if(data){
  
       var len = data.length;
       var count = 0;
 
 
       console.log(len);
       if(len > 0){
         for (var i =  0; i <len && count < 10000; i++)
                   {
                  count++;
                   date_time_detail.push(data[i].date_time);
                   info_l1_line.push(data[i].Total_Energy);
                   }
       }
       console.log(info_l1_line);
   }   
 
   Draw_Chart_detail_energy() ;
 }

///chart bar

 function Draw_Chart_detail_energy() {
  var x1Values = [];
  var y1Values = [];
  x1Values.push(...date_time_detail);
  y1Values.push(...info_l1_line);

  var trace1 = {
    type: 'bar',
    x: x1Values,
    y: y1Values,

    
    // x: [1, 2, 3, 4,5,6,7,8,9,10,11,12],
    // y: [5, 10, 2, 8,5,6,7,8,9,12,11,15],

 
    marker: {
        color: '#99FFFF',
        line: {
            width: 2.5
        }
    }
  };
 
  
  var data = [ trace1 ];
  
  var layout = { 
    title: 'Điện tiêu thụ theo tháng',
    bargap: 0.6,
  
    font: {size: 13,color: 'white'},
    paper_bgcolor: 'rgb(22, 56, 83)',
    plot_bgcolor: 'rgb(22, 56, 83)',
    borderRadius: '10px',
    
      color: 'white',
      yaxis:{
        showgrid: true,
        gridcolor: 'white',
        
      } ,

      xaxis: {
        
        tickangle: 90,  // Góc xoay của các tick (để tránh chồng chéo)
 
      }
  
    
  };
  
  var config = {responsive: false}
  
  Plotly.newPlot('energy_container-chart', data, layout, config );

  // var data = [
  //   {
  //     x: x1Values,
  //     y: y1Values,
  //     type: 'bar',
  //     name: 'Current L3',
  //     hoverinfo: 'x+y',
  //     text: y1Values.map(String), // Hiển thị giá trị trên đầu của cột
  //     textposition: 'auto',
  //     marker: {
  //       color: 'rgb(255, 255, 102)', // Màu của cột
  //       width: 0.5 // Giảm kích thước của cột
  //     }
  //   }
  // ];

  // var layout = {
  //   title: "Điện tiêu thụ theo tháng",
  //   paper_bgcolor: 'rgb(22, 56, 83)',
  //   plot_bgcolor: 'rgb(22, 56, 83)',
  //   borderRadius: '10px',
  //   type: 'bar',
  //   font: {
  //     color: 'white'
  //   },
  //   yaxis: {
      
  //     autotick: false,
  //     showgrid: true, // Bật lưới trên trục y
  //     tick0: 0,
  //     dtick: 1000
  //   }
  // };
 
  // Plotly.newPlot("energy_container-chart", data, layout);
}


 