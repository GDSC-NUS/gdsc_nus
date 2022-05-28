import { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { LinkHTMLAttributes } from "react";
import { Url } from "url";

export type ButtonProps = {
  className: string;
  label: string;
  color: string;
  href?: string;
};

export default function Button(props: ButtonProps) {
  const { className, label, color, href } = props;
  const router = useRouter();

  return (
    <a href={href}>
      <button className={`btn p-5 text-center w-60 outline btn-primary rounded-full bg-${color} ${className} my-5`}>
        {label}
      </button>
    </a>
  );
}
