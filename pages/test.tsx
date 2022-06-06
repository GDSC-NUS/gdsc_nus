import DropdownMenu from "../components/Navbar/DropdownMenu";

export default function Test() {
  const arr = [<div>test</div>, <div>test2</div>, <h2>h2test</h2>];
  return (
    <>
      <DropdownMenu>{arr}</DropdownMenu>
    </>
  );
}
