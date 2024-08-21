export default function Layout({ children, ...props }) {
    console.log(children);
    return (
      <div className="bg-off-white px-10 ">
        {children}
      </div>
    );
  }