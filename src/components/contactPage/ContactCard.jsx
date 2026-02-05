"use client"; 

import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { sendEmail } from "../../utils/sendEmail";

function ContactCard() {
    return ( 
        <section className="flex flex-col gap-4 items-center w-full md:min-w-[600px]">
            <SectionTitle text={"Contact me"}/>
            <Image 
                    src="/images/terrier_mascot.png" 
                    alt="Terrier using a laptop" 
                    width={300}
                    height={300}
                    className="rounded-full"
            />
            <form className="flex flex-col gap-2 w-4/5 items-center"
                action={async (formData) => {
                    const result = await sendEmail(formData);
                    if (result?.success) { 
                        alert("Email sent!");
                    } else {
                        alert("Error sending email");
                    }
                }}>
                <label htmlFor="email" className="w-full text-white">Email:</label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Your email"
                    className="bg-white text-main-bg p-1.5 rounded-xl w-full"
                 />
                 <textarea 
                    name="message" 
                    required
                    placeholder="Write your message"
                    className="bg-white text-main-bg p-1.5 rounded-lg w-full min-h-[100px]"
                 />
                 <button type="submit" 
                 className="bg-main-cyan w-fit p-2.5 text-main-purple font-bold rounded-full cursor-pointer mt-1.5 hover:bg-white hover:text-main-purple transition-colors">
                    Send Message
                 </button>
            </form>
        </section>
     );
}

export default ContactCard;