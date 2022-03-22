import { useEffect, useState } from 'react';
import { getPostByName } from '../lib/api';
import { useRedirectToLogin } from '../lib/session'
import style from '../styles/Profile.module.css'
import Link from 'next/link'


export default function ProfilePage({ session }) {
    useRedirectToLogin(session);

    const [posts, setPosts] = useState([])

    const [user, setUser] = useState();

    useEffect(() => {
        if (session.user)
            setUser(session.user)
    }, [session])


    useEffect(async () => {
        if (!user) return
        const response = await getPostByName(user.name)
        setPosts(response)
    }, [user])

    return (
        <div>
            <header>
                <title>Profile - {user && user.name}</title>
            </header>

            <div className={`${style.center}`}>
                <img src={user && user.picturePath} className={`${style.pictureSize} `} />
                <h1>{user && user.name}</h1>
                <p>{user && user.email}</p>
                </div>
            {posts.map((post) => {
                return (
                    <article className={`${style.center} ${style.paddingTop} ${style.articleMarginTop} ${style.box}`} key={post.id}>
                        <Link href={`/posts/${post.id}/edit`}>Edit</Link>
                        <p>{post.postDate} <span>{post.text}</span> <span></span></p>
                        {post.picturePath &&
                            <img src={post.picturePath} className={style.pictureSize} />
                        }
                    </article>
                )
            })}
        </div>
    );
}
