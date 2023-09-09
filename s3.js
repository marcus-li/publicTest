// Create a function to load the React app bundle
function loadReactApp() {
  const reactAppURL = 'https://marcus-li.github.io/publicTest/chatbot.js';

  console.log('Loading React app from:', reactAppURL);

  // Create a script element to load the React app bundle
  const script = document.createElement('script');
  script.src = reactAppURL;
  script.type = 'module'; // Adjust this if needed (e.g., 'text/javascript')
  script.async = true;

  // Set up an event handler for when the script is loaded successfully
  script.onload = () => {
    console.log('React app script has loaded successfully.');

    // Customize the script as needed for embedding
    const rootContainer = document.getElementById('root');
    if (!rootContainer) {
      // If the 'root' element doesn't exist, create it and add it to the body
      const newRootContainer = document.createElement('div');
      newRootContainer.id = 'root';
      document.body.appendChild(newRootContainer);
    }

    // Example: Inject the React app into a specific div with an ID
    const container = document.getElementById('embedding-container');
    // Uncomment and customize this part based on your React app's setup
    // if (container && typeof ReactApp !== 'undefined') {
    //   ReactApp.render({}, container);
    // }
  };

  // Set up an event handler for when the script fails to load
  script.onerror = () => {
    console.error('Failed to load the React app script.');
    // Create and display an error message element
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Failed to load the React app script. Please try again later.';
    document.body.appendChild(errorMessage);
  };

  // Append the script element to the document body
  document.body.appendChild(script);
}

// Load the React app when the page is ready
if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
  // If the page is already loaded or interactive, load the React app immediately
  loadReactApp();
} else {
  // If the page is still loading, wait for the 'DOMContentLoaded' event before loading the React app
  document.addEventListener('DOMContentLoaded', loadReactApp);
}
