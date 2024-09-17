import Link from "next/link";

const SideProject = ({ Logo, title, description, url }) => {
  return (
    <Link
      href={url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <Logo size={16} />
      </span>

      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
};


export default SideProject;