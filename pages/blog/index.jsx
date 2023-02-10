import styles from '../../styles/blog.module.css'
import  {createClient} from 'next-sanity'

export default function Blog({data}) {
// const client = new SanityClient({

//     projectId: '9q3vfhm7l33rus21toc8fndupq76itje',
//     dataset: 'production',
//     useCdn: true,
// })
console.log(data)

   
    return(
        <>
        <div className={styles.body}>
            sanity data willl be shown here !!
            <hr />
  
        </div>
        </>
    )
}

export async function getServerSideProps(context) {
// const client = createClient({
//     projectId: '5wwaoaxj',
//     dataset: 'testing',
//     useCdn: true,
// })
const query = "*[_type=='pen']";
//  const url = `http://5wwaoaxj.api.sanity.io/v2021-10-21/data/query/testing?query=${query}`;
// const res = await fetch(url);
// const data = res.json();    

//     return {
//         props: {
//            data,
//         },
//     };

// *[_type==%27pen%27]

const token = 'skNeCg68JtXURhAvxXYyoFsRCMOMd40InTJJBOLyM12RW6RGem1Td3JQ8IQHjYT7LXZRxu9CM89STxR1ruSmzcHXp8va079EwSCTLAuitpJVUucg8QtVg7P8RjWvZu74MG47bNhaGYAjD7xeFGxcfA8rm7h2QJEwYZtqok0N4qhG6UBmRP7z'
const res = await fetch(`https://5wwaoaxj.api.sanity.io/v2021-10-21/data/query/testing?query=${query}`,{headers:{  Authorization: `Bearer ${token}`}});
const data = await res.json();

return {
  props: {
    data,
  },
};

}

