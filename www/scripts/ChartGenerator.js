

function createCharts(){
    CanvasJS.addColorSet("pickups", ["#2791E9", "#FF4C00","#FFC000"]);
    let chart = new CanvasJS.Chart("news1", {
      backgroundColor: "#202225",
      toolTip: {
          enabled: false,
      },
      colorSet: "pickups",
      data: [
          {
              // Change type to "doughnut", "line", "splineArea", etc.
              type: "doughnut",
              highlightEnabled: false,
              dataPoints: [
                { name: "Won", y: 10},
                { name: "Defeated", y: 2},
                { name: "Tied", y: 3}
            ]
          }
      ]
  });
  //chart.render();
  
  let chart2 = new CanvasJS.Chart("news2", {
      backgroundColor: "#202225",
      toolTip: {
          enabled: false,
      },
      data: [
          {
              // Change type to "doughnut", "line", "splineArea", etc.
              type: "scatter",
              highlightEnabled: false,
              dataPoints: [
                  { y: 10 },
                  { y: 15 },
                  { y: 25 },
                  { y: 30 },
                  { y: 28 }
              ]
          }
      ]
  });
  //chart2.render();
  
  let chart3 = new CanvasJS.Chart("news3", {
      backgroundColor: "#202225",
      toolTip: {
          enabled: false,
      },
      data: [
          {
              // Change type to "doughnut", "line", "splineArea", etc.
              type: "column",
              highlightEnabled: false,
              dataPoints: [
                  { y: 10 },
                  { y: 15 },
                  { y: 25 },
                  { y: 30 },
                  { y: 28 }
              ]
          }
      ]
  });
  //chart3.render();
  let chart4 = new CanvasJS.Chart("news4", {
      backgroundColor: "#202225",
      toolTip: {
          enabled: false,
      },
      colorSet: "pickups",
      data: [
          {
              // Change type to "doughnut", "line", "splineArea", etc.
              type: "pie",
              highlightEnabled: false,
              dataPoints: [
                { name: "Blue", y: 10},
                { name: "Red", y: 20},
                { name: "Yellow", y: 50}
            ]
          }
      ]
  });   
    
  setTextInCharts(chart,chart2,chart3,chart4);
  }
  
  function setTextInCharts(chart1,chart2,chart3,chart4){
    let div1 = $("<div></div>").addClass("imgText");
    let p1 = $("<p></p>").text("Games Won");

    let div2 = $("<div></div>").addClass("imgText");
    let p2 = $("<p></p>").text("Shots Accuracy");

    let div3 = $("<div></div>").addClass("imgText");
    let p3 = $("<p></p>").text("Damage Dealt");

    let div4 = $("<div></div>").addClass("imgText");
    let p4 = $("<p></p>").text("Pick-ups taken");

    
    chart1.render();
    chart2.render();
    chart3.render();
    chart4.render();
  
    div1.append(p1);
    $("#news1").append(div1);

    div2.append(p2);
    $("#news2").append(div2);

    div3.append(p3);
    $("#news3").append(div3);

    div4.append(p4);
    $("#news4").append(div4);
  }




  function StatisticsPage(){
      let title = document.createElement("h1");
      title.textContent = "Global Statistics";
      title.id = "statisticsTitle";

      let dashboard = document.createElement("div");
      dashboard.id = "dashboard";

      let divTop = document.createElement("div");
      let divLeft = document.createElement("div");
      let divRight = document.createElement("div");
      let divBottom = document.createElement("div");
      divTop.id = "chartTop";
      divTop.className = "charts";
      divLeft.id = "chartLeft";
      divLeft.className = "charts";
      divRight.id = "chartRight";
      divRight.className = "charts";
      divBottom.id = "chartBottom";
      divBottom.className = "charts";

      CanvasJS.addColorSet("pickups", ["#2791E9", "#FF4C00","#FFC000"]);

      var chartTop = new CanvasJS.Chart(divTop, {
        title: {
            text: "Damage Dealt",
            fontColor: "white"
        },
        backgroundColor: "#202225",
        data: [
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "column",

                dataPoints: [
                    {x: 100, y: 3},
                    {x: 250, y: 5},
                    {x: 500, y: 2},
                    {x: 550, y: 2},
                    {x: 600, y: 1},
                    {x: 750, y: 1},
                    {x: 1000, y: 3}
                    
                ]
            }
        ]
        });

      var chartLeft = new CanvasJS.Chart(divLeft, {
        title: {
            text: "Pickups",
            fontColor: "white"
        },
        toolTip:{   
            content: "{name} : #percent%",
        },
        colorSet: "pickups",
        backgroundColor: "#202225",
        data: [
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "pie",

                dataPoints: [
                    { name: "Blue", y: 10},
                    { name: "Red", y: 20},
                    { name: "Yellow", y: 50}
                ]
            }
        ]
        });

        var chartRight = new CanvasJS.Chart(divRight, {
            title: {
                text: "Games Won",
                fontColor: "white"
            },
            toolTip:{   
                content: "{name} : #percent%",
            },
            colorSet: "pickups",
            backgroundColor: "#202225",
            data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "doughnut",
                    //innerRadius: "75%",
                    dataPoints: [
                        { name: "Won", y: 10},
                        { name: "Defeated", y: 2},
                        { name: "Tied", y: 3}
                    ]
                }
            ]
        });
        var chartBottom = new CanvasJS.Chart(divBottom, {
            title: {
                text: "Damage Absorbed",
                fontColor: "white"
            },
            backgroundColor: "#202225",
            data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "scatter",
    
                    dataPoints: [
                        {x: 100, y: 3},
                        {x: 250, y: 5},
                        {x: 500, y: 2},
                        {x: 600, y: 1},
                        {x: 750, y: 1},
                        {x: 1000, y: 3}
                        
                    ]
                }
            ]
        });
        
      dashboard.appendChild(title);
      dashboard.appendChild(divTop);
      dashboard.appendChild(divLeft);
      dashboard.appendChild(divRight);
      dashboard.appendChild(divBottom);
      document.getElementById("section2").appendChild(dashboard);
      chartTop.render();
      chartLeft.render();
      chartRight.render();
      chartBottom.render();
  }
  