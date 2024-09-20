const Footer = () => {
  return (
    <div className=' bg-green-700 py-8 text-white '>
      <div className="flex px-8">
        <p className="text-3xl font-bold text-nowrap"> Newsletter Signup</p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center gap-8 px-8 py-8  text-2xl">


        {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  px-6 py-8  "> */}
          <div>
            <p className="text-2xl font-bold py-2">Customer Care</p>

            <p>About Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
          </div>

          <div>
            <p className="text-2xl font-bold py-2">More</p>

            <p>Join</p>
            <p>Download</p>
            <p>Online</p>
            <p>Social Media</p>

          </div>

          <div>
            <p className="text-2xl font-bold py-2">Contact</p>

            <p>Texas</p>
            <p>US</p>
            <p>(254) 339 6682</p>
            <p>adspacetestr@gmail.com</p>

          </div>

          <div>
            <p className="text-2xl font-bold py-2">Hours</p>

            <p>Monday - Friday</p>
            <p>10:00am - 8:00pm</p>

        </div>
      </div>
    </div>
  )
}

export default Footer;