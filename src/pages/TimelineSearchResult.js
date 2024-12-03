import React from 'react';
import ListThemeResultCard from './ListThermeResultCard';
import TimelineThemeResultCard from './TimeLineThemeResultCard';

function TimelineThemeSearchResults({
    results = [],
    images = {}
}) {
  return (
    <div style={{ marginBottom: 50, marginTop: 100 }}>
        {
            results?.map((result, index) => {
                return (
                    <TimelineThemeResultCard
                        key={result.title}
                        info={result}
                        image={images[result.id]}
                        num={index + 1}
                    />
                )
            })
        }
    </div>
  );
}

export default TimelineThemeSearchResults;