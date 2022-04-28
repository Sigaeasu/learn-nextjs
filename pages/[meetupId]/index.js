import MeetupDetail from "../../components/meetups/MeetupDetail"

export default function MeetupDetails() {
    return (
        <MeetupDetail 
            image={"https://images.unsplash.com/photo-1572602648934-1d98de6dab48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
            title={"first meetup"}
            address={"milan"}
            description={"this is first meetup"}
        />
    )
}