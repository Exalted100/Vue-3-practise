const Counter = {
    data() {
      return {
        counter: 0
      }
    },
    mounted() {
      setInterval(() => {
        this.counter++
      }, 1000)
    }
  }
  
  Vue.createApp(Counter).mount('#counter')

  const AttributeBinding = {
    data() {
      return {
        message: 'You loaded this page on ' + new Date().toLocaleString()
      }
    }
  }
  
  Vue.createApp(AttributeBinding).mount('#bind-attribute')

  const EventHandling = {
    data() {
      return {
        message: 'Hello Vue.js!'
      }
    },
    methods: {
      reverseMessage() {
        this.message = this.message
          .split('')
          .reverse()
          .join('')
      }
    }
  }
  
  Vue.createApp(EventHandling).mount('#event-handling')

  const TwoWayBinding = {
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }
  
  Vue.createApp(TwoWayBinding).mount('#two-way-binding')

  const ConditionalRendering = {
    data() {
      return {
        seen: true
      }
    }
  }
  
  Vue.createApp(ConditionalRendering).mount('#conditional-rendering')

  const ListRendering = {
    data() {
      return {
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
      }
    }
  }
  
  Vue.createApp(ListRendering).mount('#list-rendering')

  const TodoList = {
    data() {
      return {
        groceryList: [
          { id: 0, text: 'Vegetables' },
          { id: 1, text: 'Cheese' },
          { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
      }
    }
  }
  
  const app = Vue.createApp(TodoList)

// Define a new component called todo-item
app.component('todo-item', {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
})

// Mount Vue application
app.mount('#todo-list-app')

Vue.createApp({
  data() {
    return {
      counter: 0
    }
  }
}).mount('#basic-event')

Vue.createApp({
  methods: {
    say(message) {
      alert(message)
    }
  }
}).mount('#inline-handler')