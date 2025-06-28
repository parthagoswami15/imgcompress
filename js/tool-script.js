// Tool page specific script - handles header/footer loading for individual tools
document.addEventListener('DOMContentLoaded', () => {
    // Load header and footer with correct relative paths for tool pages
    fetch('../header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-header').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading header:', error);
            // Fallback header if loading fails
            document.getElementById('main-header').innerHTML = `
                <nav style="background: #333; color: white; padding: 15px 0;">
                    <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; justify-content: space-between; align-items: center;">
                        <a href="../index.html" style="color: white; text-decoration: none; font-size: 1.5rem;">🛠️ Multi-Tools</a>
                        <div>
                            <a href="../index.html" style="color: white; text-decoration: none; margin: 0 10px;">Home</a>
                        </div>
                    </div>
                </nav>
            `;
        });

    fetch('../footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-footer').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            // Fallback footer if loading fails
            document.getElementById('main-footer').innerHTML = `
                <footer style="background: #333; color: white; text-align: center; padding: 20px 0; margin-top: 40px;">
                    <p>&copy; 2024 Multi-Tools. All rights reserved.</p>
                </footer>
            `;
        });
});

