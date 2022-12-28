<template>
  <div class="chart-round">
    <canvas id="myChart1" height="100px" width="100px"> </canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    // const ctx = document.getElementById(this.round.id);
    const ctx = document.getElementById("myChart1");

    new Chart(ctx, {
      type: "doughnut",
      data: {
       
        datasets: [
          {
            label: "Số công việc ",
            data: [50, 30, 20],
            backgroundColor: ["#67C23A", "#D0EF91", "#b1b3b8"],
            hoverOffset: 4,
          },
        ],
      },
     
    });
  },
};
</script>

<style lang="scss" scoped>
.chart-round {
  padding: 10px 0px;
  height: 300px;
}
</style>
