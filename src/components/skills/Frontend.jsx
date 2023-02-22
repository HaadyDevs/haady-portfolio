import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Mobile / Web</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">Flutter</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">React Native</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">HTML/CSS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">Javascript</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">Typescript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frontend;