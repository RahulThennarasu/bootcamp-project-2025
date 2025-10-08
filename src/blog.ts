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
const blogs: Blog[] = [
    {
        title: "Cinder: What I Learned From Creating an Open-Source ML Platform",
        date: "Coming Soon",
        description: "Deep dive into the technical challenges and architectural decisions behind building a comprehensive ML analysis platform that supports PyTorch, TensorFlow, and scikit-learn.",
        image: "cinder-screenshot.png",
        imageAlt: "Screenshot of Cinder ML Analysis Platform",
        slug: "cinder-ml-platform"
    },
    {
        title: "Snowflake Conference @ San Francisco",
        date: "Sept 27, 2025",
        description: "I had an awesome time at the Snowflake Summit 2025 in San Francisco. The energy was unreal and it was inspiring to be surrounded by so many people building the future of data.",
        image: "snowflake-conference.JPG",
        imageAlt: "Snowflake Summit 2025 in San Francisco",
        slug: "snowflake-conference-2025"
    }
];

/**
 * Creates and appends blog posts to the DOM
 */
function renderBlogs(): void {
    // Get the container where blogs will be appended
    const blogContainer = document.getElementById('blog-container');
    
    // Check if container exists
    if (!blogContainer) {
        console.error('Blog container not found!');
        return;
    }

    // Iterate over each blog and create elements
    blogs.forEach((blog) => {
        // Create main blog post container
        const blogPost = document.createElement('div');
        blogPost.className = 'blog-post';

        // Create and append title
        const title = document.createElement('h2');
        title.className = 'post-title';
        title.textContent = blog.title;
        blogPost.appendChild(title);

        // Create and append date
        const date = document.createElement('p');
        date.className = 'post-date';
        date.textContent = blog.date;
        blogPost.appendChild(date);

        // Create and append image
        const image = document.createElement('img');
        image.src = blog.image;
        image.alt = blog.imageAlt;
        image.className = 'post-image';
        blogPost.appendChild(image);

        // Create and append description
        const description = document.createElement('p');
        description.className = 'post-description';
        description.textContent = blog.description;
        blogPost.appendChild(description);

        // Create and append "Read More" link
        const readMoreLink = document.createElement('a');
        readMoreLink.href = `blogs/${blog.slug}.html`;
        readMoreLink.className = 'read-more';
        readMoreLink.textContent = 'Read More';
        blogPost.appendChild(readMoreLink);

        // Append the complete blog post to the container
        blogContainer.appendChild(blogPost);
    });
}

// Call function when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderBlogs);