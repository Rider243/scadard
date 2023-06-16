////////////// YÊU CẦU DỮ LIỆU TỪ SERVER- REQUEST DATA //////////////
var myVar = setInterval(myTimer, 500);
function myTimer()
{
    socket.emit("Client-send-data", "Request data client");
}

 // Chương trình con đọc dữ liệu lên IO Field
 function fn_IOFieldDataShow(tag, IOField, tofix,content,unit){
    socket.on(tag,function(data){
        if(tofix == 0){
            document.getElementById(IOField).innerText = data;
        } else{
        document.getElementById(IOField).innerText  = content+data.toFixed(tofix)+unit;
        }
    });
}

 
function gauge_temp_1(idg,data_pre) {
  var  value_gauge=0;
 
  
     socket.on(data_pre, function (data)
      { 
 
        value_gauge=data;  
      
       var a =value_gauge.toFixed(1);
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
          customTicks: [300, 350, 400, 450],
    
          line: {
            width: 5,
            /*Defining the option will enable it.*/
            breaks: {},   
            /*Palette is defined at series level with an ID referenced here.*/
            color: 'smartPalette:pal1'
          },
          scale_range: [300, 450]
        },
      ],
      
      defaultSeries: {
        type: 'gauge column roundcaps',
        shape: {
         
          label: {
            text: '%max',
            align: 'center',
            verticalAlign: 'middle',
            style_fontSize: 12,
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
              { value: 300, color: '#FFD221' },
              { value: 350, color: '#21D683' }, 

              { value: [400, 450], color: '#FF5353' }
            ]
          },
          fill: ['red', true] // Disable shading effect and set solid color
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
                { value: 300, color: '#FFD221' },
                { value: 350, color: '#21D683' }, 
  
                { value: [400, 450], color: '#FF5353' }
              ]
            },
            points: [['x', [300, value_gauge]]]
          },
        ]
        }); 
      }, 500);  

}


function gauge_temp_2(idg,data_pre) {
  var  value_gauge=0;
 
  
     socket.on(data_pre, function (data)
      { 
 
        value_gauge=data;  
      
       var a =value_gauge.toFixed(1);
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
          customTicks: [160, 200, 240, 280],
          line: {
            width: 5,
            /*Defining the option will enable it.*/
            breaks: {},   
            /*Palette is defined at series level with an ID referenced here.*/
            color: 'smartPalette:pal1'
          },
          scale_range: [160, 280]
        },
      ],
      defaultSeries: {
        type: 'gauge column roundcaps',
        shape: {
          label: {
            text: '%max',
            align: 'center',
            verticalAlign: 'middle',
            style_fontSize: 12,
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
              { value: 160, color: '#FFD221' },
              { value: 200, color: '#21D683' }, 

              { value: [240, 280], color: '#FF5353' }
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
                { value: 160, color: '#FFD221' },
                { value: 200, color: '#21D683' }, 
  
                { value: [240, 280], color: '#FF5353' }
              ]
            },
            points: [['x', [160, value_gauge]]]
          },
        ]
        }); 
      }, 500);  

}

function gauge_temp_3(idg,data_pre) {
  var  value_gauge=0;
 
  
     socket.on(data_pre, function (data)
      { 
 
        value_gauge=data;  
      
       var a =value_gauge.toFixed(1);
       value_gauge=parseFloat(a);
       console.log(value_gauge);
       

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
          customTicks: [0, 40, 80,120],
          line: {
            width: 5,
            /*Defining the option will enable it.*/
            breaks: {},   
            /*Palette is defined at series level with an ID referenced here.*/
            color: 'smartPalette:pal1'
          },
          scale_range: [0, 120]
        },
      ],
      defaultSeries: {
        type: 'gauge column roundcaps',
        shape: {
          label: {
            text: '%max',
            align: 'center',
            verticalAlign: 'middle',
            style_fontSize: 12,
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

              { value: [0, 120], color: '#21D683' }
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
  
                { value: [0, 120], color: '#21D683' }
              ]
            },
            points: [['x', [0, value_gauge]]]
          },
        ]
        }); 
      }, 500);  

}


