import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from '../appwrite/configuration';
import { useNavigate, useParams } from 'react-router-dom';
import Post from './Post'

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate('/');
        }
      });
    } else {
      navigate('/');
    }
  }, [slug, navigate, Post]);

  const updatePost = async (data) => {
    // Example of updating post
    try {
      const updatedPost = await appwriteService.updatePost(post.$id, data);
      if (updatedPost) {
        navigate(`/post/${updatedPost.$id}`);
      }
    } catch (error) {
      console.error('Error updating post:', error);
      // Handle error state or display error message
    }
  };

  return post ? (
    <div className="py-8">
      <Container>
        <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
        <PostForm post={post} onSubmit={updatePost} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
