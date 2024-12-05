import { Layout } from '../Layout'
import { Post } from '../Post'

export const Home = () => {
  return <Layout title={'Home'}>
    <Post
        username={'Deuzivan'}
        content={'De acordo com a Google, ela está desenvolvendo um computador quântico, capaz de reformular toda nossa tecnologia atual. Uma das principais vantagens da computação quântica, seria possível descobrir novas moléculas, portéinas e consequentimente novos tratamentos para doenças e talvez curas.'}
        key={0}
    />
  </Layout>
}