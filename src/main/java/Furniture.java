import pl.coderslab.exam.FurnitureDao;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@WebServlet("/furniture")
public class Furniture extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        FurnitureDao furnitureDao=new FurnitureDao();
        List<pl.coderslab.exam.Furniture> furnitures=furnitureDao.getList();
        request.setAttribute("furnitures", furnitures);
        getServletContext().getRequestDispatcher("/furnitures.jsp")
                .forward(request, response);

    }
}
