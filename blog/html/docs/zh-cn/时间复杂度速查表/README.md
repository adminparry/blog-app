# 时间复杂度速查表

> 搜索

<table border="1" style="border-collapse:collapse;border-spacing:0px;color:rgb(46,46,46);font-family:'Microsoft YaHei', '宋体', Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:15px;line-height:22.5px;"> 
   <thead> 
    <tr> 
     <th>算法</th> 
     <th>数据结构</th> 
     <th colspan="2">时间复杂度</th> 
     <th colspan="3">空间复杂度</th> 
    </tr> 
    <tr> 
     <th>&nbsp;</th> 
     <th>&nbsp;</th> 
     <th>平均</th> 
     <th>最差</th> 
     <th>最差</th> 
    </tr> 
   </thead> 
   <tbody> 
    <tr> 
     <td>深度优先搜索 (DFS)</td> 
     <td>Graph of |V| vertices and |E| edges</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">-</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|E| + |V|)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V|)</code></td> 
    </tr> 
    <tr> 
     <td>广度优先搜索 (BFS)</td> 
     <td>Graph of |V| vertices and |E| edges</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">-</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|E| + |V|)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V|)</code></td> 
    </tr> 
    <tr> 
     <td>二分查找</td> 
     <td>Sorted array of n elements</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
    </tr> 
    <tr> 
     <td>穷举查找</td> 
     <td>Array</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
    </tr> 
    <tr> 
     <td>最短路径-Dijkstra，用小根堆作为优先队列</td> 
     <td>Graph with |V| vertices and |E| edges</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O((|V| + |E|) log |V|)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O((|V| + |E|) log |V|)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V|)</code></td> 
    </tr> 
    <tr> 
     <td>最短路径-Dijkstra，用无序数组作为优先队列</td> 
     <td>Graph with |V| vertices and |E| edges</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V|^2)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V|^2)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V|)</code></td> 
    </tr> 
    <tr> 
     <td>最短路径-Bellman-Ford</td> 
     <td>Graph with |V| vertices and |E| edges</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V||E|)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V||E|)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V|)</code></td> 
    </tr> 
   </tbody> 
  </table>

> 排序

<table border="1" style="border-collapse:collapse;border-spacing:0px;color:rgb(46,46,46);font-family:'Microsoft YaHei', '宋体', Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:15px;line-height:22.5px;"> 
   <thead> 
    <tr> 
     <th>算法</th> 
     <th>数据结构</th> 
     <th colspan="3">时间复杂度</th> 
     <th colspan="3">最坏情况下的辅助空间复杂度</th> 
    </tr> 
    <tr> 
     <th>&nbsp;</th> 
     <th>&nbsp;</th> 
     <th>最佳</th> 
     <th>平均</th> 
     <th>最差</th> 
     <th>最差</th> 
    </tr> 
   </thead> 
   <tbody> 
    <tr> 
     <td>快速排序</td> 
     <td>数组</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n^2)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
    </tr> 
    <tr> 
     <td>归并排序</td> 
     <td>数组</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
    </tr> 
    <tr> 
     <td>堆排序</td> 
     <td>数组</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
    </tr> 
    <tr> 
     <td>冒泡排序</td> 
     <td>数组</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n^2)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n^2)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
    </tr> 
    <tr> 
     <td>插入排序</td> 
     <td>数组</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n^2)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n^2)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
    </tr> 
    <tr> 
     <td>选择排序</td> 
     <td>数组</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n^2)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n^2)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n^2)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
    </tr> 
    <tr> 
     <td>桶排序</td> 
     <td>数组</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n+k)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n+k)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n^2)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(nk)</code></td> 
    </tr> 
    <tr> 
     <td>基数排序</td> 
     <td>数组</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(nk)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(nk)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(nk)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n+k)</code></td> 
    </tr> 
   </tbody> 
  </table>

> 数据结构

