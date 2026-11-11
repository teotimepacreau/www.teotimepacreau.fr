let shareData = {
    title: document.title,
    url: window.location.href
};

let btn = document.getElementById('partage-btn');

btn.addEventListener('click', async () => {
    // 1. Check if the browser supports the Web Share API
    if (navigator.share) {
        try {
            await navigator.share(shareData);
        } catch (err) {
            // AbortError happens if the user closes the share menu (not a real bug)
            if (err.name !== 'AbortError') {
                console.error('Error sharing:', err);
            }
        }
    } else {
        // 2. Fallback for desktop browsers / environments without support
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert('Link copié !'); // Or show a custom UI toast
        } catch (err) {
            console.error('Failed to copy link: ', err);
        }
    }
});