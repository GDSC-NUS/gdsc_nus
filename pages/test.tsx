import DropdownMenu from "../components/Navbar/DropdownMenu";
import Tabs from "../components/Tabs/Tabs";
import TabPanel from "../components/Tabs/TabPanel"

export default function Test() {
  const arr = [<div>test</div>, <div>test2</div>, <h2>h2test</h2>];
  return (
    <>
      <Tabs>{arr}</Tabs>
    </>
  );
}
