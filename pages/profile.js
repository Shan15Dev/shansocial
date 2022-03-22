import { useEffect, useState } from 'react';
import { getPostByName } from '../lib/api';
import { useRedirectToLogin } from '../lib/session'
import style from '../styles/Profile.module.css'
import Link from 'next/link'


export default function ProfilePage({ session }) {
    useRedirectToLogin(session);

    const [posts, setPosts] = useState([])

    useEffect(async () => {
        const response = await getPostByName(session.user.name)
        setPosts(response)
    }, [])

    return (
        <div>
            <header>
                <title>Profile - {session.user.name}</title>
            </header>
            <h1 className={style.center}>{session.user.name}</h1>
            <p className={style.center}>{session.user.email}</p>
            {posts.map((post) => {
                return (
                    <article className={`${style.center} ${style.paddingTop} ${style.articleMarginTop}`} key={post.id}>
                        <p>{post.postDate} <span className={style.box}>{post.text}</span> <span><Link href={`/posts/${post.id}/edit`}>Edit</Link></span></p>
                    </article>
                )
            })}
        </div>
    );
}
