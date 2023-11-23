import {gql} from 'graphql-request'
import {hygraphHP} from "../../vendors/hygraph";

export async function load() {
    let query = gql`
        {
          timelines {
            nummer
            jaartal
            titel
            beschrijving
            
            afbeelding {
                url
            }
          }
        }
    `
    const data = await hygraphHP.request(query)

    return data
}