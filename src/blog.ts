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