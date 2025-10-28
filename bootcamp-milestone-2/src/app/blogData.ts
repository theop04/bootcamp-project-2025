
export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "How to Get Rich Guaranteed... in 40 Years",
    date: "2025-10-14",
    description: "A step-by-step guide to building generational wealth",
    image: "/images/upward_stocks.jpg",  //this path might be wrong
    imageAlt: "Upward stocks image",
    slug: "how-to-get-rich-guaranteed",
  },
  {
    title: "Understanding TypeScript Types",
    date: "2025-10-10",
    description:
      "Learn how TypeScript types help you write safer and cleaner code.",
    image: "/images/ts-types.png", //this path might be wrong
    imageAlt: "TypeScript types illustration",
    slug: "understanding-typescript-types",
  },
];

export default blogs;
