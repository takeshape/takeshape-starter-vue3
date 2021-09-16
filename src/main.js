import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'

const link = new HttpLink({
  uri: process.env.VUE_APP_TAKESHAPE_ENDPOINT,
  fetch,
  headers: {
      Authorization : `Bearer ${process.env.VUE_APP_TAKESHAPE_ENDPOINT}`
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