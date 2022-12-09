<template>
  <div class="round-chart">
    <span class="round-chart-title text-center">{{ round.nameRound }}</span>
    <canvas class="round-chart-item" :id="round.id"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    round: Object,
  },
  mounted() {
    const ctx = document.getElementById(this.round.id);

    new Chart(ctx, {
      type: "doughnut",
     
      data: {
        labels: [],
        datasets: [
          {
            label: "Doanh thu ",
            data: [50, 300],
            backgroundColor: [this.round.color1, this.round.color2],
            hoverOffset: 4,
          },
        ],
      },
      options: {},
    });
  },
};
</script>

<style lang="scss" scoped>
.round-chart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin-left: 5px;
  border-radius: 5px;
  &-title {
    color: #5d695d;
    font-weight: 600;
    font-size: 20px;
    
  }
  &-item{
    height: 120px !important;
    width: 120px !important;
  }
}
</style>
