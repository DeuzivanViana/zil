import { User } from '../components/User'

export default async function Page({params}) {
  return <User params={await params}/>
}
  