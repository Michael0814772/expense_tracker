export function getChartMaxValue(chartData: any[]) {
  let max = 0;

  chartData.forEach((item) => {
    item.stacks.forEach((stack: any) => {
      if (stack.value > max) {
        max = stack.value;
      }
    });
  });

  return Math.ceil(max / 1000) * 1000;
}
