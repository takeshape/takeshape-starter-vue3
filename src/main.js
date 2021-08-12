import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'

const link = new HttpLink({
  uri: 'YOUR-ENDPOINT-HERE',
  fetch,
  headers: {
      Authorization : `Bearer YOUR-API-KEY-HERE`
  }
});

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
}).mount('#app')