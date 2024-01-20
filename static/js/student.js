document.addEventListener('DOMContentLoaded', function() {
    var detailsSections = document.querySelectorAll('.details-section');
    detailsSections.forEach(function(section) {
        section.style.display = 'none';
    });


    window.showDetails = function(index) {
        detailsSections.forEach(function(section) {
            section.style.display = 'none';
        });

        var sectionToShow = document.getElementById('detailsGrade' + (index === 1 ? '09' : '1' + (index-2)));
        if (sectionToShow) {
            sectionToShow.style.display = 'block';
        }
    };
});

document.getElementsByClassName('myButton').addEventListener('click', function() {
    this.style.backgroundColor = 'rgb(60, 203, 60)'; 
});

const chartData = {
    labels: ["Community Service", "Independent Research", "Community Orcanizations", "Career Development", "Field Work"],
    data: [30, 17, 10, 7, 36],
  };
  
  const myChart = document.querySelector(".my-chart");
  const ul = document.querySelector(".programming-stats .details ul");
  
  new Chart(myChart, {
    type: "doughnut",
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: "Types",
          data: chartData.data,
        },
      ],
    },
    options: {
      borderWidth: 10,
      borderRadius: 2,
      hoverBorderWidth: 0,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
  
  const populateUl = () => {
    chartData.labels.forEach((l, i) => {
      let li = document.createElement("li");
      li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
      ul.appendChild(li);
    });
  };
  
  populateUl();

  document.getElementById('projectForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    // 处理表单数据
    console.log(Array.from(formData.entries()));  //测试
    // 提交表单数据
});