function chart_realtime(id,data1,data2,data3,name1,name2,name3)
{
    var dataPoints1 = [];
    var dataPoints2 = [];
    var dataPoints3 = [];
    var data1;
    var data2;
    var data3;
    var yValue1 ; 
    var yValue2  ;
    var yValue3  ;

    
    var chart = new CanvasJS.Chart(id,
    {
        zoomEnabled: true,theme: "dark1",

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
 


  
    console.log(yValue1);
    console.log(data1);
    
  
    
 
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
 
     
    console.log('789');
    });

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
        
        
        
         if (dataPoints1.length >= 200) 
            {
                for (var i = 0; i < 1; i++) 
                {                    
                    dataPoints1.shift();
                    dataPoints2.shift();
                    dataPoints3.shift();
                }
            }
         
         
       
    
        // updating legend text with  updated with y Value 
        chart.options.data[0].legendText = name1 ;
        chart.options.data[1].legendText =name2 ; 
        chart.options.data[2].legendText = name3  ; 
        chart.render();
    }
    // generates first set of dataPoints 
    updateChart(100);	
    setInterval(function(){updateChart()}, updateInterval);
    
}

 
 

   var info_l1_line=[];
   var info_l2_line=[];
   var info_l3_line=[];
   var info_l1_phase=[];
   var info_l2_phase=[];
   var info_l3_phase=[];
   var info_l1_phase_cr=[];
   var info_l2_phase_cr=[];
   var info_l3_phase_cr=[];
   var date_time_detail=[];



   
// Chương trình con hiển thị SQL ra bảng
function fn_table(data){


 info_l1_line.length=0;
 info_l2_line.length=0;
 info_l3_line.length=0;
 info_l1_phase.length=0;
 info_l2_phase.length=0;
 info_l3_phase.length=0;
 info_l1_phase_cr.length=0;
 info_l2_phase_cr.length=0;
 info_l3_phase_cr.length=0;
 date_time_detail.length=0;

  if(data){
      $("#table_info tbody").empty(); 
      var len = data.length;
      var count = 0;
      var txt = "<tbody>";

      if(len > 0){
        for (var i = len - 1; i >= 0 && count < 1000; i--)
        {
                 count++;
                  txt += "<tr><td>"+data[i].date_time 
                      +"</td><td>"+data[i].L1_line
                      +"</td><td>"+data[i].L2_line
                      +"</td><td>"+data[i].L3_line 
                      +"</td><td>"+data[i].L1_phase
                      +"</td><td>"+data[i].L2_phase
                      +"</td><td>"+data[i].L3_phase
                      +"</td><td>"+data[i].L1_phase_cr
                      +"</td><td>"+data[i].L2_phase_cr
                      +"</td><td>"+data[i].L3_phase_cr
                      +"</td></tr>";


                  info_l1_line.push(data[i].L1_line)
                  info_l2_line.push(data[i].L2_line)
                  info_l3_line.push(data[i].L3_line)
                  info_l1_phase.push(data[i].L1_phase)
                  info_l2_phase.push(data[i].L2_phase)
                  info_l3_phase.push(data[i].L3_phase)
                  info_l1_phase_cr.push(data[i].L1_phase_cr)
                  info_l2_phase_cr.push(data[i].L2_phase_cr)
                  info_l3_phase_cr.push(data[i].L3_phase_cr)
                  date_time_detail.push(data[i].date_time)
 

                  }
          if(txt != ""){
          txt +="</tbody>"; 
          $("#table_info").append(txt);
          }
      }
  }   

  Draw_Chart_detail() ;
}

