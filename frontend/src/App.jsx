import { useEffect, useState } from 'react'
import './App.css'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'
import Navbar from './Navbar'

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
        getData()
  },[articles] )
  async function getData() {
    let response=await axios.get('http://localhost:3001/')
    setArticles(response.data)
  }

  return (
    <>
      <Navbar />
      <ArticleList articles={articles} />
      <AddArticle />
    </>
  )
}

export default App
