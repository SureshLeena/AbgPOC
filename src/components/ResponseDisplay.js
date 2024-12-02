import React from 'react';

const ResponseDisplay = ({ response }) => {
  if (!response) return null;

  return (
    <div className="space-y-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Generated Response</h3>
        <p className="text-gray-700 whitespace-pre-wrap">{response.text_response}</p>
        
        {response.image_url && (
          <div className="mt-6">
            <h4 className="text-md font-medium text-gray-900 mb-2">Generated Image</h4>
            <img
              src={response.image_url}
              alt="Generated content"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}
        
        <div className="mt-4 text-sm text-gray-500">
          Generated at: {new Date(response.created_at).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default ResponseDisplay;