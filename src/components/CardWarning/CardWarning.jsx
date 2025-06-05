"use client"

import { useState } from "react"

export default function CardWarning() {
    const [isClose, setIsClose] = useState(false)



    return <>
        {
            isClose === false ?

                <div className="card">
                    <div className="header">
                        <div className="image">
                            <svg
                                aria-hidden="true"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <div className="content">
                            <span className="title">The website is down</span>
                            <p className="message">
                                The site is temporarily down. Talk to the site programmer via the button below as soon as possible
                            </p>
                        </div>
                        <div className="actions">
                            <a className="contact" type="button" href="https://t.me/MostafaFathi2022" title="Contact now">
                                Contact now
                            </a>
                            <button onClick={() => {
                                setIsClose(true)
                            }} className="cancel" type="button">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div> : <div
                    className="dots"
                    style={{
                        "--color": "#fff",
                        "--dot-count": "6",
                        "--dot-size": "6px",
                        "--size": "64px",
                        "--speed": "1s",
                        "--spread": "60deg",
                    }}>
                    <div
                        className="dot"
                        style={{
                            "--i": "0",
                        }}
                    />
                    <div
                        className="dot"
                        style={{
                            "--i": "1",
                        }}
                    />
                    <div
                        className="dot"
                        style={{
                            "--i": "2",
                        }}
                    />
                    <div
                        className="dot"
                        style={{
                            "--i": "3",
                        }}
                    />
                    <div
                        className="dot"
                        style={{
                            "--i": "4",
                        }}
                    />
                    <div
                        className="dot"
                        style={{
                            "--i": "5",
                        }}
                    />
                </div>







        }


    </>
}