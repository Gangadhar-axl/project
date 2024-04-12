"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image"; 
import "../globals.css";

export default function Home() {
  const router = useRouter();

  const handleVerifySearchClick = () => {
    router.push('/search');
  };
  const handlecreatejiraticketclick = () => {
    router.push('/jiraui');
  };

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen">
      {/* Side Navigation Bar */}
      <nav className="bg-white h-screen w-1/4 p-0 relative border-r border-gray-300">
        {/* Top Box */}
        {/* Logo */}
        <div className="image-container flex items-center justify-center mb-16">
          <img src="/logo.png" alt="Your Logo" width={300} height={200} />
        </div>
        {/* Verify Search */}
        <div className="flex items-center cursor-pointer mb-4" onClick={handleVerifySearchClick}>
          <img src="https://stackstorm.com/wp/wp-content/themes/stackstorm/images/actions.svg" alt="Actions" width="20" height="20" className="mr-2" />
          <span>Verify Search</span>
        </div>
        {/* Create JIRA Ticket */}
        <div className="flex items-center cursor-pointer mb-4" onClick={handlecreatejiraticketclick}>
          <img src="https://stackstorm.com/wp/wp-content/themes/stackstorm/images/actions.svg" alt="Actions" width="20" height="20" className="mr-2" />
          <span>Create JIRA Ticket</span>
        </div>
      </nav>
      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Combined Navigation Bar */}
        <nav className="bg-white p-3 border-b border-gray-300">
          <ul className="flex justify-between mb-0">
            <li className="mr-4">
              <a href="#">Home</a>
            </li>
            <li className="mr-4">
              <a href="#">About</a>
            </li>
            <li className="mr-4">
              <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md">
                Logout
              </button>
            </li>
          </ul>
        </nav>
        {/* Main Content */}
        <main className="flex-grow p-4 bg-gray-200">
          {/* Welcome Message */}
          <h1 className="text-2xl font-bold mb-4">Welcome to Your Application</h1>
          {/* Additional Content Goes Here */}
        </main>
      </div>
    </div>
  );
}










// export default function Home() {
//   const router = useRouter();
//   const [searchPattern, setSearchPattern] = useState('');
//   const [regexPattern, setRegexPattern] = useState('');
//   const [executionId, setExecutionId] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [actionsByPack, setActionsByPack] = useState({});

//   useEffect(() => {
//     if (dropdownOpen) {
//       fetchActions();
//     }
//   }, [dropdownOpen]);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // const fetchActions = async () => {
//   //   try {
//   //     const response = await fetch('https://localhost:5555/api/v1/actions', {
//   //       method: 'GET',
//   //       headers: {
//   //         'St2-Api-Key': 'MGRhM2YzMTY1ZDA2Y2E1OGY5MGE4M2ExOWY3NmQ5YmFlYjg4YTFmNjYyZjg0OTU0MWQ1MTM5MDIzZDFkMmMyZg',
//   //         'Content-Type': 'application/json'
//   //       },
//   //     });
//   //     if (response.ok) {
//   //       const data = await response.json();
//   //       const defaultActions = data.actions.filter(action => action.pack === 'default');
//   //       const actionsGroupedByPack = groupActionsByPack(defaultActions);
//   //       setActionsByPack(actionsGroupedByPack);
//   //     } else {
//   //       console.error('Failed to fetch actions:', response.statusText);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error fetching actions:', error);
//   //   }
//   // };

//   // const fetchActions = async () => {
//   //   try {
//   //     const response = await fetch('https://localhost:5555/api/v1/actions', {
//   //       method: 'GET',
//   //       headers: {
//   //         'St2-Api-Key': 'MGRhM2YzMTY1ZDA2Y2E1OGY5MGE4M2ExOWY3NmQ5YmFlYjg4YTFmNjYyZjg0OTU0MWQ1MTM5MDIzZDFkMmMyZg',
//   //         'Content-Type': 'application/json'
//   //       },
//   //     });
//   //     if (response.ok) {
//   //       const data = await response.json();
//   //       if (data && Array.isArray(data)) {
//   //         const defaultActions = data.filter(action => action.pack );
//   //         const actionsGroupedByPack = groupActionsByPack(defaultActions);
//   //         setActionsByPack(actionsGroupedByPack);
//   //       } else {
//   //         console.error('Actions data not found or not in the expected format:', data);
//   //       }
//   //     } else {
//   //       console.error('Failed to fetch actions:', response.statusText);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error fetching actions:', error);
//   //   }
//   // };
  
