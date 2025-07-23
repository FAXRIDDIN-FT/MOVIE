import MovieView from '@/components/movie-view/MovieView';
import { useStore } from '@/zustand/useStore'
import React, { useEffect } from 'react'

const Wishlist = () => {
 const {saved} = useStore()
 console.log(saved);
 useEffect(()=> {
  scrollTo(0,0)
 })
  return (
    <div className=''>
       
        <MovieView data={saved}/>
    </div>
  )
}

export default React.memo(Wishlist)