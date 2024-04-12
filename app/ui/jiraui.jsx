"use client"
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

// const Sidebar = () => {
//   return (
//     <nav className="bg-gray-800 h-full min-h-screen w-60 flex flex-col fixed left-2 top-2 bottom-8 rounded-lg">
//       <a href="#" className="text-white p-4">Home</a>
//       <a href="#" className="text-white p-4">About</a>
//       <a href="#" className="text-white p-4">Services</a>
//       <a href="#" className="text-white p-4">Contact</a>
//     </nav>
//   );
// };
const Sidebar = ({ setFieldRef }) => {
  return (
    <nav className="bg-gray-800 h-full min-h-screen w-60 flex flex-col fixed left-2 top-2 bottom-8 rounded-lg">
      <a href="#" className="text-white p-4" onClick={() => setFieldRef('summary')}>Summary</a>
      <a href="#" className="text-white p-4" onClick={() => setFieldRef('type')}>Type</a>
    </nav>
  );
};


export default function Home() {
  const router = useRouter();
  const [summary, setSummary] = useState('');
  const [type, setType] = useState('');
  const [executionId, setExecutionId] = useState(null);
  const summaryRef = useRef(null);
  const typeRef = useRef(null);

  const setFieldRef = (fieldName) => {
    if (fieldName === 'summary') {
      summaryRef.current.focus();
    } else if (fieldName === 'type') {
      typeRef.current.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const requestBody = {
      action: "jira.create_issue",
      parameters: {
        summary: summary,
        type: type
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
        console.log('Data inserted successfully!');
        const responseData = await response.json();
        setExecutionId(responseData.id);
        console.log(executionId); // Extract and set execution ID
        const mongodbResponse = await fetch('/api/jiraui', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            summary: summary,
            type: type,
            executionId: responseData.id
          })
        });

        if (mongodbResponse.ok) {
          console.log('Data posted to MongoDB successfully!');
          // Redirect or perform any other action as needed
        } else {
          console.error('Failed to post data to MongoDB:', mongodbResponse.statusText);
          // Handle error as needed
        }
      } else {
        console.error('Failed to insert data:', response.statusText);
        // Handle error as needed
      }
    } catch (error) {
      console.error('Error inserting data:', error);
      // Handle error as needed
    }
  };

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Sidebar */}
      <Sidebar setFieldRef={setFieldRef} />
      
      {/* Main content */}
      <div className="relative flex flex-col items-center justify-between p-24">
        {/* Top Navigation Bar */}
        {/* <Sidebart position="top" /> */}
        
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input 
            type="text"
            ref={summaryRef}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Summary"
            className="border border-gray-300 rounded-md p-2 mb-4"
          />
          <input 
            type="text"
            ref={typeRef}
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Type"
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
      </div>
    </main>
  );
}




// export default function Home() {
//     const router = useRouter();
//     const [summary, setSummary] = useState('');
//     const [type, setType] = useState('');
//     const [executionId, setExecutionId] = useState(null);
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
      
//       const requestBody = {
//         action: "jira.create_issue",
//         parameters: {
//           summary: summary,
//           type: type
//         }
//       };
  
//       try {
//         // Send data to StackStorm
//         const response = await fetch('https://localhost:5555/api/v1/executions', {
//           method: 'POST',
//           headers: {
//             'St2-Api-Key': 'MGRhM2YzMTY1ZDA2Y2E1OGY5MGE4M2ExOWY3NmQ5YmFlYjg4YTFmNjYyZjg0OTU0MWQ1MTM5MDIzZDFkMmMyZg',
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(requestBody)
//         });
  
//         if (response.ok) {
//           console.log('Data inserted successfully!');
//           const responseData = await response.json();
//           setExecutionId(responseData.id);
//           console.log(executionId); // Extract and set execution ID
//         } else {
//           console.error('Failed to insert data:', response.statusText);
//           // Handle error as needed
//         }
//       } catch (error) {
//         console.error('Error inserting data:', error);
//         // Handle error as needed
//       }
//     };
  
//     const handleLogout = () => {
//       router.push('/login');
//     };
  
//     return (
//       <main className="flex min-h-screen flex-col items-center justify-between p-24">
//         <form onSubmit={handleSubmit} className="flex flex-col items-center">
//           <input 
//             type="text"
//             value={summary}
//             onChange={(e) => setSummary(e.target.value)}
//             placeholder="Summary"
//             className="border border-gray-300 rounded-md p-2 mb-4"
//           />
//           <input 
//             type="text"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             placeholder="Type"
//             className="border border-gray-300 rounded-md p-2 mb-4"
//           />
//           <div className="flex">
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
//               Submit
//             </button>
//             <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md">
//               Logout
//             </button>
//           </div>
//         </form>
//         {executionId && (
//           <div className="mt-4">
//             <p>Execution ID: {executionId}</p>
//           </div>
//         )}
//       </main>
//     );
// }
