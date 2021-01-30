import pl.coderslab.exam.Furniture;
import pl.coderslab.exam.FurnitureDao;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.swing.plaf.FontUIResource;
import java.io.IOException;
import java.util.List;

@WebServlet("/deleteFurniture")
public class DeleteFurniture extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        List<Furniture> list = (List<Furniture>) session.getAttribute("furnitures");
        int id = Integer.parseInt(request.getParameter("id"));
        FurnitureDao furnitureDao = new FurnitureDao();
        List<Furniture> furnituresAfterDel = furnitureDao.deleteFurniture(id, list);
        session.setAttribute("furnitures", furnituresAfterDel);
        getServletContext().getRequestDispatcher("/furnitures.jsp")
                .forward(request, response);
    }
}
