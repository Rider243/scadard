// /////////////////////////++THIẾT LẬP KẾT NỐI WEB++/////////////////////////
var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(8080);
// Home calling
app.get("/home", function (req, res) {
  res.render("home");
});
app.get("/header", function (req, res) {
  res.render("header");
});
app.get("/export", function (req, res) {
  res.render("export");
});
app.get("/", function (req, res) {
  res.render("giamsat");
});
app.get("/energy", function (req, res) {
  res.render("energy");
});

// const ModbusRTU = require('modbus-serial');
// const client = new ModbusRTU();
// const serialPort = 'COM6'; // Cổng COM RS485
// const options = {
//   baudRate: 9600, // Tốc độ truyền dữ liệu
//   dataBits: 8,    // Số bit dữ liệu
//   stopBits: 1,    // Số bit dừng
//   parity: 'none'  // Kiểu kiểm tra lỗi
// };

// // Kết nối với thiết bị Modbus qua cổng COM
// client.connectRTU(serialPort, options, connected);
// var dataArr = []; // Mảng chung để lưu trữ giá trị
// // Mảng xuất dữ liệu report Excel
// var SQL_Excel = [];  // Dữ liệu nhập kho

// async function connected() {
//     console.log('Đã kết nối với thiết bị Modbus qua cổng COM');
//     const unitId = 1; // Địa chỉ thiết bị Modbus
//     const addresses = [4029, 4031, 4033, 4035, 4037, 4039, 4021, 4023, 4025];
//     const quantity = 1; // Số lượng thanh ghi cần đọc

//     client.setID(unitId);

//     for (let i = 0; i < addresses.length; i++) {
//         const startAddress = addresses[i];
//         try {
//             const data = await readdata(startAddress, quantity);
//             dataArr[i] = data;
//         } catch (err) {
//             console.error('Lỗi khi đọc dữ liệu Modbus là:', err);
//         }
//     }

//     console.log('Dữ liệu Modbus:', dataArr);

// }

// setInterval(() => {
//     connected();
// }, 500);

// function readdata(startAddress, quantity) {
//     return new Promise((resolve, reject) => {
//         client.readHoldingRegisters(startAddress, quantity)
//             .then(data => {
//                 resolve(data.data[0]);
//             })
//             .catch(err => {
//                 reject(err);
//             });
//     });
// }

var dataArrip = [];
var dataArrip2 = [];
var data_total_4byte;

// create an empty modbus client
const Modbus2 = require("modbus-serial");

// Tạo một đối tượng Modbus
const client2 = new Modbus2();

// Thiết lập kết nối TCP/IP đến thiết bị Modbus
client2
  .connectTCP("10.14.84.3", { port: 502 })
  .then(setClient)
  .then(function () {
    console.log("Connected");
  })
  .catch(function (e) {
    console.log(e.message);
  });

function setClient() {
  // set the client's unit id
  // set a timout for requests default is null (no timeout)
  client2.setID(1);
  client2.setTimeout(1000);

  // run program
  run();
}

setInterval(() => {
  setClient();
}, 500);

function run() {
  // read the 4 registers starting at address 5
  client2
    .readHoldingRegisters(4020, 27)
    .then(function (d) {
      console.log("Receive:", d.data);
      var datad = d.data;

      for (var i = 0; i < datad.length; i++) {
        if (i % 2 == 1) {
          dataArrip[i] = datad[i] + datad[i - 1] * 65535;
        } else {
          dataArrip[i] = datad[i];
        }
      }
    })
    .catch(function (e) {
      console.log(e.message);
    });
  // .then(close);

  client2
    .readHoldingRegisters(4000, 4)
    .then(function (d) {
      console.log("Receive:", d.data);
      var datad = d.data;

      for (var i = 0; i < datad.length; i++) {
        dataArrip2[i] = datad[i];
      }

      data_total_4byte = dataArrip2[3] + dataArrip2[2] * 65535; //(2^16-1)//+dataArrip2[1]*(65536^2-1)+dataArrip2[0]*(65536^2-1);

      console.log(data_total_4byte);
    })
    .catch(function (e) {
      console.log(e.message);
    });
}

////////////////////////////////////////
// const Modbus = require('jsmodbus');
// const net = require('net');

// const socket = new net.Socket();
// const client1 = new Modbus.client.TCP(socket, 1);

// // Cấu hình địa chỉ IP và cổng của DPM680
// const options1 = {
//     'host': '10.14.12.240',
//     'port': 502
// };

