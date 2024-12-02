import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QueryForm from "./components/QueryForm";
import ResponseDisplay from "./components/ResponseDisplay";
import SearchInput from "./components/SearchInput";
import { useNavigate } from "react-router-dom";

function App() {
  const [currentResponse, setCurrentResponse] = useState(null);
  const navigate = useNavigate();

  const gradientStyle = {
    background: "linear-gradient(100.87deg, #FFF3DC 0%, #FEE0E0 100%)",
  };
  const titleStyle = {
    // fontFamily: 'GT Walsheim Trial',
    fontSize: "60px",
    lineHeight: "60px",
    letterSpacing: "-0.02em",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
  };

  const subtitleStyle = {
    // fontFamily: 'GT Walsheim Trial',
    color: "#222",
    fontSize: "20px",
    lineHeight: "60px",
    letterSpacing: "-0.02em",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    fontWeight: "400",
  };

  const themes = [
    {
      name: "Timeline",
      description: "Modern and sleek design",
      image: require("./assets/ic_timeline.png"),
    },
    {
      name: "List",
      description: "Classic and timeless design",
      image: require("./assets/ic_template.png"),
    },
    {
      name: "Marketing",
      description: "Classic and timeless design",
      image: require("./assets/ic_marketing.png"),
    },
  ];

  const onClickSearchButton = (text) => {
    console.log("Search button clicked:::: ", text);
    // navigate("/search-results", {
    //   state: { searchQuery: "hello" },
    // });
    navigate(`/search-results?q=${encodeURIComponent(text)}`);
    // makeSearchRequestToServer('Latest news in india');
  };
  
  const parseNewsContent = (content) => {
    // Split by newline and filter out empty lines
    const lines = content.split('\n').filter(line => line.trim());
    
    const newsItems = [];
    let currentItem = null;
  
    lines.forEach(line => {
      // Check if line starts with a number followed by a dot
      if (/^\d+\.\s\*\*/.test(line)) {
        if (currentItem) {
          newsItems.push(currentItem);
        }
        // Remove the number and asterisks
        const title = line.replace(/^\d+\.\s\*\*([^:]*)\*\*:?/, '$1').trim();
        currentItem = {
          title,
          details: []
        };
      } else if (line.startsWith('   -')) {
        // This is a detail point
        if (currentItem) {
          const detail = line.replace(/^\s*-\s\*\*([^:]*)\*\*:?\s*/, '')
                           .replace(/\[(\d+)\]/g, '')
                           .trim();
          currentItem.details.push(detail);
        }
      }
    });
  
    // Push the last item
    if (currentItem) {
      newsItems.push(currentItem);
    }
  
    return newsItems;
  };
  
  const makeSearchRequestToServer = async (searchQuery) => {
    if (searchQuery) {
      // setIsLoading(true);
      // setError(null);

    //   const response = {
    //     "id": "bcc5d9f1-aeed-4e76-aacc-070defdae82e",
    //     "model": "llama-3.1-sonar-small-128k-online",
    //     "created": 1732379419,
    //     "usage": {
    //         "prompt_tokens": 4,
    //         "completion_tokens": 692,
    //         "total_tokens": 696
    //     },
    //     "citations": [
    //         "https://indianexpress.com/article/india/",
    //         "https://timesofindia.indiatimes.com/india/3",
    //         "https://www.ndtv.com/india",
    //         "https://indianexpress.com",
    //         "https://www.hindustantimes.com"
    //     ],
    //     "object": "chat.completion",
    //     "choices": [
    //         {
    //             "index": 0,
    //             "finish_reason": "stop",
    //             "message": {
    //                 "role": "assistant",
    //                 "content": "Here are the latest news updates from India as of November 23, 2024:\n\n1. **Elections and Politics:**\n   - **Maharashtra Elections:** The BJP-led Mahayuti Alliance has secured a significant victory, with the BJP alone crossing the 100-seat mark. Devendra Fadnavis is the front-runner for the Chief Minister's post, and allies are signaling not to neglect them[4][5].\n   - **Jharkhand Elections:** The INDIA Bloc has won 30 seats, while the JMM has returned to power[3][5].\n\n2. **Air Pollution:**\n   - Air pollution has been termed a \"national emergency,\" and MPs are urged to act collectively to address the issue[1].\n\n3. **Security Breach:**\n   - The Supreme Court has rejected Punjab's plea regarding the PM security breach case[1].\n\n4. **Gautam Adani Indictment:**\n   - Gautam Adani and his nephew face arrest warrants in the US after being indicted in a bribery case. Rahul Gandhi has called for Adani's immediate arrest, suggesting that PM Modi is protecting him[1][2].\n\n5. **Defence and Space:**\n   - India and Italy have announced a 5-year action plan in defence and space[1].\n\n6. **Kerala MLA Trial:**\n   - Kerala MLA Antony Raju will face trial after the Supreme Court restored the evidence tampering case against him[1].\n\n7. **Manipur Crisis:**\n   - Manipur Chief Minister Biren Singh has announced that a hunt is underway for \"Kuki terrorists who killed six women and children\"[1].\n\n8. **Urbanization and Employment:**\n   - There is a discussion on how urbanization can boost skills and create employment, with cities like Lucknow playing a crucial role in this transformation[1].\n\n9. **Tripura Ration Card Issue:**\n   - Tripura Food Minister Sushanta Chowdhury has assured that ration card holders will receive their atta dues at the earliest[1].\n\n10. **Delhi Elections:**\n    - The AAP has released its first list of 11 candidates for the Delhi polls[2].\n\n11. **Manipur Schools Closure:**\n    - Schools and colleges in Manipur\u2019s Imphal Valley will remain closed until November 23 due to ongoing tensions[1].\n\n12. **Caste Census in Telangana:**\n    - Rahul Gandhi has stated that 70% of the caste census in Telangana is complete, with around 80,000 enumerators reaching 1.17 crore households across 33 districts[1].\n\n13. **Nepal\u2019s BRI Divisions:**\n    - Nepal\u2019s ruling alliance is divided over BRI terms ahead of PM Oli\u2019s China visit, with the Nepali Congress wanting BRI projects with 100% grants, not loans[1].\n\n14. **Delhi Air Quality:**\n    - After a five-day \"severe\" spell, Delhi's air quality has improved to \"very poor\"[2].\n\n15. **Adani Bribery Allegations:**\n    - Farooq Abdullah has urged a thorough probe into the Adani bribery allegations, while Rahul Gandhi has called for Adani\u2019s immediate arrest[2].\n\nThese updates cover a wide range of topics including elections, security, environmental issues, and more."
    //             },
    //             "delta": {
    //                 "role": "assistant",
    //                 "content": ""
    //             }
    //         }
    //     ]
    // }

    // const listRes = parseNewsContent(response.choices[0].message.content);
    // console.log(listRes);
      try {
        // const response = await fetch('https://api.perplexity.ai/chat/completions', {
        //   method: 'POST',
        //   headers: {
        //     'Authorization': 'Bearer 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',
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     model: "llama-3.1-sonar-small-128k-online",
        //     messages: [
        //       {
        //         role: "user",
        //         content: searchQuery
        //       }
        //     ]
        //   })
        // });

        // if (!response.ok) {
        //   throw new Error(`API Error: ${response.status}`);
        // }

        // const data = await response.json();
        // console.log('API Response:', data);
        // navigate('/next-page', { 
        //   state: { 
        //     searchQuery: inputValue,
        //     apiResponse: data 
        //   } 
        // });
      } catch (err) {
        // setError('Failed to get response. Please try again.');
        console.error('API Error:', err);
      } finally {
        // setIsLoading(false);
      }
    }
  };


  const ThemeCard = ({ theme }) => {
    console.log(theme);
    return (
      <div
        className="bg-white sm:rounded-lg p-6 mb-8"
        style={{
          width: 110,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={theme.image} alt={theme.name} width={25} height={40} />
          <h3
            className="text-lg font-medium text-gray-900"
            style={{ marginTop: 10 }}
          >
            {theme.name}
          </h3>
        </div>
      </div>
    );
  };

  const ThemeCards = () => themes.map((theme) => <ThemeCard theme={theme} />);

  return (
    <div className="min-h-screen py-5" style={gradientStyle}>
      <div>
        <img src={require("./assets/ic_logo.png")} alt="logo" />
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
       marginTop: 70,
      }}>
        <div
          className="max-w-3xl mx-auto"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            className="text-3xl font-bold text-gray-900 text-center mb-8"
            style={titleStyle}
          >
            Create Stunning Infographics Instantly
          </h1>
          <h1
            className="text-3xl font-bold text-gray-900 text-center mb-8"
            style={subtitleStyle}
          >
            Type your idea, and we’ll handle the rest. Beautiful templates,
            ready in seconds.
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: 400,
            }}
          >
            <ThemeCards />
          </div>
          <SearchInput onClickSearchButton={onClickSearchButton} />
          {/* <div className="bg-white shadow sm:rounded-lg p-6 mb-8">
            <QueryForm onResponseGenerated={setCurrentResponse} />
          </div>

          {currentResponse && <ResponseDisplay response={currentResponse} />} */}
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}

export default App;
