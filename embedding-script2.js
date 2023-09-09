// Create a function to load the React app bundle
function loadReactApp() {
  const reactAppURL = 'https://marcus-li.github.io/publicTest/chatbot.js';

  // Create a function to check if the root container is available
  function checkRootContainer() {
    const rootContainer = document.getElementById('root');
    if (rootContainer) {
      // If the root container is found, continue with script loading
      loadScript();
    } else {
      // If the root container is not found, wait and check again
      setTimeout(checkRootContainer, 100); // Adjust the delay as needed
    }
  }

  // Function to load the script
  function loadScript() {
    const script = document.createElement('script');
    script.src = reactAppURL;
    script.type = 'module'; // Adjust this if needed (e.g., 'text/javascript')
    script.async = true;
    script.onload = () => {
      // Customize the script as needed for embedding
      const container = document.getElementById('embedding-container');
      // Example: Inject the React app into a specific div with an ID
      // if (container && typeof ReactApp !== 'undefined') {
      //   ReactApp.render({}, container);
      // }
    };

    document.body.appendChild(script);
  }

  // Start checking for the root container
  checkRootContainer();
}

// Load the React app when the page is ready
if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
  loadReactApp();
} else {
  document.addEventListener('DOMContentLoaded', loadReactApp);
}
