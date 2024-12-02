import React, { useState } from 'react';
import { generateResponse } from '../services/api';
import { toast } from 'react-toastify';

const QueryForm = ({ onResponseGenerated }) => {
  const [formData, setFormData] = useState({
    text: '',
    generateImage: false,
    imagePrompt: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await generateResponse({
        text: formData.text,
        generate_image: formData.generateImage,
        image_prompt: formData.imagePrompt,
      });

      onResponseGenerated(response);
      setFormData({
        text: '',
        generateImage: false,
        imagePrompt: '',
      });
      toast.success('Response generated successfully!');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="query" className="form-label">
          Your Query
        </label>
        <textarea
          id="query"
          value={formData.text}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          className="input-field"
          rows="4"
          required
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="generateImage"
          checked={formData.generateImage}
          onChange={(e) => setFormData({ ...formData, generateImage: e.target.checked })}
          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
        />
        <label htmlFor="generateImage" className="ml-2 text-sm text-gray-700">
          Generate Image
        </label>
      </div>

      {formData.generateImage && (
        <div>
          <label htmlFor="imagePrompt" className="form-label">
            Image Prompt
          </label>
          <input
            type="text"
            id="imagePrompt"
            value={formData.imagePrompt}
            onChange={(e) => setFormData({ ...formData, imagePrompt: e.target.value })}
            className="input-field"
            required
          />
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`btn-primary w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Generating...' : 'Generate Response'}
      </button>
    </form>
  );
};

export default QueryForm;