<table border="1" style="border-collapse:collapse;border-spacing:0px;color:rgb(46,46,46);font-family:'Microsoft YaHei', '宋体', Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:15px;line-height:22.5px;"> 
   <thead> 
    <tr> 
     <th>数据结构</th> 
     <th colspan="8">时间复杂度</th> 
     <th>空间复杂度</th> 
    </tr> 
    <tr> 
     <th>&nbsp;</th> 
     <th colspan="4">平均</th> 
     <th colspan="4">最差</th> 
     <th>最差</th> 
    </tr> 
    <tr> 
     <th>&nbsp;</th> 
     <th>索引</th> 
     <th>查找</th> 
     <th>插入</th> 
     <th>删除</th> 
     <th>索引</th> 
     <th>查找</th> 
     <th>插入</th> 
     <th>删除</th> 
     <th>&nbsp;</th> 
    </tr> 
   </thead> 
   <tbody> 
    <tr> 
     <td>基本数组</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">-</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">-</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">-</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">-</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
    </tr> 
    <tr> 
     <td>动态数组</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
    </tr> 
    <tr> 
     <td>单链表</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
    </tr> 
    <tr> 
     <td>双链表</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
    </tr> 
    <tr> 
     <td>跳表</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n log(n))</code></td> 
    </tr> 
    <tr> 
     <td>哈希表</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">-</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">-</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
    </tr> 
    <tr> 
     <td>二叉搜索树</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
    </tr> 
    <tr> 
     <td>笛卡尔树</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">-</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">-</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
    </tr> 
    <tr> 
     <td>B-树</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
    </tr> 
    <tr> 
     <td>红黑树</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
    </tr> 
    <tr> 
     <td>伸展树</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">-</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">-</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
    </tr> 
    <tr> 
     <td>AVL 树</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
    </tr> 
   </tbody> 
  </table>

> 堆

<table border="1" style="border-collapse:collapse;border-spacing:0px;color:rgb(46,46,46);font-family:'Microsoft YaHei', '宋体', Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:15px;line-height:22.5px;"> 
   <thead> 
    <tr> 
     <th>Heaps</th> 
     <th colspan="7">时间复杂度</th> 
    </tr> 
    <tr> 
     <th>&nbsp;</th> 
     <th>建堆</th> 
     <th>查找最大值</th> 
     <th>提取最大值</th> 
     <th>Increase Key</th> 
     <th>插入</th> 
     <th>删除</th> 
     <th>合并</th> 
     <th>&nbsp;</th> 
    </tr> 
   </thead> 
   <tbody> 
    <tr> 
     <td>链表（已排序）</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">-</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(m+n)</code></td> 
    </tr> 
    <tr> 
     <td>链表（未排序）</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">-</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
    </tr> 
    <tr> 
     <td>二叉堆</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(n)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(m+n)</code></td> 
    </tr> 
    <tr> 
     <td>二项堆</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">-</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))</code></td> 
    </tr> 
    <tr> 
     <td>斐波那契堆</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">-</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))*</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)*</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(log(n))*</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
    </tr> 
   </tbody> 
  </table>

> 图

<table border="1" style="border-collapse:collapse;border-spacing:0px;color:rgb(46,46,46);font-family:'Microsoft YaHei', '宋体', Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:15px;line-height:22.5px;"> 
   <tbody> 
    <tr> 
     <th>节点 / 边 管理</th> 
     <th>Storage</th> 
     <th>Add Vertex</th> 
     <th>Add Edge</th> 
     <th>Remove Vertex</th> 
     <th>Remove Edge</th> 
     <th>Query</th> 
    </tr> 
    <tr> 
     <td>邻接表</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V|+|E|)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V| + |E|)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|E|)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V|)</code></td> 
    </tr> 
    <tr> 
     <td>关联表</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V|+|E|)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|E|)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|E|)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|E|)</code></td> 
    </tr> 
    <tr> 
     <td>邻接矩阵</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V|^2)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V|^2)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V|^2)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(1)</code></td> 
    </tr> 
    <tr> 
     <td>关联矩阵</td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V| ⋅ |E|)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V| ⋅ |E|)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V| ⋅ |E|)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V| ⋅ |E|)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|V| ⋅ |E|)</code></td> 
     <td><code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14px;color:rgb(199,37,78);">O(|E|)<br><br></code></td> 
    </tr> 
   </tbody> 
  </table>

