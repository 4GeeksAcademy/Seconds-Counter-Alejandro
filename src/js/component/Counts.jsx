import React, { useState, useEffect } from "react";
import { FaRegClock } from "react-icons/fa6";

const Counts = () => {
    const [count, setCount] = useState({
        oneSeconds: 0,
        teenSeconds: 0,
        hundredSeconds: 0,
        thousandSeconds: 0,
        tenThousandSeconds: 0,
        oneHundredThousandSeconds: 0,
    });

    useEffect(() => {
        setInterval(() => {
            setCount((prevCount) => {
                const updatedCount = { ...prevCount };
                updatedCount.oneSeconds++;

                if (updatedCount.oneSeconds > 9) {
                    updatedCount.oneSeconds = 0;
                    updatedCount.teenSeconds++;

                    if (updatedCount.teenSeconds > 9) {
                        updatedCount.teenSeconds = 0;
                        updatedCount.hundredSeconds++;

                        if (updatedCount.hundredSeconds > 9) {
                            updatedCount.hundredSeconds = 0;
                            updatedCount.thousandSeconds++;

                            if (updatedCount.thousandSeconds > 9) {
                                updatedCount.thousandSeconds = 0;
                                updatedCount.tenThousandSeconds++;

                                if (updatedCount.tenThousandSeconds > 9) {
                                    updatedCount.tenThousandSeconds = 0;
                                    updatedCount.oneHundredThousandSeconds++;

                                    if (updatedCount.oneHundredThousandSeconds > 9) {
                                        updatedCount.oneHundredThousandSeconds = 0;
                                    }
                                }
                            }
                        }
                    }
                }
                return updatedCount;
            });
        }, 1000);
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light fw-bold fs-1">
            <div className="col-md-1 bg-dark"><FaRegClock /></div>
            <div className="col-md-1 bg-dark">{count.oneHundredThousandSeconds}</div>
            <div className="col-md-1 bg-dark">{count.tenThousandSeconds}</div>
            <div className="col-md-1 bg-dark">{count.thousandSeconds}</div>
            <div className="col-md-1 bg-dark">{count.hundredSeconds}</div>
            <div className="col-md-1 bg-dark">{count.teenSeconds}</div>
            <div className="col-md-1 bg-dark">{count.oneSeconds}</div>
        </div>
    );
};

export default Counts;
