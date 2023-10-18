'use client'
import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';


const ScrollToTopButton = () => {
    'use-client';

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 300){
                setBackToTopButton(true)
            } else{
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    return (
        <div>
            {backToTopButton && (
                <button className='fixed bottom-12 right-12 w-12 h-12 text-4xl' onClick={scrollUp}>
                    <FaArrowCircleUp />
                </button>
            )}
        </div>
    )
}

export default ScrollToTopButton