import consumer from "channels/consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const messagesContainer = document.getElementById('message-container');
    
    // Verifică dacă elementul există înainte de a adăuga conținut
    if (messagesContainer) {
      messagesContainer.insertAdjacentHTML('beforeend', data.mod_message);
    }
  }
});
