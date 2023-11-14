import express from "express";
import { getAllUser } from "../controllers/user-controller";
import { updateBlog } from "../controllers/blog-controller";
const blogRouter=express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put('/update:id',updateBlog);
blogRouter.get("/:id",getById);
blogRouter.delete("/:id");
blogRouter.get("/user/:id")

export default blogRouter;