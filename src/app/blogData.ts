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
        title: "Cinder: What I Learned From Creating an Open-Source ML Platform",
        date: "Coming Soon",
        description: "Deep dive into the technical challenges and architectural decisions behind building a comprehensive ML analysis platform that supports PyTorch, TensorFlow, and scikit-learn.",
        image: "/images/cinder-screenshot.png",
        imageAlt: "Screenshot of Cinder ML Analysis Platform",
        slug: "cinder-ml-platform"
    },
    {
        title: "Snowflake Conference @ San Francisco",
        date: "Sept 27, 2025",
        description: "I had an awesome time at the Snowflake Summit 2025 in San Francisco. The energy was unreal and it was inspiring to be surrounded by so many people building the future of data.",
        image: "/images/snowflake-conference.JPG",
        imageAlt: "Snowflake Summit 2025 in San Francisco",
        slug: "snowflake-conference-2025"
    },
    {
        title: "Canon PowerShot SD750",
        date: "Oct 13, 2025",
        description: "This is my 2007 Canon Digital Camera I found in my house, motivating me to pursue a hobby in photography",
        image: "/images/sd750.JPG",
        imageAlt: "CANON PS SD750",
        slug: "canon-digital-camera"
    }
];

export default blogs;