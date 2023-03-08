<script lang="ts" setup>
import {
  onMounted,
  onUnmounted,
  ref,
  getCurrentInstance
} from 'vue'
import useDraw from '@/utils/useDraw'
const {proxy}: any = getCurrentInstance()
const decorationColors = ['#568aea', '#000000']
const title = '可视化大屏项目示例'
// * 适配处理
const {appRef, calcRate, windowDraw, unWindowDraw} = useDraw()
const eacharts1 = ref(null)
const renderChart = () => {
  var myChart = proxy.$echarts.init(eacharts1.value);
  myChart.setOption({
    title: [
      {
        text: '极坐标柱状图标签'
      }
    ],
    polar: {
      radius: [30, '80%']
    },
    radiusAxis: {
      max: 4
    },
    angleAxis: {
      type: 'category',
      data: ['a', 'b', 'c', 'd'],
      startAngle: 75
    },
    tooltip: {},
    series: {
      type: 'bar',
      data: [2, 1.2, 2.4, 3.6],
      coordinateSystem: 'polar',
      label: {
        show: true,
        position: 'middle',
        formatter: '{b}: {c}'
      }
    },
    animation: false
  })
};
// 生命周期
onMounted(() => {
  windowDraw()
  calcRate()
  console.log(eacharts1.value)
  renderChart()
})

onUnmounted(() => {
  unWindowDraw()
})

</script>

<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <div class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10"/>
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="decorationColors"/>
            <div class="title">
              <span class="title-text">{{ title }}</span>
              <dv-decoration-6
                  class="dv-dec-6"
                  :reverse="true"
                  :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
                class="dv-dec-8"
                :reverse="true"
                :color="decorationColors"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s"/>
        </div>
        <div class="eacharts1" ref="eacharts1" style="width: 500px;height: 500px;"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#index {
  color: #d3d6dd;
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;

  .bg {
    width: 100%;
    height: 100%;
    padding: 16px 16px 0 16px;
    background-image: url('../assets/img1.jpg');
    background-size: cover;
    background-position: center center;
  }

  .host-body {
    .dv-dec-10,
    .dv-dec-10-s {
      width: 33.3%;
      height: 5px;
    }

    .dv-dec-10-s {
      transform: rotateY(180deg);
    }

    .dv-dec-8 {
      width: 200px;
      height: 50px;
    }

    .title {
      position: relative;
      width: 500px;
      text-align: center;
      background-size: cover;
      background-repeat: no-repeat;

      .title-text {
        font-size: 24px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
      }

      .dv-dec-6 {
        position: absolute;
        bottom: -30px;
        left: 50%;
        width: 250px;
        height: 8px;
        transform: translate(-50%);
      }
    }
  }
}

</style>
