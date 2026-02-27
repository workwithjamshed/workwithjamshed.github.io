// script.js

// Create a script element
const tailwindScript = document.createElement('script');
tailwindScript.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
tailwindScript.async = true;

// Append it to the document head
document.head.appendChild(tailwindScript);