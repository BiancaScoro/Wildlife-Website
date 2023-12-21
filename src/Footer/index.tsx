import Logo from "@/assets/TheWildlifeCo.svg"

const Footer = () => {
  return (
    <footer className="bg-light-gray lg:mt-20 h-60 sm:mt-96 flex items-center justify-between">
      <div className="flex">
        <div className="lg:pt-40 lg:pr-80 lg:mr-80 lg:pl-10">
          <img src={Logo} alt="Wildlife Co. Logo" />
        </div>
        <div className="flex flex-row lg:pt-20 font-mulish">
        <div className="flex flex-col gap-1">
          <p>Home</p>
          <p>About</p>
          <p>Take Action</p>
        </div>
        <div className="flex flex-col gap-1 lg:ml-4">
          <p>Careers</p>
          <p>Learn More</p>
        </div>
        </div>
        </div>
        <div className="flex flex-row lg:pt-40 lg:pr-0 lg:mr-0 sm:pt-40 text-sm font-mulish sm:text-xs">
          <p>Privacy Policy | Terms of Service | Accessibility Statement</p>
        </div>
    </footer>
  )
}

export default Footer