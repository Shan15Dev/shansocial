import { useRedirectToLogin } from '../lib/session'

export default function ProfilePage({ session }) {
    useRedirectToLogin(session);
    return <pre>{JSON.stringify(session, null, 4)}</pre>;
}
