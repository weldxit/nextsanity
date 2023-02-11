import styles from '../../styles/blog.module.css'
import  {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog({data}) {
const builder = imageUrlBuilder(client)

const postdata = data.result

   
    return(
        <>
        <div className={styles.body}>
            sanity data willl be shown here !!
            <hr />
            {postdata.map((pst, i)=>{
              const url = builder.image(pst.mainImage)
            
              return(
                <Link href={`/blog/${pst.slug.current}`} key={i} >
                <div >
                <h1>{pst.title}</h1>
                <h2>{pst.slug.current}</h2>
              {console.log(JSON.stringify(pst.author.title))}
          
                {/* <Image src={url} height={600} width ={1000} alt=''/> */}
                <img src={url} alt="image" className={styles.image}/>
                </div>
                </Link>
              )
            })}

        </div>
        </>
    )
}

export async function getServerSideProps(context) {
const query = "*[_type=='post']";
const token = 'skNeCg68JtXURhAvxXYyoFsRCMOMd40InTJJBOLyM12RW6RGem1Td3JQ8IQHjYT7LXZRxu9CM89STxR1ruSmzcHXp8va079EwSCTLAuitpJVUucg8QtVg7P8RjWvZu74MG47bNhaGYAjD7xeFGxcfA8rm7h2QJEwYZtqok0N4qhG6UBmRP7z'
const res = await fetch(`https://5wwaoaxj.api.sanity.io/v2021-10-21/data/query/testing?query=${query}`,{headers:{  Authorization: `Bearer ${token}`}});
const data = await res.json();

return {
  props: {
    data,
  },
};

}

