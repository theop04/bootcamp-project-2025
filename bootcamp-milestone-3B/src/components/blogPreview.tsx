import React from 'react';
import Image from 'next/image';
import type { Blog } from '../app/blogData';
import style from './blogPreview.module.css';
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.blogPreview}>
      <h3>{props.title}</h3>
      <div>
        <Image src={props.image} alt={props.imageAlt} width={500} height={500} />
        <p>{props.description}</p>
        <p>{props.date}</p>
        <Link href={`/blog/${props.slug}`} className={style.backLink}>
            Read more →
        </Link>
      </div>
    </div>
  );
}
