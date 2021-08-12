<template>
  <div>
    <h1>Product Collections</h1>
    <div v-for="item in getCollectionList.items" :key="item._id">
      <h2>{{item.title}}</h2>
      <ul>
        <li v-for="product in item.products" :key="product._id">
          {{product.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useQuery, useResult} from '@vue/apollo-composable'
import { gql } from '@apollo/client/core'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    const {result} = useQuery(gql`
      query {
        getCollectionList {
          items  {
            _id
            title
            products {
              _id
              name
            }
          }
        }
      }
    `)    

    const getCollectionList = useResult(result, null,
      data=>data.getCollectionList
    )

    return { getCollectionList }
  }
}
</script>
