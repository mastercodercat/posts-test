import { ChangeEvent, useState, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../graphql/query";
import { GetPostsData } from "../utils/types";
import { Input, Button, Form, Post } from "../components";

// Home page which includes all functionalities
const Home = () => {
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const { data, loading, error } = useQuery<GetPostsData>(GET_POSTS, {
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: 30,
        },
      },
    },
  });

  // Memoize filtered items based on data, and keyword
  const filteredItems = useMemo(() => {
    return data?.posts.data.filter((post) => post.title.toUpperCase().includes(keyword.toUpperCase())) || [];
  }, [data, keyword]);

  // Change event handlers for search input
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Submit event handler for form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeyword(search);
  };

  return (
    <div className="font-poppins py-5">
      <Form className="flex justify-center" onSubmit={handleSubmit}>
        <Input value={search} onChange={handleChangeSearch} />
        <Button type="submit" className="ml-3">
          Search
        </Button>
      </Form>
      <div className="pt-4 flex flex-col justify-center items-center">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error :(</div>
        ) : filteredItems.length === 0 ? (
          <div>No data to display</div>
        ) : (
          filteredItems.map((post) => <Post key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
};

export default Home;
