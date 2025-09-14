const https = require('https');
const fs = require('fs');
const path = require('path');

// Book covers to download
const bookCovers = [
  { filename: 'mindset.jpg', url: 'https://m.media-amazon.com/images/I/41-4Vgf2SvL._SL500_.jpg' },
  { filename: 'obstacle-is-the-way.jpg', url: 'https://m.media-amazon.com/images/I/41Wbb3FU7OL._SL500_.jpg' },
  { filename: 'fountainhead.jpg', url: 'https://m.media-amazon.com/images/I/51-qJKm6Y6L._SL500_.jpg' },
  { filename: 'extreme-ownership.jpg', url: 'https://m.media-amazon.com/images/I/41VPN6R8FGL._SL500_.jpg' },
  { filename: 'alchemy.jpg', url: 'https://m.media-amazon.com/images/I/41rB+b-vhvL._SL500_.jpg' },
  { filename: 'cafe-edge-world.jpg', url: 'https://m.media-amazon.com/images/I/51AH8kKuGCL._SL500_.jpg' },
  { filename: 'thinking-in-bets.jpg', url: 'https://m.media-amazon.com/images/I/41VXhsQKPaL._SL500_.jpg' },
  { filename: 'clear-thinking.jpg', url: 'https://m.media-amazon.com/images/I/41xCBkSCWTL._SL500_.jpg' },
  // Add more covers as needed
];

const downloadDir = path.join(__dirname, '..', 'static', 'images', 'book-covers');

// Ensure download directory exists
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };

    const file = fs.createWriteStream(path.join(downloadDir, filename));
    
    https.get(url, options, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        console.log(`Failed to download ${filename}: ${response.statusCode}`);
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.log(`Error downloading ${filename}:`, err);
      reject(err);
    });
  });
}

async function downloadAllCovers() {
  console.log('Starting book cover downloads...');
  
  for (const cover of bookCovers) {
    try {
      await downloadImage(cover.url, cover.filename);
      // Add delay between downloads to be respectful
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.log(`Failed to download ${cover.filename}:`, error.message);
    }
  }
  
  console.log('Book cover download complete!');
}

downloadAllCovers();