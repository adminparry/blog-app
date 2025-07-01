# 前端面试题

> 从输入一个URL到接收到响应所经历的过程

1. URL解析
协议分析：浏览器解析URL的协议部分（如http://或https://），确定使用的通信协议。

域名提取：从URL中提取域名（如www.example.com）和路径（如/index.html）。

2. DNS查询（域名解析）
检查缓存：

浏览器缓存 → 系统缓存（如hosts文件） → 路由器缓存 → ISP的DNS缓存。

递归查询：

如果缓存未命中，浏览器向本地DNS服务器发起请求。

本地DNS服务器依次向根DNS服务器、顶级域服务器（如.com）、权威DNS服务器查询，最终获取域名对应的IP地址（如93.184.216.34）。

3. 建立TCP连接
三次握手：

客户端发送SYN包到服务器。

服务器回复SYN-ACK包。

客户端发送ACK包，连接建立。

HTTPS额外步骤：

如果是https://，会进行TLS握手（协商加密算法、验证证书、交换密钥等）。

4. 发送HTTP请求
浏览器构造HTTP请求报文，例如：

http
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
请求头可能包含Cookie、Cache-Control等信息。

5. 服务器处理请求
Web服务器（如Nginx/Apache）接收请求，根据路径转发到后端应用（如PHP/Node.js）。

后端处理：执行业务逻辑（查询数据库、生成动态内容）。

返回响应：服务器生成HTTP响应，例如：

http
HTTP/1.1 200 OK
Content-Type: text/html
<html>...</html>
6. 接收响应并渲染页面
解析HTML：

浏览器逐行解析HTML，构建DOM树。

遇到<link>、<script>等标签时，暂停解析并加载外部资源（CSS/JS）。

CSSOM与渲染树：

解析CSS生成CSSOM树，结合DOM树构建渲染树（Render Tree）。

布局与绘制：

计算元素布局（Layout），最后绘制（Paint）到屏幕上。

执行JavaScript：

遇到<script>会阻塞渲染，除非标记为async或defer。

7. 后续操作
AJAX请求：页面可能通过JavaScript发起额外HTTP请求（如加载评论）。

WebSocket连接：某些页面会建立长连接以实现实时通信。

