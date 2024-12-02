import React, { useEffect, useState } from "react";
import ListThemeSearchResults from "./ListThemeResult";
import SearchResultsHeader from "./SearchResultHeader";
import { useSearchParams } from "react-router-dom";
import { SkeletonCard, SkeletonCard2 } from "../components/Skeleton";

let tempImages = {};
function SearchResults() {
  // Access query parameter
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");
  console.log(query, params);
  //   const theme = "List";

  //   const [searchParams] = useSearchParams();
  //   console.log("Params :::::: ", params, params.get("q"));

  const [results, setResults] = React.useState([]);
  const [subTitle, setSubTitle] = React.useState("");

  const [images, setImages] = useState(tempImages);

  useEffect(() => {
    makeSearchRequestToServer(query);
  }, [query]);

  //   const parseNewsContent = (content) => {
  //     // Split by newline and filter out empty lines
  //     const lines = content.split("\n").filter((line) => line.trim());

  //     const newsItems = [];
  //     let currentItem = null;

  //     lines.forEach((line) => {
  //       // Check if line starts with a number followed by a dot
  //       if (/^\d+\.\s\*\*/.test(line)) {
  //         if (currentItem) {
  //           newsItems.push(currentItem);
  //         }
  //         // Remove the number and asterisks
  //         const title = line.replace(/^\d+\.\s\*\*([^:]*)\*\*:?/, "$1").trim();
  //         currentItem = {
  //           title,
  //           details: [],
  //         };
  //       } else if (line.startsWith("   -")) {
  //         // This is a detail point
  //         if (currentItem) {
  //           const detail = line
  //             .replace(/^\s*-\s\*\*([^:]*)\*\*:?\s*/, "")
  //             .replace(/\[(\d+)\]/g, "")
  //             .trim();
  //           currentItem.details.push(detail);
  //         }
  //       }
  //     });

  //     // Push the last item
  //     if (currentItem) {
  //       newsItems.push(currentItem);
  //     }

  //     return newsItems;
  //   };

  function generateRandomString(length = 6) {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
    }
    return result;
  }

  const parseNewsContent = (content) => {
    // Split by newline and filter out empty lines
    const lines = content.split("\n").filter((line) => line.trim());
    const newsItems = [];
    let currentItem = null;

    lines.forEach((line) => {
      newsItems.push({
        id: generateRandomString(),
        title: line,
        details: [],
      });
      // // Check if line starts with a number followed by a dot
      // if (/^\d+\.\s\*\*/.test(line)) {
      //   if (currentItem) {
      //     if(!currentItem.id) {
      //       currentItem.id = generateRandomString();
      //     }

      //     newsItems.push(currentItem);
      //   }
      //   // Remove the number, dot, asterisks, and any remaining numbers in the title
      //   const title = line
      //     // .replace(/^\d+\.\s*\*\*([^:]*)\*\*:?/, "$1") // Remove prefix number, dot, and asterisks
      //     // .replace(/\d+\./g, "") // Remove any remaining numbers with dots
      //     .replace(/\d+/g, "") // Remove any remaining numbers
      //     .replace(/\s+/g, " ") // Clean up multiple spaces
      //     .trim();

      //   currentItem = {
      //     id: generateRandomString(),
      //     title,
      //     details: [],
      //   };
      // }
      // // Check for detail lines (more permissive matching for dashes with any amount of spaces)
      // else if (/^\s*-/.test(line) && currentItem) {
      //   const detail = line
      //     .replace(/^\s*-\s*\*\*/, "") // Remove leading dash and asterisks
      //     .replace(/\*\*:?\s*/, "") // Remove trailing asterisks and colon
      //     .replace(/\[[\d,]+\]/g, "") // Remove citations [1] [2,3] etc
      //     .trim();

      //   if (detail) {
      //     currentItem.details.push(detail);
      //   }
      // }
    });

    // Push the last item
    if (currentItem) {
      newsItems.push(currentItem);
    }

    // Debug log
    console.log("Parsed items:", newsItems);
    return newsItems;
  };

  const parseSubHeader = (content) => {
    // Split by newline and filter out empty lines
    const lines = content.split("\n1.").filter((line) => line.trim());
    return lines[0];
  };

  const makeSearchRequestToServer = async (searchQuery) => {
    if (searchQuery) {
      // setIsLoading(true);
      // setError(null);

      //   const response = {
      //     "id": "8cc11c7a-c759-4590-9d14-fe233c62ea23",
      //     "model": "llama-3.1-sonar-small-128k-online",
      //     "created": 1733032416,
      //     "usage": {
      //         "prompt_tokens": 14,
      //         "completion_tokens": 700,
      //         "total_tokens": 714
      //     },
      //     "citations": [
      //         "https://en.wikipedia.org/wiki/2024_Indian_general_election_in_Maharashtra",
      //         "https://timesofindia.indiatimes.com/elections/assembly-elections/maharashtra/schedule",
      //         "https://indianexpress.com/article/india/maharashtra-election-result-2024-counting-date-time-key-constituencies-results-on-eci-9682806/",
      //         "https://www.business-standard.com/elections/maharashtra-elections/maharashtra-election-2024-dates-parties-and-voting-details-explained-124111900740_1.html",
      //         "https://indianexpress.com/article/india/maharashtra-assembly-election-results-2024-full-list-of-winners-constituency-wise-in-maharashtra-9681077/"
      //     ],
      //     "object": "chat.completion",
      //     "choices": [
      //         {
      //             "index": 0,
      //             "finish_reason": "stop",
      //             "message": {
      //                 "role": "assistant",
      //                 "content": "Here are the key timelines for the 2024 Indian general election in Maharashtra:\n\n- **Election Schedule Announcement**: The Election Commission of India announced the schedule for the 2024 Indian general election on March 16, 2024[1].\n- **Notification Dates**:\n  - Phase I: 20 March 2024\n  - Phase II: 28 March 2024\n  - Phase III: 12 April 2024\n  - Phase IV: 18 April 2024\n  - Phase V: 26 April 2024[1].\n- **Last Date for Filing Nominations**:\n  - Phase I: 27 March 2024\n  - Phase II: 4 April 2024\n  - Phase III: 19 April 2024\n  - Phase IV: 25 April 2024\n  - Phase V: 3 May 2024[1].\n- **Scrutiny of Nominations**:\n  - Phase I: 28 March 2024\n  - Phase II: 5 April 2024\n  - Phase III: 20 April 2024\n  - Phase IV: 26 April 2024\n  - Phase V: 4 May 2024[1].\n- **Last Date for Withdrawal of Nominations**:\n  - Phase I: 30 March 2024\n  - Phase II: 8 April 2024\n  - Phase III: 22 April 2024\n  - Phase IV: 29 April 2024\n  - Phase V: 6 May 2024[1].\n- **Poll Dates**:\n  - Phase I: 19 April 2024\n  - Phase II: 26 April 2024\n  - Phase III: 7 May 2024\n  - Phase IV: 13 May 2024\n  - Phase V: 20 May 2024[1].\n- **Counting of Votes/Result**: The results were announced on June 4, 2024[1].\n\n### Maharashtra Assembly Election 2024\n\n- **Election Schedule Announcement**: The Election Commission of India announced the schedule for the Maharashtra Legislative Assembly election on October 15, 2024[2].\n- **Polling Date**: The elections were held in a single phase on November 20, 2024[2][4].\n- **Counting of Votes**: The counting of votes took place on November 23, 2024[2][3].\n- **Key Dates**:\n  - Gazette notification issued: October 22, 2024\n  - Last date for nominations: October 29, 2024\n  - Scrutiny of nominations: October 30, 2024\n  - Withdrawal deadline: November 4, 2024[4].\n\n### Summary\n\n- **Lok Sabha Election Timelines**:\n  - Election schedule announced: March 16, 2024\n  - Polling dates: April 19 to May 20, 2024\n  - Results announced: June 4, 2024\n\n- **Assembly Election Timelines**:\n  - Election schedule announced: October 15, 2024\n  - Polling date: November 20, 2024\n  - Counting of votes: November 23, 2024"
      //             },
      //             "delta": {
      //                 "role": "assistant",
      //                 "content": ""
      //             }
      //         }
      //     ]
      // };

      //   const listRes = parseNewsContent(response.choices[0].message.content);
      //   console.log("LIST RESPONSE >>>>>>> ", listRes);
      //   setResults(listRes);
      //   // getImage(listRes[0]);
      //  for(let i=0; i<listRes.length; i++) {
      //   getImage(listRes[i]);
      //  }

      try {
        const response = await fetch(
          "https://api.perplexity.ai/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization:
                "Bearer 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",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "llama-3.1-sonar-small-128k-online",
              messages: [
                {
                  role: "user",
                  content: `Give me bullet points about: ${searchQuery}. Keep each point concise and informative.`,
                },
              ],
            }),
          }
        );
        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response:", data);
        const subHeader = parseSubHeader(data.choices[0].message.content);
        setSubTitle(subHeader);

        let content = data.choices[0].message.content;
        content.replace("*", "");
        const listRes = converResponseStringToArray(content);
        console.log("API listRes:", listRes);
        // const listRes = parseNewsContent(data.choices[0].message.content);
        console.log(listRes);

        setResults(listRes);

        for(let i=0; i<listRes.length; i++) {
          getImage(listRes[i]);
         }
      } catch (err) {
        // setError('Failed to get response. Please try again.');
        console.error("API Error:", err);
      } finally {
        // setIsLoading(false);
      }
    }
  };

  function converResponseStringToArray(newsString) {
    // Split the string into lines and filter out empty lines
    const lines = newsString.split("\n").filter((line) => line.trim());

    const newsArray = [];
    let currentTitle = "";
    let currentDescription = "";

    lines.forEach((line) => {
      // Remove any markdown or special characters
      line = line.replace(/^\s*[-*]\s*/, ""); // Remove bullet points
      line = line.replace(/\[.*?\]/g, ""); // Remove references like [1]

      // Check if line starts with "**" (title)
      if (line.startsWith("**")) {
        // If we have a previous title and description, add them to array
        if (currentTitle && currentDescription) {
          newsArray.push({
            id: generateRandomString(),
            title: currentTitle.trim(),
            description: currentDescription.trim(),
          });
        }

        // Extract new title
        currentTitle = line.replace(/\*\*/g, "").split(":")[0].trim();
        // Get description if it exists on same line
        currentDescription = line.split(":")[1]?.trim() || "";
      } else if (line.trim()) {
        // Append to current description
        currentDescription += " " + line.trim();
      }
    });

    // Add the last item
    if (currentTitle && currentDescription) {
      newsArray.push({
        id: generateRandomString(),
        title: currentTitle.trim(),
        description: currentDescription.trim(),
      });
    }

    return newsArray;
  }

  const getImage = async (item) => {
    const query = item.description;
    const apiKey = "AIzaSyA5LOTZBMTRYHbTcwsjGauq8FLPWCMA6M8";
    // const apiKey = "AIzaSyALy3vKOEc4mE3m8LTAXnQJXtbD2S56Mek"
    const imageSearchURL =
      "https://www.googleapis.com/customsearch/v1?key=" +
      apiKey +
      "&cx=07773ad42682842a5&searchType=image&q=" +
      encodeURIComponent(query);
    //  const imageSearchURL = "https://pixabay.com/api/?key=47385759-c536382953d3a82b4b3875926&q="+ item.title +"&image_type=photo&pretty=true&orientation=horizontal"
    try {
      const response = await fetch(imageSearchURL);
      const data = await response.json();

      console.log("DATAAAAAA IMAGAAAAAA :::::: ", {
        ...tempImages,
        [item.id]: data.items[0]?.link,
      });

      tempImages = {
        ...tempImages,
        [item.id]: data.items[0]?.link,
      };
      setImages(tempImages);
    } catch (error) {
      console.log("DATAAAAAA error :::::: ", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: results.length > 0 ? "100%" : "100vh",
        backgroundColor: "#eee",
        overflow: "scroll",
      }}
    >
      <div
        style={{
          background: "#FFF",
          width: "70%",
          overflow: "hidden",
        }}
      >
        <SearchResultsHeader
          header={query ? query : "Search Results"}
          // subHeader={subTitle}
        />
        {results.length > 0 ? (
          <ListThemeSearchResults results={results} images={images} />
        ) : (
          <div style={{marginTop: 20 }}>
            <SkeletonCard />
            <div style={{marginTop: 50 }}>

            <SkeletonCard2 />
            </div>
          </div>
          
        )}

        <div style={{ bottom: 0, height: 50, background: "#71D671" }} />
      </div>
    </div>
  );
}

export default SearchResults;
