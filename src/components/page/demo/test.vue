<template>
    <el-card class="box-card" style="height: 100%">
        <div id="mountNode" style="border: 1px solid #ffa"></div>
    </el-card>
</template>

<script>
import G6 from '@antv/g6';
export default{
    name: 'customTable',
    data(){
        return {
            title: "自定义数据表格",
            activeName: 'first-ele',
            showPagination: true,   //分页显示与否默认显示
            tableData: {
                nodes: [
                    {id: "1",label: "请求回放1（开始）",type: "begin"}, 
                    {id: "2",label: "交易创建"}, 
                    {id: "3",label: "请求回放3"}, 
                    {id: "4",label: "请求回放4"}, 
                    {id: "5",label: "请求回放5"}, 
                    {id: "6",label: "请求回放6"}, 
                    {id: "7",label: "请求回放2（结束）",type: "end"}
                ],
                edges: [
                    {source: "1",target: "2"}, 
                    {source: "1",target: "3"}, 
                    {source: "2",target: "5"}, 
                    {source: "5",target: "6"}, 
                    {source: "6",target: "7"}, 
                    {source: "3",target: "4"}, 
                    {source: "4",target: "7"}
                ]
            }
        }
    },
    created(){
        this.$nextTick(_ => {
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
            };

            /**
            * node 特殊属性
            */
            var nodeExtraAttrs = {
                begin: {
                  fill: "#9FD4FB"
                },
                end: {
                  fill: "#C2E999"
                }
            };

            /**
            * 自定义节点
            */
            G6.registerNode("node", {
                drawShape: function drawShape(cfg, group) {
                  var rect = group.addShape("rect", {
                    attrs: _extends({
                      x: -75,
                      y: -25,
                      width: 150,
                      height: 50,
                      radius: 4,
                      fill: "#FFD591",
                      fillOpacity: 1
                    }, nodeExtraAttrs[cfg.type])
                  });
                  return rect;
                },
                // 设置状态
                setState: function setState(name, value, item) {
                  var group = item.getContainer();
                  var shape = group.get("children")[0]; // 顺序根据 draw 时确定

                  if (name === "selected") {
                    if (value) {
                      shape.attr("fill", "#F6C277");
                    } else {
                      shape.attr("fill", "#FFD591");
                    }
                  }
                },

                getAnchorPoints: function getAnchorPoints() {
                  return [[0, 0.5], [1, 0.5]];
                }
            }, "single-shape");

              /**
            * 自定义 edge 中心关系节点
            */
            G6.registerNode("statusNode", {
                drawShape: function drawShape(cfg, group) {
                  var circle = group.addShape("circle", {
                    attrs: {
                      x: 0,
                      y: 0,
                      r: 6,
                      fill: cfg.active ? "#AB83E4" : "#ccc"
                    }
                  });
                  return circle;
                }
            }, "single-shape");

            /**
            * 自定义带箭头的贝塞尔曲线 edge
            */
            G6.registerEdge("line-with-arrow", {
                itemType: "edge",
                draw: function draw(cfg, group) {
                  var startPoint = cfg.startPoint;
                  var endPoint = cfg.endPoint;
                  var centerPoint = {
                    x: (startPoint.x + endPoint.x) / 2,
                    y: (startPoint.y + endPoint.y) / 2
                  };
                  // 控制点坐标
                  var controlPoint = {
                    x: (startPoint.x + centerPoint.x) / 2,
                    y: startPoint.y
                  };

                  // 为了更好的展示效果, 对称贝塞尔曲线需要连到箭头根部
                  var path = group.addShape("path", {
                    attrs: {
                      path: [["M", startPoint.x, startPoint.y], ["Q", controlPoint.x + 8, controlPoint.y, centerPoint.x, centerPoint.y], ["T", endPoint.x - 8, endPoint.y], ["L", endPoint.x, endPoint.y]],
                      stroke: "#ccc",
                      lineWidth: 1.6,
                      endArrow: {
                        path: "M 4,0 L -4,-4 L -4,4 Z",
                        d: 4
                      }
                    }
                  });

                  // 如果是不对称的贝塞尔曲线，需要计算贝塞尔曲线上的中心点
                  // 参考资料 https://stackoverflow.com/questions/54216448/how-to-find-a-middle-point-of-a-beizer-curve
                  // 具体Util方法可以参考G：https://github.com/antvis/g/blob/4.x/packages/g-math/src/quadratic.ts

                  // 在贝塞尔曲线中心点上添加圆形
                  var source = cfg.source,
                    target = cfg.target;

                  group.addShape("circle", {
                    attrs: {
                      id: "statusNode" + source + "-" + target,
                      r: 6,
                      x: centerPoint.x,
                      y: centerPoint.y,
                      fill: cfg.active ? "#AB83E4" : "#ccc"
                    }
                  });

                  return path;
                }
            });

            var graph = new G6.Graph({
                container: "mountNode",
                width: 1000,
                height: 800,
                layout: {
                  type: 'dagre',
                  rankdir: 'LR'
                },
                //交互管理配置
                modes: {
                  default: ['drag-canvas', 'zoom-canvas', 'drag-node']    //允许画布拖拽、缩放，允许节点拖拽
                },
                defaultNode: {
                  shape: "node",
                  labelCfg: {
                    style: {
                      fill: "#fff",
                      fontSize: 14
                    }
                  }
                },
                defaultEdge: {
                  shape: "line-with-arrow",
                  style: {
                    endArrow: true,
                    lineWidth: 2,
                    stroke: "#ccc"
                  }
                }
            });

            graph.data(this.tableData);
            graph.render();

            graph.on('edge:click', function(evt) {
                var target = evt.target;

                var type = target.get('type');
                if (type === 'circle') {
                    // 点击边上的circle
                    alert('你点击的是边上的圆点');
                }
            });
        });
    },
    methods: {
    }
}
</script>

<style scoped>
</style>