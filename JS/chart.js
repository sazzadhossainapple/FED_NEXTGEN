// Chart

const ctx = document.getElementById("line-chart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Nov 1",
      "Nov 4",
      "Nov 8",
      "Nov 12",
      "Nov 16",
      "Nov 24",
      "Nov 28",
      "Nov 30",
      "Nov 20",
    ],
    datasets: [
      {
        label: "Expense Report",

        data: [65, 45, 80, 20, 56, 33, 61, 30, 80],
        backgroundColor: ["rgba(0, 137, 132, .2)"],
        fill: true,
        borderColor: ["#000AFF"],
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
