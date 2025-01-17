import logo from "../../assets/logo.webp";

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="size-16">
        <img src={logo} alt="Logo"/>
      </div>
      <span className="whitespace-nowrap text-xl font-medium hidden md:block">Game Hub</span>
    </div>
  )
}

export default Logo