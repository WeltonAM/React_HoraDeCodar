import styles from './Post.module.css'

import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Post = () => {

    const { id } = useParams()

    const { document: post, loading } = useFetchDocument("posts", id)

    return (
        <div className={styles.post_container}>
            {loading && <p>Loading...</p>}
            {post && (
                <>
                    <h3>{post.title}</h3>
                    <div>
                        <img src={post.image} alt={post.title} />
                        <p>{post.body}</p>
                    </div>
                    <h4>The post is about</h4>
                    <div className={styles.tags}>
                        {post.tagsArray.map((tag) => (
                            <p key={tag}>
                                <span>#</span>
                                {tag}
                            </p>
                        ))}

                    </div>
                </>
            )}
        </div>
    )
}

export default Post