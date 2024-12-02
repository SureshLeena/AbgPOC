import React from 'react';
import ListThemeResultCard from './ListThermeResultCard';

function ListThemeSearchResults({
    results = [],
    images = {}
}) {
  // Access query parameter
  const params = new URLSearchParams(window.location.search);
  const query = params.get('query');

  const theme = "List"

  
  return (
    <div style={{ marginBottom: 50 }}>
        {
            results?.map((result, index) => {
                return (
                    <ListThemeResultCard
                        key={result.title}
                        info={result}
                        image={images[result.id]}
                        num={index + 1}
                        direction={(index % 2 == 0) ? 'left-to-right' : 'right-to-left'}
                    />
                )
            })
        }
     {/* <ListThemeResultCard direction='left-to-right'/>
     <ListThemeResultCard direction='right-to-left'/>
     <ListThemeResultCard direction='left-to-right'/> */}
    </div>
  );
}

export default ListThemeSearchResults;
