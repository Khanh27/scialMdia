import {getDocs, collection} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import {db} from '../config/firebase'
import Post from './Post';
import {auth} from '../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

export interface Post{
    id: string;
    userId: string;
    title: string;
    username:string;
    description: string;
}

function Main(){
    const [postsList, setPostsList] = useState<Post[] | null>(null)
    const postsRef = collection(db, 'posts')

    const getPosts = async () => {
        const data = await getDocs(postsRef)
        setPostsList(data.docs.map((doc) => ({...doc.data(), id:doc.id})) as Post[])
    }

    const [user] = useAuthState(auth)

    useEffect(() => {
        getPosts()
    }, [])

    return (
        
        <div>
            {!user && (
                <>
                    <p>Welcome To Fun Social</p>
                </>
            )}

            {postsList?.map((post) => (<Post post={post}/>))}
        </div>
    )
}

export default Main