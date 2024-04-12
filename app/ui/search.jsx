"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image"; 
import "../globals.css";

export default function Home() {
    const router = useRouter();
    const [searchPattern, setSearchPattern] = useState('');
    const [regexPattern, setRegexPattern] = useState('');
    const [executionId, setExecutionId] = useState(null);
  


    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const requestBody = {
        action: "default.test",
        parameters: {
          desired_regex_expression: regexPattern,
          search_term: searchPattern
        }
      };
    
      try {
        // Send data to StackStorm
        const response = await fetch('https://localhost:5555/api/v1/executions', {
          method: 'POST',
          headers: {
            'St2-Api-Key': 'MGRhM2YzMTY1ZDA2Y2E1OGY5MGE4M2ExOWY3NmQ5YmFlYjg4YTFmNjYyZjg0OTU0MWQ1MTM5MDIzZDFkMmMyZg',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        });
    
        if (response.ok) {
          console.log('Action executed successfully!');
          const responseData = await response.json();
          setExecutionId(responseData.id); // Extract and set execution ID
    
          // Insert data into MongoDB
          const mongoRequestBody = {
            searchPattern,
            regexPattern,
          };
          console.log("Hello");
    

          const mongoResponse = await fetch('/api/search', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(mongoRequestBody),
          });
    
          if (mongoResponse.ok) {
            console.log('Data inserted into MongoDB successfully!');
            // Handle success as needed
          } else {
            console.error('Failed to insert data into MongoDB:', mongoResponse.statusText);
            // Handle error as needed
          }
        } else {
          console.error('Failed to execute action:', response.statusText);
        }
      } catch (error) {
        console.error('Error executing action:', error);
      }
    };
    
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
      
    //   const requestBody = {
    //     action: "default.test",
    //     parameters: {
    //       desired_regex_expression: regexPattern,
    //       search_term: searchPattern
    //     }
    //   };
  
    //   try {
    //     const response = await fetch('https://localhost:5555/api/v1/executions', {
        
    //       method: 'POST',
    //       headers: {
    //         'St2-Api-Key': 'MGRhM2YzMTY1ZDA2Y2E1OGY5MGE4M2ExOWY3NmQ5YmFlYjg4YTFmNjYyZjg0OTU0MWQ1MTM5MDIzZDFkMmMyZg',
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(requestBody)
    //     });
  
    //     if (response.ok) {
    //       console.log('Action executed successfully!');
    //       const responseData = await response.json();
    //       setExecutionId(responseData.id); // Extract and set execution ID
    //     } else {
    //       console.error('Failed to execute action:', response.statusText);
    //     }
    //   } catch (error) {
    //     console.error('Error executing action:', error);
    //   }
    // };
  
    const handleLogout = () => {
      router.push('/login');
    };
  
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input 
            type="text"
            value={searchPattern}
            onChange={(e) => setSearchPattern(e.target.value)}
            placeholder="Search Pattern"
            className="border border-gray-300 rounded-md p-2 mb-4"
          />
          <input 
            type="text"
            value={regexPattern}
            onChange={(e) => setRegexPattern(e.target.value)}
            placeholder="Regex Pattern"
            className="border border-gray-300 rounded-md p-2 mb-4"
          />
          <div className="flex">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
              Submit
            </button>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md">
              Logout
            </button>
          </div>
        </form>
        {executionId && (
          <div className="mt-4">
            <p>Execution ID: {executionId}</p>
          </div>
        )}
      </main>
    );
  }
 