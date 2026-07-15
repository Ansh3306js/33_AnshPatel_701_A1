document.getElementById('actionBtn').addEventListener('click', () => {
    const statusBox = document.getElementById('statusMessage');
    statusBox.textContent = 'Client-side script loaded and executed successfully!';
    statusBox.className = 'success';
});