// // Kết nối với DPM680

// socket.connect(options1);

//

// function read_tcpip()
// {

//     const addresses = [0x0FBC,0x0FBD,0X0FBE,0x0FBF,0X0FC0,0x0FC1,0X0FC2,0x0FC3,0X0FC4,0x0FC5,0X0FC6,0x0FC7,0x0FB4,0x0FB5,0x0FB6,0x0FB7,0x0FB8,0x0FB9];

//     for (let i = 0; i < addresses.length; i++) {
//         const address=addresses[i]
//         client1.readHoldingRegisters(address,1).then((resp)=>
//         {
//             const values =resp.response._body._valuesAsArray;

//       if (i%2==1)
//       {
//         dataArrip[i]=values[0]+dataArrip[i-1]*65535;
//       }
//       else
//       {
//         dataArrip[i]=values[0];
//       }

//         }).catch((err)=>{
//             console.log(err);
//         })

//     }

// console.log(dataArrip);
// }

//  setInterval(() => {
//      read_tcpip()
//  }, 500);

io.on("connection", function (socket) {
  socket.on("Client-send-data", function (data) {
    socket.emit("L1_line", dataArrip[9] * 0.1);
    socket.emit("L2_line", dataArrip[11] * 0.1);
    socket.emit("L3_line", dataArrip[13] * 0.1);
    socket.emit("L1_phase", dataArrip[15] * 0.1);
    socket.emit("L2_phase", dataArrip[17] * 0.1);
    socket.emit("L3_phase", dataArrip[19] * 0.1);
    socket.emit("L1_phase_cr", dataArrip[1] * 0.001);
    socket.emit("L2_phase_cr", dataArrip[3] * 0.001);
    socket.emit("L3_phase_cr", dataArrip[5] * 0.001);
    socket.emit("L1_power", dataArrip[21]);
    socket.emit("L2_power", dataArrip[23]);
    socket.emit("L3_power", dataArrip[25]);
    socket.emit("Total_Energy", data_total_4byte * 0.001);
    // socket.emit("change Link", 1);
    var a = dataArrip[21] + dataArrip[23] + dataArrip[25];
    socket.emit("Total_power", a);
    console.log("giá trị la:" + data);
  });
});

// ///////////GỬI DỮ LIỆU BẢNG TAG ĐẾN CLIENT (TRÌNH DUYỆT)///////////

// Khởi tạo SQL
var mysql = require("mysql");
const { Socket } = require("engine.io");
const { log } = require("console");

var sqlcon = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "sql_dpm680",
});

var L1_line = 0;
var L2_line = 0;
var L3_line = 0;
var L1_phase = 0;
var L2_phase = 0;
var L3_phase = 0;
var L1_phase_cr = 0;
var L2_phase_cr = 0;
var L3_phase_cr = 0;
var L1_power = 0;
var L2_power = 0;
var L3_power = 0;
var Total_power = 0;
var Total_Energy = 0;

