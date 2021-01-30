<%--
  Created by IntelliJ IDEA.
  User: adam
  Date: 30.01.2021
  Time: 09:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/createCookie" method="post">
    Cookie Name:
    <input type="text" name="name">
    Cookie Value:
    <input type="text" name="value">

    <input type="submit" value="Wyślij">
</form>
</body>
</html>
