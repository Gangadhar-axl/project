"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// export default function Home() {
//   const router = useRouter();
//   const [searchPattern, setSearchPattern] = useState('');
//   const [regexPattern, setRegexPattern] = useState('');

//   // Function to handle logout
//   const handleLogout = () => {
//     // Perform any necessary cleanup or logout actions
//     // For example, clear user session, reset state, etc.
//     // Redirect to the login page
//     router.push('/login');
//   };

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form submitted!");
    
//     // Prepare the request body
//     const requestBody = {
//       action: "default.test",
//       parameters: {
//         desired_regex_expression: regexPattern,
//         search_term: searchPattern
//       }
//     };

//     try {
//       // Make the POST request to the StackStorm API endpoint
//       const response = await fetch('https://localhost:5555/api/v1/executions', {
//         method: 'POST',
//         headers: {
//           'St2-Api-Key': 'MGRhM2YzMTY1ZDA2Y2E1OGY5MGE4M2ExOWY3NmQ5YmFlYjg4YTFmNjYyZjg0OTU0MWQ1MTM5MDIzZDFkMmMyZg',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(requestBody)
//       });

//       if (response.ok) {
//         console.log('Action executed successfully!');
//         // Handle success, if needed
//       } else {
//         console.error('Failed to execute action:', response.statusText);
//         // Handle error cases here
//       }
//     } catch (error) {
//       console.error('Error executing action:', error);
//       // Handle error cases here
//     }
//   };

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <form onSubmit={handleSubmit} className="flex flex-col items-center">
//         <input 
//           type="text"
//           value={searchPattern}
//           onChange={(e) => setSearchPattern(e.target.value)}
//           placeholder="Search Pattern"
//           className="border border-gray-300 rounded-md p-2 mb-4"
//         />
//         <input 
//           type="text"
//           value={regexPattern}
//           onChange={(e) => setRegexPattern(e.target.value)}
//           placeholder="Regex Pattern"
//           className="border border-gray-300 rounded-md p-2 mb-4"
//         />
//         <div className="flex">
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
//             Submit
//           </button>
//           <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md">
//             Logout
//           </button>
//         </div>
//       </form>
//     </main>
//   );
// }



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
      } else {
        console.error('Failed to execute action:', response.statusText);
      }
    } catch (error) {
      console.error('Error executing action:', error);
    }
  };

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

