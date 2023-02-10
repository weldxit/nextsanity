import { createClient} from "next-sanity"
import createImageUrlBuilder from '@sanity/image-url';
const client =  createClient({
    projectId: "nl31cni5",
    dataset: "production",
    apiVersion: "2021-02-10",
    useCdn: true
  })
  
  export default client;