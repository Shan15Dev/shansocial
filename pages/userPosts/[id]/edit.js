import {useRouter} from 'next/router'

export default function EditPage({session}){
    const router = useRouter()
    const id = router.query.id;

    return(
        <div>
            <h1>test</h1>
        </div>
    )
}