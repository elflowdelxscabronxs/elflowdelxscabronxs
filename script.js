const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));





const mapURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/MODIS_Map.jpg/1920px-MODIS_Map.jpg"
const map = document.createElement("img");
map.classList.add("map");
map.setAttribute("src", mapURL);

// home.insertAdjacentElement("beforeend", map);

// const handleClick = (event) => {
//     console.log(event.target.id)
// };

// navBtns.forEach(btn => btn.addEventListener("click", handleClick));

const handleTabClick = (e) => {
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false);
    });
    e.currentTarget.setAttribute('aria-selected', true);
    const { id } = e.currentTarget;
    const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
    console.log(tabPanel)
    tabPanel.hidden = false;
};

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));