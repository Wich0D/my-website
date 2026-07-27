"use client";

import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { sendEmail } from "../../utils/sendEmail";

function ContactCard() {
    return (
        <section className="flex flex-col gap-8 items-center w-full px-4 py-8 mx-auto">
            <SectionTitle text={"Contact me"} size={5} />

            <div className="flex flex-col gap-6 items-center w-full max-w-[500px] bg-main-purple p-8 rounded-3xl shadow-2xl border-t border-white/10">
                <Image
                    src="/images/terrier_mascot.png"
                    alt="Terrier using a laptop"
                    width={200}
                    height={200}
                    className="rounded-full drop-shadow-lg"
                />
                <form className="flex flex-col gap-4 w-full"
                    action={async (formData) => {
                        const result = await sendEmail(formData);
                        if (result?.success) {
                            alert("Email sent!");
                        } else {
                            alert("Error sending email");
                        }
                    }}>

                    <div className="flex flex-col gap-1.5 w-full">
                        <label htmlFor="email" className="w-full text-white font-medium ml-1">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="your.email@example.com"
                            className="bg-white/10 text-white placeholder-gray-300 p-3 rounded-xl w-full border border-white/20 focus:outline-none focus:border-main-cyan transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5 w-full">
                        <textarea
                            name="message"
                            required
                            placeholder="Write your message here..."
                            className="bg-white/10 text-white placeholder-gray-300 p-3 rounded-xl w-full min-h-[120px] border border-white/20 focus:outline-none focus:border-main-cyan transition-colors resize-y"
                        />
                    </div>

                    <button type="submit"
                        className="bg-main-cyan w-full p-3.5 text-main-purple font-bold rounded-xl cursor-pointer mt-2 hover:bg-white transition-colors shadow-lg hover:-translate-y-0.5 transform duration-200">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactCard;