
const today = new Date();
const month = today.getMonth(); 
const day = today.getDate();   

// April Fools!
if (month === 3 && day === 1) {

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes rotatePrank {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        * {
            animation: rotatePrank 15s;
        }
    `;
    document.head.appendChild(style);
    window.alert("April Fools!");
    const a = document.createElement("a");
    const aprilfools = document.createTextNode("April Fools!");
    a.appendChild(aprilfools);
    const topbar = document.getElementById("topbar");
    topbar.appendChild(a);

    const a1 = document.createElement("a");
    const aprilfools1 = document.createTextNode("April Fools!");
    a1.appendChild(aprilfools1);
    const menu = document.getElementById("Menu");
    menu.appendChild(a1);
}

