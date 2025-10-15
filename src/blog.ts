type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "How to Build a React App in 2024",
    date: "2025-10-14",
    description:
      "A step-by-step guide to building a React application with TypeScript.",
    image: "./images/react-guide.png",
    imageAlt: "React guide image",
    slug: "how-to-build-a-react-application-in-2024",
  },
  {
    title: "Understanding TypeScript Types",
    date: "2025-10-10",
    description:
      "Learn how TypeScript types help you write safer and cleaner code.",
    image: "./images/ts-types.png",
    imageAlt: "TypeScript types illustration",
    slug: "understanding-typescript-types",
  },
];

const blogContainer = document.getElementById("blog-container");

if (blogContainer) {
    blogs.forEach((blog) => {
    // create container div :)
    const blogDiv = document.createElement('div');
    blogDiv.classList.add('blog-post'); 

    //img
    const imageElement = document.createElement("img");
    imageElement.src = blog.image;
    imageElement.alt = blog.imageAlt;

    //title
    const titleElement = document.createElement('h1');
    titleElement.textContent = blog.title;

    //desc
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = blog.description;

    // date
    const dateElement = document.createElement('p');
    dateElement.textContent = blog.date;
    blogDiv.appendChild(dateElement);

    blogDiv.appendChild(titleElement);
    blogDiv.appendChild(imageElement);
    blogDiv.appendChild(descriptionElement);

    //append blog post to main container
    blogContainer.appendChild(blogDiv);
    });
}
else{
    console.error("Blog container not found");
}


