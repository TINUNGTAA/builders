// src/components/Contact.tsx
import React, { useState } from "react";
import assets from "../../assets/assests";
import Footer from "../layout/Footer";
import ContactLayout from "../layout/ContactLayout";


interface FormState {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    inquiryType: string;
    region: string;
    message: string;
}

export default function Contact() {
    const [form, setForm] = useState<FormState>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiryType: "",
        region: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
        // TODO: send form data
    };

    return (
        <div>
            {/* Hero */}
            <ContactLayout backgroundImage={assets.care.bg8}>
                <div className="text-white text-center h-[550px] flex items-center justify-center">
                    <h1 className="text-[32px] md:text-[64px] font-bold leading-snug">
                        Contact<span className="text-brown px-2">Us</span>
                    </h1>
                </div>
            </ContactLayout>

            <div className="mx-4 md:mx-0 mb-24">
                {/* Desktop View */}
                <div className="hidden md:flex min-h-screen">
                    <div>
                        <div className="relative p-8 space-y-20 text-white">
                            {/* desktop map */}
                            <img
                                src={assets.contact.image5}
                                alt="Map for desktop"
                                className="inset-0 -mt-[50%] -ml-10 w-full h-full object-cover"
                            />
                        </div>
                        <div className="z-10 pt-10 px-10 space-y-6">
                            <h2 className="text-xl font-semibold">Our Offices</h2>
                            <div className="mt-2">
                                <p className="font-medium">Volta Office</p>
                                <p>
                                    13785 Research Blvd.<br />
                                    Suite 150<br />
                                    Austin, TX 78750<br />
                                    (512) 834‑8429
                                </p>
                            </div>
                            <div className="mt-4">
                                <p className="font-medium">Northern Office</p>
                                <p>
                                    13785 Research Blvd.<br />
                                    Suite 150<br />
                                    Austin, TX 78750<br />
                                    (512) 834‑8429
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Right (Form) */}
                    <div className="w-1/2 bg-white p-12  items-center">
                        <div className=" max-w-md">
                            <h1 className="text-2xl font-bold mb-2">Contact Us Here</h1>
                            <p className="text-gray-600 mb-6">
                                For information or questions about our new homes or communities,
                                please fill out the form below. Someone will respond to you
                                promptly.
                                <br /><br />
                                For Customer Care requests, please use the Customer Care request form.
                            </p>
                            <form onSubmit={handleSubmit} className="space-y-8 bg-[#E9EAEF] px-20 py-10 flex-1 w-[750px]">
                                <p className="text-[32px]">Contact Information</p>
                                <div className="flex space-x-4">
                                    <input
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        className="flex-1 border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring"
                                        required
                                    />
                                    <input
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                        className="flex-1 border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring"
                                        required
                                    />
                                </div>
                                <div className="flex space-x-4">
                                    <input
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="flex-1 border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring"
                                        required
                                    />
                                    <input
                                        name="phone"
                                        type="tel"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className="flex-1 border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring"
                                    />
                                </div>
                                <p className="text-[32px]">Your Needs:</p>
                                <div>
                                    <label className="block mb-1 text-gray-700">Inquiry Type</label>
                                    <select
                                        name="inquiryType"
                                        value={form.inquiryType}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring"
                                        required
                                    >
                                        <option value="">Select type…</option>
                                        <option value="sales">Sales</option>
                                        <option value="support">Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block mb-1 text-gray-700">Region</label>
                                    <select
                                        name="region"
                                        value={form.region}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring"
                                    >
                                        <option value="">Select region…</option>
                                        <option value="north">North</option>
                                        <option value="south">South</option>
                                        <option value="east">East</option>
                                        <option value="west">West</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block mb-1 text-gray-700">How can we help you?</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="px-10 bg-[#1E305E] text-white py-2 rounded hover:bg-blue-900 transition"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="md:hidden flex flex-col">
                    {/* Map */}
                    <img
                        src={assets.contact.image6}
                        alt="Map for mobile"
                        className=" w-full h-full object-contain"
                    />

                    {/* Form */}
                    <div className="bg-white p-4">
                        <div className="w-full max-w-md mx-auto">
                            <h1 className="text-2xl font-bold mb-2 text-center">Contact Us Here</h1>
                            <p className="text-gray-600 mb-6 text-sm text-center">
                                For information or questions about our new homes or communities,
                                please fill out the form below. Someone will respond to you
                                promptly.
                                <br /><br />
                                For Customer Care requests, please use the Customer Care request form.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6 bg-[#E9EAEF] px-6 py-8">

                                <p className="text-center">Contact Information:</p>
                                {/* First & Last Name */}
                                <div className="flex space-x-4">
                                    <input
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        className="w-full border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring"
                                        required
                                    />
                                    <input
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                        className="w-full border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring"
                                        required
                                    />
                                </div>

                                {/* Email & Phone */}
                                <div className="flex space-x-4">
                                    <input
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="w-full border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring"
                                        required
                                    />
                                    <input
                                        name="phone"
                                        type="tel"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className="w-full border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring"
                                    />
                                </div>

                                <p>Your Needs:</p>
                                {/* Inquiry Type */}
                                <div>
                                    <label className="block mb-1 text-gray-700">Inquiry Type</label>
                                    <select
                                        name="inquiryType"
                                        value={form.inquiryType}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:ring"
                                        required
                                    >
                                        <option value="">Select type…</option>
                                        <option value="sales">Sales</option>
                                        <option value="support">Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {/* Region */}
                                <div>
                                    <label className="block mb-1 text-gray-700">Region</label>
                                    <select
                                        name="region"
                                        value={form.region}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:ring"
                                    >
                                        <option value="">Select region…</option>
                                        <option value="north">North</option>
                                        <option value="south">South</option>
                                        <option value="east">East</option>
                                        <option value="west">West</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block mb-1 text-gray-700">How can we help you?</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#1E305E] text-white py-2 rounded hover:bg-blue-900 transition"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Offices */}
                    <div className="p-8">
                        <h2 className="text-xl font-semibold mb-4">Our Offices</h2>
                        <div className="space-y-6 text-sm text-gray-800">
                            <div>
                                <p className="font-medium">Volta Office</p>
                                <p>
                                    13785 Research Blvd.<br />
                                    Suite 150<br />
                                    Austin, TX 78750<br />
                                    (512) 834‑8429
                                </p>
                            </div>
                            <div>
                                <p className="font-medium">Northern Office</p>
                                <p>
                                    13785 Research Blvd.<br />
                                    Suite 150<br />
                                    Austin, TX 78750<br />
                                    (512) 834‑8429
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
