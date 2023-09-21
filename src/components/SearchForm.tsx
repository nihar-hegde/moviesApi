 'use client'
// import Image from "next/image";
// import React, { useState } from "react";
// import { Input } from "./ui/input";
// import { useRouter } from "next/navigation";
// import { Button } from "./ui/button";

// const SearchForm = () => {
//     const [search,setSearch] = useState("");
//     const router = useRouter();
//     const handleSubmit = () => {
      
//       if(!search){
//         return;
//       }
//       router.push(`/search/${search}`);
      
//     }

//   return (
//     <>
//       <form onSubmit={()=>handleSubmit()} className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5">
//         <label className="flex-center relative w-full max-w-3xl">
//           <Image
//             src={"/magnifying-glass.svg"}
//             className="absolute left-8"
//             width={32}
//             height={32}
//             alt="Search Icon"
//           />
//           <Input className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 
//           text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800" 
//           type="text"
//           placeholder="Search"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)} 
//           />
//           <Button variant={'ghost'} disabled={!search} className="text-white absolute right-8">Search</Button>
//         </label>
        
//       </form>
//     </>
//   );
// };

// export default SearchForm;


import Image from "next/image";
import React, { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    if (!search) {
      return;
    }
    router.push(`/search/${search}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5">
        <label className="flex-center relative w-full max-w-3xl">
          <Image
            src={"/magnifying-glass.svg"}
            className="absolute left-8"
            width={32}
            height={32}
            alt="Search Icon"
          />
          <Input
            className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 
            text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant={'ghost'} disabled={!search} className="text-white absolute right-8">Search</Button>
        </label>
      </form>
    </>
  );
};

export default SearchForm;