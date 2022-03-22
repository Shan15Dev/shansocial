import { useEffect, useState } from "react"

export default function User({ session }) {
    return (
        <div>
            {
                session.user && 
                <div>
                    <p>{session.user.name}</p>
                    <button onClick={session.logout}>LogOut</button>
                </div>
            }
            {
                !session.user && <a href="/login"><button>Log In</button></a>
            }
        </div>
    )
}