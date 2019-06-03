<template>
  <div class="demo-cell">
    <tg-cell
      title="标题"
      value="这是标准用法的内容">
    </tg-cell>
    <tg-cell
      title="标题"
      readonly
      @click="onClick"
      value="readonly场景下的内容">
    </tg-cell>
    <tg-cell
      title="标题"
      disabled
      @click="onClick"
      value="disabled场景下的内容">
    </tg-cell>
    <tg-cell
      title="标题"
      brief="副标题不宜过长"
      value="带副标题的情况">
    </tg-cell>
    <tg-cell
      title="标题"
      arrow="arrow-right"
      value="内置arrow可选[arrow-right/arrow-left/arrow-up/down]"
      @click="onClick">
    </tg-cell>
    <tg-cell-group title="必填(*)">
      <tg-cell
        title="标题"
        required>
      </tg-cell>
      <tg-cell
        title="标题"
        value="自定义必填样式实例,自定义必填样式实例,自定义必填样式实例,自定义必填样式实例"><span slot="left" class="icon-required"></span>
      </tg-cell>
    </tg-cell-group>
    <tg-cell-group title="标题/内容多行">
      <tg-cell
        title="标题固定宽度"
        solid
        value="固定宽度值为6个汉字，内容较多，默认显示两行">
      </tg-cell>
      <tg-cell
        title="标题固定宽度多行多文字显示"
        solid
        value="默认只显示两行">
      </tg-cell>
      <tg-cell
        title="标题上对齐"
        solid
        baseline
        required
        value="这是一句很长很长的描述性文字，长到可以超出两行，这是一句很长很长的描述性文字，长到可以超出两行">
      </tg-cell>
    </tg-cell-group>
    <tg-cell-group title="插槽slot">
      <tg-cell
        title="标题"
        value="左侧标题图标插槽">
        <svg class="icon" aria-hidden="true" slot="left" >
          <use xlink:href="#arrow"></use>
        </svg>
      </tg-cell>
      <tg-cell
        title="标题"
        customized>
        <div style="color:blue"> 内容自定义插槽</div>
      </tg-cell>
      <tg-cell
        title="标题"
        value="右侧内容图标插槽">
        <svg class="icon" aria-hidden="true" slot="right" >
          <use xlink:href="#radio"></use>
        </svg>
      </tg-cell>
    </tg-cell-group>
    <tg-cell-group title="内容对齐方式align">
      <tg-cell
        title="标题"
        value="内容默认左对齐">
      </tg-cell>
      <tg-cell
        align="center"
        title="标题"
        value="内容居中">
      </tg-cell>
      <tg-cell
        title="标题"
        align="right"
        value="内容右对齐">
      </tg-cell>
    </tg-cell-group>
    <tg-cell-group title="分组标题">
      <div class="tg-cell-bgtitle">大标题</div>
      <tg-cell
        title="标题"
        value="内容默认左对齐">
      </tg-cell>
      <tg-cell
        align="center"
        title="标题"
        arrow="arrow-right"
        value="内容居中">
      </tg-cell>
      <tg-cell
        title="标题"
        align="right"
        value="内容右对齐">
      </tg-cell>
    </tg-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //
    }
  },
  methods: {
    onClick(name){
      console.log(name)
    }
  },
  mounted() {
      
  }
}
</script>
<style>
  .demo-cell{
    overflow: hidden;
    background: #EDF2FB;
  }
  .demo-cell>.tg-cell{
    margin:8px 0;
  }
  .icon{
    width: 21px;
    height:21px;
  }
  .icon-required:after{
    position: absolute;
    top: 26px;
    left: -10px;
    transform: translateY(-50%);
    z-index: 10;
    content: "*";
    font-family: SimSun;
    font-size: 14px;
    color: #EE3F15;
  }
  .demo-cell .tg-cell .md-field-item .md-field-item-extra{
    margin-right: 0
  }
  .tg-cell-bgtitle {
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: #13152D;
    padding-left: 17px;
  }
</style>