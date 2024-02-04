import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">About Our Footwear Store</h1>
                <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, libero in
                    dignissim fringilla, mauris metus fermentum lectus, ut scelerisque felis justo vitae sem.
                    Morbi sit amet lorem eget est dapibus auctor. Aliquam erat volutpat. Donec non erat
                    hendrerit, vestibulum orci id, vestibulum lorem. Aenean id lectus eget dolor gravida
                    placerat sit amet sit amet elit. Nam eget erat sed odio fermentum rutrum vitae nec nulla.
                    Pellentesque sit amet elit a nisi dapibus convallis. Nulla facilisi. Curabitur vitae enim
                    nec metus interdum lacinia eget in velit.
                </p>
                <p className="text-gray-700 mb-4">
                    Phasellus ullamcorper arcu ut massa rhoncus imperdiet. Nulla facilisi. Sed id ligula ac
                    eros convallis mattis nec id ipsum. Mauris tempus lacinia lectus, non ullamcorper purus
                    varius at. Nullam bibendum eros at lectus iaculis, a aliquet est fringilla. Cras
                    pellentesque efficitur vehicula. Vestibulum a arcu et tortor tincidunt vestibulum.
                </p>
                <p className="text-gray-700">
                    Nullam hendrerit ex ac libero fringilla rhoncus. Nulla facilisi. Duis at placerat erat.
                    Integer sit amet odio quis nunc venenatis hendrerit. In hac habitasse platea dictumst.
                    Suspendisse at libero quis est pharetra eleifend nec sit amet ligula. Duis non laoreet
                    magna. Aenean dignissim dignissim leo. Nam ullamcorper, libero non placerat posuere,
                    risus lorem vestibulum libero, ac fermentum eros justo ac nisl.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default About
