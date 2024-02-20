// Hàm để hiển thị hoặc ẩn cửa sổ chat
function toggleChat() {
    var chatContainer = document.getElementById('chatContainer');
    var toggleButton = document.querySelector('.toggle-chat');

    // Đảo ngược trạng thái hiển thị của cửa sổ chat
    chatContainer.style.display = (chatContainer.style.display === 'none') ? 'flex' : 'none';
    toggleButton.style.display = (chatContainer.style.display === 'none') ? 'flex' : 'none';
}

// Hàm để xoá toàn bộ nội dung chat
function clearChat() {
    var chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = '';
}

// Inside your main.js or another JavaScript file

let isZoomed = false;

      function toggleZoom() {
        const chatContainer = document.getElementById("chatContainer");

        if (isZoomed) {
          // If zoomed out, reset styles
          chatContainer.classList.remove("zoomed", "horizontal-expand");
        } else {
          // If zoomed in, apply styles
          chatContainer.classList.add("zoomed", "horizontal-expand");
        }

        // Toggle the zoom state
        isZoomed = !isZoomed;
}

function closeChatOnEsc(event) {
    if (event.key === 'Escape') {
      toggleChat();
    }
  }

  document.addEventListener('keydown', closeChatOnEsc);

// Hàm elasticsearch
// const client = new elastic.Client({
//     node: 'http://localhost:9200',
// });

// function search() {
//     const searchTerm = document.getElementById('searchInput').value;

//     // Perform a simple query
//     client.search({
//         index: 'your_index_name',
//         body: {
//             query: {
//                 match: {
//                     your_field_name: searchTerm,
//                 },
//             },
//         },
//     }).then(response => {
//         // Handle the search results
//         const hits = response.body.hits.hits;
//         console.log(hits);
//     }).catch(error => {
//         console.error('Error:', error);
//     });
// }

