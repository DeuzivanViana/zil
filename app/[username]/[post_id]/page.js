import { UserPost } from '@/app/components/UserPost'

export default async function Page({params}) {
  return <UserPost params={await params}/>
}
  