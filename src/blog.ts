/**
 * Defines the Blog type with required properties
 */
type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

/**
 * Array of blog posts
 */
const blogs: Blog[] = [];