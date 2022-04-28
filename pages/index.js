import { useState, useEffect } from "react"
import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'first meetup',
        image: 'https://images.unsplash.com/photo-1572602648934-1d98de6dab48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        address: 'milan',
        description: 'this is first meetup'
    },
    {
        id: 'm2',
        title: 'second meetup',
        image: 'https://images.unsplash.com/photo-1572602648934-1d98de6dab48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        address: 'milan',
        description: 'this is second meetup'
    },
]

export default function Home() {
    const [loadedMeetups, setLoadedMeetups] = useState([])

    useEffect(() => {
        setLoadedMeetups(DUMMY_MEETUPS)
    }, [])
    

    return (
        <MeetupList meetups={loadedMeetups} />
    )
}