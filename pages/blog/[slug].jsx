import React from 'react';
import { useRouter } from 'next/router';
import client from '../../client'


const Slug = ({data}) => {
    // const router = useRouter()
    // const slug = router.query.slug
    // console.log(data.result)
    
//  
return(
    <>
    </>
)
}

export default Slug;

export async function getServerSideProps(context){
    const {params} = context
    const {slug} = params
    const query =  '*[_type=="post" && slug.current==$slug]'
    const token = 'skNeCg68JtXURhAvxXYyoFsRCMOMd40InTJJBOLyM12RW6RGem1Td3JQ8IQHjYT7LXZRxu9CM89STxR1ruSmzcHXp8va079EwSCTLAuitpJVUucg8QtVg7P8RjWvZu74MG47bNhaGYAjD7xeFGxcfA8rm7h2QJEwYZtqok0N4qhG6UBmRP7z'
    const res = await fetch(`https://5wwaoaxj.api.sanity.io/v2021-10-21/data/query/testing?query=*[_type=="post" && slug.current==$slug]`,{slug},{headers:{  Authorization: `Bearer ${token}`}});
    const data = await res.json();
    // console.log(data.result[0])
    console.log(data)
 
    return{
        props:{
            data,
        }
    }
}
