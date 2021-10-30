import { Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './components/Home'
import Article from './components/Article';
import {React,useState,useEffect,createContext} from 'react';
import { feed } from './apis/inshort'
import { categories,initialCategories } from './constants'
import Sections from './components/Sections';
import { PageLoader } from "@bigbinary/neetoui/v2";
import ErrorPage from './components/ErrorPage';
import { ToastContainer } from "react-toastify";

export const ArchiveContext = createContext();

function App() {
  const [newsFeed, setNewsFeed] = useState({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(initialCategories);
  const [archive, setArchive] = useState(true);
  const [category,setCategory] = useState({
    "national":true,
    "world":true,
    "business":true,
    "sports":true
});

  useEffect(() => {
    const getFeed = (category) =>{
        let count = 0;
        let data = {};
        try{
        category.forEach(async (item)=>{
            const res = await feed(item.toLowerCase())
            data[res.category] = await res.data;
            setNewsFeed(data)
            count++;
            if(count === categories.length)
                setLoading(false)
        })}
        catch(err){
          setLoading(false)
        }
    }
    getFeed(categories)
}, [])


if(loading) 
  return (
    <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full">
      <PageLoader />
    </div>
  )
  return (
    <div className="App">
      <BrowserRouter>
      <ArchiveContext.Provider value={{archive,setArchive}}>
      <Home newsFeed={newsFeed} filter={filter} category={category} setCategory={setCategory} setFilter={setFilter}/> 
      <ToastContainer />
        <Switch>
        <Route exact path='/:category/:slug'>
            <Article newsFeed={newsFeed}/>
          </Route>
          <Route exact path='/'>
            <Sections category={category} setCategory={setCategory} setFilter={setFilter} filter={filter} newsFeed={newsFeed}/>
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
        </ArchiveContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
