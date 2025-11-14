import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Blog } from '@/app/blogData';
import style from './blogPreview.module.css';

export default function BlogPreview({ title, date, description, image, imageAlt, slug }: Blog) {
  return (
    <div className={style.blogPost}>
      <h2 className={style.postTitle}>{title}</h2>
      <p className={style.postDate}>{date}</p>
      <Image 
        src={image} 
        alt={imageAlt} 
        width={800} 
        height={400}
        className={style.postImage}
      />
      <p className={style.postDescription}>{description}</p>
      <Link href={`/blog/${slug}`} className={style.readMore}>
        Read More
      </Link>
    </div>
  );
}