function fn_SQL_By_Time()
{
  // console.log('le tan loc');
    var val = [document.getElementById('dtpk_Search_Start').value,
               document.getElementById('dtpk_Search_End').value];
    socket.emit('msg_SQL_ByTime', val);
    
}

function fn_SQL_By_Time_display()
{
    socket.on('SQL_ByTime', function(data){
        fn_table(data); // Show sdata
        // console.log(data);
    });
}



// Gửi yêu cầu xuất Excel qua index.js
function fn_excel(){
   
  socket.emit("msg_Excel_Report", true);
  
}

function fn_excel_display()
{
  var linktext = "";
  var bookname = "";
  socket.on('send_Excel_Report',function(data){
      linktext = data[0];
      bookname = data[1];
      // Delay save as
      var delayInMilliseconds = 3000; //Delay 1 second
      setTimeout(function() {
          saveAs(linktext, bookname);
      }, delayInMilliseconds);          
  }); 
}



function Draw_Chart_detail()
{

        // console.log("lần 1");
      
     
        // Generate values

        var x1Values = [];


        var y1Values = [];
        var y2Values = [];
        var y3Values = [];
        var y4Values = [];
        var y5Values = [];
        var y6Values = [];
        var y7Values = [];
        var y8Values = [];
        var y9Values = [];
        var y10Values = [];

        x1Values.push(...date_time_detail);


        y1Values.push(...info_l1_line);
        y2Values.push(...info_l2_line);
        y3Values.push(...info_l3_line);
        y4Values.push(...info_l1_phase);
        y5Values.push(...info_l2_phase);
        y6Values.push(...info_l3_phase);
        y7Values.push(...info_l1_phase_cr);
        y8Values.push(...info_l2_phase_cr);
        y9Values.push(...info_l3_phase_cr);
 

        // Define Data
        var data = [
        {x: x1Values, y: y1Values,mode:'lines', name: 'L1-L2',hoverinfo:'x+y', nticks: 10,fixedrange: true },
        {x: x1Values, y: y2Values, mode:"lines", name: 'L2-L3',hoverinfo:'x+y', nticks: 10,fixedrange: true},
        {x: x1Values, y: y3Values, mode:"lines", name: 'L3-L1',hoverinfo:'x+y', nticks: 10,fixedrange: true},
        {x: x1Values, y: y4Values,mode:'lines', name: 'Phase L1-N',hoverinfo:'x+y', nticks: 10 ,fixedrange: true},
        {x: x1Values, y: y5Values, mode:"lines", name: 'Phase L2-N',hoverinfo:'x+y', nticks: 10,fixedrange: true},
        {x: x1Values, y: y6Values, mode:"lines", name: 'Phase L3-N',hoverinfo:'x+y', nticks: 10,fixedrange: true},
        {x: x1Values, y: y7Values, mode:"lines", name: 'Current L1',hoverinfo:'x+y', nticks: 10,fixedrange: true},
        {x: x1Values, y: y8Values, mode:"lines", name: 'Current L2',hoverinfo:'x+y', nticks: 10,fixedrange: true},
        {x: x1Values, y: y9Values, mode:"lines", name: 'Current L3',hoverinfo:'x+y', nticks: 10,fixedrange: true}
        ];

        //Define Layout
       // var layout = {title: "Biểu đồ thông số quạt"};

       var layout = {
        title: "Biểu đồ hệ thống điện RD",
        paper_bgcolor : 'rgb(22, 56, 83)',
        plot_bgcolor: 'rgb(22, 56, 83)',
        borderRadius: '10px',
        font: {
          color: 'white' // Màu chữ trên biểu đồ
        },
        yaxis:
     {
       
        // showline: true,
        // fixedrange: true,
        range: [0, 400],
        autotick: false,
        tick0: 0,
        dtick:100,
    },
      };

        // Display using Plotly
        Plotly.newPlot("chart_detail", data, layout);
        // console.log(x1Values);            
}

 


 
 