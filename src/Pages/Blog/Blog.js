import React from 'react';

const Blog = () => {
    return (
        <div className='mid-content'>
            <h1 className='font-bold text-2xl text-center mt-5'>This is a Blog Page</h1>
            <div tabIndex="0" class="collapse collapse-open border border-base-300 bg-base-100 rounded-box lg:w-[70%] mx-auto mt-5">
                <div>
                    <div class="collapse-title text-xl font-medium">
                        <span> 1) How will you improve the performance of a React Application?</span><br />
                    </div>
                    <div class="collapse-content">
                        <p><b>Answer: </b> <b>Optimizing performance in a React application</b> <br />
                            <li>Keeping component state local where necessary.</li>
                            <li>Memoizing React components to prevent unnecessary re-renders.</li>
                            <li>Code-splitting in React using dynamic import()</li>
                            <li>Windowing or list virtualization in React.</li>
                            <li>Lazy loading images in React.</li>
                        </p>
                    </div>
                </div>
            </div>
            <div tabIndex="0" class="collapse collapse-open border border-base-300 bg-base-100 rounded-box lg:w-[70%] mx-auto mt-3">
                <div>
                    <div class="collapse-title text-xl font-medium">
                        <span> 2) What are the different ways to manage a state in a React application?</span><br />
                    </div>
                    <div class="collapse-content">
                        <p><b>Answer: </b> <b>There are many types of state to properly manage in React apps:</b> <br />
                            <li>Local State</li>
                            <li>Global State</li>
                            <li>Server State</li>
                            <li>URL State</li>
                        </p>
                    </div>
                </div>
            </div>

            <div tabIndex="0" class="collapse collapse-open border border-base-300 bg-base-100 rounded-box lg:w-[70%] mx-auto mt-3">
                <div>
                    <div class="collapse-title text-xl font-medium">
                        <span> 3) How does prototypical inheritance work?</span><br />
                    </div>
                    <div class="collapse-content">
                        <p><b>Answer:  </b> JavaScript is a prototype-based, Object Oriented programming language.We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                    </div>
                </div>
            </div>

            <div tabIndex="0" class="collapse collapse-open border border-base-300 bg-base-100 rounded-box lg:w-[70%] mx-auto mt-3">
                <div>
                    <div class="collapse-title text-xl font-medium">
                        <span> 4) Why you do not set the state directly in React?</span><br />
                    </div>
                    <div class="collapse-content">
                        <p><b>Answer: </b> <b>One should never update the state directly because of the following reasons:</b> <br />
                            <li>If update it directly, calling the setState() afterward may just replace the update you made.</li>
                            <li>When directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                            <li>And finally we will lose control of the state across all components.</li>
                        </p>
                    </div>
                </div>
            </div>

            <div tabIndex="0" class="collapse collapse-open border border-base-300 bg-base-100 rounded-box lg:w-[70%] mx-auto mt-3 mb-20">
                <div>
                    <div class="collapse-title text-xl font-medium">
                        <span> 5) What is a unit test? Why should write unit tests?</span><br />
                    </div>
                    <div class="collapse-content">
                        <p><b>Answer: </b> Unit tests are typically automated tests written and run by software developers to ensure that a section of an application meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure. A unit is often an entire interface, such as a class, or an individual method.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;