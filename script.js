document.addEventListener("DOMContentLoaded", () => {
    const posts = [
        {
            title: "My First Blog Post",
            content: "This is the content of my first blog post. I'm excited to start this journey!"
        },
        {
            title: "Learning JavaScript",
            content: "JavaScript is a versatile language. I'm currently learning more about it and enjoying the process."
        },
        {
            title: "Web Development Tips",
            content: "Here are some tips for aspiring web developers: practice regularly, build projects, and keep learning new things."
        }
    ];

    const postContainer = document.getElementById("post-container");

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const postTitle = document.createElement("h3");
        postTitle.textContent = post.title;
        postElement.appendChild(postTitle);

        const postContent = document.createElement("p");
        postContent.textContent = post.content;
        postElement.appendChild(postContent);

        postContainer.appendChild(postElement);
    });
});
