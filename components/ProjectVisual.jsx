import Image from 'next/image';

export default function ProjectVisual({ project, sizes }) {
  const { cover, title } = project;
  const isPrintCover = cover.treatment === 'print';

  return (
    <div className={isPrintCover ? 'project-visual project-visual--print' : 'project-visual'}>
      {isPrintCover && <span className="print-cover-label" aria-hidden="true">PrintQ <small>Web &amp; Desktop</small></span>}
      <div className="project-cover-image">
        <Image src={cover.image} alt={cover.alt || `${title} preview`} fill sizes={sizes} />
      </div>
    </div>
  );
}
