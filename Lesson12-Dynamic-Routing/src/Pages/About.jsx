import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export const About = () => {

  const data = useParams();

  useEffect(()=> {
    document.title = "LinkedInMart/About"; //To set tittle 
  });

  return (

    <div className='my-5'>
      <h1 className='text-center font-bold text-3xl my-3'>
        About LinkedInMart
      </h1>

      <h1> Welcome - {data.name} </h1>

        <h1 className= "text-red-800 text-md">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur velit possimus impedit repudiandae nam. Nihil, neque sint obcaecati quos suscipit, cupiditate iste molestias illum consectetur repudiandae quod nemo a ipsa?4
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quae dolor ipsum, saepe distinctio, facilis nobis sint quo neque officiis deleniti numquam repellat iusto iure facere quos fugit? Rem, recusandae.
           <hr />
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur velit possimus impedit repudiandae nam. Nihil, neque sint obcaecati quos suscipit, cupiditate iste molestias illum consectetur repudiandae quod nemo a ipsa?4
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quae dolor ipsum, saepe distinctio, facilis nobis sint quo neque officiis deleniti numquam repellat iusto iure facere quos fugit? Rem, recusandae.
           <hr />
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur velit possimus impedit repudiandae nam. Nihil, neque sint obcaecati quos suscipit, cupiditate iste molestias illum consectetur repudiandae quod nemo a ipsa?4
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quae dolor ipsum, saepe distinctio, facilis nobis sint quo neque officiis deleniti numquam repellat iusto iure facere quos fugit? Rem, recusandae.
        </h1>
    </div>
  )
};