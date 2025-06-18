import SidebarItem from "@/components/about-us/sidebar-item";
import Footer from "@/components/footer";
import Header from "@/components/header";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <main className="flex items-center pt-20">
        <div className="grow h-screen bg-[url(/patterns/slash.svg)] border-r border-t border-border-secondary" />
        <div className="w-full max-w-max-width-desktop h-screen flex flex-col">
          <div className="border-b border-border-secondary h-7xl justify-between  flex items-center">
            <div className="max-w-140 pl-4xl w-full">
              <p className="text-text-quaternary font-semibold text-sm">
                <span className="text-text-quaternary pr-[15px]">///</span>
                <span className="text-text-quaternary pr-[10px]">
                  Landing Page
                </span>
                <span className="text-text-quaternary pr-[15px]">//</span>
                <span className="text-text-quaternary">About Us</span>
              </p>
            </div>

            <div className="bg-[url(/patterns/slash.svg)] h-full  grow" />

            <p className="px-4xl text-sm">
              &quot;Everything stars with an idea&quot;
            </p>
          </div>
          <div className="flex h-full">
            <div className="max-w-11xl w-full border-r border-border-secondary ">
              <div className="border-b border-border-secondary h-14" />
              <div className="h-14 text-text-secondary text-md font-semibold flex items-center px-3xl border-b border-border-secondary">
                Content:
              </div>
              <SidebarItem href="/about-us#about" title="About" />
              <SidebarItem href="/about-us#offers" title="Offers" />
              <SidebarItem href="/about-us#values" title="Values" />
              <SidebarItem href="/about-us#team" title="Team" />
              <div className="h-1.5 w-full bg-[url(/patterns/slash.svg)] border-b border-border-secondary" />
            </div>
            <div></div>
          </div>
        </div>
        <div className="grow h-screen bg-[url(/patterns/slash.svg)] border-l border-t border-border-secondary" />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
