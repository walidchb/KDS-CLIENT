"use client";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import LooperRedBottomRightContact from "../../../assets/svg/LooperRedBottomRightContact.svg";
import LooperRedTopLeftContact from "../../../assets/svg/LooperRedTopLeftContact.svg";
// import "./style.css";
import NavBar from "@/components/NavBar";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Footer from "@/components/Footer";
// import axios from "axios";

function Contact() {
  return (
    <div>
      <NavBar currentScreen={4} />
      <div className="min-h-screen relative flex flex-col justify-center items-center px-4   bg-cover  bg-white">
        <div className="w-[90%] mt-20 md:mt-0 flex justify-start ">
          <h3 className="text-gray-600 text-4xl font-semibold">Contact us</h3>
        </div>
        <div className="w-[90%]  flex justify-center items-center">
          <div
            style={{ zIndex: 1, position: "absolute", bottom: "0", right: "0" }}
          >
            <LooperRedBottomRightContact />
          </div>
          <div style={{ zIndex: 1, position: "absolute", top: "0", left: "0" }}>
            <LooperRedTopLeftContact />
          </div>

          <div
            style={{ zIndex: 4 }}
            className="w-full my-6 flex justify-center items-center flex-col md:flex-row"
          >
            <div className="h-[450px] w-[350px] sm:w-[450px]  md:w-[450px] rounded-lg p-6 bg-gray-100">
              <div className="text-[#314155] bg-white p-6 flex flex-col justify-center items-start border-[0.5px] border-red-700 rounded-md  h-full text-[18px]">
                <div className="flex items-center mb-[20px]">
                  <FiPhone className="text-white bg-red-700 rounded-full w-[30px] h-[30px] p-1  mr-[20px] text-[25px]" />
                  Call us
                </div>
                <p className="text-gray-400 mb-2 text-sm">
                  We are available 24/7, 7 days a week.
                </p>
                <p>+213 (0) 775 248 016</p>
                <p> +213 (0) 23 602 214</p>
                <div className="min-h-[1px] my-4 w-full bg-gray-200"></div>

                <div className="flex items-center mb-[20px]">
                  <MdOutlineEmail className="text-white bg-red-700 rounded-full w-[30px] h-[30px] p-1  mr-[20px] text-[25px]" />
                  Write us{" "}
                </div>
                <p className="text-gray-400 mb-2 text-sm">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p>kds@kdslabs.com</p>
                <p>Sales@kdslabs.com</p>
              </div>
            </div>
            <div className="h-auto md:h-[450px] w-[350px] sm:w-[450px]  bg-white shadow-2xl rounded-xl md:ml-[40px]   md:w-full p-6">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                validationSchema={Yup.object({
                  name: Yup.string()
                    .min(2, "Too Short!")
                    .max(50, "Too Long!")
                    .required("Required"),
                  email: Yup.string()
                    .email("Invalid email")
                    .required("Required"),
                  message: Yup.string()
                    .min(2, "Too Short!")
                    .max(500, "Too Long!")
                    .required("Required"),
                })}
                onSubmit={() => console.log("object")}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form>
                    <div className="flex w-full flex-col    md:space-x-2 lg:flex-row justify-between">
                      <div className="flex flex-col w-full  mb-[5px]">
                        <Field
                          name="name"
                          type="text"
                          className="bg-gray-100 text-gray-600 border-none w-full h-[50px] p-[12px] text-[15px] rounded-[5px] shadow-md mb-2 md:mb-0"
                          placeholder="Your Name"
                          required
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-[#e74c3c] text-[14px] mt-[5px]"
                        />
                      </div>
                      <div className="flex flex-col w-full  mb-[5px]">
                        <Field
                          name="email"
                          type="email"
                          className="bg-gray-100 text-gray-600 border-none w-full h-[50px] p-[12px] text-[15px] rounded-[5px] shadow-md mb-2 md:mb-0"
                          placeholder="Your Email"
                          required
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-[#e74c3c] text-[14px] mt-[5px]"
                        />
                      </div>
                      <div className="flex flex-col w-full  mb-[5px]">
                        <Field
                          name="email"
                          type="email"
                          className="bg-gray-100 text-gray-600 border-none w-full h-[50px] p-[12px] text-[15px] rounded-[5px] shadow-md mb-2 md:mb-0"
                          placeholder="Your Email"
                          required
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-[#e74c3c] text-[14px] mt-[5px]"
                        />
                      </div>
                    </div>
                    <Field
                      name="message"
                      as="textarea"
                      rows="5"
                      className="bg-gray-100 text-gray-600 mt-4 border-none w-full p-[12px] text-[15px] min-h-[200px] max-h-[400px] resize-y rounded-[5px] shadow-md opacity-90 mb-[20px]"
                      placeholder="Your Message"
                      required
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-[#e74c3c] text-[14px] mt-[5px]"
                    />
                    <div className="flex justify-end">
                      <button className="flex cursor-pointer items-center gap-2 px-2 sm:px-6 py-1 sm:py-3 bg-red-700 text-white rounded-full hover:bg-gray-700 transition-all duration-300">
                        <span>Send message</span>
                        <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                          <i className="text-lg">
                            <VscSend />
                          </i>
                        </span>
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
