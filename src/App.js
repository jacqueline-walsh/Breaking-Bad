import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import Search from './components/ui/Search'
import Pagination from './components/ui/Pagination'
import CharacterGrid from './components/characters/CharacterGrid'
import './App.css'

const App = () => {

  // Pagination
  const[currentPage, setCurrentItem] = useState(1);
  const [itemsPerPage] = useState(12);

  // items, loading giff, search query
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {

      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems();
  }, [query])

   // Get current posts
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
 
   // Change page
   const paginate = (itemNumber) => setCurrentItem(itemNumber);

  return (
    <div className="container">
      <Header></Header>
      <Search getQuery={(q) => setQuery(q)}></Search>
      <CharacterGrid isLoading={isLoading} items={currentItems}></CharacterGrid>
      <Pagination postsPerPage={itemsPerPage} totalPosts={items.length} paginate={paginate}></Pagination>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
