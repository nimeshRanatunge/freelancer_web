import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

  const minRef = useRef();
  const maxRef = useRef();

  const {search} = useLocation();
  const location = useLocation();
  //console.log(location)
  // url in browser = http://localhost:5173/gigs?cat=design
  // Objecthash: ""key: "default"pathname: "/gigs"search: "?cat=design"state: null[[Prototype]]: Object


  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () => 
      newRequest.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then((res) => {
        return res.data;
      }),
      // dont use {} in queryFn, it will not working
      //${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
  });
  

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  //regular expression for remove first 20 or 5 charactors of the string given
  let inputString = location.search;
  let breadcrumbsText = inputString.includes("cat_main=")?inputString.replace(/^.{10}/, ''):inputString.replace(/^.{5}/, '');

  useEffect(()=>{
    refetch();
  }, [sort])

  
  const apply = () => {
    refetch()
  };
//console.log(data)
  return (
    <div className="gigs">
      <div className="container">
      <span className="breadcrumbs">
              helarasaya {">"} {breadcrumbsText}{" >"}
            </span>
        <h1>{breadcrumbsText}</h1>
        <p>Explore the boundaries of art and technology with SW's AI artists</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>

          <div className="right">
            <span className="sortBy">Sort by</span>

            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>

            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />

            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                  // maaru krla tyene, sales(best Selling) eka uda tyeddi menu eke tyene anith eka createdAt(newest)
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
               
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {data==0?"No items yet":""}
          {isLoading
            ? "loading"
            : error
            ? "Something went wrong"
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
