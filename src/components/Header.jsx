import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Input
} from "@nextui-org/react";
import { useState } from "react";
import { NavLink} from "react-router-dom";
import SearchResultPopup from "./SearchResultPopup"

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const[showResult, setShowResult]=useState(false)

  const handleSearch = async () => {
    if (!searchValue.trim()) {
      // If searchValue is empty, don't make the API call
      return;
    }
  
    // Call API or perform search logic here
    console.log(`Searching for EMP Email: ${searchValue}`);
    const response = await fetch(`https://employeeappbackend-2.onrender.com/search`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: searchValue }),
    });
    const data = await response.json();
    setSearchResults(data);
    if (data !== null || data !== undefined) {
      setShowResult(true);
    }
  };

  console.log(searchResults)

 
 

  return (
    <Navbar className="bg-emerald">
      <NavbarBrand>
        <p className=" text-white font-bold text-inherit">Employee-App</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        <NavLink to="/employee" className={({ isActive }) => isActive ? "text-white" : "text-black"}>
  Employees
</NavLink>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <NavLink to="/login" className={({ isActive }) => isActive ? "text-white" : "text-black"}>
            Login
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <NavLink to="/registration"  className={({ isActive }) => isActive ? "text-white" : "text-black"}>
              Register
            </NavLink>
          </NavbarItem>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-6",
            mainWrapper: "h-6",
            input: "text-small text-white",
            inputWrapper:
              "h-6 font-normal text-white text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Enter Email..."
          size="sm"
          type="search"
          variant="bordered"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <span>
          <Button
            radius="none"
            className="bg-white h-7 mt-1.5 text-black"
            onClick={handleSearch}
          >
            Search
          </Button>
        </span>
        {showResult && <SearchResultPopup setShowResult={setShowResult} setSearchResults={setSearchResults} searchResults={searchResults}/>}
      </NavbarContent>
    </Navbar>
    
  );
}