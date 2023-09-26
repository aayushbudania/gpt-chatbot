import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyCo_hN3JAUfk4jJ2s_F-ChzBaAX_9DEuxQ';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage';

export const getBardResponse = async (message) => {
    try {
        const headers = {
          'Content-Type': 'application/json',
        };
  
        const data = {
          prompt: {
            context: '',
            examples: [],
            messages: [{ content: message }],
          },
          temperature: 0.25,
          top_k: 40,
          top_p: 0.95,
          candidate_count: 1,
        };
  
        const apiResponse = await axios.post(API_URL + '?key=' + API_KEY, data, { headers });
        console.log(apiResponse.data.candidates[0].content);
        return apiResponse.data.candidates[0].content;
      } catch (error) {
        console.error('Error making API call:', error);
      }
}
