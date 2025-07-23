import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { useMovie } from "@/api/hooks/useMovie";
import MovieView from "@/components/movie-view/MovieView";
import useDebounce from "@/hooks/useDebounce";
import { useParamsHook } from "@/hooks/useParamsHook";

const Search = () => {
  const {setParam , getParam } = useParamsHook()
  const { getMoviesBySearch } = useMovie();
  const query = getParam("query")
  const [value, setValue] = useState(query  ||"");
  const debounceValue = useDebounce(value);
  const { data } = getMoviesBySearch({ query: query ? query : debounceValue });

  useEffect(()=>{
    if(debounceValue){
      setParam("query", debounceValue)
    }
  },[debounceValue])
  return (
    <div className="container mx-auto min-h-[80vh] py-2">
      <Input
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <MovieView data={data?.results} />
    </div>
  );
};

export default React.memo(Search);


