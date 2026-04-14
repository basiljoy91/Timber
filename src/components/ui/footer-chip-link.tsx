type FooterChipLinkProps = {
  href: string;
  label: string;
};

export function FooterChipLink({ href, label }: FooterChipLinkProps) {
  return (
    <a href={href} className="chip px-4 py-2">
      {label}
    </a>
  );
}
