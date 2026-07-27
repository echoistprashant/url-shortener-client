import Logo from "./Logo";

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2">

        {/* Left Panel */}

        <div className="hidden flex-col justify-between border-r border-[#E6E3DB] px-16 py-14 lg:flex">

          <div className="space-y-16">

            <Logo size="large" />

            <div className="space-y-6">

              <h1 className="max-w-md text-5xl font-bold leading-tight tracking-tight text-[#22262A]">
                Organize every link in one place.
              </h1>

              <p className="max-w-md text-lg leading-8 text-[#6F757B]">
                LinkLeaf helps you shorten, organize and track your links with a
                beautiful, distraction-free workspace.
              </p>

            </div>

            <div className="space-y-5">

              <Feature text="Custom aliases" />

              <Feature text="Click analytics" />

              <Feature text="Expiring links" />

              <Feature text="Fast redirects" />

            </div>

          </div>

          <p className="text-sm text-[#8A8F95]">
            © 2026 LinkLeaf. Crafted with simplicity.
          </p>

        </div>

        {/* Right Panel */}

        <div className="flex items-center justify-center px-6 py-10 sm:px-10">

          <div className="w-full max-w-md">

            {children}

          </div>

        </div>

      </div>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#A5CF83]/20">

        <div className="h-2.5 w-2.5 rounded-full bg-[#639922]" />

      </div>

      <span className="text-lg text-[#4D5258]">
        {text}
      </span>

    </div>
  );
}

export default AuthLayout;