//   const fetchActions = async () => {
//     try {
//       const response = await fetch('https://localhost:5555/api/v1/actions', {
//         method: 'GET',
//         headers: {
//           'St2-Api-Key': 'MGRhM2YzMTY1ZDA2Y2E1OGY5MGE4M2ExOWY3NmQ5YmFlYjg4YTFmNjYyZjg0OTU0MWQ1MTM5MDIzZDFkMmMyZg',
//           'Content-Type': 'application/json'
//         },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         if (data && Array.isArray(data)) {
//           // Filter actions by name
//           const filteredActions = data.filter(action => action.name === 'default.test');
//           // Group filtered actions by pack
//           const actionsGroupedByPack = groupActionsByPack(filteredActions);
//           setActionsByPack(actionsGroupedByPack);
//         } else {
//           console.error('Actions data not found or not in the expected format:', data);
//         }
//       } else {
//         console.error('Failed to fetch actions:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching actions:', error);
//     }
//   };
  
  
  
  
  
//   const groupActionsByPack = (actions) => {
//     const groupedActions = {};
//     actions.forEach((action) => {
//       const pack = action.pack;
//       if (!groupedActions[pack]) {
//         groupedActions[pack] = [];
//       }
//       groupedActions[pack].push(action);
//     });
//     return groupedActions;
//   };

//   const handleActionClick = (action) => {
//     console.log('Selected action:', action);
//     // Implement the logic for handling the action click
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const requestBody = {
//       action: "default.test",
//       parameters: {
//         desired_regex_expression: regexPattern,
//         search_term: searchPattern
//       }
//     };

//     try {
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
//         const responseData = await response.json();
//         setExecutionId(responseData.id); // Extract and set execution ID
//       } else {
//         console.error('Failed to execute action:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error executing action:', error);
//     }
//   };

//   const handleLogout = () => {
//     router.push('/login');
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Side Navigation Bar */}
//       <nav className="bg-white h-screen w-1/4 p-0 relative border-r border-gray-300">
//         {/* Top Box */}
//         {/* Logo */}
//         <div className="image-container flex items-center justify-center mb-16">
//           <img src="/logo.png" alt="Your Logo" width={300} height={200} />
//         </div>
//         {/* Packs Dropdown */}
//         <div className="flex flex-col items-center mb-10">
//           <div className="flex items-center cursor-pointer mb-4" onClick={toggleDropdown}>
//             <img src="https://stackstorm.com/wp/wp-content/themes/stackstorm/images/actions.svg" alt="Actions" width="20" height="20" className="mr-2" />
//               <span>Verify Search</span>
//               <span className="ml-2">{dropdownOpen ? '' : ''}</span>
//         </div>
//         <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
//           <img src="https://stackstorm.com/wp/wp-content/themes/stackstorm/images/actions.svg" alt="Actions" width="20" height="20" className="mr-2" />
//           <span>Create JIRA Ticket</span>
//         <span className="ml-2">{dropdownOpen ? '' : ''}</span>
//     </div>

//           {dropdownOpen && (
//             <div className="mt-2 w-full">
//               {Object.keys(actionsByPack).map((pack, index) => (
//                 <div key={index}>
//                   <div>{pack}</div>
//                   <ul className="bg-white border border-gray-300 rounded-md shadow-md">
//                     {actionsByPack[pack].map((action, index) => (
//                       <li key={index} className="hover:bg-gray-100 cursor-pointer px-4 py-2" onClick={() => handleActionClick(action)}>
//                         {action.name}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </nav>
//       {/* Main Content */}
//       <div className="flex flex-col w-full">
//         {/* Combined Navigation Bar */}
//         <nav className="bg-white p-3 border-b border-gray-300">
//           <ul className="flex justify-between mb-0">
//             <li className="mr-4">
//               <a href="#">Home</a>
//             </li>
//             <li className="mr-4">
//               <a href="#">About</a>
//             </li>
//             <li className="mr-4">
//               <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md">
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </nav>
//         {/* Main Content */}
//         <main className="flex-grow p-4 bg-gray-200">
//           <form onSubmit={handleSubmit} className="flex flex-col items-center mb-8">
//             <input 
//               type="text"
//               value={searchPattern}
//               onChange={(e) => setSearchPattern(e.target.value)}
//               placeholder="Search Pattern"
//               className="border border-gray-300 rounded-md p-2 mb-4"
//             />
//             <input 
//               type="text"
//               value={regexPattern}
//               onChange={(e) => setRegexPattern(e.target.value)}
//               placeholder="Regex Pattern"
//               className="border border-gray-300 rounded-md p-2 mb-4"
//             />
//             <div className="flex">
//               <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
//                 Submit
//               </button>
//             </div>
//           </form>
//           {executionId && (
//             <div className="mt-4">
//               <p>Execution ID: {executionId}</p>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }





