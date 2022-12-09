<template>
  <h4 class="chart-title">Phân tích doanh số</h4>
  <div class="chart-bar">
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
        labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"],
        datasets: [
          {
            type: "line",
            label: "Doanh số (triệu đồng)",
            data: [
              450, 500, 550, 450, 600, 850, 840, 600.5, 500, 700, 850, 600,
            ],
            borderColor: "#F57E25",
            backgroundColor: "#F57E25",
            borderWidth: 1.5,
            yAxisID: "y1",
          },
          {
            type: "bar",
            label: "Điểm bán",
            data: [12, 12, 12, 14, 14, 14, 15, 18, 22, 20, 20, 20],
            borderColor: "#0C9B1A",
            backgroundColor: "#0C9B1A",
            barPercentage: 0.4,
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
.chart-title {
  font-weight: 600;
  font-size: 22px;
  color: #5d695d;
}
.chart-bar{
  padding: 10px 0px;
}
</style>