function fn_sql_insert() {
  // console.log("dât là:"+dataArr[3]);

  var sqltable_Name = "dpm680_data";
  L1_line = dataArrip[9] * 0.1;
  L2_line = dataArrip[11] * 0.1;
  L3_line = dataArrip[13] * 0.1;
  L1_phase = dataArrip[15] * 0.1;
  L2_phase = dataArrip[17] * 0.1;
  L3_phase = dataArrip[19] * 0.1;
  L1_phase_cr = dataArrip[1] * 0.001;
  L2_phase_cr = dataArrip[3] * 0.001;
  L3_phase_cr = dataArrip[5] * 0.001;
  L1_power = dataArrip[21];
  L2_power = dataArrip[23];
  L3_power = dataArrip[25];
  Total_Energy = data_total_4byte * 0.001;
  Total_power = L1_power + L2_power + L3_power;

  // Lấy thời gian hiện tại
  var tzoffset = new Date().getTimezoneOffset() * 60000; //Vùng Việt Nam (GMT7+)
  var temp_datenow = new Date();
  var timeNow = new Date(temp_datenow - tzoffset)
    .toISOString()
    .slice(0, -1)
    .replace("T", " ");
  var timeNow_toSQL = "'" + timeNow + "',";

  // Dữ liệu đọc lên từ các tag
  var L1_line_sql = "'" + L1_line + "',";
  var L2_line_sql = "'" + L2_line + "',";
  var L3_line_sql = "'" + L3_line + "',";
  var L1_phase_sql = "'" + L1_phase + "',";
  var L2_phase_sql = "'" + L2_phase + "',";
  var L3_phase_sql = "'" + L3_phase + "',";
  var L1_phase_cr_sql = "'" + L1_phase_cr + "',";
  var L2_phase_cr_sql = "'" + L2_phase_cr + "',";
  var L3_phase_cr_sql = "'" + L3_phase_cr + "',";
  var L1_power_sql = "'" + L1_power + "',";
  var L2_power_sql = "'" + L2_power + "',";
  var L3_power_sql = "'" + L3_power + "',";
  var Total_power_sql = "'" + Total_power + "',";
  var Total_Energy_sql = "'" + Total_Energy + "'";
  // Ghi dữ liệu vào SQL

  var sql_write_str11 =
    "INSERT INTO " +
    sqltable_Name +
    " (date_time, L1_line, L2_line, L3_line, L1_phase,L2_phase, L3_phase, L1_phase_cr,L2_phase_cr, L3_phase_cr,L1_power,L2_power,L3_power,Total_power,Total_Energy) VALUES (";
  var sql_write_str12 =
    timeNow_toSQL +
    L1_line_sql +
    L2_line_sql +
    L3_line_sql +
    L1_phase_sql +
    L2_phase_sql +
    L3_phase_sql +
    L1_phase_cr_sql +
    L2_phase_cr_sql +
    L3_phase_cr_sql +
    L1_power_sql +
    L2_power_sql +
    L3_power_sql +
    Total_power_sql +
    Total_Energy_sql;
  var sql_write_str1 = sql_write_str11 + sql_write_str12 + ");";
  // Thực hiện ghi dữ liệu vào SQL
  sqlcon.query(sql_write_str1, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      // console.log("SQL - Ghi dữ liệu thành công"+sql_write_str1);
    }
  });
  //  dataArrip=[0,0,0,0,0,0,0,0,0];
}

setInterval(() => {
  fn_sql_insert();
}, 1000);

// Đọc dữ liệu từ SQL
function fn_sql_read() {}

// Đọc dữ liệu từ SQL
function fn_SQLSearch_energy() {
  io.on("connection", function (socket) {
    socket.on("msg_SQL_ByTime_energy", function (data) {
      var date = new Date();
      var year = date.getFullYear();
      console.log(year);

      var sqltable_Name = "dpm680_data";
      //học các kiến thức liên quan tới mysql
      var queryy1 =
        "SELECT date(date_time) AS Month, MAX(Total_Energy) AS Max_Total_Energy FROM dpm680_data WHERE YEAR(date_time) =" +
        year +
        " GROUP BY MONTH(date_time) ORDER BY MONTH(date_time);";

      sqlcon.query(queryy1, function (err, results, fields) {
        if (err) {
          console.log(err);
        } else {
          // const objectifyRawPacket = row => ({...row });
          // const convertedResponse = results.map(objectifyRawPacket);
          const convertedResponse = results.map((row) => ({
            date_time: row.Month,
            Total_Energy: row.Max_Total_Energy,

            // Các cột khác
          }));

          socket.emit("SQL_ByTime_energy", convertedResponse);
          // console.log(convertedResponse);
        }
      });
    });
  });
}

setTimeout(() => {
  fn_SQLSearch_energy();
  fn_SQLSearch_bytime();
  fn_Require_ExcelExport();
}, 1000);

