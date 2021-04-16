import React, { useEffect } from 'react'

const TestIf = () => {

    useEffect(() => {
        console.log("creation of TestIf component");
        const timer = setTimeout(() => {
            alert("after 1s...")
        }, 1000)
        return () => {
            clearTimeout(timer);
            console.log("clean up TestIf component");
        }
    }, [])

    return (
        <div>
            <h3>test if</h3>
        </div>
    )
}

export default TestIf;
