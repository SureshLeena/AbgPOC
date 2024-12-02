import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

function SearchInput(
    {onClickSearchButton}
) {
    const [textInput, setTextInput] = React.useState('');
  return (
    <div className="max-w-3xl mx-auto" style={{width: '100%'}}>
     
      <div className="relative flex items-center w-full bg-white border border-gray-200 rounded-lg p-2">
        {/* Left Icon */}
        <div className="flex items-center justify-center pl-3 pr-2">
          {/* <Search className="h-5 w-5 text-gray-400" /> */}
          <img src={require("../assets/ic_search.png")} alt="search" className="h-5 w-5 text-gray-400"/>
        </div>
        
        {/* Input Field */}
        <input
          type="text"
          placeholder="Type your query here..."
          defaultValue={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="flex-1 px-2 py-2 bg-transparent border-none outline-none text-gray-800 placeholder-gray-400"
        />
        
        {/* Right Arrow Button */}
        <button 
          className="flex items-center justify-center p-2 ml-2 bg-black hover:bg-gray-800 rounded-lg transition-colors duration-200"
        >
          <ArrowRight className="h-5 w-5 text-white" onClick={(e)=> {
                e.preventDefault();
                onClickSearchButton(textInput);
          }}/>
        </button>
      </div>
    </div>
  );
}

export default SearchInput;