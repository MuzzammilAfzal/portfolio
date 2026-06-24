"use client"
import Link from 'next/link'
import React from 'react'

const Projects = () => {
    
  return (
    <div className='  w-full  mt-20 opacity-90 '>
        <div className='flex justify-center mb-4'>
           <span className='text-2xl text-white '><u>Projects</u></span>
        </div>
        <div className='flex flex-wrap gap-4 justify-center '>
        

        <div className='w-[90%] md:w-[40%] h-auto  border border-white rounded-2xl p-4 text-black bg-white hover:scale-105 transition-transform'>
           <div>
             <span className='text-2xl font-bold '>Electronics e-Commerce Store</span>
           </div>
            <div className='m-2'>
                <Link className='text-blue-400  bg-black  rounded-4xl  px-4 py-2 hover:bg-black hover:text-white '
             href={"https://electronics-e-commerce-two.vercel.app/"} target='_blank'
            >Link➚</Link>
            </div>
           <div className='p-2'>
             <span className='w-full font-bold underline'>
             Key Highlights:-
             </span>
            <div className=' px-2'>
             <li>
                Complete E-commerce System Users can browse electronic products (phones, laptops, TVs, etc.), <br />
                view details, add to cart, buy, and track orders.
             </li>
             <li>
                  Authentication & Security Includes Sign Up / Login with JWT-based authentication
             </li>
             <li>
                 Product Browsing Experience Clean product cards showing images, specs, and pricing, with Add to Cart and Buy Now options.
             </li>
             <li>
                 User Dashboard <br/>
                 My Cart: Manage added items ,<br />
                 My Orders: View past purchases
             </li>
             <li>
                 Modern Tech Stack <br />
             Frontend: React.js <br />
             Backend: Node.js <br />
             Database: MongoDB <br />
             Deployment: Vercel  <br />
             </li>
            </div>
           </div>
        </div>





          <div className='w-[90%] md:w-[40%] h-auto  border border-white rounded-2xl p-4 text-black bg-white hover:scale-105 transition-transform'>
           <div>
             <span className='text-2xl font-bold '>Smart Bookmark Application</span>
           </div>
            <div className='m-2'>
                <Link className='text-blue-400  bg-black  rounded-4xl  px-4 py-2 hover:bg-black hover:text-white '
             href={"https://smart-bookmark-app-self-six.vercel.app/"} target='_blank'
            >Link➚</Link>
            </div>
           <div className='p-2'>
             <span className='w-full font-bold underline'>
             Key Highlights:-
             </span>
            <div className=' px-2'>
             <li>
                 Smart Bookmark Management System <br />
                  Users can save, organize, and manage bookmarks (links) efficiently with real-time updates and personalized access.
             </li>
             <li>
                  Authentication & Security <br />
                  Secure login with Google OAuth via Supabase Auth, ensuring user-specific private data with Row Level Security (RLS).
             </li>
             <li>
                 User Dashboard <br />
                   My Bookmarks: Clean UI to add, delete, view and manage saved links
                   Real-time Updates: Instantly reflects changes using live subscriptions
             </li>
             <li>
                  Modern Tech Stack <br />
                    Frontend: Next.js (App Router), Tailwind CSS <br />
                    Backend: Supabase (Postgres, Auth, Realtime) <br />
                    ORM: Prisma <br />
                    Deployment: Vercel <br />
             </li>
            </div>
           </div>
        </div>







        <div className='w-[90%] md:w-[40%] h-fit border border-white rounded-2xl p-4 text-black bg-white hover:scale-105 transition-transform'>
           <div>
             <span className='text-2xl font-bold '>Food Delivery App</span>
           </div>
           <div className='m-2'>
                <Link className='text-blue-400  bg-black  rounded-4xl  px-4 py-2 hover:bg-black hover:text-white '
             href={"https://github.com/MuzzammilAfzal/Food-Delivery-App"} target='_blank'
            >Link➚</Link>
            </div>
           <div className='p-2'>
             <span className='w-full font-bold underline'>
             Key Highlights:-
             </span>
            <div className=' px-2'>
             <li>
                 Complete Food Delivery System <br />
                 Supports seamless interaction among customers, restaurants, and delivery riders with smooth ordering and tracking flow.
             </li>
             <li>
                  Real-Time Order Tracking (WebSockets) <br />

            Live updates showing: <br />

            Order accepted by restaurant <br />

            Being prepared <br />

            Picked up by rider <br />

            Out for delivery <br />

            Delivered <br />

            All updates reflect instantly for users without refreshing the page. <br />
             </li>
             <li>
                  Secure Authentication <br />

                JWT-based login & registration <br />

                Tokens stored in localStorage <br />

                Role-based access for: 

                Customers , Restaurants , Riders 
             </li>
             <li>
                  RESTful API Backend <br />

                Built with Node.js + Express.js, handling: <br />

               User authentication,

               Menu items,

              Order creation,

               Order status updates,

                Assigning riders.
             </li>
             <li>
                 Modern Tech Stack <br />
             Frontend: React.js <br />
             Backend: Node.js <br />
             Database: MongoDB <br />
             Real-Time: WebSocket <br />
             Auth: JWT  <br />
             </li>
            </div>
           </div>
        </div>


        </div>
    </div>
  )
}

export default Projects