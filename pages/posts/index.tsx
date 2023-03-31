import { GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';
import Link from 'next/link';

export interface PostListPageProps {
    posts: any[]
}

export default function PostListPage({posts}: PostListPageProps){
    return (
        <div>
            <h1>Post list page</h1>

            <ul>
                {posts.map(post => {
                    return <li key = {post.id}>
                        <Link href = {`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                })}
            </ul>
        </div>
    )
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
    // server side
    // build time
    
    const response = await fetch("https://js-post-api.herokuapp.com/api/posts?_page=1")
    const data = await response.json()

    return {
        props: {
            posts: data.data.map((x: any) => {
                return {
                    id: x.id,
                    title: x.title
                }
            }),
        },
    }
}