function fn_SQLSearch_bytime() {
  io.on("connection", function (socket) {
    socket.on("msg_SQL_ByTime", function (data) {
      var tzoffset = new Date().getTimezoneOffset() * 60000; //offset time Việt Nam (GMT7+)
      // Lấy thời gian tìm kiếm từ date time piker
      var timeS = new Date(data[0]); // Thời gian bắt đầu
      var timeE = new Date(data[1]); // Thời gian kết thúc
      // Quy đổi thời gian ra định dạng cua MySQL

      if (timeS == "Invalid Date" || timeE == "Invalid Date") {
        var sqltable_Name = "dpm680_data";
        var queryy1 = "SELECT * FROM " + sqltable_Name + ";";
        sqlcon.query(queryy1, function (err, results, fields) {
          if (err) {
            console.log(err);
          } else {
            // const objectifyRawPacket = row => ({...row });
            // const convertedResponse = results.map(objectifyRawPacket);
            const convertedResponse = results.map((row) => ({
              date_time: row.date_time.toLocaleString(),
              L1_line: row.L1_line,
              L2_line: row.L2_line,
              L3_line: row.L3_line,
              L1_phase: row.L1_phase,
              L2_phase: row.L2_phase,
              L3_phase: row.L3_phase,
              L1_phase_cr: row.L1_phase_cr,
              L2_phase_cr: row.L2_phase_cr,
              L3_phase_cr: row.L3_phase_cr,
              L1_power: row.L1_power,
              L2_power: row.L2_power,
              L3_power: row.L3_power,
              Total_power: row.Total_power,
              Total_Energy: row.Total_Energy,
              // Các cột khác
            }));

            SQL_Excel = convertedResponse; // Xuất báo cáo Excel
            socket.emit("SQL_ByTime", convertedResponse);
            // console.log(convertedResponse);
          }
        });
      } else {
        var Query1;

        var timeS1 =
          "'" +
          new Date(timeS - tzoffset)
            .toISOString()
            .slice(0, -1)
            .replace("T", " ") +
          "'";
        var timeE1 =
          "'" +
          new Date(timeE - tzoffset)
            .toISOString()
            .slice(0, -1)
            .replace("T", " ") +
          "'";
        var timeR = timeS1 + "AND" + timeE1; // Khoảng thời gian tìm kiếm (Time Range)

        var sqltable_Name = "dpm680_data"; // Tên bảng
        var dt_col_Name = "date_time"; // Tên cột thời gian+
        var Query1 =
          "SELECT * FROM " +
          sqltable_Name +
          " WHERE " +
          dt_col_Name +
          " BETWEEN ";
        var Query = Query1 + timeR + ";";

        sqlcon.query(Query, function (err, results, fields) {
          if (err) {
            console.log(err);
          } else {
            // const objectifyRawPacket = row => ({...row});
            // const convertedResponse = results.map(objectifyRawPacket);
            const convertedResponse = results.map((row) => ({
              date_time: row.date_time.toLocaleString(),
              L1_line: row.L1_line,
              L2_line: row.L2_line,
              L3_line: row.L3_line,
              L1_phase: row.L1_phase,
              L2_phase: row.L2_phase,
              L3_phase: row.L3_phase,
              L1_phase_cr: row.L1_phase_cr,
              L2_phase_cr: row.L2_phase_cr,
              L3_phase_cr: row.L3_phase_cr,
              L1_power: row.L1_power,
              L2_power: row.L2_power,
              L3_power: row.L3_power,
              Total_power: row.Total_power,
              Total_Energy: row.Total_Energy,
              // Các cột khác
            }));

            SQL_Excel = convertedResponse; // Xuất báo cáo Excel

            // console.log(convertedResponse);

            socket.emit("SQL_ByTime", convertedResponse);
          }
        });
      }
    });
  });
}

// /////////////////////////////// BÁO CÁO EXCEL ///////////////////////////////
const Excel = require("exceljs");

