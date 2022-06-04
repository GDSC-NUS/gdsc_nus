export type ButtonProps = {
  className: string;
  label: string;
  href?: string;
};

export default function Button(props: ButtonProps) {
  const { className, label, href } = props;

  return (
    <a href={href}>
      <button className={`btn p-5 text-center w-40 md:w-60 btn-primary rounded-full bg-gray-500 ${className} my-5`}>
        {label}
      </button>
    </a>
  );
}
