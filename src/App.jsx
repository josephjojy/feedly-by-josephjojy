import { Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './components/Home'
import Article from './components/Article';
import {React,useState,useEffect} from 'react';
import { feed } from './apis/inshort'
import { categories,initialCategories } from './constants'
import Sections from './components/Sections';
import { PageLoader } from "@bigbinary/neetoui/v2";
import ErrorPage from './components/ErrorPage';
import { ToastContainer } from "react-toastify";

function App() {
  const [newsFeed, setNewsFeed] = useState({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(initialCategories);
  const [category,setCategory] = useState({
    "national":true,
    "world":true,
    "business":true,
    "sports":true
});

  useEffect(() => {
    const getFeed = (category) =>{
        let count = 1;
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
      <Home category={category} setCategory={setCategory} setFilter={setFilter}/> 
      <ToastContainer />
        <Switch>
        <Route path='/:category/:slug'>
            <Article newsFeed={newsFeed}/>
          </Route>
          <Route path='/:slug'>
            <ErrorPage />
          </Route>
          <Route path='/'>
            <Sections category={category} setCategory={setCategory} setFilter={setFilter} filter={filter} newsFeed={newsFeed}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
