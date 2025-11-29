// Get the blog post ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get("id");

// Find the matching blog post
const blogPost = blogPosts.find(post => post.id === blogId);

if (blogPost) {
  // Insert the blog title, meta, and content into the page
  document.getElementById("blog-title").textContent = blogPost.title;
  document.getElementById("blog-meta").textContent = blogPost.meta;
  document.getElementById("blog-content").innerHTML = blogPost.content;
} else {
  // If no blog post is found, show an error message
  document.getElementById("blog-title").textContent = "Post Not Found";
  document.getElementById("blog-meta").textContent = "";
  document.getElementById("blog-content").innerHTML = "<p>Sorry, the blog post you're looking for doesn't exist.</p>";
}
