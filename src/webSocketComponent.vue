<template>
  <div>
    <h1>WebSocket Example</h1>
    <div>
      <input v-model="message" placeholder="Type a message" />
      <button @click="sendMessage">Send</button>
    </div>
    <div>
      <h2>Messages:</h2>
      <ul>
        <li v-for="msg in messages" :key="msg">{{ msg }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  setup() {
    const message = ref('');
    const messages = ref<string[]>([]);
    let socket: WebSocket | null = null;

    const sendMessage = () => {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(message.value);
        message.value = '';
      }
    };

    onMounted(() => {
      socket = new WebSocket('ws://localhost:8080');

      socket.onopen = () => {
        console.log('Connected to WebSocket server');
      };

      socket.onmessage = (event: MessageEvent) => {
        messages.value.push(event.data);
      };

      socket.onclose = () => {
        console.log('Disconnected from WebSocket server');
      };

      socket.onerror = (error: Event) => {
        console.error('WebSocket error:', error);
      };
    });

    onUnmounted(() => {
      if (socket) {
        socket.close();
      }
    });

    return {
      message,
      messages,
      sendMessage,
    };
  },
});
</script>

<style scoped>
h1 {
  font-size: 24px;
}
input {
  padding: 8px;
  margin-right: 8px;
}
button {
  padding: 8px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 8px 0;
}
</style>
