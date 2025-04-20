# linux

> 定时任务 cron表达式

<table border="0" align="left"><caption>&nbsp;</caption>
<tbody>
<tr>
<td>字段</td>
<td>允许值</td>
<td>允许的特殊字符</td>
</tr>
<tr>
<td>秒（Seconds）</td>
<td>0~59的整数</td>
<td>, - * / &nbsp; &nbsp;四个字符</td>
</tr>
<tr>
<td>分（<em id="__mceDel">Minutes</em>）</td>
<td>0~59的整数</td>
<td>, - * / &nbsp; &nbsp;四个字符</td>
</tr>
<tr>
<td>小时（<em id="__mceDel">Hours</em>）</td>
<td>0~23的整数</td>
<td>, - * / &nbsp; &nbsp;四个字符</td>
</tr>
<tr>
<td>日期（<em id="__mceDel">DayofMonth</em>）</td>
<td>1~31的整数（但是你需要考虑你月的天数）</td>
<td>,- * ? / L W C &nbsp; &nbsp; 八个字符</td>
</tr>
<tr>
<td>月份（<em id="__mceDel">Month</em>）</td>
<td>1~12的整数或者 JAN-DEC</td>
<td>, - * / &nbsp; &nbsp;四个字符</td>
</tr>
<tr>
<td>星期（<em id="__mceDel">DayofWeek</em>）</td>
<td>1~7的整数或者 SUN-SAT （1=SUN）</td>
<td>, - * ? / L C # &nbsp; &nbsp; 八个字符</td>
</tr>
<tr>
<td>年(可选，留空)（<em id="__mceDel">Year</em>）</td>
<td>1970~2099</td>
<td>, - * / &nbsp; &nbsp;四个字符</td>
</tr>
</tbody>
</table>
