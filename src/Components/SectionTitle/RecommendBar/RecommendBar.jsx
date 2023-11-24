import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import Recommendation from "../../../pages/Recommendation/Recommendation";

const RecommendBar= () => {
    const [searchResults, setSearchResults] = useState([]);
    const [menu] = useMenu();
    const handleSearch = (query) => {
        // Implement your search logic here and update searchResults.
        // This can involve filtering the JSON data based on the query.
        const filteredResults = menu.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredResults);
      };

    return (
        <div>
<div>
      <h1>Item Search</h1>
      <Recommendation data={menu} onSearch={handleSearch} />
      <ul>
        {searchResults.map((result) => (
          <li key={result._id}>
            <h3>{result.name}</h3>
            <p>{result.recipe}</p>
          </li>
        ))}
      </ul>
    </div>
        </div>
    );
};
export default RecommendBar;