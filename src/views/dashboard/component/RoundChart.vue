<template>
  <div class="bg-white p-5 mt-4 rounded round-chart">
     <h6 class="round-chart-title text-center">{{round.nameRound}}</h6>
    <canvas :id="round.id"></canvas>
  </div>
</template>

<script>
export default {
    props:{
        round: Object
    },
  mounted() {
    const ctx = document.getElementById(this.round.id);

    new Chart(ctx, {
      type: "doughnut",
      backgroundColor: "#fff",
      data: {
        labels: [],
        datasets: [
          {
            label: "Doanh thu ",
            data: [50,300],
            backgroundColor: [
              this.round.color1,
              this.round.color2
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
       
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.round-chart{
  max-height: 300px;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-title{
      color: #5d695d;
      font-weight: 700;
    font-size: 22px;
    }
}
</style>
