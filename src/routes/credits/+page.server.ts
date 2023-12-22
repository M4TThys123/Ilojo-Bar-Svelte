import {gql} from 'graphql-request'
import {hygraphHP} from "../../vendors/hygraph";

export async function load() {
    let query = gql`
         query Pages {
              page(where: {id: "clqfkv2b76mgd0buzonjkx4xk"}) {
                id
                route
                title
                subtitle
                content {
                  html
                }
              }
            }
    `
    const data = await hygraphHP.request(query)

    return data
}