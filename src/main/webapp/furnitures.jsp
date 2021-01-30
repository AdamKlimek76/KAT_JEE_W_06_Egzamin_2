<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: adam
  Date: 30.01.2021
  Time: 09:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<table>
    <c:forEach items="${furnitures}" var="furniture">
        <tr>
            <td>${furniture.id}, ${furniture.name}, ${furniture.description}, ${furniture.quantity}</td>
        </tr>
    </c:forEach>
</table>
</body>
</html>
