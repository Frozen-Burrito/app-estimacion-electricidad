import path from "path";
import { getBlogPosts } from "./src/services/blog_api"

export const onCreatePage = async ({ page, actions }: any) => {
  const { createPage } = actions;

  console.log("onCreatingPages");
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";
    // Update the page.
    createPage(page);
  }
}

export const createPages = async ({ actions }: any) => {

  const { createPage } = actions;

  console.log(createPage);

  console.log("Creating pages");

  const blogPosts = await getBlogPosts();

  console.log("Blog posts fetched successfully: ", blogPosts);

  // Pagina con todas las entradas del blog.
  createPage({
    path: '/blog',
    component: path.resolve("./src/templates/blog_home_page.tsx"),
    context: { blogPosts }
  });

  console.log("Pagina de blogs creada")

  blogPosts.forEach(blogPost => {
    createPage({
      path: `/blog/${blogPost._id}`,
      component: path.resolve("./src/templates/blog_entry_page.tsx"),
      context: { blogPost }
    });
  })
}