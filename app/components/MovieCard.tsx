interface MovieCardProps {
    title: string;
    overview: string;
    posterPath: string;

}

import React from 'react'

export default function MovieCard({title, overview, posterPath}: MovieCardProps) {
    const imageUrl = posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : '' ;
    return (
        <div className='bg-white rounded shadow p-4'>
            <img className='w-full h-64 rounded mb-4' src={imageUrl}  alt=''/>
            <h2 className='text-2xl font-bold mb-2 text-black'>{title}</h2>
            <p className='text-sm text-gray-500'>{overview.substring(0, 150)}</p>
        </div>
    )
}
