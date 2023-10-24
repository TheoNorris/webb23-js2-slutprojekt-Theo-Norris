export function Search({ setSearchWord, setFilterType, setPriceFilter }) {
  let tempWord = "";

  function handleFilter(e) {
    if (e.target.value == "high" || e.target.value == "low") {
      setPriceFilter(e.target.value);
    } else {
      setSearchWord(e.target.value);
    }
    setFilterType(e.target.name);
  }

  function handleChange(e) {
    tempWord = e.target.value;
    setFilterType("name");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchWord(tempWord);
  }

  return (
    <div id="search-div">
      <select
        className="product-option"
        name="colour"
        id=""
        onChange={handleFilter}
        defaultValue=""
      >
        <option value="" disabled>
          COLOUR
        </option>
        <option value="black">BLACK</option>
        <option value="white">WHITE</option>
        <option value="blue">BLUE</option>
        <option value="grey">GREY</option>
      </select>
      <select
        className="product-option"
        id=""
        onChange={handleFilter}
        defaultValue=""
      >
        <option value="" disabled>
          PRICE . .
        </option>
        <option value="high">HIGH TO LOW</option>
        <option value="low">LOW TO HIGH</option>
      </select>
      <select
        className="product-option"
        name="category"
        id=""
        onChange={handleFilter}
        defaultValue=""
      >
        <option value="" disabled>
          CATEGORY
        </option>
        <option value="">ALL CATEGORIES</option>
        <option value="clothing">CLOTHES</option>
        <option value="jewelry">JEWELLERY</option>
        <option value="perfume">PERFUME</option>
      </select>
      <form id="product-form" action="" onSubmit={handleSubmit}>
        <input
          className="search-option"
          type="text"
          placeholder="SEARCH.."
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
