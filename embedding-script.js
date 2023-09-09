<script type="module">

// Create a function to load the React app bundle
function loadReactApp() {
  const reactAppURL = 'https://raw.githubusercontent.com/marcus-li/publicTest/main/chatbot.js';
 
  document.body.appendChild( document.createElement('root');)
  const script = document.createElement('script');
  script.src = reactAppURL;
  script.type = 'module'; // Adjust this if needed (e.g., 'text/javascript')
  script.async = true;
  script.onload = () => {
    // Customize the script as needed for embedding
    const rootContainer = document.getElementById('root');
    if (!rootContainer) {
      // If it doesn't exist, create it and add it to the body
      const newRootContainer = document.createElement('div');
      newRootContainer.id = 'root';
      document.body.appendChild(newRootContainer);
    }
    // Example: Inject the React app into a specific div with an ID
    const container = document.getElementById('embedding-container');
    // if (container && typeof ReactApp !== 'undefined') {
    //   ReactApp.render({}, container);
    // }
  };

  document.body.appendChild(script);
}

// Load the React app when the page is ready
if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
  loadReactApp();
} else {
  document.addEventListener('DOMContentLoaded', loadReactApp);
}
</script>
