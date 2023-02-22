import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Backend = () => {
    return(
        <div className="skills__content">
        <h3 className="skills__title">APIs / Databases</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <div>
                        <h3 className="skills__name">NodeJS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div>
                        <h3 className="skills__name">AWS</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <div>
                        <h3 className="skills__name">Firebase</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Backend;