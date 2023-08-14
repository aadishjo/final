// global.js

// Function to create and add the global header
function createGlobalHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <nav>
            <div class="logo">
                <img src="sample-logo.png" alt="Logo">
            </div>
            <div class="nav-content">
                <ul class="centered-nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="search-bar">
                <input type="text" placeholder="Search">
                <button>Search</button>
            </div>
        </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
}


function createGlobalFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        
    `;
    document.body.appendChild(footer);
}


window.onload = function() {
    createGlobalHeader();
    createGlobalFooter();
};
// Get the body element
const body = document.querySelector('body');


const footer = document.createElement('footer');
footer.style.backgroundColor = '#000'; 
footer.style.color = '#fff'; // White text
footer.style.display = 'flex'; 
footer.style.alignItems = 'center'; 


const logoDiv = document.createElement('div');
logoDiv.style.marginRight = '20px'; // 


const logoElement = document.createElement('img');
logoElement.src = 'sample-logo.png'; 
logoElement.alt = 'Logo';
logoElement.style.width = '40px'; // Adjust logo width as needed

// Create a div for the text content
const textDiv = document.createElement('div');

// Create elements for the title and paragraph
const titleElement = document.createElement('h2');
titleElement.textContent = ' Title';

const paragraphElement = document.createElement('p');
paragraphElement.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

// Append the logo and text elements to their respective divs
logoDiv.appendChild(logoElement);
textDiv.appendChild(titleElement);
textDiv.appendChild(paragraphElement);

// Append the logo div and text div to the footer
footer.appendChild(logoDiv);
footer.appendChild(textDiv);

// Append the footer to the body
body.appendChild(footer);


