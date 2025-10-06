const Header = () => {
  return (
    <>
      <header className="bg-cf-dark-red w-full fixed">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <img className="my-4 h-16"
            src="https://codingfactory.aueb.gr/sites/all/themes/cf_theme/logo.png"
            alt="CF Logo"
          />
          <div className="flex gap-4 text-white font-medium">
            Todo App
          </div>
        </div>
      </header>
    </>
  )
}
export default Header;