// export default function Home() {
//   const router = useRouter();
//   const [searchPattern, setSearchPattern] = useState('');
//   const [regexPattern, setRegexPattern] = useState('');
//   const [executionId, setExecutionId] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [actions, setActions] = useState([]);

//   useEffect(() => {
//     if (dropdownOpen) {
//       fetchActions();
//     }
//   }, [dropdownOpen]);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const fetchActions = async () => {
//     try {
//       const response = await fetch('https://localhost:5555/api/v1/actions',{
//       method: 'GET',
//         headers: {
//           'St2-Api-Key': 'MGRhM2YzMTY1ZDA2Y2E1OGY5MGE4M2ExOWY3NmQ5YmFlYjg4YTFmNjYyZjg0OTU0MWQ1MTM5MDIzZDFkMmMyZg',
//           'Content-Type': 'application/json'
//         },
//       });
//       console.log(await response.json());
//       if (response.ok) {
//         const data = await response.json();
//         setActions(data.actions);
//       } else {
//         console.error('Failed to fetch actions:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching actions:', error);
//     }
//   };

//   const handleActionClick = (action) => {
//     console.log('Selected action:', action);
//     // Implement the logic for handling the action click
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const requestBody = {
//       action: "default.test",
//       parameters: {
//         desired_regex_expression: regexPattern,
//         search_term: searchPattern
//       }
//     };

//     try {
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
//         const responseData = await response.json();
//         setExecutionId(responseData.id); // Extract and set execution ID
//       } else {
//         console.error('Failed to execute action:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error executing action:', error);
//     }
//   };

//   const handleLogout = () => {
//     router.push('/login');
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Side Navigation Bar */}
//       <nav className="bg-white h-screen w-1/4 p-0 relative border-r border-gray-300">
//         {/* Top Box */}

//         {/* Logo */}
//         <div className="image-container flex items-center justify-center mb-16">
//           <Image src="/logo.png" alt="Your Logo" width={300} height={200} />
//         </div>
//         {/* Actions Dropdown */}
//         <div className="flex flex-col items-center mb-4">
//           <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
//             <img src="https://stackstorm.com/wp/wp-content/themes/stackstorm/images/actions.svg" alt="Actions" width="20" height="20" className="mr-2" />
//             <span>Stackstorm Actions</span>
//             <span className="ml-2">{dropdownOpen ? '▼' : '▲'}</span>
//           </div>
//           {dropdownOpen && (
//             <div className="mt-2 w-full">
//               <ul className="bg-white border border-gray-300 rounded-md shadow-md">
//                 {actions.map((action, index) => (
//                   <li key={index} className="hover:bg-gray-100 cursor-pointer px-4 py-2" onClick={() => handleActionClick(action)}>
//                     {action}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </nav>
//       {/* Main Content */}
//       <div className="flex flex-col w-full">
//         {/* Combined Navigation Bar */}
//         <nav className="bg-white p-3 border-b border-gray-300">
//           <ul className="flex justify-between mb-0">
//             <li className="mr-4">
//               <a href="#">Home</a>
//             </li>
//             <li className="mr-4">
//               <a href="#">About</a>
//             </li>
//             <li className="mr-4">
//               <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md">
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </nav>
//         {/* Main Content */}
//         <main className="flex-grow p-4 bg-gray-200">
//           <form onSubmit={handleSubmit} className="flex flex-col items-center mb-8">
//             <input 
//               type="text"
//               value={searchPattern}
//               onChange={(e) => setSearchPattern(e.target.value)}
//               placeholder="Search Pattern"
//               className="border border-gray-300 rounded-md p-2 mb-4"
//             />
//             <input 
//               type="text"
//               value={regexPattern}
//               onChange={(e) => setRegexPattern(e.target.value)}
//               placeholder="Regex Pattern"
//               className="border border-gray-300 rounded-md p-2 mb-4"
//             />
//             <div className="flex">
//               <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
//                 Submit
//               </button>
//             </div>
//           </form>
//           {executionId && (
//             <div className="mt-4">
//               <p>Execution ID: {executionId}</p>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }





