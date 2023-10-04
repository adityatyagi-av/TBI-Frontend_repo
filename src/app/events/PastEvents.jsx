/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from 'react'
import EachPastEventCard from './EachPastEventCard'
import JoinUs from './JoinUs'
const RecentEvents = () => {
    const [pastEvents, setPastEvents] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/events/';

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((responseData) => {
                setPastEvents(responseData.past_events);
            })
            .catch((error) => {
                console.error('Error fetching upcoming events data:', error);
            });
    }, []);
    return (
        <section className="bg-white max-w-screen-xl mx-auto">
            <div className="container px-6 py-10 mx-auto">
                <div className="py-9">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
                        Browse some of our previous events!
                    </h1>

                    <div className="flex mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                    {pastEvents.length > 0 ? (
                        pastEvents.map((event) => {
                            return (

                                <EachPastEventCard
                                    key={event.id}
                                    imgUrl={`http://127.0.0.1:8000${event.image}`}
                                    title={event.title}
                                    desc={event.description}
                                />
                            )
                        })
                    ) : (<div>
                        nothing
                    </div>)}
                </div>
                <JoinUs />
            </div>
        </section>
    )
}

export default RecentEvents
