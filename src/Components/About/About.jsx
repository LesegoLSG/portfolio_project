import React from 'react'

const About = () => {
  return (
    <section id="About" className="bg-red-200 w-full h-screen pt-20">
    <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">About Me</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Brief Description</h3>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis odio sed orci commodo, sit amet fringilla elit aliquam. Sed scelerisque tincidunt ligula, ut euismod ex consectetur sit amet.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Education</h3>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis odio sed orci commodo, sit amet fringilla elit aliquam. Sed scelerisque tincidunt ligula, ut euismod ex consectetur sit amet.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Technical Skills</h3>
                        <ul className="list-disc text-gray-600">
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>Tailwind CSS</li>
                            <li>Node.js</li>
                            {/* Add more skills as needed */}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Experience</h3>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis odio sed orci commodo, sit amet fringilla elit aliquam. Sed scelerisque tincidunt ligula, ut euismod ex consectetur sit amet.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Hobbies</h3>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis odio sed orci commodo, sit amet fringilla elit aliquam. Sed scelerisque tincidunt ligula, ut euismod ex consectetur sit amet.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Interests</h3>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis odio sed orci commodo, sit amet fringilla elit aliquam. Sed scelerisque tincidunt ligula, ut euismod ex consectetur sit amet.
                        </p>
                    </div>
                </div>
            </div>
  </section>
  )
}

export default About