// export default function Home() {
//   const router = useRouter();
//   const [searchPattern, setSearchPattern] = useState('');
//   const [regexPattern, setRegexPattern] = useState('');
//   const [executionId, setExecutionId] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleActionClick = (action) => {
//     console.log('Selected action:', action);
//     // Implement the logic for handling the action click
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const requestBody = {
//       action: "default.test",
//       parameters: {
//         desired_regex_expression: regexPattern,
//         search_term: searchPattern
//       }
//     };

//     try {
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
//         const responseData = await response.json();
//         setExecutionId(responseData.id); // Extract and set execution ID
//       } else {
//         console.error('Failed to execute action:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error executing action:', error);
//     }
//   };

//   const handleLogout = () => {
//     router.push('/login');
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Side Navigation Bar */}
//       <nav className="bg-white h-screen w-1/4 p-0 relative border-r border-gray-300">
//         {/* Top Box */}
        
//         {/* Logo */}
//         <div className="image-container flex items-center justify-center mb-16">
//           <Image src="/logo.png" alt="Your Logo" width={300} height={200} />
//         </div>
//         {/* Actions Dropdown */}
//         <div className="flex flex-col items-center mb-4">
//           <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
//           <img src="https://stackstorm.com/wp/wp-content/themes/stackstorm/images/actions.svg" alt="Actions" width="20" height="20" className="mr-2" />
//             <span>Stackstorm Actions</span>
//             <span className="ml-2">{dropdownOpen ? '▼' : '▲'}</span>
//           </div>
//           {dropdownOpen && (
//             <div className="mt-2 w-full">
//               <ul className="bg-white border border-gray-300 rounded-md shadow-md">
//                 <li className="hover:bg-gray-100 cursor-pointer px-4 py-2" onClick={() => handleActionClick('Action 1')}>Action 1</li>
//                 <li className="hover:bg-gray-100 cursor-pointer px-4 py-2" onClick={() => handleActionClick('Action 2')}>Action 2</li>
//                 <li className="hover:bg-gray-100 cursor-pointer px-4 py-2" onClick={() => handleActionClick('Action 3')}>Action 3</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </nav>
//       {/* Main Content */}
//       <div className="flex flex-col w-full">
//         {/* Combined Navigation Bar */}
//         <nav className="bg-white p-3 border-b border-gray-300">
//           <ul className="flex justify-between mb-0">
//             <li className="mr-4">
//               <a href="#">Home</a>
//             </li>
//             <li className="mr-4">
//               <a href="#">About</a>
//             </li>
//             <li className="mr-4">
//               <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md">
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </nav>
//         {/* Main Content */}
//         <main className="flex-grow p-4 bg-gray-200">
//           <form onSubmit={handleSubmit} className="flex flex-col items-center mb-8">
//             <input 
//               type="text"
//               value={searchPattern}
//               onChange={(e) => setSearchPattern(e.target.value)}
//               placeholder="Search Pattern"
//               className="border border-gray-300 rounded-md p-2 mb-4"
//             />
//             <input 
//               type="text"
//               value={regexPattern}
//               onChange={(e) => setRegexPattern(e.target.value)}
//               placeholder="Regex Pattern"
//               className="border border-gray-300 rounded-md p-2 mb-4"
//             />
//             <div className="flex">
//               <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
//                 Submit
//               </button>
//             </div>
//           </form>
//           {executionId && (
//             <div className="mt-4">
//               <p>Execution ID: {executionId}</p>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }


