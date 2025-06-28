
document.addEventListener('DOMContentLoaded', () => {
    // Determine the correct path based on current page location
    const isInToolsDirectory = window.location.pathname.includes('/tools/');
    const basePath = isInToolsDirectory ? '../' : '';
    
    // Load header and footer with correct paths
    fetch(basePath + 'header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-header').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading header:', error);
            document.getElementById('main-header').innerHTML = '<div style="padding: 20px; background: #333; color: white; text-align: center;"><h1>🛠️ Multi-Tools</h1></div>';
        });

    fetch(basePath + 'footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-footer').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            document.getElementById('main-footer').innerHTML = '<div style="padding: 20px; background: #333; color: white; text-align: center;"><p>&copy; 2024 Multi-Tools. All rights reserved.</p></div>';
        });

    // Tool data structure
    const toolsData = {
        "Image Tools": [
            { name: "Image to PNG Converter", description: "Convert any image format to PNG", file: "image-to-png.html" },
            { name: "Image HD Enhancer", description: "Upscale and enhance image resolution", file: "image-hd-enhancer.html" },
            { name: "Image to JPG Converter", description: "Convert images to JPG format", file: "image-to-jpg.html" },
            { name: "Image Resizer", description: "Adjust dimensions without quality loss", file: "image-resizer.html" },
            { name: "Image Compressor", description: "Reduce file size while preserving clarity", file: "image-compressor.html" },
            { name: "Image Cropper", description: "Crop images to custom dimensions", file: "image-cropper.html" },
            { name: "Convert Image to Base64", description: "Generate Base64 code from images", file: "image-to-base64.html" },
            { name: "Convert WebP to PNG", description: "Transform WebP files to PNG", file: "webp-to-png.html" },
            { name: "GIF Maker", description: "Create animated GIFs from images/videos", file: "gif-maker.html" },
            { name: "QR Code Generator", description: "Generate customizable QR codes", file: "qr-code-generator.html" },
            { name: "Screenshot to PDF Converter", description: "Convert screenshots to PDF", file: "screenshot-to-pdf.html" },
            { name: "Remove Background", description: "Auto-remove image backgrounds", file: "remove-background.html" }
        ],
        "SEO Tools": [
            { name: "Meta Tag Generator", description: "Create SEO-optimized meta tags", file: "meta-tag-generator.html" },
            { name: "Keyword Density Checker", description: "Analyze keyword frequency", file: "keyword-density-checker.html" },
            { name: "Sitemap Generator", description: "Generate XML/HTML sitemaps", file: "sitemap-generator.html" },
            { name: "Robots.txt Generator", description: "Create robots.txt files", file: "robots-txt-generator.html" },
            { name: "Google Index Checker", description: "Verify URL indexing status", file: "google-index-checker.html" },
            { name: "Domain Authority Checker", description: "Measure domain credibility", file: "domain-authority-checker.html" },
            { name: "Backlink Checker", description: "Analyze backlink profiles", file: "backlink-checker.html" },
            { name: "Page Speed Checker", description: "Test website loading speed", file: "page-speed-checker.html" },
            { name: "XML Sitemap Validator", description: "Validate sitemap syntax", file: "xml-sitemap-validator.html" },
            { name: "Mobile-Friendly Test", description: "Check mobile responsiveness", file: "mobile-friendly-test.html" }
        ],
        "Text Tools": [
            { name: "Word Counter", description: "Count words/characters in text", file: "word-counter.html" },
            { name: "Character Counter", description: "Track character/line count", file: "character-counter.html" },
            { name: "Case Converter", description: "Change text case (upper/lower/title)", file: "case-converter.html" },
            { name: "Plagiarism Checker", description: "Detect duplicate content", file: "plagiarism-checker.html" },
            { name: "Grammar Checker", description: "Correct spelling/grammar errors", file: "grammar-checker.html" },
            { name: "Text-to-Speech", description: "Convert text into audio", file: "text-to-speech.html" },
            { name: "Speech-to-Text", description: "Transcribe audio to text", file: "speech-to-text.html" },
            { name: "URL Encoder & Decoder", description: "Encode/decode URLs", file: "url-encoder-decoder.html" },
            { name: "Fancy Text Generator", description: "Create stylish Unicode text", file: "fancy-text-generator.html" },
            { name: "Random Text Generator", description: "Generate placeholder text", file: "random-text-generator.html" }
        ],
        "Developer Tools": [
            { name: "JSON Formatter", description: "Format and validate JSON", file: "json-formatter.html" },
            { name: "HTML to Markdown Converter", description: "Convert HTML to Markdown", file: "html-to-markdown.html" },
            { name: "CSS Minifier", description: "Compress CSS code", file: "css-minifier.html" },
            { name: "JavaScript Minifier", description: "Minify JS files", file: "javascript-minifier.html" },
            { name: "SQL Formatter", description: "Beautify SQL queries", file: "sql-formatter.html" },
            { name: "HTACCESS Redirect Generator", description: "Create redirect rules", file: "htaccess-redirect-generator.html" },
            { name: "Markdown to HTML Converter", description: "Transform Markdown to HTML", file: "markdown-to-html.html" },
            { name: "Color Code Picker", description: "Convert HEX/RGB/HSL values", file: "color-code-picker.html" },
            { name: "Base64 Encoder & Decoder", description: "Encode/decode Base64 strings", file: "base64-encoder-decoder.html" },
            { name: "IP Address Lookup", description: "Retrieve IP details", file: "ip-address-lookup.html" }
        ],
        "Math & Calculators": [
            { name: "Percentage Calculator", description: "Calculate % values", file: "percentage-calculator.html" },
            { name: "Age Calculator", description: "Compute age from birthdate", file: "age-calculator.html" },
            { name: "BMI Calculator", description: "Measure Body Mass Index", file: "bmi-calculator.html" },
            { name: "Loan EMI Calculator", description: "Estimate loan repayments", file: "loan-emi-calculator.html" },
            { name: "Scientific Calculator", description: "Advanced math functions", file: "scientific-calculator.html" },
            { name: "Discount Calculator", description: "Calculate sale prices", file: "discount-calculator.html" },
            { name: "Currency Converter", description: "Real-time exchange rates", file: "currency-converter.html" },
            { name: "Time Zone Converter", description: "Convert global time zones", file: "time-zone-converter.html" },
            { name: "Binary to Decimal Converter", description: "Convert binary numbers", file: "binary-to-decimal.html" },
            { name: "Tip Calculator", description: "Split bills/tips", file: "tip-calculator.html" }
        ],
        "Unit Converters": [
            { name: "Length Converter", description: "Convert mm/cm/m/km/inches/ft", file: "length-converter.html" },
            { name: "Weight Converter", description: "Transform kg/lbs/oz/g", file: "weight-converter.html" },
            { name: "Speed Converter", description: "Switch between km/h, mph, m/s", file: "speed-converter.html" },
            { name: "Temperature Converter", description: "°C/°F/Kelvin", file: "temperature-converter.html" },
            { name: "Volume Converter", description: "Convert liters/gallons/pints", file: "volume-converter.html" },
            { name: "Data Storage Converter", description: "Bytes/KB/MB/GB/TB", file: "data-storage-converter.html" },
            { name: "Energy Converter", description: "Joules/calories/kWh", file: "energy-converter.html" },
            { name: "Pressure Converter", description: "Pascal/bar/psi/atm", file: "pressure-converter.html" },
            { name: "Fuel Efficiency Converter", description: "MPG/kmpl/L/100km", file: "fuel-efficiency-converter.html" },
            { name: "Angle Converter", description: "Degrees/radians/gradians", file: "angle-converter.html" }
        ],
        "Security & Encryption Tools": [
            { name: "MD5 Hash Generator", description: "Generate MD5 checksums", file: "md5-hash-generator.html" },
            { name: "SHA256 Hash Generator", description: "Create SHA-256 hashes", file: "sha256-hash-generator.html" },
            { name: "Password Generator", description: "Create strong passwords", file: "password-generator.html" },
            { name: "Random String Generator", description: "Generate secure strings", file: "random-string-generator.html" },
            { name: "URL Shortener", description: "Shorten and track URLs", file: "url-shortener.html" },
            { name: "IP Geolocation Finder", description: "Locate IP addresses", file: "ip-geolocation-finder.html" },
            { name: "SSL Certificate Checker", description: "Validate SSL/TLS certs", file: "ssl-certificate-checker.html" },
            { name: "Whois Lookup", description: "Check domain ownership", file: "whois-lookup.html" },
            { name: "HTTP Headers Checker", description: "Analyze HTTP headers", file: "http-headers-checker.html" },
            { name: "Privacy Policy Generator", description: "Create GDPR-compliant policies", file: "privacy-policy-generator.html" }
        ],
        "Social Media Tools": [
            { name: "YouTube Thumbnail Downloader", description: "Download HD thumbnails", file: "youtube-thumbnail-downloader.html" },
            { name: "Instagram Photo Downloader", description: "Save Instagram images", file: "instagram-photo-downloader.html" },
            { name: "Twitter Video Downloader", description: "Download Twitter videos", file: "twitter-video-downloader.html" },
            { name: "Facebook Video Downloader", description: "Save FB videos", file: "facebook-video-downloader.html" },
            { name: "TikTok Video Downloader", description: "Download TikTok content", file: "tiktok-video-downloader.html" },
            { name: "YouTube Tags Extractor", description: "Extract video tags", file: "youtube-tags-extractor.html" },
            { name: "Hashtag Generator", description: "Find trending hashtags", file: "hashtag-generator.html" },
            { name: "Social Media Post Generator", description: "Create engaging posts", file: "social-media-post-generator.html" },
            { name: "Emoji Keyboard", description: "Copy-paste emojis", file: "emoji-keyboard.html" },
            { name: "Twitter Character Counter", description: "Count tweets in real-time", file: "twitter-character-counter.html" }
        ],
        "Miscellaneous Tools": [
            { name: "Barcode Generator", description: "Create UPC/EAN/QR barcodes", file: "barcode-generator.html" },
            { name: "Meme Generator", description: "Design custom memes", file: "meme-generator.html" },
            { name: "Resume Builder", description: "Create professional resumes", file: "resume-builder.html" },
            { name: "Invoice Generator", description: "Generate printable invoices", file: "invoice-generator.html" },
            { name: "Business Name Generator", description: "Find brand names", file: "business-name-generator.html" },
            { name: "Lottery Number Generator", description: "Random lottery picks", file: "lottery-number-generator.html" },
            { name: "Flip a Coin Simulator", description: "Virtual coin toss", file: "flip-coin-simulator.html" },
            { name: "Random Number Generator", description: "Custom-range RNG", file: "random-number-generator.html" },
            { name: "Dice Roller Simulator", description: "Roll virtual dice", file: "dice-roller-simulator.html" },
            { name: "Internet Speed Test", description: "Check download/upload speed", file: "internet-speed-test.html" },
            { name: "Daily Planner Creator", description: "Schedule daily tasks", file: "daily-planner-creator.html" },
            { name: "Wedding Invitation Generator", description: "Design invites", file: "wedding-invitation-generator.html" },
            { name: "Story Plot Generator", description: "Create narrative ideas", file: "story-plot-generator.html" },
            { name: "E-book Creator", description: "Convert text to EPUB/PDF", file: "ebook-creator.html" },
            { name: "AI Chatbot Demo", description: "Test conversational AI", file: "ai-chatbot-demo.html" },
            { name: "IP Address Tracker", description: "Monitor IP activity", file: "ip-address-tracker.html" },
            { name: "Fake Address Generator", description: "Generate dummy addresses", file: "fake-address-generator.html" },
            { name: "Calculator for Electric Bills", description: "Estimate energy costs", file: "electric-bill-calculator.html" },
            { name: "Leap Year Checker", description: "Verify leap years", file: "leap-year-checker.html" },
            { name: "Name to Numerology Calculator", description: "Numerology analysis", file: "name-numerology-calculator.html" }
        ],
        "Document Conversion Tools": [
            { name: "Word to PDF", description: "Convert DOC/DOCX to PDF", file: "word-to-pdf.html" },
            { name: "PDF to Word", description: "Transform PDF to editable DOCX", file: "pdf-to-word.html" },
            { name: "Image to PDF", description: "Merge images into PDF", file: "image-to-pdf.html" },
            { name: "PDF to PPT", description: "Convert PDF to PowerPoint", file: "pdf-to-ppt.html" },
            { name: "PPT to PDF", description: "Turn presentations into PDFs", file: "ppt-to-pdf.html" },
            { name: "Word to PPT", description: "Convert DOCX to PowerPoint", file: "word-to-ppt.html" },
            { name: "PPT to Word", description: "Export PPT slides to DOCX", file: "ppt-to-word.html" }
        ]
    };

    // Generate tool categories HTML
    function generateToolsHTML() {
        let html = '';
        for (const [category, tools] of Object.entries(toolsData)) {
            html += `
                <section class="tool-category">
                    <h2>${category}</h2>
                    <div class="tool-grid">
            `;
            
            tools.forEach(tool => {
                html += `
                    <div class="tool-card" data-tool-name="${tool.name.toLowerCase()}">
                        <h3>${tool.name}</h3>
                        <p>${tool.description}</p>
                        <a href="./tools/${tool.file}" target="_blank" class="open-tool-btn">Open Tool</a>
                    </div>
                `;
            });
            
            html += `
                    </div>
                </section>
                <div class="ad-space">Advertisement Space</div>
            `;
        }
        return html;
    }

    // Load tools into the page
    const toolCategories = document.getElementById('tool-categories');
    toolCategories.innerHTML = generateToolsHTML();

    // Search functionality
    const searchInput = document.getElementById('tool-search');
    searchInput.addEventListener('keyup', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const toolCards = document.querySelectorAll('.tool-card');
        
        toolCards.forEach(card => {
            const toolName = card.getAttribute('data-tool-name');
            const toolText = card.textContent.toLowerCase();
            
            if (toolName.includes(searchTerm) || toolText.includes(searchTerm)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
        
        // Hide empty categories
        const categories = document.querySelectorAll('.tool-category');
        categories.forEach(category => {
            const visibleCards = category.querySelectorAll('.tool-card:not(.hidden)');
            if (visibleCards.length === 0 && searchTerm !== '') {
                category.style.display = 'none';
            } else {
                category.style.display = 'block';
            }
        });
    });
});

