import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { firestore } from '../utils/firebase'

export const getStaticProps = async () => {
  const postRef = firestore.collection('posts')
  const snapshot = await postRef.get()
  const posts = snapshot.docs.map((post) => ({
    id: post.id,
    ...post.data(),
  }))
  return {
    props: {
      posts,
    },
  }
}
export default function Home(props) {
  console.log(props)
  return (
    <div className={styles.container}>
      <Head>
        <title>Portable Projectors</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Hello Mates!</h1>
    </div>
  )
}
