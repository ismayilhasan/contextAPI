import React from 'react'
import { cardService } from '../../APIs/Services/CardService';

const PostContex = React.createContext([])

function PostsProvider({children}) {
  const [isShow,setIsShow] = React.useState(false);
  const [posts,setPosts] = React.useState([]);

    React.useEffect(() => {
      cardService.getAllPosts().then(({data:userData}) => {
        setPosts(userData)
      })
    },[])
  return (
    <PostContex.Provider value={[{isShow,setIsShow,posts}]}>
      {children}
    </PostContex.Provider>
  )
}

const usePostContext = () => {
  const postContext = React.useContext(PostContex)
  return postContext;
}

export  {usePostContext,PostsProvider};