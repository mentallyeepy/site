// Wait for the button to exist
const btn = document.getElementById('directoryButton');

btn.addEventListener('click', () => {
    // Opens the directory in a small independent window
    window.open(
        'directory.html', 
        'SiteDirectory', 
        'width=350,height=450,resizable=yes'
    );
});
