import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/configuration";
import {Container, PostCard} from '../components'
import {Login} from '../components';
import authService from '../appwrite/auth';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    // const isLoggedIn = authService.getCurrentUser();
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center ">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold drop-shadow-2xl hover:text-gray-100">
                            <div class="relative inline-block p-4 bg-blue-500 rounded-sm  transition duration-300 ease-in-out hover:bg-blue-100 hover:backdrop-blur-md">
                                <span class="text-white hover:text-black" >Login to read</span>
                            </div>
                            <div class="wrap py-12 my-12 mx-12">
                                <div className="box border-4 border-solid drop-shadow-2xl bg-yellow-300 blur"></div>
                                <div className="box border-4 border-solid drop-shadow-2xl bg-violet-500 blur"></div>
                                <div className="box border-4 border-solid drop-shadow-2xl bg-yellow-300 blur"></div>            
                            </div>
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        )
    
}

export default Home