import greenCardImage from '../assets/shapes/green-card-img.png';
import plot from '../assets/shapes/plot.png';
import setting from '../assets/shapes/setting.png';
import poc from '../assets/shapes/poc.png';
import resolution from '../assets/shapes/resolution.png';
import character from '../assets/shapes/character.png';
import user from '../assets/icons/user.png';
import mark from '../assets/icons/mark.png';
import left from '../assets/icons/left-arrow.png';
import right from '../assets/icons/right-arrow.png';
import downArrow from '../assets/icons/down-arrow.png';
import alarm from '../assets/icons/alarm.png';
import home from '../assets/icons/home.png';
import card1 from '../assets/images/image-card-1.png';
import card2 from '../assets/images/image-card-2.png';
import { useState } from 'react';


function Tab() {
    const [activeTab, setActiveTab] = useState(1);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleTabChange = (direction) => {
        if (direction === 'left') {
            setActiveTab(activeTab === 1 ? 2 : activeTab - 1);
        } else if (direction === 'right') {
            setActiveTab(activeTab === 2 ? 1 : activeTab + 1);
        }
    };
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const switchTab = (tab) => {
        setActiveTab(tab);
        setDropdownVisible(false);
    };
    return (
        <div className="container">
            {activeTab === 1 && (
                <>
                    <div className="background">
                        <div className="d-flex justify-content-center">
                            <div className="border-card dashed-border">
                                <h1>Elements of Story Writing</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h2 className="fun-text">Welcome to term 2 of Writers Club. Are you excited for this amazing journey?
                                    <br />
                                    Over the next week, we will be practicing the different elements of story writing.
                                    Our
                                    aim is to make stories more interesting and exciting.</h2>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="border-card-green dashed-border-green">
                                    <div className="row">
                                        <div className="col-sm-10 d-flex align-items-center">
                                            <h2>There are elements which make the foundation for story writing. An element is an essential part of something and every fiction story has the same key elements:</h2>
                                        </div>
                                        <div className="col-sm-2 d-flex justify-content-end">
                                            <img src={greenCardImage} alt="Asset" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <div className="grid-container">
                                    <div className="grid-item">
                                        <img src={setting} alt="setting" />
                                    </div>
                                    <div className="grid-item">
                                        <img src={character} alt="character" />
                                    </div>
                                    <div className="grid-item">
                                        <img src={plot} alt="plot" />
                                    </div>
                                    <div className="grid-item">
                                        <img src={poc} alt="poc" />
                                    </div>
                                    <div className="grid-item">
                                        <img src={resolution} alt="resolution" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <h2 className="fun-text">You must be familiar with some of these. If not, do not worry! we will cover all these elements as we go along.</h2>
                            </div>
                            <div className="col-12">
                                <div className="pink-card shadow">
                                    <div className="pink-card-inner">
                                        <h2>
                                            For today’s lesson, we will try to understand and practice writing <br /> the setting for our stories. <br />
                                            The setting is an important element of every fiction story.

                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {activeTab === 2 && (
                <>
                    <div className="background">
                        {/* Content for the second tab */}
                        <div className="row">
                            <div className="col-12">
                                <h1 className="fun-text-h1">
                                    Can you figure out the definition of setting from the following examples?
                                </h1>
                                <h2 className='fun-text'>
                                    (take a minute to think about this)
                                </h2>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-6 d-flex align-items-center justify-content-center">
                                <div className="tab-2-card">
                                    <div className="image-card">
                                        <img src={card1} alt="sun" />
                                    </div>
                                    <p className="fun-text-p">Sunny day at a beach</p>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-center justify-content-center">
                                <div className="tab-2-card">
                                    <div className="image-card">
                                        <img src={card2} alt="moon" />
                                    </div>
                                    <p className="fun-text-p">A cold rainy night in a <br />
                                        haunted house in October</p>

                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 mb-3 mb-md-0">
                                <p className="fun-text-p">So, what do you think the definition of setting is?</p>
                            </div>
                            <div className="col-md-9 mb-3 mb-md-0">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="fun-text-p mb-3 mb-md-0">Any guesses?</label>
                                    </div>
                                    <div className="col-md-9">
                                        <div className='input-card'>
                                            <input type="text" className="custom-input" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-3 mb-md-0">
                                <div className="d-flex ps-5 gap-4 align-items-center">
                                    <p className="fun-text-p mb-0">Hint:</p>
                                    <img src={alarm} alt="alarm" />
                                    <img src={home} alt="home" />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 mt-3">
                                <div className="border-card-green dashed-border-green">
                                    <div className="row">
                                        <div className="col-12 d-flex align-items-center">
                                            <h2>Setting is the time   <span> <img src={alarm} alt="alarm" /></span>   and place   <span><img src={home} alt="home" /></span>  of a story. It often answers the questions: when? and where?</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-12">
                                <p className='fun-text-p'>
                                    The time of the story could be in the past, future, day, night, summer or winter.
                                    A story may take place in a school, a mall, a desert, an airplane or in a variety
                                    of other places.
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-between">
                    <div>
                        <img src={user} alt="user" />
                    </div>
                    <div className="switch">
                        <div className="row">
                            <div className="col-4">
                                <div className="d-flex gap-3">
                                    <div>
                                        <img src={left} alt="left" onClick={() => handleTabChange('left')} />
                                    </div>
                                    <div>
                                        <div className='tab-pagination'>
                                            <div className="text-center">
                                                <p>{activeTab}</p>
                                            </div>
                                            <div className='vr'></div>
                                            <div className="d-flex justify-content-end" onClick={toggleDropdown}>
                                                <img src={downArrow} alt="downarrow" />
                                            </div>
                                            {dropdownVisible && (
                                                <div className="dropdown-menu">
                                                    <div onClick={() => switchTab(1)}>1</div>
                                                    <div onClick={() => switchTab(2)}>2</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <img src={right} alt="right" onClick={() => handleTabChange('right')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={mark} alt="mark" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tab;