const { CONNREFUSED } = require("dns");
const { get } = require("https");
function fn_excelExport() {
  console.log("2");

  // =====================CÁC THUỘC TÍNH CHUNG=====================
  // Lấy ngày tháng hiện tại
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  let day = date_ob.getDay();
  var dayName = "";
  if (day == 0) {
    dayName = "Chủ nhật,";
  } else if (day == 1) {
    dayName = "Thứ hai,";
  } else if (day == 2) {
    dayName = "Thứ ba,";
  } else if (day == 3) {
    dayName = "Thứ tư,";
  } else if (day == 4) {
    dayName = "Thứ năm,";
  } else if (day == 5) {
    dayName = "Thứ sáu,";
  } else if (day == 6) {
    dayName = "Thứ bảy,";
  } else {
  }
  // Tạo và khai báo Excel
  let workbook = new Excel.Workbook();
  let worksheet = workbook.addWorksheet("Báo cáo điện phòng RD", {
    pageSetup: { paperSize: 9, orientation: "landscape" },
    properties: { tabColor: { argb: "FFC0000" } },
  });
  // Page setup (cài đặt trang)
  worksheet.properties.defaultRowHeight = 20;
  worksheet.pageSetup.margins = {
    left: 0.3,
    right: 0.25,
    top: 0.75,
    bottom: 0.75,
    header: 0.3,
    footer: 0.3,
  };
  // =====================THẾT KẾ HEADER=====================
  // Logo công ty
  const imageId1 = workbook.addImage({
    filename: "public/images/Logo.jpg",
    extension: "png",
  });
  worksheet.addImage(imageId1, "A1:A3");
  // Thông tin công ty
  worksheet.getCell("B1").value = "Công ty tổ hợp cơ khí THACO Chu Lai";
  worksheet.getCell("B1").style = {
    font: { bold: true, size: 14 },
    alignment: { vertical: "middle" },
  };
  worksheet.getCell("B2").value =
    "Địa chỉ: Tam Hiệp, Tam Kì, Núi Thành, Quảng Nam";
  worksheet.getCell("B3").value = "Hotline:  0348 620 063";
  // Tên báo cáo
  worksheet.getCell("A5").value = "BÁO CÁO SẢN XUẤT";
  worksheet.mergeCells("A5:H5");
  worksheet.getCell("A5").style = {
    font: { name: "Times New Roman", bold: true, size: 16 },
    alignment: { horizontal: "center", vertical: "middle" },
  };
  // Ngày in biểu
  worksheet.getCell("H6").value =
    "Ngày in biểu: " +
    dayName +
    date +
    "/" +
    month +
    "/" +
    year +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
  worksheet.getCell("H6").style = {
    font: { bold: false, italic: true },
    alignment: { horizontal: "right", vertical: "bottom", wrapText: false },
  };

  // Tên nhãn các cột
  var rowpos = 7;
  var collumName = [
    "STT",
    "Thời gian",
    "L1-L2",
    "L2-L3",
    "L3-L1",
    "Phase L1-N",
    "Phase L2-N",
    "Phase L3-N",
    "Current L1",
    "Current L2",
    "Current L3",
    "Power L1",
    "Power L2",
    "Power L3",
    "Total power",
    "Total energy",
  ];
  worksheet.spliceRows(rowpos, 1, collumName);

  // =====================XUẤT DỮ LIỆU EXCEL SQL=====================
  // Dump all the data into Excel
  var rowIndex = 0;
  SQL_Excel.forEach((e, index) => {
    // row 1 is the header.
    rowIndex = index + rowpos;
    // worksheet1 collum
    worksheet.columns = [
      { key: "STT" },
      { key: "date_time" },
      { key: "L1_line" },
      { key: "L2_line" },
      { key: "L3_line" },
      { key: "L1_phase" },
      { key: "L2_phase" },
      { key: "L3_phase" },
      { key: "L1_phase_cr" },
      { key: "L2_phase_cr" },
      { key: "L3_phase_cr" },
      { key: "L1_power" },
      { key: "L2_power" },
      { key: "L3_power" },
      { key: "Total_power" },
      { key: "Total_Energy" },
    ];
    worksheet.addRow({
      STT: {
        formula: index + 1,
      },
      ...e,
    });
  });
  // Lấy tổng số hàng
  const totalNumberOfRows = worksheet.rowCount;
  // Tính tổng
  // worksheet.addRow([
  //     'Tổng cộng:',
  //     '',
  //     '',
  //   {formula: `=sum(D${rowpos + 1}:D${totalNumberOfRows})`},
  //   {formula: `=sum(E${rowpos + 1}:E${totalNumberOfRows})`},
  //   {formula: `=sum(F${rowpos + 1}:F${totalNumberOfRows})`},
  // ])
  // Style cho hàng total (Tổng cộng)
  // worksheet.getCell(`A${totalNumberOfRows+1}`).style = { font:{bold: true,size: 12},alignment: {horizontal:'center',}} ;
  // Tô màu cho hàng total (Tổng cộng)
  // const total_row = ['A','B', 'C', 'D', 'E','F','G','H']
  // total_row.forEach((v) => {
  //     worksheet.getCell(`${v}${totalNumberOfRows+1}`).fill = {type: 'pattern',pattern:'solid',fgColor:{ argb:'f2ff00' }}
  // })

  // =====================STYLE CHO CÁC CỘT/HÀNG=====================
  // Style các cột nhãn
  const HeaderStyle = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
  ];
  HeaderStyle.forEach((v) => {
    worksheet.getCell(`${v}${rowpos}`).style = {
      font: { bold: true },
      alignment: { horizontal: "center", vertical: "middle", wrapText: true },
    };
    worksheet.getCell(`${v}${rowpos}`).border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    };
  });
  // Cài đặt độ rộng cột
  worksheet.columns.forEach((column, index) => {
    column.width = 15;
  });
  // Set width header
  worksheet.getColumn(1).width = 12;
  worksheet.getColumn(2).width = 30;

  // ++++++++++++Style cho các hàng dữ liệu++++++++++++
  worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
    var datastartrow = rowpos;
    var rowindex = rowNumber + datastartrow;
    const rowlength = datastartrow + SQL_Excel.length;
    if (rowindex >= rowlength + 1) {
      rowindex = rowlength + 1;
    }
    const insideColumns = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
    ];
    // Tạo border
    insideColumns.forEach((v) => {
      // Border
      (worksheet.getCell(`${v}${rowindex}`).border = {
        top: { style: "thin" },
        bottom: { style: "thin" },
        left: { style: "thin" },
        right: { style: "thin" },
      }),
        // Alignment
        (worksheet.getCell(`${v}${rowindex}`).alignment = {
          horizontal: "center",
          vertical: "middle",
          wrapText: true,
        });
    });
  });

  // =====================THẾT KẾ FOOTER=====================
  worksheet.getCell(`H${totalNumberOfRows + 2}`).value =
    "Ngày …………tháng ……………năm 20………";
  worksheet.getCell(`H${totalNumberOfRows + 2}`).style = {
    font: { bold: true, italic: false },
    alignment: { horizontal: "right", vertical: "middle", wrapText: false },
  };

  worksheet.getCell(`A${totalNumberOfRows + 3}`).value = "Giám đốc";
  worksheet.getCell(`A${totalNumberOfRows + 4}`).value = "(Ký, ghi rõ họ tên)";
  worksheet.getCell(`A${totalNumberOfRows + 3}`).style = {
    font: { bold: true, italic: false },
    alignment: { horizontal: "center", vertical: "bottom", wrapText: false },
  };
  worksheet.getCell(`A${totalNumberOfRows + 4}`).style = {
    font: { bold: false, italic: true },
    alignment: { horizontal: "center", vertical: "top", wrapText: false },
  };

  worksheet.getCell(`E${totalNumberOfRows + 3}`).value = "Trưởng ca";
  worksheet.getCell(`E${totalNumberOfRows + 4}`).value = "(Ký, ghi rõ họ tên)";
  worksheet.getCell(`E${totalNumberOfRows + 3}`).style = {
    font: { bold: true, italic: false },
    alignment: { horizontal: "center", vertical: "bottom", wrapText: false },
  };
  worksheet.getCell(`E${totalNumberOfRows + 4}`).style = {
    font: { bold: false, italic: true },
    alignment: { horizontal: "center", vertical: "top", wrapText: false },
  };

  worksheet.getCell(`H${totalNumberOfRows + 3}`).value = "Người in biểu";
  worksheet.getCell(`H${totalNumberOfRows + 4}`).value = "(Ký, ghi rõ họ tên)";
  worksheet.getCell(`H${totalNumberOfRows + 3}`).style = {
    font: { bold: true, italic: false },
    alignment: { horizontal: "center", vertical: "bottom", wrapText: false },
  };
  worksheet.getCell(`H${totalNumberOfRows + 4}`).style = {
    font: { bold: false, italic: true },
    alignment: { horizontal: "center", vertical: "top", wrapText: false },
  };

  // =====================THỰC HIỆN XUẤT DỮ LIỆU EXCEL=====================

  console.log("3");
  // Export Link
  var currentTime =
    year +
    "_" +
    month +
    "_" +
    date +
    "_" +
    hours +
    "h" +
    minutes +
    "m" +
    seconds +
    "s";
  var saveasDirect = "Report/Report_" + currentTime + ".xlsx";
  SaveAslink = saveasDirect; // Send to client
  var booknameLink = "public/" + saveasDirect;

  var Bookname = "Report_" + currentTime + ".xlsx";
  // Write book name
  workbook.xlsx.writeFile(booknameLink);
  console.log("4");
  // Return
  return [SaveAslink, Bookname];
} // Đóng fn_excelExport

// =====================TRUYỀN NHẬN DỮ LIỆU VỚI TRÌNH DUYỆT=====================
// Hàm chức năng truyền nhận dữ liệu với trình duyệt
function fn_Require_ExcelExport() {
  io.on("connection", function (socket) {
    socket.on("msg_Excel_Report", function (data) {
      console.log("1");
      const [SaveAslink1, Bookname] = fn_excelExport();

      var data = [SaveAslink1, Bookname];
      socket.emit("send_Excel_Report", data);
    });
  });
}
