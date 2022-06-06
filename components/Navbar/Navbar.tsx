import clsx from "clsx";
import DropdownMenu from "./DropdownMenu";

type NavbarProps = {
    className: string;
    children: JSX.Element[];
};


export default function Navbar(props: NavbarProps) {
    const { className, children } = props;


    // mobile view
        // unwrap the dropdown menu children...
        //maybe can try check typeof DropdownMenu -> extract the array and 
        

    // small desktop

    // large desktop
    return (
        <>
            <div>
                <nav>
                    <ul className={clsx(className)}>
                        { children && children.map && children.map((child, id) => (<li key="id">{child}</li>)) }
                    </ul>
                </nav>
            </div>
        </>
    )

}