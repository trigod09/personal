document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value;
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
});
