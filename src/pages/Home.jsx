import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/configuration";
import {Container, PostCard} from '../components'
import {Login} from '../components';
import authService from '../appwrite/auth';
import imageBox1 from "../assets/02Logo.webp"
import imageBox2 from "../assets/03Logo.webp"
import imageBox3 from "../assets/06Logo.webp"


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
                    <div className="flex flex-wrap ">
                        <div className="p-2 w-full ">
                            <h1 className="text-2xl font-bold drop-shadow-2xl hover:text-gray-100 ">
                            <div class="relative inline-block p-4 bg-blue-500 rounded-sm  transition duration-100 ease-in-out hover:bg-blue-300 hover:backdrop-blur-md">
                                <span class="text-white hover:text-black" > <a href="blog-vibes.vercel.app/login">Login</a> to read</span>
                            </div>
                            <div class="wrap py-12 my-12 mx-12">
                                <div className="box border-4 border-solid drop-shadow-2xl bg-violet-400 blur-sm"><img src={imageBox1} width="220px" className="flex items-center justify-center mx-3.5 py-4" alt="" /><br />ARTICLE 1</div>
                                <div className="box border-4 border-solid drop-shadow-2xl bg-violet-400 blur-sm"><img src={imageBox3} width="220px" className="flex items-center justify-center mx-3 py-4" alt="" /><br />ARTICLE 2</div>
                                <div className="box border-4 border-solid drop-shadow-2xl bg-violet-400 blur-sm"><img src={imageBox2} width="220px" className="flex items-center justify-center mx-3 py-4 border-spacing-9" alt="" /><br />ARTICLE 3</div>            
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