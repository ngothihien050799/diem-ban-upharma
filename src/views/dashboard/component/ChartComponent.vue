<template>
  <h4 class="card-title">Phân tích doanh số</h4>
  <div class="bar-chart">
    <canvas id="myChart"> </canvas>
  </div>
</template>

<script>
//import  Chart  from 'chart.js/auto'
export default {
  mounted() {
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Tháng 1",
          "Tháng 2",
          "Tháng 3",
          "Tháng 4",
          "Tháng 5",
          "Tháng 6",
          "Tháng 7",
          "Tháng 8",
          "Tháng 9",
          "Tháng 10",
          "Tháng 11",
          "Tháng 12",
        ],
        datasets: [
          {
            type: "line",
            label: "Doanh số (triệu đồng)",
            data: [
              450, 500, 550, 450, 600, 850, 900, 600.5, 500, 700, 900, 600,
            ],
            borderColor: "#F57E25",
            backgroundColor: "#F57E25",
            yAxisID: "y1",
          },
          {
            type: "bar",
            label: "Điểm bán",
            data: [12, 12, 12, 14, 14, 14, 15, 18, 22, 20, 20, 20],
            borderColor: "#1d974a",
            backgroundColor: "#1d974a",
            barPercentage: 0.5,
            yAxisID: "y",
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {},
          },
        },
        responsive: true,
        devicePixelRatio: 1, //Sử dụng để khi thay đổi kích thước màn hình đồ thị ko tự động chạy
        interaction: {
          mode: "index",
          intersect: false,
        },
        stacked: false,
        scales: {
          y: {
            type: "linear",
            display: true,
            position: "left",
          },
          y1: {
            type: "linear",
            display: true,
            position: "right",

            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        },
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.card-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #5d695d;
}
// .bar-char{
//   max-height: 600px;
// }
</style>
